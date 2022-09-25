import   '../NavBar/NavBar';
import './ItemLists.css';  

export default function ItemLists(props) {
  console.log(props)
  return (
    <div className='ItemLists'>
     <center><h1>{props.greeting}</h1></center>
      
    </div>
  )
}
