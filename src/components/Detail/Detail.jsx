import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const Detail=()=>{

    
const {id} = useParams();
const [character,setCharacter]= useState({});

useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);
    return (
        <div>
         <h3>Detalle Usuario</h3>
            <p>{character.name}</p>
            <p>{character.species}</p>
            <p>{character.gender}</p>
            <img src={character.image}/>

        </div>
    )
}


export default Detail;