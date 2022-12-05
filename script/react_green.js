function WrapComponent(){

  const [show, setShow] = React.useState(false);

  const modalOpen=()=>{
    setShow(true);
  }
  const modalClose=()=>{
    setShow(false);
  }

  return (
    <div id="wrap">
      <HeaderComponent/>
      <MainComponent modalOpen={modalOpen}/>
      <FooterComponent/>
      {
        show && <ModalComponent modalClose={modalClose}/>
      }
    </div>
  )
}

function HeaderComponent(props){
  const  {homePath,imgSrc,imgAlt,
    subMenu1_1,subMenu1_2,subMenu1_3,subMenu1_4,
    subMenu2_1,subMenu2_2,subMenu2_3,subMenu2_4,
    subMenu3_1,subMenu3_2,subMenu3_3,subMenu3_4,
    subMenu4_1,subMenu4_2,subMenu4_3,subMenu4_4
  } = props;

  const[addClass1, setaddClass1] = React.useState(false);
  const[addClass2, setaddClass2] = React.useState(false);
  const[addClass3, setaddClass3] = React.useState(false);
  const[addClass4, setaddClass4] = React.useState(false);

  const onMouseEnter1=()=>{
    setaddClass1(true);
    setaddClass2(false);
    setaddClass3(false);
    setaddClass4(false);
  };
  const onMouseEnter2=()=>{
    setaddClass2(true);
    setaddClass1(false);
    setaddClass3(false);
    setaddClass4(false);
  };
  const onMouseEnter3=()=>{
    setaddClass3(true);
    setaddClass1(false);
    setaddClass2(false);
    setaddClass4(false);
  };
  const onMouseEnter4=()=>{
    setaddClass4(true);
    setaddClass1(false);
    setaddClass2(false);
    setaddClass3(false);
  };

  const onMouseLeaveAddClass=()=>{
    setaddClass1(false);
    setaddClass2(false);
    setaddClass3(false);
    setaddClass4(false);
  };

  return (
    <header id="header">
      <div className="left">
        <h1><a href={homePath} title="HOME"><img src={imgSrc} alt={imgAlt} /></a></h1>
      </div>
      <div className="right">
        <nav id="nav" onMouseLeave={onMouseLeaveAddClass}>
          <ul>
            <li>
                <a href="#"
                onMouseEnter = {onMouseEnter1}
                // className={addClass1 ? 'main-btn on' : 'main-btn'}
                className={`main-btn ${addClass1 && 'on'}`}
                title="재단소개">재단소개</a>
                {/* <div className={addClass1 ? 'sub sub1 on' : 'sub sub1'}> */}
                <div className={`sub sub1 ${addClass1 && 'on'}`}>
                  <div className="container">
                    <ul>
                      <li> {/* <!-- 1칸 --> */}
                        <ul>
                          {
                            subMenu1_1.map((item,idx)=>{
                              return (
                                <li key={idx}><a href="#" title={item}>{item}</a></li>
                              )
                            })
                          }
                          {/* <li><a href="#" title="설립취지">설립취지</a></li>
                          <li><a href="#" title="연혁">연혁</a></li>
                          <li><a href="#" title="찾아오시는길">찾아오시는길</a></li> */}
                        </ul>
                      </li>
                      <li> {/* <!-- 2칸 --> */}
                        <ul>
                          {
                            subMenu1_2.map((item, idx)=>{
                              return(
                                <li key={idx}><a href="#">{item}</a></li>
                              )
                            })
                          }

                          {/* <li><a href="#">서브메뉴1</a></li>
                          <li><a href="#">서브메뉴2</a></li>
                          <li><a href="#">서브메뉴3</a></li> */}
                        </ul>
                      </li>
                      <li> {/* <!-- 3칸 --> */}
                        <ul>
                          {
                            subMenu1_3.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="#">{item}</a></li>
                              )
                            })
                          }
                          {/* <li><a href="#">서브메뉴1</a></li>
                          <li><a href="#">서브메뉴2</a></li>
                          <li><a href="#">서브메뉴3</a></li> */}
                        </ul>
                      </li>
                      <li> {/* <!-- 4칸 --> */}
                        <ul>
                          {
                            subMenu1_4.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="#">{item}</a></li>
                              )
                            })
                          }
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
            </li>
            <li>
                <a href="#"
                onMouseEnter = {onMouseEnter2}
                // className={addClass2 ? 'main-btn on' : 'main-btn'}
                className={`main-btn ${addClass2 && 'on'}`}
                title="후원하기">후원하기</a>
                {/* <div className={addClass2 ? 'sub sub2 on' : 'sub sub2'}> */}
                <div className={`sub sub2 ${addClass2 && 'on'}`}>
                  <div className="container">
                    <ul>
                      <li>
                        <ul>
                          {
                            subMenu2_1.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="#"title={item}>{item}</a></li>
                              )
                            })
                          }
                          {/* <li><a href="#"국내후원>국내후원</a></li>
                          <li><a href="#"국외후원>국외후원</a></li>
                          <li><a href="#"맞춤후원>맞춤후원</a></li> */}
                        </ul>
                      </li>
                      <li>
                        <ul>
                          {
                            subMenu2_2.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="#"title={item}>{item}</a></li>
                              )
                            })
                          }
                          {/* <li><a href="#">서브메뉴1</a></li>
                          <li><a href="#">서브메뉴2</a></li>
                          <li><a href="#">서브메뉴3</a></li> */}
                        </ul>
                      </li>
                      <li>
                        <ul>
                          {
                            subMenu2_3.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="#"title={item}>{item}</a></li>
                              )
                            })
                          }
                        </ul>
                      </li>
                      <li>
                        <ul>
                          {
                            subMenu2_4.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="#"title={item}>{item}</a></li>
                              )
                            })
                          }
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
            </li>
            <li>
                <a href="#"
                onMouseEnter = {onMouseEnter3}
                // className={addClass3 ? 'main-btn on' : 'main-btn'}
                className={`main-btn ${addClass3 && 'on'}`}
                title="자료실">자료실</a>
                {/* <div className={addClass3 ? 'sub sub3 on' : 'sub sub3'}> */}
                <div className={`sub sub3 ${addClass4 && 'on'}`}>
                  <div className="container">
                    <ul>
                      <li>
                        <ul>
                          {
                            subMenu3_1.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="#" title={item}>{item}</a></li>
                              )
                            })
                          }
                          {/* <li><a href="#" title="서식자료실">서식자료실</a></li>
                          <li><a href="#" title="사진자료실">사진자료실</a></li>
                          <li><a href="#" title="후원양식">후원양식</a></li> */}
                        </ul>
                      </li>
                      <li>
                        <ul>
                          {
                            subMenu3_2.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="#" title={item}>{item}</a></li>
                              )
                            })
                          }
                        </ul>
                      </li>
                      <li>
                        <ul>
                          {
                            subMenu3_3.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="#" title={item}>{item}</a></li>
                              )
                            })
                          }
                        </ul>
                      </li>
                      <li>
                        <ul>
                          {
                            subMenu3_4.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="#" title={item}>{item}</a></li>
                              )
                            })
                          }
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
            </li>
            <li>
                <a href="#"
                onMouseEnter = {onMouseEnter4}
                // className={addClass4 ? 'main-btn on' : 'main-btn'}
                className={`main-btn ${addClass4 && 'on'}`}
                title="스토리">스토리</a>
                {/* <div className={addClass4 ? 'sub sub4 on' : 'sub sub4'}> */}
                <div className={`sub sub4 ${addClass4 && 'on'}`}>
                  <div className="container">
                    <ul>
                      <li>
                        <ul>
                          {
                            subMenu4_1.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="#" title={item}>{item}</a></li>
                              )
                            })
                          }
                          {/* <li><a href="#" title="웹진">웹진</a></li>
                          <li><a href="#" title="보고서">보고서</a></li>
                          <li><a href="#" title="나의후원">나의후원</a></li> */}
                        </ul>
                      </li>
                      <li>
                        <ul>
                          {
                            subMenu4_2.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="#" title={item}>{item}</a></li>
                              )
                            })
                          }
                        </ul>
                      </li>
                      <li>
                        <ul>
                          {
                            subMenu4_3.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="#" title={item}>{item}</a></li>
                              )
                            })
                          }
                        </ul>
                      </li>
                      <li>
                        <ul>
                          {
                            subMenu4_4.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="#" title={item}>{item}</a></li>
                              )
                            })
                          }
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

