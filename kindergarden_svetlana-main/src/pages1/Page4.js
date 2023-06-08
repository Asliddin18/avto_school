import React, { useEffect } from 'react'
import url from '../host'
import axios from 'axios'


export default function Page4() {
  useEffect(() => {
    axios.get(`${url}/test`).then(res => {
      console.log(res.data);
    })
  }, [])
  return (
    <div>
      <div className='Test-Big'>
        <div className='Test-Img'>
          <img src='' alt='' />
        </div>
        <div className='Test-Variant'>
          <p></p>
        </div>
      </div>
    </div>
  )
}