import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { addPost, updatePost } from "../../features/posts/postsSlice";
import "./PostForm.css";

export default function PostForm({ open, onClose, editId, defaultDate }) {
  const dispatch = useAppDispatch();
  const existing = useAppSelector(s => s.posts.posts.find(p => p.id === editId));

  const [form, setForm] = useState({
    title: "", content: "", platform: "Instagram", date: ""
  });

  useEffect(() => {
    if (existing) setForm(existing);
    else setForm({ title:"", content:"", platform:"Instagram", date: defaultDate || "" });
  }, [existing, defaultDate, open]);

  if (!open) return null;

  const change = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = e => {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim() || !form.date) return;
    if (editId) dispatch(updatePost({ ...form, id: editId }));
    else dispatch(addPost(form));
    onClose();
  };

  return (
    <div className="overlay">
      <form className="modal" onSubmit={submit}>
        <div className="modal-head">
          <h2>{editId ? "Edit Post" : "Create Post"}</h2>
          <button type="button" className="close" onClick={onClose}>×</button>
        </div>
        <label>Title<input name="title" value={form.title} onChange={change} placeholder="Post title" /></label>
        <label>Content<textarea name="content" value={form.content} onChange={change} rows="4" placeholder="Write your post..." /></label>
        <label>Platform
          <select name="platform" value={form.platform} onChange={change}>
            <option>Instagram</option><option>Facebook</option><option>LinkedIn</option><option>X</option>
          </select>
        </label>
        <label>Schedule date & time<input type="datetime-local" name="date" value={form.date} onChange={change} /></label>
        <div className="actions">
          <button type="button" onClick={onClose}>Cancel</button>
          <button className="primary">{editId ? "Update Post" : "Schedule Post"}</button>
        </div>
      </form>
    </div>
  );
}