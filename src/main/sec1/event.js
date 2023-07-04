
function EventTab(){
  const eventList = ['event1','event2']
  return(
    <div className="event">
      <div className="card">
        <img src={process.env.PUBLIC_URL + '/images/event1.png'} alt="."/>
      </div>
      <div className="paging">
          {eventList.map((event) => <span className="dot" />)}
      </div>
    </div>
  )
}

export default EventTab;