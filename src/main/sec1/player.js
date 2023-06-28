

function PlayerList(){
  return(
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
  )
}

export default PlayerList;