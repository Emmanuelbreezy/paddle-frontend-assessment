import React from 'react';

export default function Layout(props){
    return(
       <div className="layout--wrapper">
          {props.children}
       </div>
    );
}