import axios from 'axios';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
function Register() {

   const [getData, setData] = useState(
      {
         name: "",
         email: "",
         password: "",
         appType: "ecommerce"
      }
   );
   const navgiate = useNavigate();

   const onChangeHandler = (event) => {
      setData({ ...getData, [event.target.name]: event.target.value })}

      const onSubmitHandler = (event) => {
         event.preventDefault();
         console.log(getData);
         setError(null);
         if (!getData.name) {
            setError('UserName is mandatory');
            return;
         } else if (!getData.email) {
            setError('Email is mandatory');
            return;
         }
         else if (!getData.password) {
            setError('Password is mandatory');
            return;

         }
         axios.post(' https://academics.newtonschool.co/api/v1/user/signup', getData, {
            headers: {
               projectID: '8p2co6c66pky'
            }
         }).then((result) => {
            console.log(result);
            navgiate('/login');
         }).catch((error) => {
            setError("internal server error please try aftersome time");
            // setError(error);
   
         })
      }
      const [getError, setError] = useState([]);
      return (<>
         <div className="container">
            <div className="row">
               <div className="col-4">


                  <form onSubmit={onSubmitHandler}>
                     <div className="form-group">
                        <label htmlFor="name">Username</label>
                        <input type="text" className="form-control" name="name" value={getData.name} onChange={onChangeHandler} />

                     </div>
                     <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" name="email" value={getData.email} onChange={onChangeHandler} />

                     </div>
                     <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={getData.password} onChange={onChangeHandler} />
                     </div>
                     <div className="form-group">
                        <label htmlFor="appType">appType</label>
                        <select className="form-control" name="appType" value={getData.appType} onChange={onChangeHandler}>
                           <option value="ecommerce">ecommerce</option>
                           <option value="others"> others</option>

                        </select>
                     </div>

                     <button type="submit" className="btn btn-primary">Register</button>
                  </form>
               </div>
               <div className="col-4">

               </div>

            </div>
         </div>
      </>)
   }

export default Register;