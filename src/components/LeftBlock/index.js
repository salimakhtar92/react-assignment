import LeftBlock from './LeftBlock';
import { connect } from 'react-redux';
import { addData } from '../../actions';

const mapStateToProps = (state) => {
  return {
    data: state.rootdata.data
  }
}
const mapDispatchToProps = dispatch => {
  return {
    selectItem: (data) => dispatch(addData(data)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LeftBlock);