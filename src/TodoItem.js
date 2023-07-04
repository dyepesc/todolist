import { CompleteIcon } from './CompleteIcon'
import { DeleteIcon } from './DeleteIcon'
import './TodoItems.css';

function TodoItem(props) {
    return (
      <li>
        <CompleteIcon />
        {/* <p className={`check ${props.completed && "check-active"}`}
          onClick = {props.onComplete}
          >
            V
        </p> */}
        <p className={`propis ${props.completed && "check-completed"}`}>
          { props.text }
        </p>
        <DeleteIcon />
        {/* <p className={`eliminar ${props.completed && "check-completed"}`}
        onClick = {props.onDelete}
        >
          X
        </p> */}
      </li>
  
    );
  }

  export { TodoItem};