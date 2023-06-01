
import './css/New.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, useState } from 'react'
import ico1 from '../img/free-icon-delete-5396993 (2).png'
import ico2 from '../img/free-icon-edit-6488637 (2).png'
import axios from 'axios';
import url from '../host';




export default class App extends Component {
   state = {
      news: [],
      editedMp: []
   }




   componentDidMount = () => {
      //    axios.get(`${url}/person`).then(res => {
      //       // console.log(res.data);
      //       this.setState({
      //          person: res.data
      //       })

      //    }).finally(() => {
      //       // document.querySelector('.hallo_as').style = 'display: block'
      //    });
      axios.get(`${url}/news`).then(res => {
         this.setState({ news: res.data })
      })

      // console.log('dvfnumi');
      // axios.get(`${url}/address`).then(res => {
      //    this.setState({ region: res.data })
      // })

   }


   DobavNovs = () => {
      document.querySelector('.SozdatNovs').style = 'display: block'
      document.querySelector('.asdsad').style = 'display: none'
   }


   CloseNovs = () => {
      document.querySelector('.SozdatNovs').style = 'display: none'
      document.querySelector('.asdsad').style = 'display: block'
   }

   postNews = () => {
      var news = new FormData();
      news.append('news_desc', document.querySelector('.News_desc').value);
      news.append('news_title', document.querySelector('.news_title').value);
      axios.post(`${url}/news`, news).then(res => {
         alert('Yaratildi')
         window.location.reload()
      }).catch(err => {
         alert(err)
      })
   }


   CloseEditor = () => {
      document.querySelector('.SozdatNovs2').style = 'display: none'
      document.querySelector('.asdsad').style = 'display: block'
   }


   DeleteNews = (key) => {
      axios.delete(`${url}/news/${key}`).then(res => {
         alert('O"chirildi')
         window.location.reload()
      })
   }

   OpenEditor = (key) => {
      console.log(key);
      axios.get(`${url}/news/${key}`).then(res => {
         this.setState({
            editedMp: res.data
         })
      }
      )
      document.querySelector('.asdsad').style = 'display: none'
      document.querySelector('.SozdatNovs2').style = 'display: block'
   }

   EditEditor = (key) => {
      var editedDate = new FormData()
      editedDate.append('news_desc', document.querySelector('.News_desc2').value);
      editedDate.append('news_title', document.querySelector('.news_title2').value);
      axios.put(`${url}/news/${key}`, editedDate).then(res => {
         alert('yangilandi')
         window.location.reload()
      }).catch(err =>
         console.log(err)
      )
   }


   render() {
      return (
         <div className="nodir5">
            <div className="redact">

            </div>
            <div className="SozdatNovs">
               <h4>Yangilik sarlavhasi</h4>
               <input className='News_desc' type="text" />
               <h4>Test</h4>
               <textarea className='news_title'></textarea>
               <div className="btn-group">
                  <button onClick={() => this.CloseNovs()}>Bekor qilish</button>
                  <button onClick={() => this.postNews()}>Yaratish</button>
               </div>
            </div>
            <div className="SozdatNovs2">
               {
                  this.state.editedMp.map(item => {
                     return (
                        <div>
                           <h4>Yangilik sarlavhasi</h4>
                           <input className='News_desc2' type="text" placeholder={item.news_desc} />
                           <h4>Test</h4>
                           <textarea className='news_title2' placeholder={item.news_title}></textarea>
                           <div className="btn-group">
                              <button onClick={() => this.CloseEditor()}>Bekor qilish</button>
                              <button onClick={() => this.EditEditor(item.newsid)}>Yangilash</button>
                           </div>
                        </div>
                     )
                  })
               }
            </div>
            <div className="asdsad">

               <div className="cake">
                  <div className="cake1">
                     <button className="nodiruca" onClick={() => this.DobavNovs()}>
                        Добавить новость
                     </button>
                  </div>
               </div>

               <div className=" bigbox">
                  <div className="bodyadmpn" >

                     <div className="btnadmp_box1">
                        <table className="btnchil_table">
                           <tr className="btnadmp_tr">

                              <th className="btnadmp_th1">ID</th>

                              <th className="btnadmp_th"> Дата </th>
                              <th className="btnadmp_th">Название</th>
                              <th className="btnadmp_th" id='borDr'>Действие</th>


                           </tr>

                           {
                              this.state.news.map((news) => {
                                 if (this.state.news.length != 0) {
                                    return (
                                       <tr className="btnadmp_tr1" >
                                          <td className="btnadmp_td1">{news.newsid}</td>
                                          <td className="btnadmp_td1">{news.syscreatedatutc.slice(0, 10)}</td>
                                          <td className="btnadmp_td1">{news.news_desc}</td>
                                          <td className="btnadmp_td1">
                                             <button className="butadmp1" onClick={() => this.OpenEditor(news.newsid)}><img src={ico2} alt="" /></button>
                                             <button className="butadmp2" onClick={() => this.DeleteNews(news.newsid)}><img src={ico1} alt="" /></button>
                                          </td>
                                       </tr>
                                    )
                                 } else {
                                    return (
                                       <tr className="btnadmp_tr1" id='gjk'>
                                          <td className="btnadmp_td1">Bu yerda Ma'lumot yo'q</td>
                                          <td className="btnadmp_td1"></td>
                                          <td className="btnadmp_td1"></td>
                                          <td className="btnadmp_td1">
                                             <button className="butadmp1" onClick={() => this.OpenEditor(news.newsid)}><img src={ico2} alt="" /></button>
                                             <button className="butadmp2" onClick={() => this.DeleteNews(news.newsid)}><img src={ico1} alt="" /></button>
                                          </td>
                                       </tr>
                                    )
                                 }
                              })
                           }
                        </table>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      )
   }

}