HeaderComponent.defaultProps = {
  homePath : './index.html',
  imgSrc : './images/logo.png',
  imgAlt : 'Green복지재단 Logo',
  subMenu1_1 : ['설립취지','연혁','찾아오시는길'],
  subMenu1_2 : ['서브메뉴1','서브메뉴2','서브메뉴3'],
  subMenu1_3 : ['서브메뉴1','서브메뉴2','서브메뉴3'],
  subMenu1_4 : ['서브메뉴1','서브메뉴2','서브메뉴3'],

  subMenu2_1 : ['국내후원','국외후원','맞춤후원'],
  subMenu2_2 : ['서브메뉴1','서브메뉴2','서브메뉴3'],
  subMenu2_3 : ['서브메뉴1','서브메뉴2','서브메뉴3'],
  subMenu2_4 : ['서브메뉴1','서브메뉴2','서브메뉴3'],

  subMenu3_1 : ['서식자료실','사진자료실','후원양식'],
  subMenu3_2 : ['서브메뉴1','서브메뉴2','서브메뉴3'],
  subMenu3_3 : ['서브메뉴1','서브메뉴2','서브메뉴3'],
  subMenu3_4 : ['서브메뉴1','서브메뉴2','서브메뉴3'],

  subMenu4_1 : ['웹진','보고서','나의후원'],
  subMenu4_2 : ['서브메뉴1','서브메뉴2','서브메뉴3'],
  subMenu4_3 : ['서브메뉴1','서브메뉴2','서브메뉴3'],
  subMenu4_4 : ['서브메뉴1','서브메뉴2','서브메뉴3']
}


