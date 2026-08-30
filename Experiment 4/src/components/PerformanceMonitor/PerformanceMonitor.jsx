import { memo } from "react";
import "./PerformanceMonitor.css";

function PerformanceMonitor({ optimized, setOptimized, performance, postCount, onReset }) {
  return (
    <aside className="monitor">
      <div className="monitor-head"><h2>Performance Monitor</h2><span>{optimized ? "ON" : "OFF"}</span></div>
      <p>Compare the optimized and normal rendering approaches.</p>
      <label className="switch-row">
        <input type="checkbox" checked={optimized} onChange={e => setOptimized(e.target.checked)} />
        Use React optimizations
      </label>
      <div className="metrics">
        <div><b>{performance.calendarRenders}</b><span>Calendar renders</span></div>
        <div><b>{performance.postListRenders}</b><span>Post-list renders</span></div>
        <div><b>{performance.eventCalculations}</b><span>Event calculations</span></div>
        <div><b>{postCount}</b><span>Total posts</span></div>
      </div>
      <button className="reset" onClick={onReset}>Reset counters</button>
    </aside>
  );
}
export default memo(PerformanceMonitor);