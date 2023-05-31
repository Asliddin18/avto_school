import React, { useState, useEffect } from 'react'
import Img1 from '../img/free-icon-user-149071 1 (1).png'
import PhoneInput from 'react-phone-input-2'
import './AllPages.css'
import axios from 'axios'
import url from '../host'

export default function Page1() {
  var [data, setData] = useState(JSON.parse(localStorage.getItem("email")))
  function putData() {
    var dataEshak = new FormData()
    dataEshak.append('username', document.querySelector('.username').value)
    dataEshak.append('password', document.querySelector('.password').value)
    dataEshak.append('email', document.querySelector('.email').value)
    dataEshak.append('category', document.querySelector('.category').value)
    dataEshak.append('phone', document.querySelector('.form-control').value)
    dataEshak.append('passportser', document.querySelector('.passportser').value)
    dataEshak.append('passportnumber', document.querySelector('.passportnumber').value)
    dataEshak.append('videotoken', 3)
    dataEshak.append('position_category', 'user')
    axios.put(`${url}/users/${data.userid}`, dataEshak).then(res => {
      alert('Success')
      window.location.reload()
    })
  }




  return (
    <div className='The-Big'>
      <div className="Cards-Page1">
        <div className="Card-Page1">
          <div className="Input-grup">
            <h4>Имя</h4>
            <input type="text" className='username' placeholder={data.username} />
          </div>
          <div className="Input-grup">
            <h4>phone</h4>
            <PhoneInput
              id='userNumber2'form-control
              className='userNumber2'
              country={'ru'}
            />
            {/* <input type="text" placeholder={data.phone} /> */}
          </div>
          <div className="Input-grup">
            <h4>email</h4>
            <input type="text" className='email' placeholder={data.email} />
          </div>
          <div className="Input-grup">
            <h4>Kategoriya</h4>
            <input type="text" className='category' placeholder={data.category} />
          </div>
          <div className="Input-grup">
            <h4>Password</h4>
            <input type="text" className='password' placeholder={data.password} />
          </div>
          <div className="Input-grup">
            <h4>passportser </h4>
            <input type="text" className='passportser' placeholder={data.passportser} />
          </div>
          <div className="Input-grup">
            <h4>Passport nomer</h4>
            <input type="text" className='passportnumber' placeholder={data.passportnumber} />
          </div>
          <div className='btn-groupPg1'>
            <button onClick={() => putData()}>Saqlash</button>
          </div>
        </div>
      </div>
    </div>
  )
}





// import React, { Component, setUpdatedAt } from 'react'
// import Img1 from '../img/free-icon-user-149071 1 (1).png'
// import PhoneInput from 'react-phone-input-2'
// import url from '../host'
// import axios from 'axios'
// import { Form } from 'react-bootstrap'
// import './AllPages.css'

// export default class PageProfil extends Component {
//   state = {
//     phone2: [],
//     usePhone2: []
//   }
//   render () {
//     return (
//       <div className='only_you' onload={phone2 => this.state.usePhone2}>
//         <div className='Cards-Page1'>
//           <div className='CardProfil-Page1'>
//             <img src={Img1} alt='' />
//             <br />
//             <button>Сменить фото</button>
//             <input type='file' className='inpOpacity' />
//           </div>
//           <div className='Card-Page1'>
//             <div className='Input-grup'>
//               <h4>Фамилия</h4>
//                   <input
//                     className='prsnMiddle'
//                     type='text'
//                     placeholder='{personmiddlename}'
//                   />
//             </div>
//             <div className='Input-grup'>
//               <h4>Имя</h4>
//                   <input
//                     className='prsnlastName'
//                     type='text'
//                     placeholder='personlastname'
//                   />
//             </div>
//             <div className='Input-grup'>
//               <h4>Отчество</h4>
//                   <input
//                     className='prsnFirstNamr'
//                     type='text'
//                     placeholder='personfirstname'
//                   />
//             </div>
//             <div className='Input-grup'>
//               <h4>Дата рождения</h4>
//                   <input
//                     type='date'
//                     className='passportdaTE'
//                     placeholder='passportdate'
//                   />
//             </div>
//             <div className='Input-grup'>
//               <h4>Улица</h4>
//               <input type='title' className='addressPt' placeholder='address1' />
//             </div>
//             <div className='Input-grup'>
//               <h4>Passport Number</h4>
//                 <input type='number' className='housePt' placeholder='passNum' />
//             </div>
//             <div className='Input-grup'>
//               <h4>Номер телефона</h4>
//               <PhoneInput
//                 id='userNumber2'
//                 className='userNumber2'
//                 country={'ru'}
//                 /* placeholder={this.state.person1[0].phone} */
//               />
//             </div>
//             <div className='Input-grup'>
//               <h4>E-mail</h4>
//                   <input
//                     className='emailInput'
//                     type='title'
//                     placeholder='email'
//                   />
//             </div>
//             <div
//               className='btn-groups
//             '
//             >
//               <button>
//                 Сохранить
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }









