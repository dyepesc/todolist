import './CreateTodoButton.css';

function CreateTodoButton() {
    return (
        <div className='btndiv'>
        <button class="btncrear"
        onClick={
            () => console.log('le diste clic')
        }
        >Crear</button>
        </div>
    );
  }

  export { CreateTodoButton };