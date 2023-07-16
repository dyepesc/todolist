import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }) {
  return (
      <button
        className="CreateTodoButton"
        onClick={
          () => {
            setOpenModal(state => !state);
          }
        }
      > <img src= {require('./black-hole.png')} alt=" " />
      </button>
  );
}
      
export { CreateTodoButton };
