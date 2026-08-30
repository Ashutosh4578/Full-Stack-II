import { useCallback, useRef, useState } from "react";
import Calendar from "./components/Calendar/Calendar";
import PostForm from "./components/PostForm/PostForm";
import PostList from "./components/PostList/PostList";
import PerformanceMonitor from "./components/PerformanceMonitor/PerformanceMonitor";
import { useAppSelector } from "./hooks/reduxHooks";
import "./App.css";

export default function App() {
  const [optimized, setOptimized] = useState(true);
  const [formOpen, setFormOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [defaultDate, setDefaultDate] = useState("");
  const [performance, setPerformance] = useState({
    calendarRenders: 0, postListRenders: 0, eventCalculations: 0
  });
  const pending = useRef({ calendarRenders:0, postListRenders:0, eventCalculations:0 });
  const posts = useAppSelector(s => s.posts.posts);

  const record = useCallback((key) => {
    pending.current[key]++;
    queueMicrotask(() => {
      const p = pending.current;
      if (!p.calendarRenders && !p.postListRenders && !p.eventCalculations) return;
      setPerformance(prev => ({
        calendarRenders: prev.calendarRenders + p.calendarRenders,
        postListRenders: prev.postListRenders + p.postListRenders,
        eventCalculations: prev.eventCalculations + p.eventCalculations
      }));
      pending.current = {calendarRenders:0, postListRenders:0, eventCalculations:0};
    });
  }, []);

  const openCreate = useCallback((date = "") => {
    setEditId(null);
    setDefaultDate(date);
    setFormOpen(true);
  }, []);

  const openEdit = useCallback((id) => {
    setEditId(id);
    setDefaultDate("");
    setFormOpen(true);
  }, []);

  const closeForm = useCallback(() => {
    setFormOpen(false);
    setEditId(null);
    setDefaultDate("");
  }, []);

  const reset = useCallback(() => {
    setPerformance({calendarRenders:0, postListRenders:0, eventCalculations:0});
    pending.current = {calendarRenders:0, postListRenders:0, eventCalculations:0};
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <div>
          <p className="eyebrow">CONTENT PLANNER</p>
          <h1>Social Media Scheduler</h1>
          <p className="subtitle">Schedule, manage and organize social media posts using an interactive calendar.</p>
        </div>
        <button className="create-button" onClick={() => openCreate()}>+ Create Post</button>
      </header>

      <main className="main-content">
        <Calendar
          optimized={optimized}
          onCreate={openCreate}
          onEdit={openEdit}
          onRender={() => record("calendarRenders")}
          onEventCalculation={() => record("eventCalculations")}
        />
        <PerformanceMonitor
          optimized={optimized}
          setOptimized={setOptimized}
          performance={performance}
          postCount={posts.length}
          onReset={reset}
        />
      </main>

      <div className="bottom-content">
        <PostList
          optimized={optimized}
          onEdit={openEdit}
        />
      </div>

      <PostForm
        open={formOpen}
        onClose={closeForm}
        editId={editId}
        defaultDate={defaultDate}
      />
    </div>
  );
}