
function TodoItem(props) {
    return (
      <li>
        <span>V</span>
        <p>{ props.text }</p>
        <p>X</p>
      </li>
    );
  }

  export { TodoItem};