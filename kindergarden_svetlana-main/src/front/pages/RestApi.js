import React, { useEffect } from 'react'
import FormImg from '../img/sj-school-basic900.jpg'
import '../AllFront.css'
import axios from 'axios';
import PhoneInput from 'react-phone-input-2'
import url from '../../host';


export default function RestApi() {
  
 
  function postUser() {
    var data = new FormData();
    data.append('username', document.querySelector('.username').value);
    data.append('email', document.querySelector('.email').value);
    data.append('password', document.querySelector('.password').value);
    data.append('passportser', document.querySelector('.passportser').value);
    data.append('passportnumber', document.querySelector('.passportnumber').value);
    data.append('category', document.querySelector('.category').value);
    data.append('phone', document.querySelector('.form-control').value);
    data.append('position_category', 'user');
    data.append('videotoken', 3);
    axios.post(`${url}/users`, data).then((res) => {
      document.querySelector('.modalForm2').style = 'display: block'
      setInterval(() => {
        document.querySelector('.modalForm2').style = 'display: none'
      }, 4000);
      window.location = '/numberpage'
    }).catch((err) => {
      alert(err)
    })
    }


  return (
    <div className='FormRegister'>
      <div className='homeForm' id='homeForm'>
        <div className='forms'>
          <label>
          username
          </label><br />
          <input className='username' type='text' placeholder='username' /><br />
          {/* <br /> */}
          <label>
          email
          </label><br />
          <input className='email' type='email' placeholder='email' />
          <br />
          <label>
          phone
          </label><br />
          <PhoneInput
              id='userNumber2'
              className='userNumber2'
              country={'ru'}
            />
          {/* <br /> */}
          <label>
          password
          </label><br />
          <input className='password' type='password' placeholder='password' />
          <br />
          <label>
          passportser
          </label><br />
          <input className='passportser' type='number' placeholder='passportser' /><br />
          {/* <br /> */}
          <label>
          passportnumber
          </label><br />
          <input className='passportnumber' type='number' placeholder='passportser' /><br />
          {/* <br /> */}
          <label>
          category  
          </label><br />
          <input className='category' type='text' placeholder='category' />
          <br />
          <button className='regasd' onClick={() => postUser()}>Regitratsiyadan o'tish</button>
        </div>
      </div>
        <div className='modalForm2'>
          <h1>Murojaatingiz uchun rahmat!</h1>
        </div>
    </div>
  )
}
