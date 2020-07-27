import { ADD_DATA, REMOVE_DATA} from '../actions';
const initialState = {
  selectedData: [],
  data: [{
  id: 111,
  title: 'Portugal',
  subTitles: [{
    name: 'Aasiya Jayavant',
    parentId: 111,
    id:1110,
    checked: false
  }, {
    name: 'Luvleen Lawrence',
    parentId: 111,
    id:1111,
    checked: false
  }, {
    name: 'Rey Mibourne',
    parentId: 111,
    id:1112,
    checked: false
  }, {
    name: 'Cyla Brister',
    parentId: 111,
    id:1113,
    checked: false
  }]
}, {
  id: 222,
  title: 'Nicaragua',
  subTitles: [{
    name: 'Deveedaas Nandi',
    parentId: 222,
    id:2220,
    checked: false
  }, {
    name: 'Obesy Chidy',
    parentId: 222,
    id:2221,
    checked: false
  }, {
    name: 'Xenie Dolezelova',
    parentId: 222,
    id:2222,
    checked: false
  },{
    name: 'Ezequiel Dengra',
    parentId: 222,
    id:2223,
    checked: false
  }]
},{
  id: 333,
  title: 'Marshal Island',
  subTitles: [{
    name: 'Aaron Almaraz',
    parentId: 333,
    id: 3330,
    checked: false
  }, {
    name: 'Jeleena Denisova',
    parentId: 333,
    id: 3331,
    checked: false
  }]
}]};

const selectData = (state = initialState, action) => {
  const { selectedData } = state;
  const rootData = state.data;
  const { payload, type } = action;
  const {id, title, subTitle} = payload || {};
  const presentItemIndex = selectedData.findIndex(item => item.id === id);
  const newSelectedData = [...selectedData];
  const newRootData = [...rootData];
  let data;
  switch(type) {
    case ADD_DATA:
      
      // rootData.map(item => item.subTitles.map(subItem => 
      //   subItem.id === subTitle.id ? {...subTitle, checked: !subTitle.checked} : subTitle ));
        newRootData.forEach( item => {
          item.subTitles.forEach(subItem => {
            if(subItem.id === subTitle.id) {
              subItem.checked = !subItem.checked;
            }
          })
        })
      if(presentItemIndex !== -1) {
        const { subTitles } = newSelectedData[presentItemIndex];
        const presentIndex = subTitles.findIndex(subItem => subItem.id === subTitle.id);
        if(presentIndex === -1) {
          newSelectedData[presentItemIndex].subTitles.push(subTitle);
          data=[...newSelectedData]
        } else {
          if(subTitles.length === 1) {
            newSelectedData.splice(presentItemIndex, 1);
            data = [...newSelectedData];
          } else {
            const newSubTitles = subTitles.filter(subItem => subItem.id !== subTitle.id);
            newSelectedData[presentItemIndex].subTitles = newSubTitles
            data = [...newSelectedData];
          }
        }
      } else {
        
        data = selectedData.concat({id, title, subTitles:[subTitle]})
      }
      return { data: newRootData, selectedData: data}
    case REMOVE_DATA:
      const { subTitles } = newSelectedData[presentItemIndex];
      newRootData.forEach( item => {
        item.subTitles.forEach(subItem => {
          if(subItem.id === subTitle.id) {
            subItem.checked = !subItem.checked;
          }
        })
      })
      if(subTitles.length === 1) {
        newSelectedData.splice(presentItemIndex, 1);
        data = [...newSelectedData];
      } else {
        const newSubTitles = subTitles.filter(subItem => subItem.id !== subTitle.id);
        newSelectedData[presentItemIndex].subTitles = newSubTitles
        data = [...newSelectedData];
      }
      return {data: newRootData, selectedData: data}
    default: 
      return state
  }
}

export default selectData;