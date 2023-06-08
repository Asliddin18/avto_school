import React, { useEffect, useState } from 'react'
import url from '../host'
import axios from 'axios'
import "./Page4.css"

export default function Page4() {
  const [data,setData]=useState([])
  const [data2,setData2]=useState([0,0,0,0,0,0,0,0,0,0])
const [all,setAll]=useState(0)
  const [count,setCount]=useState(0)
var [timeset,setTimeset]=useState(9000)

  const plus=()=>{
    var a=0
  
    setCount(count+1)
   if(count>=9){
    console.log(data2);
    for (let i = 0; i < data2.length; i++) {
     a=a*1+data2[i]*1
    } 
    var form=new FormData
    form.append("userid",JSON.parse(localStorage.getItem("email")).userid)
    form.append("result1",a*10)
    setAll(a*10)
    console.log("sdfsd",a);
    console.log("sdfsd2",data2);

    axios.post(`${url}/user_test`,form)
   }
      
    }
    const minus=()=>{
      if(count>0){
      setCount(count-1) }
    }
  useEffect(() => {
    axios.get(`${url}/test`).then(res => {
      console.log(res.data);
      setData(res.data)
      var a=900
      var b=0
      document.querySelector('.yash12').innerHTML=((a/60).toFixed(0))+":"+a%60
      setInterval(() => {
        if(a>0){
        a--
        document.querySelector('.yash12').innerHTML=((a/60).toFixed(0))+":"+a%60
        }
        if(a===1){
          console.log(data2);
          for (let i = 0; i < data2.length; i++) {
           b=b*1+data2[i]*1
          } 
          var form=new FormData
          form.append("userid",JSON.parse(localStorage.getItem("email")).userid)
          form.append("result1",b*10)
          setAll(b*10)
          setCount(10)
          console.log("sdfsd",b);
          console.log("sdfsd2",data2);
          axios.post(`${url}/user_test`,form) 
        }
        }, 100);
    })
  
  }, [])
  return (
    <div className='test_12'>
      <div className='Test-Big'>
        <div className='Test-Img'>
          <img src='' alt='' />
        </div>
        <div className='Test-Variant'>
   
<div class="content">
<div class="container-fluid">
  <h1 className='yash12'></h1>
	<h1>{count===10?(<>{count}</>):(<>{count+1}</>)}/10</h1>
	{count==10?(<>
  <div className="oyna12">
<div className="oii">
  <h4>Sizning Natijangiz</h4>
<h2>{all}%</h2>
<h1>{all<50?("Juda yomon natija"):(all<80?("biroz natijangiz past"):("juda ajoyib natija"))}</h1>
<a href="/">testni yakunlash</a>
</div>
  </div>
  </>):(<>
    <div className="ss">
  <div class="row">
		<div class="col-sm-12">
        	<div id="result" class="quiz-body">
            <form style={{maxWidth:'600px'}} key={count} name="quizForm" onSubmit="">
            	<fieldset class="form-group">
    			<h4><span id="qid">{count+1}.</span>{data.length>0?(data[count].question):(<></>)}<span id="question"></span></h4>
                
                <div class="option-block-container" id="question-options">
                <div class='form-check option-block'>
					<label class='form-check-label'>
				<input type='radio' class='form-check-input' name='option' onClick={()=>{if(data[count].choices[0].answer){data2[count]=1}else{data2[count]=0}}}  id='' value="" /><span id='optionval'>{data.length>0?(data[count].choices[0].text):(<></>)}
							 </span></label>
                 </div> </div>
                 <div class="option-block-container" id="question-options">
                <div class='form-check option-block'>
					<label class='form-check-label'>
							  <input type='radio' class='form-check-input' name='option'  onClick={()=>{if(data[count].choices[1].answer){data2[count]=1;}else{data2[count]=0}}}  id='' value="" /><span id='optionval'> {data.length>0?(data[count].choices[1].text):(<></>)}
							 </span></label>
                 </div> </div>
                 <div class="option-block-container" id="question-options">
                <div class='form-check option-block'>
					<label class='form-check-label'>
							  <input type='radio' class='form-check-input' name='option' onClick={()=>{if(data[count].choices[2].answer){data2[count]=1}else{data2[count]=0}}}   id='' value="" /><span id='optionval'>{data.length>0?(data[count].choices[0].text):(<></>)}
							 </span></label>
                 </div> </div>
                 </fieldset>
                 <button  name="previous" id="previous" type="button" class="btn btn-success" onClick={()=>{minus()}}>Previous</button>
                 &nbsp;
                 <button  name="next" id="next" class="btn btn-success" type="button" onClick={()=>{plus()}} >Next</button>
           </form>
           </div>
        </div> 
        
    </div> 
    <div className="img_test">
      <img src={data.length>0?(`https://avtoshkola.onrender.com/${data[count].media.name}.png`):(<></>)} alt="  " />
    </div>
  </div>
  </>)}
</div> 
</div>
        </div>
      </div>
    </div>
  )
}