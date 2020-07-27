import React from 'react';
import './ContentBlock.css';

const ContentBlock = (props) => {

  return(
    <div className="content-block">
      {props.children}
    </div>
  )
}

export default ContentBlock;