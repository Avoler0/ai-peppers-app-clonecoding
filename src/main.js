import './main.css'

function Main(){


  return(
    <div>
      <div className="top">
        <div className='top-logo'>
          <div className="logo-text">
            <img src={process.env.PUBLIC_URL + '/images/logo-image.png'} alt="."></img>
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
      </div>
    </div>
  )
}

export default Main;