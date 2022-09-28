import './ItemListsContainer.css';  

export default function ItemListsContainer(props) {
  console.log(props)
  return (
    <div className='ItemListsContainer'>
     <center><h1>{props.greeting}</h1></center>
      
    </div>
  )
}
