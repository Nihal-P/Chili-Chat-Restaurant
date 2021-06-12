import './EventsSec.css';

const EventsSec = () => {
    return ( 
        <div id="eventsContainer">
            <div className="itemContainer">
                <div className="event01 eventItem">
                    <h3 className="title">Karaoke Night</h3>
                    <img src="images/image04.jpg" alt="" className="eventImg"/>
                    <p className="eventInfo">I'm a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius rhoncus dignissim. Vestibulum in dui vel magna semper yo.</p>
                    <a href="/" className="readMore">Read More</a>
                </div>
                <div className="event02 eventItem">
                    <h3 className="title">Enjoy Our Snacks</h3>
                    <img src="images/image05.jpg" alt="" className="eventImg"/>
                    <p className="eventInfo">I'm a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius rhoncus dignissim. Vestibulum in dui vel magna semper yo.</p>
                    <a href="/" className="readMore">Read More</a>
                </div>
                <div className="event03 eventItem">
                    <h3 className="title">Celebrate With Us</h3>
                    <img src="images/image06.jpg" alt="" className="eventImg"/>
                    <p className="eventInfo">I'm a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius rhoncus dignissim. Vestibulum in dui vel magna semper yo.</p>  
                    <a href="/" className="readMore">Read More</a>
                </div>
                <div className="event04 eventItem">
                    <h3 className="title">Happy Hour</h3>
                    <img src="images/image07.jpg" alt="" className="eventImg"/>
                    <p className="eventInfo">I'm a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius rhoncus dignissim. Vestibulum in dui vel magna semper yo.</p>
                </div>
                <div className="sectionLongLine"></div>
            </div>
        </div>
     );
}
 
export default EventsSec;