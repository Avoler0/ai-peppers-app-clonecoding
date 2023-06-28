import './main.css'

function Main(){


  return(
    <div>
      <div className="top">
        <div className='top-logo'>
          <div className="logo-text">
            <img src={process.env.PUBLIC_URL + '/images/logo-text.png'} alt="."></img>
          </div>
          <div className='bell'>
            <img src={process.env.PUBLIC_URL + '/images/top-bell.png'} alt='.'></img>
          </div>
        </div>
        
        <div className='logo-bg' />
        
      </div>
      <div id='section1'>
        <div className='title'>
          <img src={process.env.PUBLIC_URL + '/images/sub_title_icon.png'} alt='.'></img>
          <span className='intro'>주목할 만한 AI페퍼스 선수</span>
          <span className='more'>더 알아보기 {`>`}</span>
        </div>
        <div className='player-list'>
          <div className='card'>
            <div className='card-bg' />
            <div className='info'>
              <span>문슬기</span>
              <span>Libero</span>
            </div>
            <img src={process.env.PUBLIC_URL + '/images/player/player7_photo.png'} alt='.'></img>
          </div>
          <div className='card'>
            <div className='card-bg' />
            <div className='info'>
              <span>하혜진</span>
              <span>Middle Blocker</span>
            </div>
            <img src={process.env.PUBLIC_URL + '/images/player/player17_photo.png'} alt='.'></img>
          </div>
          <div className='card'>
            <div className='card-bg' />
            <div className='info'>
              <span>구솔</span>
              <span>Setter</span>
            </div>
            <img src={process.env.PUBLIC_URL + '/images/player/player14_photo.png'} alt='.'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;