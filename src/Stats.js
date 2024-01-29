 
 
 export default function Stats({items}) {

    if(!items.length) 
    return (
   <p className='stats'>
     <em>Start adding some items to your packing list 🚀</em>
   </p>
     )
   
   
   
     const numItems = items.length
     const numPacked =items.filter(item =>item.packed).length
     const perc = Math.round((numPacked / numItems) * 100)
   
   
   
     return (
       
     <footer className="stats">
       <em> { perc ===100 
       ?' you are ready to go ✈'
       : ` You have ${numItems} items in your list , and you already packed ${numPacked} (${perc } %) `} 
       </em>
         
        
     </footer> 
     )
   }