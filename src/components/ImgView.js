import React from 'react';
import { Slide } from 'react-slideshow-image';
import './ImgView.css';

const slideImages = [
    'images/image01.jpg',
    'images/image02.jpg',
    'images/image03.jpg'
  ];

const ImgView = () => {
    return ( 
        <div id="imgView">
            <Slide className="imgContainer" autoplay={true} arrows={false}>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[0]})`}}></div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[1]})`}}></div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[2]})`}}></div>
                </div>
            </Slide>
        </div>
     );
}
 
export default ImgView;