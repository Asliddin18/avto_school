import React, { useEffect, useState } from 'react'
import './AllPages.css'
import url from '../host'
import axios from 'axios'



export default function Page4() {
  var [data, setData] = useState([])
  var [data2, setData2] = useState(0)
  var [selected, setSelected] = useState(
    data.map((item) => item.choices.map(() => false))
  );
  useEffect(() => {
    axios.get(`${url}/test`).then(res => {
      setData(res.data)
    })
  }, [])
  function hh(index) {
    if (selected && Array.isArray(selected[index[0]]) && typeof selected[index[0]][index[1]] === 'boolean' && !selected[index[0]][index[1]]) {
      setSelected((prevSelected) => {
        const newSelected = [...prevSelected];
        newSelected[index[0]][index[1]] = true;
        return newSelected;
      });
      setData2((prevData2) => prevData2 + 5);
    }
  }

  return (
    <div>
{
  data.map((item) => {
    return (
      <div className='TestDiv'>
        <div className='imgTest'>
          <img src='' alt='' />
       
        </div>
        <div className='TestVariant'>
          <h1>{item.question}</h1>
          {item.choices.map((choice, index) => {
  return (
    <div key={index}>
      <p>{choice.text}</p>
      <p>{choice.answer}</p>
      <button
  disabled={selected[item.id][index]}
  onClick={() => hh([item.id, index])}
>
  Ответить
</button>
    </div>
  );
})}
    
        </div>
      </div>
    )
    
  })
  
}

<h1>{data2}</h1>

    </div>
  )
}

// import React from 'react'

// export default function Page4() {
//   return (
//     <div>Page4</div>
//   )
// }
