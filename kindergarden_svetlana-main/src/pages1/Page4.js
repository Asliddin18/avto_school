import React, { useRef, useEffect, useState } from 'react'
import './AllPages.css'
import url from '../host'
import axios from 'axios'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination } from "swiper";



export default function Page4() {
  var [data, setData] = useState([])
  var [data2, setData2] = useState(0)
  const [answered, setAnswered] = useState(
    data.map((item) => false)
  );
  useEffect(() => {
    axios.get(`${url}/test`).then(res => {
      setData(res.data)
    })
  }, [])
  function hh(itemId, choiceIndex) {
    if (!answered[itemId]) {
      const ball = 5;
      setData2(data2 + ball);
      setAnswered((prevAnswered) => {
        const newAnswered = [...prevAnswered];
        newAnswered[itemId] = true;
        return newAnswered;
      });
      console.log("turi");
    } else {
      console.log("notori");
    }
    console.log(data2);
  }
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className='guhi'>
      {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>Slide 9</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
          </svg>
          <span ref={progressContent}></span>
        </div>    

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 30000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >{
          data.map((item) => {
            return (
              <SwiperSlide>

                <div className='TestDiv'>
                  <div className='imgTest'>
                    {
                      data.map((item) => {
                        if (item.media.exist == true) {
                          // console.log(item.media.name, 'true');
                          return (
                            <img src={`${url}/${item.media.exist}`} alt='' />
                          )
                        } else{
                          // <img src={`${url}/${item.media.exist}`} alt='' />
                        }
                      })
                    }
                    <img src='' alt='' />

                  </div>
                  <div className='TestVariant'>
                    <h1>{item.question}</h1>
                    {item.choices.map((choice) => {
                      return (
                        <div>
                          <p >{choice.text}</p>
                          <p>{choice.answer}</p>
                          <button
                            disabled={answered[item.id]}
                            onClick={() => hh(item.id)}
                          >
                            Ответить
                          </button>
                        </div>
                      )
                    })}

                  </div>
                </div>
              </SwiperSlide>
            )

          })

        }
        <SwiperSlide>
          <h1>oxiri</h1>
          <h1>{data2}</h1>
        </SwiperSlide>

      </Swiper>

    </div>
  )
}
// import React from 'react'

// export default function Page4() {
//   return (
//     <div>Page4</div>
//   )
// }
