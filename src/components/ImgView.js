import React from 'react';
import { Slide } from 'react-slideshow-image';
import './ImgView.css';
import image1 from './images/image01.jpg';
import image2 from './images/image02.jpg';
import image3 from './images/image03.jpg';

const slideImages = [
    image1,
    image2,
    image3
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