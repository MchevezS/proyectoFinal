import React from 'react'
import { useState } from 'react';

const BarraBusqueda = ({placeholder, dataRef, setData}) => {
    const [wordEntered, setWordEntered] = useState(""); 

    const handleFilter = (event) =>{
       const searchWord = event.target.value;
       setWordEntered(searchWord);
       const newFilter = dataRef.current.filter((value)=> value.producto.toLowerCase().match(searchWord.toLowerCase()
       ) 
    )

       if (searchWord === "") {
           setData([]);
       } else{
           setData(newFilter);
       }
    };

    const clearInput = () =>{
      setWordEntered("");

    };
      
 return (<>
   <div className='search'>
       <div className='searchInputs'>
       <input type='text' placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
       <div className='searchIcon'/>
       {/* {dataRef.length === 0 ?(<button ></button>): (<button onclick={clearInput}>❌</button>)} */}
       </div>
   </div>
   </>
 );
};

export default BarraBusqueda