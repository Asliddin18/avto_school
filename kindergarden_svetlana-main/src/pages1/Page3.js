import axios from 'axios'
import React, { useEffect, useState } from 'react'
import url from '../host'

export default function Page3() {
  var [data, setData] = useState([])
  useEffect(() => {
    axios.get(`${url}/video`).then(res => {
      setData(res.data)
    })
  }, [])



  return (
    <div>
      <div className='videoCourse'>
        <h1>Video Darsliklar</h1>
        <br />
        <br />
        <br />
        {
          data.map((item) => {
            return (
              <div className='videoDars'>
                <h3>{item.video_title}</h3>
                <iframe width="50%" height="312" src={item.video_link} title={item.video_title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
