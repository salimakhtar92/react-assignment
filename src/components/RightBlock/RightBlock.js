import React from 'react';
import ContentBlock from '../ContentBlock';
import NoValueSelected from '../NoValueSelected/NoValueSelected';
import RightBlockItem from './RightBlockItem/RightBlockItem';

const RightBlock = (props) => {
  
  const { selectedData, removeData } = props
  return(
    <ContentBlock>
      {
        selectedData.length ? 
        selectedData.map(item =>(
          <RightBlockItem {...item} removeData={removeData} />
        ))
        :
        <NoValueSelected />
      }
    </ContentBlock>
  )
}

export default RightBlock;