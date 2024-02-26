
interface TaskItemProps {
    id : number;
    title: string;
    description: string;
    completed: boolean;
    onToggleComplete: () => void;
    onDelete: (id: number) => void; 
}



const TaskItem: React.FC<TaskItemProps> = ({id, title, description, completed, onToggleComplete, onDelete}) => {

    const handleToggleComplete = () => {
        onToggleComplete(); //Call the provided function to toggle completion status
    }
    const handleDelete =() => {
        onDelete(id);
    }
  return (
    <div
      className={`task-item ${completed ? "completed" : ""}`}
      id={`task-${id}`}
    >
      <div>
        <input
          type="checkbox"
          checked={completed}
          onChange={handleToggleComplete}
        />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TaskItem