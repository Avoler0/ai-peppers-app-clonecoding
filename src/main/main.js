import './main.css'
import Section1 from './sec1/sec1';

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
      <Section1 />
    </div>
  )
}

export default Main;