function MainComponent({modalOpen}){
  return (
    <main id="main">
      <Section1Component/>
      <Section2Component modalOpen={modalOpen}/>
    </main>
  )
}
    function Section1Component(){
      return (
        <section id="section1">
          {/* <!--div.slide-container>div.slide-view>ul.slide-wrap>li.slide.slide$*3>img[src=img$.jpg]--> */}
          <div className="slide-container">
            <div className="slide-view">
              <ul className="slide-wrap">
                <li className="slide slide3"><a href="#" title="그린복지재단3"><img src="./images/img3.jpg" alt="" /></a></li>
                <li className="slide slide1"><a href="#" title="그린복지재단1"><img src="./images/img1.jpg" alt="" /></a></li>
                <li className="slide slide2"><a href="#" title="그린복지재단2"><img src="./images/img2.jpg" alt="" /></a></li>
                <li className="slide slide3"><a href="#" title="그린복지재단3"><img src="./images/img3.jpg" alt="" /></a></li>
                <li className="slide slide1"><a href="#" title="그린복지재단1"><img src="./images/img1.jpg" alt="" /></a></li>
              </ul>
            </div>
          </div>
        </section>
      )
    }
    function Section2Component({notice, gallery, modalOpen}){

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
                        <li key={idx}><a href="#" onClick={onClickModal} className={idx===0 && "modal-btn"} title={item.타이틀}>{item.타이틀}</a><span>2020.11.23</span></li>
                      )
                    })
                  }

                  {/*
                  <li><a href="#" title="Green 복지재단 공지사항1" className="modal-btn">Green 복지재단 공지사항1</a><span>2020.11.23</span></li>
                  <li><a href="#" title="Green 복지재단 공지사항2">Green 복지재단 공지사항2</a><span>2020.11.23</span></li>
                  <li><a href="#" title="Green 복지재단 공지사항3">Green 복지재단 공지사항3</a><span>2020.11.23</span></li>
                  <li><a href="#" title="Green 복지재단 공지사항4">Green 복지재단 공지사항4</a><span>2020.11.23</span></li> */}
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
                    <a href="#" title={item.타이틀}><img src={item.imgSrc} alt="icon1" /></a>
                  )
                })
              }
              {/* <a href="#" title="icon1"><img src="./images/icon1.png" alt="icon1" /></a>
              <a href="#" title="icon2"><img src="./images/icon2.png" alt="icon2" /></a>
              <a href="#" title="icon3"><img src="./images/icon3.png" alt="icon3" /></a> */}
            </div>
          </div>
          <div className="right">
            <div className="banner">
              <div className='title'><h2 style={{fontSize:'20px',fontWeight:'800'}}>EVENT BANNER</h2></div>
              <div className="img-box">
                <a href="#" title="banner"><img src="./images/banner.jpg" alt="banner" /></a>
              </div>
            </div>
          </div>
        </section>
      )
    }

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


function FooterComponent(){
  return (
    <footer id="footer">
      <div className="left">
        <h1><a href="#" title="Logo"><img src="./images/footerLogo.png" alt="Logo" /></a></h1>
      </div>
      <div className="center">
        <div className="row1">
            <span><a href="#" title="하단메뉴1">하단메뉴1</a></span>
            <span><i>|</i></span>
            <span><a href="#" title="하단메뉴2">하단메뉴2</a></span>
            <span><i>|</i></span>
            <span><a href="#" title="하단메뉴3">하단메뉴3</a></span>
        </div>
        <div className="row2">
          <p>COPYRIGHT&copy; by WEBDESIGN. ALL RIGHTS RESERVED</p>
        </div>
      </div>
      <div className="right">
        <select name="family" id="family">
          <option value="" selected>패밀리 사이트</option>
          <option value="패밀리사이트1">패밀리사이트1</option>
          <option value="패밀리사이트2">패밀리사이트2</option>
          <option value="패밀리사이트3">패밀리사이트3</option>
        </select>
      </div>
    </footer>
  )
}

function ModalComponent({modalClose}){

  const onClickModalCloseBtn=(e)=>{
    e.preventDefault();
    modalClose();
  }

  return (
    <div className="modal">
      <div className="modal_wrap">
        <div className="container">
          <div className="gap">

            <div className="title">
              <h1>복지재단 공지사항</h1>
            </div>

            <div className="content">
              {/* <!-- 내용 --> */}
              <ol>
                <li>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세.</li>
                <li>무궁화 삼천리 화려강 대한 사람 대한으로 길이 보전하세.</li>
                <li>남산 위에 저 소나무, 철갑을 두른 듯 바람서리 불변함은 우리 기상일세.</li>
              </ol>
            </div>

            <div className="button-box">
              <button onClick={onClickModalCloseBtn} className="modal-close-btn">닫기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


{/* const root = ReactDOM.createRoot( document.getElementById('root'));
root.render(
  <WrapComponent/>
); */}

ReactDOM.render(
  <WrapComponent/>,
  document.getElementById('root')
);