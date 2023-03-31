import Card from '../Card/Card';
import "./Cards.css"
export default function Cards({characters,onClose,id}) {
  

   return (
   <div className='Cards'>
     {
       characters.map((elements,index) => {
         return <Card 
         key={elements.id}
         id={elements.id}
         name={elements.name} 
         status={elements.status}
         species={elements.species} 
         gender={elements.gender} 
         origin={elements.origin.name} 
         image={elements.image}
         onClose={onClose}/>
        })
      }
   </div>
   
   
   );
}
