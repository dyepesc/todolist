import './TodoItems.css';

function TodoItem(props) {
    return (
      <li>
        <p>V</p>
        <p>{ props.text }</p>
        <p>X</p>
      </li>
    );
  }

  export { TodoItem};