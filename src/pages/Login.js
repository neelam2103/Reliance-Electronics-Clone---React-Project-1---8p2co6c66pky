


import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

   const [getData, setData] = useState({
      name: '',
      email: '',
      password: '',
      appType: 'ecommerce'
   })

   const navgiate = useNavigate();

   const onChangeHandler = (event) => {
      setData({ ...getData, [event.target.name]: event.target.value })
   }

   const onSubmitHandler = (event) => {
      event.preventDefault();
      console.log(getData);
      setError(null);
     if (!getData.email) {
         setError('Email is mandatory');
         return;
      }
      else if (!getData.password) {
         setError('Password is mandatory');
         return;

      }
      axios.post(' https://academics.newtonschool.co/api/v1/user/login', getData, {
         headers: {
            projectID: '8p2co6c66pky'
         }
      }).then((result) => {
         console.log(result);
         navgiate('/');
      }).catch((error) => {
         setError("internal server error please try aftersome time");
         // setError(error);

      })
   }

   const [getError, setError] = useState([]);
   return (<>
      <div className="container">
         <div className="row">
            <div className="col-4"></div>

            <div className="col-4">
               {getError && <div class="alert alert-danger" role="alert">
                  {getError}
               </div>}
               <form onSubmit={onSubmitHandler}>



              
                  <div className="form-group">
                     <label htmlFor="email">Email address</label>
                     <input type="email" className="form-control" name="email" onChange={onChangeHandler} value={getData.email} />

                  </div>
                  <div className="form-group">
                     <label htmlFor="password">Password</label>
                     <input type="password" className="form-control" name="password" onChange={onChangeHandler} value={getData.password} />
                  </div>
                 

                

                  <button type="submit" className="btn btn-primary">Login</button>
               </form>
            </div>
            <div className="col-4"></div>
         </div>

      </div>

   </>)
}
export default Login;