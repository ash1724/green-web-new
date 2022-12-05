import React from 'react';

function HeaderComponent (props) {
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
                <a href="!#"
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
                                <li key={idx}><a href="!#" title={item}>{item}</a></li>
                              )
                            })
                          }
                        </ul>
                      </li>
                      <li> {/* <!-- 2칸 --> */}
                        <ul>
                          {
                            subMenu1_2.map((item, idx)=>{
                              return(
                                <li key={idx}><a href="!#">{item}</a></li>
                              )
                            })
                          }

                        </ul>
                      </li>
                      <li> {/* <!-- 3칸 --> */}
                        <ul>
                          {
                            subMenu1_3.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="!#">{item}</a></li>
                              )
                            })
                          }
                        </ul>
                      </li>
                      <li> {/* <!-- 4칸 --> */}
                        <ul>
                          {
                            subMenu1_4.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="!#">{item}</a></li>
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
                <a href="!#"
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
                                <li key={idx}><a href="!#"title={item}>{item}</a></li>
                              )
                            })
                          }
                        </ul>
                      </li>
                      <li>
                        <ul>
                          {
                            subMenu2_2.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="!#"title={item}>{item}</a></li>
                              )
                            })
                          }
                        </ul>
                      </li>
                      <li>
                        <ul>
                          {
                            subMenu2_3.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="!#"title={item}>{item}</a></li>
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
                                <li key={idx}><a href="!#"title={item}>{item}</a></li>
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
                <a href="!#"
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
                                <li key={idx}><a href="!#" title={item}>{item}</a></li>
                              )
                            })
                          }
                        </ul>
                      </li>
                      <li>
                        <ul>
                          {
                            subMenu3_2.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="!#" title={item}>{item}</a></li>
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
                                <li key={idx}><a href="!#" title={item}>{item}</a></li>
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
                                <li key={idx}><a href="!#" title={item}>{item}</a></li>
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
                <a href="!#"
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
                                <li key={idx}><a href="!#" title={item}>{item}</a></li>
                              )
                            })
                          }
                        </ul>
                      </li>
                      <li>
                        <ul>
                          {
                            subMenu4_2.map((item,idx)=>{
                              return(
                                <li key={idx}><a href="!#" title={item}>{item}</a></li>
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
                                <li key={idx}><a href="!#" title={item}>{item}</a></li>
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
                                <li key={idx}><a href="!#" title={item}>{item}</a></li>
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
};

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

export default HeaderComponent;