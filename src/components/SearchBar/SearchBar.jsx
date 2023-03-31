import { useState } from "react";
import "./Search.css"

export default function SearchBar(props) {
    const [id,setId] = useState("")

    const handleChange=(event)=>{
        console.log(event.target.value);
        setId(event.target.value);    
    }

   return (
      <div>
         <input type='search' onChange={handleChange} name="search" value={id}/>
         <button onClick={()=>props.onSearch(id)} >Agregar</button>
      </div>
   );
}
