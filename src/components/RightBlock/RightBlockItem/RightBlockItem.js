import React from 'react';
import './RightBlockItem.css';
import Title from '../../Title/Title';

const RightBlockItem = ({ id, title, subTitles, removeData }) => {
  const removeHandler = (subTitle) => {
    removeData({id, subTitle});
  }
  return(
    <div className="item-wrapper">
      <Title title={title} />
      {
        subTitles.length && (
          subTitles.map(subItem =>(
            <div className="text-wrapper">
              <p className="text">{subItem.name}</p>
              <button 
                className="remove-button"
                onClick={() => { removeHandler(subItem) }}
              >
                X
              </button>
            </div>
          ))
        )
      }
    </div>
  );
}

export default RightBlockItem;
