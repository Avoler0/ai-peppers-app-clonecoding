import './section1.css'
import Club from "./club";
import PlayerList from "./player";


function Section1(){
  return(
    <div id='section1'>
      <div className='title'>
        <img src={process.env.PUBLIC_URL + '/images/sub_title_icon.png'} alt='.'></img>
        <span className='intro'>주목할 만한 AI페퍼스 선수</span>
        <span className='more'>더 알아보기 {`>`}</span>
      </div>
      <PlayerList />
      <Club />
    </div>
  )
}

export default Section1;