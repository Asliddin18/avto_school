import React from 'react'
import './AllAdmin.css'


export default function SpiskDti() {
  return (
    <div>
      <div className="modalOchish">
        <div className='newsCreate'>
        <h4>
          Darslik nomi
        </h4>
        <input type="text" />
        <h4>video darslik linki</h4>
        <input type="text" />

        <div className='newsCreateBtns'>
          <button>Darslik Qo'shish</button>
        </div>
        </div>
      </div>
      {/* <button onClick={() => opens()}>Darsliklar Qo'shish</button> */}
      <div className='videoCourse'>
        <div className='videoDars'>
          <h3>1.1 Yo'l harakatlari</h3>
          <iframe width="50%" height="312" src="https://www.youtube.com/embed/ulers9nQFxA" title="Samsung Galaxy S23 Ultra - FINALLY, MEGA UPDATE IS HERE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}
