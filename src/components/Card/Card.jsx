import './Card.css'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';

export default function Card({
   name,
   status,
   species,
   gender,
   origin,
   image,
   onClose,
   id}) {

      


   return (
      <div key={id} className="Card">
         <button onClick={()=>onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
         <h2>{name}</h2>
         </Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt='' /> 
      </div>
   );
}
