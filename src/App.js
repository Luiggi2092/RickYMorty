import React, { useEffect } from 'react';
import './App.css';
// import Card from './components/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
// import SearchBar from './components/SearchBar.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import { useLocation, useNavigate } from 'react-router-dom';
// console.log(characters);
import axios from 'axios'
import {Routes,Route} from "react-router-dom"
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail';
import Formulario from './components/Form/Form'; 


function App() {
   
   const navigate = useNavigate();
   const [access,setAccess] = React.useState(false);
   const EMAIL="luiggi_lsl@hotmail.com";
   const PASSWORD="123456";


  function login(inputs){
      if(inputs.password === PASSWORD && inputs.email === EMAIL){
           setAccess(true);
           navigate("/home");
      }
  }


  function logout(){
   setAccess(false);
   navigate("/");
  }

   useEffect(()=>{
      !access && navigate('/');
   },[access])  


   const [characters,setCharacters]= React.useState([]);
   const location = useLocation();

   function onSearch(id){
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
         let exits = characters.find((ch)=> ch.id === data.id)
         if(exits){
            alert("Ya existe")
         }else{
            setCharacters((oldChars) => [...oldChars, data]);
            }
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

  function onClose(id){
      setCharacters((oldChars)=>{
      console.log(oldChars);
       return oldChars.filter((ch)=> ch.id !== id);
  })
}
   return (
      <div className='App'>
          {
            location.pathname === "/" ? null :  <NavBar  logout={logout} onSearch={onSearch}/>
        
          }
         <Routes>   
         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} />*/}
         <Route path='/' element={<Formulario login={login}/>}></Route>
         <Route path='/home' element={ <Cards characters={characters} onClose={onClose} /> }></Route>
         <Route path='/about' element={<About/>}></Route>
         <Route path='/detail/:id' element={<Detail/>}></Route>
         </Routes>
      </div>
   );
}

export default App;
