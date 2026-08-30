import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      id: "1",
      title: "Welcome post",
      content: "Plan your social media content from one place.",
      platform: "Instagram",
      date: "2026-08-30T10:00",
    },
    {
      id: "2",
      title: "Product update",
      content: "New features are coming soon!",
      platform: "LinkedIn",
      date: "2026-09-02T14:00",
    },
  ],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push({ ...action.payload, id: crypto.randomUUID() });
    },
    updatePost: (state, action) => {
      const index = state.posts.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) state.posts[index] = action.payload;
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((p) => p.id !== action.payload);
    },
  },
});

export const { addPost, updatePost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;