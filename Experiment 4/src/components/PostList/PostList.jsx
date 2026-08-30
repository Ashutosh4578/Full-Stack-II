import { memo, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { deletePost } from "../../features/posts/postsSlice";
import "./PostList.css";

function PostList({ optimized, onEdit }) {
  const posts = useAppSelector(s => s.posts.posts);
  const dispatch = useAppDispatch();

  const sorted = optimized
    ? useMemo(() => [...posts].sort((a,b) => a.date.localeCompare(b.date)), [posts])
    : [...posts].sort((a,b) => a.date.localeCompare(b.date));

  return (
    <section className="posts-card">
      <div className="list-head">
        <div><h2>Scheduled Posts</h2><p>{posts.length} posts in your planner</p></div>
      </div>
      {sorted.length === 0 ? <p className="empty-list">No posts yet.</p> :
        <div className="post-list">
          {sorted.map(post => (
            <article className="post" key={post.id}>
              <div>
                <span className="platform">{post.platform}</span>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <small>{new Date(post.date).toLocaleString()}</small>
              </div>
              <div className="post-actions">
                <button onClick={() => onEdit(post.id)}>Edit</button>
                <button className="danger" onClick={() => dispatch(deletePost(post.id))}>Delete</button>
              </div>
            </article>
          ))}
        </div>
      }
    </section>
  );
}
export default memo(PostList);