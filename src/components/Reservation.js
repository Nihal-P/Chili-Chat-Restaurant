import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import './Reservation.css';
import { Dropdown } from 'semantic-ui-react';
import './dropDown.css'
// import Dropdown from './dropDown';
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);


export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    
    this.state = {
      selectedDay: undefined,
      
    };
  }

  handleDayChange(day) {
    this.setState({ selectedDay: day });
  }
  

  render() {
    // const { selectedDay } = this.state;

    const friendOptions = [
      {
        key: 'Jenny Hess',
        text: 'Jenny Hess',
        value: 'Jenny Hess',
        
      },
      {
        key: 'Elliot Fu',
        text: 'Elliot Fu',
        value: 'Elliot Fu',
        
      },
      {
        key: 'Stevie Feliciano',
        text: 'Stevie Feliciano',
        value: 'Stevie Feliciano',
        
      },
      {
        key: 'Christian',
        text: 'Christian',
        value: 'Christian',
        
      },
      {
        key: 'Matt',
        text: 'Matt',
        value: 'Matt',
        
      },
      {
        key: 'Justen Kitsune',
        text: 'Justen Kitsune',
        value: 'Justen Kitsune',
        
      },
    ]
    
    return (
      <div id="reservations">
        <div className="restitleContainer">
        <h3 className="resTitleSec">
          Reservation
        </h3>
        </div>

        
        
        <div className="reseSec">
          {/* {selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>}
          {!selectedDay && <p></p>} */}
          <DayPickerInput onDayChange={this.handleDayChange} />
          <Dropdown placeholder='Time'
            fluid
            selection
            options={friendOptions}
          />
          <Dropdown placeholder='Party Size'
            fluid
            selection
            options={friendOptions}
          />
          <a className="bookNow"href="/">Book Now</a>
        </div>
        

      </div>
    );
  }
}

