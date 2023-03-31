import React, { useState } from "react";
import style from "./Form.style.css"
import { Link } from "react-router-dom";

const regexemail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const regexpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/


const Formulario=({login})=>{



     const [inputs,setInputs] = useState({
          email:"",
          password: ""
     })
   
     const [errors, setErrors] = useState({
          email :"",
          password: ""
     })



     function validate(inputs){
         const errors= {}
         if(!inputs.email){
            errors.email = "Debe haber in email";
         }else if(!inputs.password){
            errors.password = "Debe haber un password";
         }
         else if(!regexemail.test(inputs.email)){
            errors.email = "Debe ser un email valido";
         }else if(!regexpass.test(inputs.password)){
            errors.password = "Debe haber un password valido"

         }
         return errors;
     }


     const handleChange=(event)=>{
         setInputs({
            ...inputs,
            [event.target.name]: event.target.value
         })

         setErrors(validate({
             ...inputs,
             [event.target.name]: event.target.value
         })
         );
     }

     const handleSumbit=(event)=>{
          event.prevenDefault();
          const aux = Object.keys(errors);
          if(aux.length===0){
             setInputs({
                email:"",
                password:"",
             })
             setErrors({
                email: "",
                password: ""

             })
             login(inputs)
             return alert("OK");
          }
          return alert("Error");
     }


      return (
             
            <form className="form" onSubmit={handleSumbit}>
                <div className="cardlogin">
                <img className="img" src="https://th.bing.com/th/id/OIP.4xdi2fG5P7XwbSWIz99L_QHaEB?pid=ImgDet&rs=1"></img>
                <div className="inp">
                <label>email :</label>
                <input name="email" value={inputs.name} onChange={handleChange} placeholder="Ingrese su Usuario"></input>
                <p className="danger">{errors.email}</p>
                <br></br>
                <label>password :</label>
                <input name="password"></input>
                <p className="danger">{errors.password}</p>
                </div>
                <Link to="/home">
                <button type="submit">Submit</button>
                </Link> 
                </div>
            </form>

      ); 


}

export default Formulario