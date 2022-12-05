import React from 'react';

function Section2Component ({notice, gallery, modalOpen}) {
  // const [show, setShow] = React.useState(false);

  const onClickModal=(e)=>{
    e.preventDefault();
    modalOpen();
  }
  return (
    <section id="section2">
      <div className="left board">
        <button className="notice-btn">공지사항</button>
        <div className="notice-box board-box">
          <div className="gap">
            <ul>
              {
                notice.map((item,idx)=>{
                  return(
                    <li key={idx}><a href="!#" onClick={onClickModal} className={idx===0 && "modal-btn"} title={item.타이틀}>{item.타이틀}</a><span>2020.11.23</span></li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
      <div className="center board">
        <button className="gallery-btn">갤러리</button>
        <div className="gallery-box board-box">
          {
            gallery.map((item,idx)=>{
              return(
                <a href="!#" title={item.타이틀}><img src={item.imgSrc} alt="icon1" /></a>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <div className="banner">
          <div className='title'><h2 style={{fontSize:'20px',fontWeight:'800'}}>EVENT BANNER</h2></div>
          <div className="img-box">
            <a href="!#" title="banner"><img src="./images/banner.jpg" alt="banner" /></a>
          </div>
        </div>
      </div>
    </section>
  )
};

Section2Component.defaultProps = {
  notice:[
    {타이틀:"Green 복지재단 공지사항1",날짜:"2020.11.23"},
    {타이틀:"Green 복지재단 공지사항2",날짜:"2020.11.23"},
    {타이틀:"Green 복지재단 공지사항3",날짜:"2020.11.23"},
    {타이틀:"Green 복지재단 공지사항4",날짜:"2020.11.23"}
  ],
  gallery:[
    {타이틀:"icon1",imgSrc:"./images/icon1.png"},
    {타이틀:"icon2",imgSrc:"./images/icon2.png"},
    {타이틀:"icon3",imgSrc:"./images/icon3.png"}
  ]
}

export default Section2Component;