
interface TaskItemProps {
    title: string;
    description: string;
    completed: boolean;
    onToggleComplete: () => void;
    onDelete: (id: number) => void; 
}



const TaskItem: React.FC<TaskItemProps> = ({title, description, completed, onToggleComplete}) => {

    const handleToggleComplete = () => {
        onToggleComplete(); //Call the provided function to toggle completion status
    }
  return (
    <div>
      <div>
        <input
          type="checkbox"
          checked={completed}
          onChange={handleToggleComplete}
        />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default TaskItem