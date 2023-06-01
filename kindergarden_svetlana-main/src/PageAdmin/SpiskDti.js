import React, { useEffect, useState } from 'react'
import './AllAdmin.css'
import url from '../host'
import axios from 'axios'
import ico1 from '../img/free-icon-delete-5396993 (2).png'
import ico2 from '../img/free-icon-edit-6488637 (2).png'


export default function SpiskDti() {
  var [video, setVideo] = useState([])
  var [videogt, setVideogt] = useState([])
  function axiosPost() {
    var data = new FormData()
    data.append('video_title', document.querySelector('.video-title').value)
    data.append('video_link', document.querySelector('.video-link').value)
    axios.post(`${url}/video`, data).then(res => {
      alert('yaratildi')
      window.location.reload()
    })
  }
  useEffect(() => {
    axios.get(`${url}/video`).then(res => {
      setVideo(res.data)
    })
  }, [])


  function deleteData(key) {
    axios.delete(`${url}/video/${key}`).then(res => {
      alert('O"chirildi')
      window.location.reload()
    })
  }

  function EditData(key) {
    axios.get(`${url}/video/${key}`).then(res => {
      setVideogt(res.data)
    })
    document.querySelector('.modalOchish2').style.display = 'block'
  }
  function edittData(key) {
    var date = new FormData()
    date.append('video_title', document.querySelector('.video-title2').value)
    date.append('video_link', document.querySelector('.video-link2').value)
    axios.put(`${url}/video/${key}`, date).then(res => {
      alert('O"zgartirildi')
      window.location.reload()
    })
  }


  return (
    <div>
      <div className="modalOchish">
        <div className='newsCreate'>
          <h4>
            Darslik nomi
          </h4>
          <input type="text" className='video-title' />
          <h4>video darslik linki</h4>
          <input type="text" className='video-link' />

          <div className='newsCreateBtns'>
            <button onClick={() => axiosPost()}>Darslik Qo'shish</button>
          </div>
        </div>
      </div>
      <div className="modalOchish2">
        {
          videogt.map(item => {
            return (
              <div className='newsCreate2'>
                <h4>
                  Darslik nomi
                </h4>
                <input type="text" className='video-title2' placeholder={item.video_title} />
                <h4>video darslik linki</h4>
                <input type="text" className='video-link2' placeholder={item.video_link} />

                <div className='newsCreateBtns2'>
                  <button onClick={() => edittData(item.videoid)}>Darslik Yangilash</button>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='videoCourse'>
        {
          video.map(item => {
            return (
              <div className='videoDars'>
                <h3>{item.video_title}</h3>
                <iframe width="50%" height="312" src={item.video_link} title="Samsung Galaxy S23 Ultra - FINALLY, MEGA UPDATE IS HERE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className='btn-div'>
                  <button className="butadmp1" onClick={() => EditData(item.videoid)} ><img src={ico2} alt="" /></button>
                  <button className="butadmp2" onClick={() => deleteData(item.videoid)} ><img src={ico1} alt="" /></button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
