import './TodoItems.css';

function TodoItem(props) {
    return (
      <li>
        <p className={`check ${props.completed && "check-active"}`}>V</p>
        <p className={`propis ${props.completed && "check-completed"}`}>{ props.text }</p>
        <p className={`eliminar ${props.completed && "check-completed"}`}>X</p>
      </li>
  
    );
  }

  export { TodoItem};