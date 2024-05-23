import { useState, Link, useEffect } from "react";
import axios from 'axios';

function Navbar() {
   const [isOpen, setIsOpen] = useState(false);



   const [getData, setData] = useState([]);

   useEffect(() => {
      relianceItem();
   }, [getData]);

   const relianceItem = async () => {
      try {
         const response = await axios.get('https://academics.newtonschool.co/api/v1/ecommerce/electronics/categories', {
            headers: {
               projectID: '8p2co6c66pky'
            }
         });
         //  console.log(response.data);
         setData(response.data.data);
         // console.log(getData);


      } catch (err) {
         console.log(err);
      }
   }
   const handlerClick = () => {
      setIsOpen(!isOpen);
      console.log(isOpen);
      console.log(getData);
   }

   return (<>
      <nav className="navbar navbar-expand-lg navbar-danger bg-danger">
         <a className="navbar-brand" href="#">            <img src="https://dog55574plkkx.cloudfront.net/storelogo/web/Reliance-Digital.png" alt="Reliance Digital Logo" className="logo" />
         </a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
               <li className="nav-item active">
                  <a className="nav-link left-nav" href="#" onClick={handlerClick}>Menu  <i className="fa-solid fa-list"></i><span className="sr-only">(current)</span>
                     <ul>
                        {getData.map((obj, index) => {


                           <li key={index}>
                              {obj}
                           </li>


                        })}
                        
                        <div class="dropdown">
                           <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                            Dropdown
                           </button>
                           <div class="dropdown-menu">
                              <a class="dropdown-item" href="#">{getData.obj}</a>
                            
                           </div>
                        </div>
                     </ul>

                  </a>
               </li>
               <nav className="navbar navbar-light bg-light  left-nav">
                  <form className="form-inline">
                     <input className="form-control mr-sm-2" type="search" placeholder="find your favourite product" aria-label="Search" />
                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                  </form>
               </nav>
               <li className="nav-item">
                  <a className="nav-link" href="#"> <i className="fa-solid fa-location-dot"></i>    Enter your Pin Code</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" href="#"><i className="fa-solid fa-cart-shopping"></i>   Cart</a>

               </li>
               <li className="nav-item dropdown">
                  <a className="nav-a dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                     Profile
                  </a>
                  <div className="dropdown-menu">
                     <a className="dropdown-item" href="#">My Wishlist</a>
                     <a className="dropdown-item" href="#">My Order</a>
                     <a className="dropdown-item" href="/login">Login</a>
                     <a className="dropdown-item" href="/register">Register</a>
                  </div>
               </li>
            </ul>
         </div>
      </nav>
   </>)
}

export default Navbar;