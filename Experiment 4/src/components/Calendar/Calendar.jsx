import { memo, useMemo } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import "./Calendar.css";

function Calendar({ optimized, onCreate, onEdit, onRender, onEventCalculation }) {
  onRender?.();

  const posts = useAppSelector((state) => state.posts.posts);
  const today = new Date();

  const days = useMemo(() => {
    const year = today.getFullYear();
    const month = today.getMonth();
    const first = new Date(year, month, 1);
    const last = new Date(year, month + 1, 0);
    const cells = [];
    for (let i = 0; i < first.getDay(); i++) cells.push(null);
    for (let d = 1; d <= last.getDate(); d++) {
      cells.push(new Date(year, month, d));
    }
    while (cells.length % 7) cells.push(null);
    return cells;
  }, [today.getFullYear(), today.getMonth()]);

  const eventsByDay = optimized
    ? useMemo(() => {
        onEventCalculation?.();
        return groupPosts(posts);
      }, [posts, onEventCalculation])
    : groupPosts(posts);

  return (
    <section className="calendar-card">
      <div className="calendar-title">
        <div>
          <h2>{today.toLocaleString("default", { month: "long" })} {today.getFullYear()}</h2>
          <p>Click a day to create a scheduled post.</p>
        </div>
        <span className="badge">{optimized ? "Optimized" : "Normal"}</span>
      </div>

      <div className="weekdays">
        {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d => <div key={d}>{d}</div>)}
      </div>

      <div className="calendar-grid">
        {days.map((date, index) => {
          if (!date) return <div className="day empty" key={index} />;
          const key = date.toISOString().slice(0,10);
          const events = eventsByDay[key] || [];
          return (
            <div className="day" key={key} onDoubleClick={() => onCreate(`${key}T09:00`)}>
              <div className="day-number">{date.getDate()}</div>
              {events.map(post => (
                <button
                  className="event"
                  key={post.id}
                  onClick={(e) => { e.stopPropagation(); onEdit(post.id); }}
                  title="Edit post"
                >
                  {post.platform}: {post.title}
                </button>
              ))}
            </div>
          );
        })}
      </div>
      <small>Double-click a date to add a post. Click an event to edit it.</small>
    </section>
  );
}

function groupPosts(posts) {
  const result = {};
  for (const post of posts) {
    const key = post.date.slice(0, 10);
    (result[key] ||= []).push(post);
  }
  return result;
}

export default memo(Calendar);

function CalendarWrapper(props) {
  return <Calendar {...props} />;
}
export { CalendarWrapper };