import './section2.css'


function Section2(){
  return(
    <div id='section2'>
      <div className='title'>
        <img src={process.env.PUBLIC_URL + '/images/sub_title_icon.png'} alt='.'></img>
        <span className='intro'>MEDIA</span>
      </div>
      <div className='media-wrap'>
        <div  className='card'>
          <div className='thumbnail'>
            <img src={process.env.PUBLIC_URL + '/images/media1.webp'} alt='.'></img>
          </div>
          <div className='media-title'>
            나 신탄진 막도끼야! 🪓 연고지 광주에 정착한 AI페퍼스 사인회 엿보기👀 [원정여지도]
          </div>
        </div>
        <div  className='card'>
          <div className='thumbnail'>
            <img src={process.env.PUBLIC_URL + '/images/media2.webp'} alt='.'></img>
          </div>
          <div className='media-title'>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2;