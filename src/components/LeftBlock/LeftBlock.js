import React from 'react';
import ContentBlock from '../ContentBlock';
import LeftBlockItem from './LeftBlockItem/LeftBlockItem';

const LeftBlock = (props) => {
  const { data, selectItem } = props;
  return(
    <ContentBlock>
    {
      data.length && (
        data.map(item => (
          <LeftBlockItem key={item.id} item={item}  selectItem={selectItem}/>
        ))
      )
    }
    </ContentBlock>
  )
}

export default LeftBlock;