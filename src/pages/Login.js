{/* <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNavDropdown">
<ul className="navbar-nav">
  <li className="nav-item active">
    <a className="nav-link" href="#" onClick={toggleDropdown}>Menu <span className="sr-only">(current)</span ><i className="fa-solid fa-list"></i></a>
    {isOpen && getData.length > 0 && (
      <div className="dropdown-menu">
        {getData.map((category) => (
          <div key={category.id}>
            <h3 className="text-lg font-medium">{category.name}</h3>
            <ul>
              {category.items.map((item) => (
                <li key={item.id}>
                  <Link href={`/item/${item.id}`} className="block text-sm py-1 hover:text-gray-800">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )}
  </li>
  </li>
           {/* <nav class="navbar navbar-light bg-light"> */}
         //   <form className="form-inline">
            //   <input className="form-control mr-sm-2" type="search" placeholder="find your favourite product" aria-label="Search" />
            //   <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>

         //   </form>
           {/* </nav> */}

         //   <li className="nav-item ">
            //   <a className="nav-link" href="#"> <i className="fa-solid fa-location-dot"></i>    Enter your Pin Code</a>
         //   </li>
         //   <li className="nav-item">
            //   <a className="nav-link" href="#"> <i className="fa-solid fa-cart-shopping"></i>   Cart</a>
         //   </li>
         //   <li className="nav-item dropdown">

            //   <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
               //   Login
            //   </a>
            //   <div className="dropdown-menu">
               //   <a className="dropdown-item" href="#">My Wishlist </a> 
               //   <a className="dropdown-item" href="#">My Orders</a>
               //   <a className="dropdown-item" href="#">Logout</a>

            //   </div>
         //   </li>
      //   </ul>
   //   </div>
//   </nav > */}


import { useState ,useEffect} from "react";

import axios from 'axios';

function Login() {



return (<>
<h1>Login</h1>
</>)
 }
export default Login;

