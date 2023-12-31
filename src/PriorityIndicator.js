import "./priority.css";
export function PriorityIndicator({ priority }) {
  return (
    <ul className="mb-0 priority-indicator" title={`priority: ${priority}`}>
      <li
        className={priority >= 1 ? "priority-level-on" : "priority-level-off"}
      ></li>
      <li
        className={priority >= 2 ? "priority-level-on" : "priority-level-off"}
      ></li>
      <li
        className={priority >= 3 ? "priority-level-on" : "priority-level-off"}
      ></li>
    </ul>
  );
}
