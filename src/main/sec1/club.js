
function ClubTab(){

  return(
    <div className="club-board">
      <div className="card">
        <div className="content">
          <span className="title">
          구단소개
          </span>
          <span className="sub">
            AI페퍼스 구단소개
          </span>
        </div>
        <div className="icon">
          <img src={process.env.PUBLIC_URL + '/images/club1.png'} alt='.'></img>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <span className="title">
          구단굿즈
          </span>
          <span className="sub">
            각종 MD를 한눈에!
          </span>
        </div>
        <div className="icon">
          <img src={process.env.PUBLIC_URL + '/images/club2.png'} alt='.'></img>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <span className="title">
          AI페퍼스 티켓
          </span>
          <span className="sub">
            좌석 및 티켓 예매
          </span>
        </div>
        <div className="icon">
          <img src={process.env.PUBLIC_URL + '/images/club3.png'} alt='.'></img>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <span className="title">
          3D 스타디움
          </span>
          <span className="sub">
            AI페퍼스 경기장 GO!
          </span>
        </div>
        <div className="icon">
          <img src={process.env.PUBLIC_URL + '/images/club4.png'} alt='.'></img>
        </div>
      </div>
    </div>
  )
}

export default ClubTab;