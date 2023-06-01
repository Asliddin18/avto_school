import React, { useState } from 'react'
import user from '../img/profile-icon-orange-symbol-soccer-ball-football-team-sport-transparent-png-1014106-removebg-preview.png'
import '../css/Form.css'
import axios from 'axios'
import url from '../../host'

export default function Form() {
  var [data, setData] = useState([])
  function openPage() {
    var email = document.querySelector('.emailInp').value
    var password = document.querySelector('.PasswordInp').value
    axios.get(`${url}/users`).then(res => {
      var key = true
      for (let i = 0; i < res.data.length; i++) {
        if (email == res.data[i].email && password == res.data[i].password) {
          localStorage.setItem('email', JSON.stringify(res.data[i]))
          key = false
        }
      }
      if (key) {
        // alert('You have')
        if (email == 'admin' && password == '123123') {
          sessionStorage.setItem("page", 4);
          window.location = "/";  
        } else {
          alert('To"g"ri kelmadi')
        }
      } else {
        sessionStorage.setItem("page", 2);
        window.location = "/";
      }
    })
    // if (email == "qwerty" && password == "123123") {
    //   sessionStorage.setItem("page", 2);
    //   window.location = "/";
    // } else if (email !== "qwerty" && password == "123123") {
    //   alert('login notori, parol tori')
    // }
    // else if (email == "qwerty" && password !== "123123") {
    //   alert('parol notori, login tori')
    // }
    // if (email == "avto" && password == "avto") {
    //   sessionStorage.setItem("page", 4)
    //   window.location = "/";
    // } else{
    //   alert('not help');
    // }
  }
  return (
    <div className='biggForm'>
      <div className='homeFormes'>
        <img src={user} /><br />
        {/* <label>Email</label><br /> */}
        <input placeholder='Email' className='emailInp' type='text' /><br />
        {/* <label>Password</label><br /> */}
        <input placeholder='Password' className='PasswordInp' type='Password' />
        <button className='kirissh' onClick={() => openPage()}>Kirish</button>
      </div>
    </div>
  )
}
