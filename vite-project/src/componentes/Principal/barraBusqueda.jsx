import { Button } from 'bootstrap';
import React from 'react'

const barraBusqueda = ({placeholder, data}) => {
  const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState(""); 

    const handleFilter = (event) =>{
       const searchWord = event.target.value;
       setWordEntered(searchWord);
       const newFilter = data.filter((value)=>{
           return
           value.toLowerCase().includes(searchWord.toLowerCase());
       });

       if (searchWord === "") {
           setFilteredData([]);
       } else{
           setFilteredData(newFilter);
       }
    };

    const clearInput = () =>{
      setFilteredData([]);
      setWordEntered("");

    };
      
 return (<>
   <div className='search'>
       <div className='searchInputs'>
       <input type='text' placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
       <div className='searchIcon'/>
       {filteredData.length === 0 ?(<button ></button>): (<button onclick={clearInput}>❌</button>)}
       </div>
   </div>
   {filteredData.length !== 0 &&(<div className='dataResult'>
      {filteredData.map((value, key)=>{
        return(<a className='dataItem' href='#' key={key}>
        <p>{value}</p>
       </a>
       );
   })}
   </div>
   )}
   </>
 );
};

export default barraBusqueda