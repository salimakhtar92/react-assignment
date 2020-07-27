import RightBlock from './RightBlock';
import { connect } from 'react-redux';
import { removeData } from '../../actions';

const mapStateToProps = (state) => {
  return {
    selectedData: state.rootdata.selectedData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeData: (data) => dispatch(removeData(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightBlock);