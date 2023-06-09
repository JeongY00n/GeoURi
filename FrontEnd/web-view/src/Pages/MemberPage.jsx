import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HomeHeader } from "../Components";
import { Image, Text } from "../Elements";
import './MemberPage.css';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
// import DaumPostcode from 'react-daum-postcode';

function MemberPage () {
  // 현재 멤버의 정보 
  const member = useSelector((state) => state?.user?.member);
  
  const [kidsMode, setKidsMode] = useState();
  const [youtubeMode, setYoutubeMode] = useState();
  const [youtubeLink, setYoutubeLink] = useState();
  const [calenderMode, setCalendarMode] = useState();
  const [calenderLink, setCalendarLink] = useState();
  const [newsMode, setNewsMode] = useState();
  
  //click하면 value change
  const changeKidsMode = () => {
    setKidsMode(!kidsMode);
  }
  const changeYoutubeMode = () => {
    setYoutubeMode(!youtubeMode);
  }
  const changeNewsMode = () => {
    setNewsMode(!newsMode);
  }
  const changeCalendarMode = () => {
    setCalendarMode(!calenderMode);
  }

  useEffect(() => {
    if(member){
      setKidsMode(member?.kidsMode);
      setYoutubeLink(member?.playlist);
      setYoutubeMode(member?.widget?.playlist);
      setNewsMode(member?.widget?.news);
      setCalendarLink(member?.calendarUrl);
      setCalendarMode(member?.widget?.calender);
      console.log(member);
    }
  }, [member]);
  
  const navigate = useNavigate();
  const naviagteToPhotoBook = (e) => {
    e.preventDefault();
    navigate('/snapshot');
  }
  // 다음 지도 api
  // const [openLocationModal, setOpenLocationModal] = useState(false);
  // const [address, setAddress] = useState("");
  // const postCodeStyle = {
  //   display: "block",
  //   position: "absolute",
  //   top: "20%",
  //   width: "400px",
  //   height: "400px",
  //   padding: "7px",
  //   zIndex: 100, 
  // }
  // const onCompletePost = (data) => {
  //   setAddress(data.address);
  //   console.log(data.address)
  // }

  //아이 모드
  if(kidsMode != null && kidsMode === true) {
    return (
      <div className="container">
        <HomeHeader type="BasicHeader" />
        <div className="member-header">
          <Image type="member" src={member?.imgUrl}/>
          <div className="is_flex">
            <p style={{alignItems:'center', display:'flex'}}>{member?.nickname}</p>
            {/* <div >
              <CreateOutlinedIcon/>
            </div> */}
          </div>
        </div>
        <div className="widget-box">
          <div className="toggle-box">
          {member?.kidsMode === true ? 
              <label className="toggle-label">
                <span className="widget-title">아이모드</span>
                <input type="checkbox" role="switch" defaultChecked onClick={changeKidsMode}/>
              </label>
                : 
                <label className="toggle-label">
                <span className="widget-title">아이모드</span>
                <input type="checkbox" role="switch" onClick={changeKidsMode}/>
              </label>
            }
          </div>
          <div 
            className="photo-book-link"
            onClick={naviagteToPhotoBook}>
            사진첩
          </div>
        </div>
        <div className="delete-member">멤버 삭제하기</div>
      </div>
    )
  }

    //어른 모드
  if( kidsMode === false ) {
    return (
      <div className="container">
        <HomeHeader type="BasicHeader" />
        <div className="member-header">
          <Image type="member" src={member?.imgUrl}/>
          <div className="is_flex">
            <p style={{alignItems:'center', display:'flex'}}>{member?.nickname}</p>
            {/* <div >
              <CreateOutlinedIcon/>
            </div> */}
          </div>
        </div>
        {/* 위젯 */}
        <div className="widget-box">
          {/* 키즈 모드 */}
          <div className="toggle-box">
            {kidsMode ? 
              <label className="toggle-label link-label">
                <span className="widget-title">아이모드</span>
                <input 
                  type="checkbox" 
                  role="switch"
                  defaultChecked
                  onChange={changeKidsMode}/>
              </label>
                : 
                <label className="toggle-label">
                <span className="widget-title">아이모드</span>
                <input 
                  type="checkbox" 
                  role="switch"
                  onChange={changeKidsMode}/>
              </label>
            }
          </div>
          {/* 위치정보 */}
          <div className="link-label">
            <div className="toggle-box is_flex">
              <div className="widget-title">위치</div>
              <input 
                className="widget-input"
                type="text" 
                placeholder="시군동을 입력해주세요" 
                defaultValue={`${member?.region?.sidoName} ${member?.region?.gugunName} ${member?.region?.dongName}`} />
              {/* <div onClick={setOpenLocationModal}>위치</div>
              {openLocationModal&& 
              <DaumPostcode
              style={postCodeStyle}
              autoClose
              onComplete={onCompletePost}
                />
              } */}
            </div>
          </div>
          {/* 유튜브 */}
          <div className="toggle-box">
          {member?.widget?.youtube === true || youtubeMode === true? 
              <>
                <label className="toggle-label link-label">
                  <div className="widget-title">Youtube 재생목록 링크</div>
                  <input type="checkbox" role="switch"
                    defaultChecked
                    onChange={changeYoutubeMode}/>
                </label>
                <input 
                  id="youtube-link-input"
                  className="widget-input"
                  type="text" 
                  defaultValue={youtubeLink}
                  placeholder="youtube 재생목록 링크를 적어주세요."/>
              </>
                : 
                <label className="toggle-label">
                <span className="widget-title">Youtube 재생목록 링크</span>
                <input 
                  type="checkbox" 
                  role="switch"
                  onChange={changeYoutubeMode}/>
              </label>
            }
          </div>
          {/* 뉴스 */}
          <div className="toggle-box">
            {member?.widget?.news === true || newsMode === true? 
                <label className="toggle-label link-label">
                  <span className="widget-title">뉴스/기사</span>
                  <input 
                    type="checkbox" 
                    role="switch"
                    defaultChecked
                    onChange={changeNewsMode}/>
                </label>
                : 
                <label className="toggle-label link-label">
                  <span className="widget-title">뉴스/기사</span>
                  <input 
                    type="checkbox" 
                    role="switch"
                    onChange={changeNewsMode}/>
                </label>
              }
          </div>
          {/* 달력 */}
          <div className="toggle-box">
            { calenderMode ? 
              <>
              <label className="toggle-label link-label">
                <span className="widget-title">캘린더 링크</span>
                <input 
                  type="checkbox" 
                  role="switch"
                  defaultChecked
                  onChange={changeCalendarMode}/>
              </label>
              <input 
                id="calendar-link-input"
                type="text" 
                className="widget-input"
                defaultValue={calenderLink}
                placeholder="달력 공유 링크를 적어주세요."/>
              </>
              : 
              <label className="toggle-label link-label">
                <span className="widget-title">캘린더 링크</span>
                <input 
                  type="checkbox" 
                  role="switch"
                  onChange={changeCalendarMode}/>
              </label>
            }
          </div>
        </div>
        <div className="delete-member">멤버 삭제하기</div>
        </div>
    )
  }
}
export default MemberPage;