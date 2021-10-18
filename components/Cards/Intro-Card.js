
import React from 'react';

export function IntroCard(props){
    return(
      
        <div className="col-md-4 --col-sec">
            <div className="icon--sec">
               {props.icon}
            </div>
            <div className="info--sec">
                <h5 className="info--sec--h5">{props.number}+</h5>
                <span className="info--sec--span">{props.text}</span>
            </div>
        </div>
    );
 }