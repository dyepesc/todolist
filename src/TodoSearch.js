import React from 'react';
import './TodoSearch.css';

function TodoSearch ({
  searchValue,
  setSearchValue
}) {
  
  
    return (
      <div className='centrosearch'>
     <input 
     placeholder = "Cortar cebolla" 
     className='buscar'
     value = {searchValue}
     onChange={(event) => {
      setSearchValue(event.target.value);
     }}
     
     />
     </div>
    );
  }

  export { TodoSearch };