import React, { useState } from 'react'
import '../styles/register.css'
import axios from 'axios'

const Register = () => {


    const [formData, setFormData] = useState({username: "", addresses:{}})

    const [addresses, Setaddresses] = useState({street : "", city :"", country:"", pin:null})

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        setFormData((prevFormData) => ({
          ...prevFormData,  
          [name]: value 
        }));
    }
    
    const handleChange2 = (e) => {
        const { name, value } = e.target;
    
        Setaddresses((prevAddressData) => ({
          ...prevAddressData, 
          [name]: value 
        }));
    }

    const handleSubmit= async(e)=>{
        e.preventDefault();
        let updatedFormData = { ...formData, addresses: addresses };
        
        
        

       await axios.post('http://localhost:8080/api/register', updatedFormData )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          
         await setFormData({username: "", addresses:{}});
     await Setaddresses({street : "", city :"", country:"", pin:null || ''});
    }
  return (
    <div className='container'>
        <div className='text'>Register</div>
        <div className='formContainer'>
        <form>
        <fieldset >
        <legend>login Credinitla </legend>
        
        <label htmlFor="username">Username:</label>
        <input className='input' name="username" type='text' value={formData.username} onChange={handleChange}/><br/>
        
        
   
        </fieldset>
        <fieldset>
        <legend>Address</legend>
        <div className='address'>
        <label htmlFor="street">Street:</label>
        <input className='input' name="street" type='text' value={addresses.street} onChange={handleChange2}/>
        
        <br/>
        <label htmlFor="city">City:</label>
        <input className='input' name="city" type='text' value={addresses.city} onChange={handleChange2}/>


        <br/>
        <label htmlFor="country">Country:</label>
        <input className='input' name="country" type='text' value={addresses.country} onChange={handleChange2}/>

        <br/>
        <label htmlFor="pin">PIN:</label>
        <input className='input' name="pin" type='text' value={addresses.pin} onChange={handleChange2}/>
        </div>
        </fieldset>

        <button onClick={handleSubmit} className='btn-grad'>register</button>
        </form>
        </div>
        
    </div>
  )
}

export default Register
