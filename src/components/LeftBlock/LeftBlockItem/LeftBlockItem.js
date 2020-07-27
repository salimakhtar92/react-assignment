import React from 'react';
import Title from '../../Title/Title';
import './LeftBlockItem.css';

const LeftBlockItem = (props) => {
  const { item, selectItem } = props;
  const { id, title, subTitles } = item;
  const onChangeHandler = (subTitle) => {
    selectItem({id, title, subTitle:{...subTitle, checked: !subTitle.checked}});
  }
  return(
    <div className="item">
      <Title title={title} />
      {
        subTitles && subTitles.length && 
        subTitles.map(subTitle =>(
          <div className="sub-item">
            <label>
              <input 
                type="checkbox"  
                id={id}
                checked={subTitle.checked}
                name={subTitle.name}
                onChange={() => onChangeHandler(subTitle)}
              />
              {subTitle.name}
            </label>
          </div>
        ))
      }
    </div>
  )
}

export default LeftBlockItem;