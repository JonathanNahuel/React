import './NavBar.css'
import  '../CartWidget/CartWidget';
import CartWidget from '../CartWidget/CartWidget';
export default function NavBar(props) {
  return (
      
       <nav class=" navbar navbar-dark bg-primary navbar-expand-lg   w-100 ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={props.img} alt="" width="50" height="50" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse  d-flex justify-content-center " id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Niños</a></li>
            <li><a class="dropdown-item" href="#">Hombre</a></li>
            <li><a class="dropdown-item" href="#">Mujer</a></li>
          </ul>
         
        </li>
      </ul>
     <CartWidget/> 
    </div>
  </div>
  
</nav>

  )
}
