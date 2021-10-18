import React from 'react';

export default function Button(props){
    const style  = props.type === 'default' ? 'blockbtn--custom': 
                   props.type === 'outline' ? 'outlinebtn--custom' : '';

    const padd  = props.pad === '' ? '0px' : props.pad;

    return(
      <a className={"btn" +' ' + style} style={{paddingTop:`${padd}`,paddingBottom:`${padd}`}}>
        {props.text}
      </a>
    );
}
