import './TodoSearch.css';

function TodoSearch () {
    return (
      <div className='centrosearch'>
     <input 
     className='buscar' 
     placeholder = "Cortar cebolla" 
     onChange={(event) => {
      console.log("escribiste en el TodoSearch")
      console.log(event);
      console.log(event.target);
      console.log(event.target.value);
     }}
     
     />
     </div>
    );
  }

  export { TodoSearch };