import React, { useEffect, useState } from 'react'
import ImgTeacher from '../img/free-icon-teacher-1425402 1.png'
import './AllPages.css'
import axios from 'axios'
import url from '../host'

export default function Page1() {
  const [state, setState] = useState([])
  useEffect(() => {
    axios.get(`${url}/news`).then(res => {
      setState(res.data)
    })
  }, [])

  return (
    <div className='The-Big'>
      <div className='Card-forPage'>
        {
          state.map((item) => {
            return (
              <div className='Cards-forPage'>
                <h2>{item.news_title}</h2>
                <p>{item.news_desc}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}