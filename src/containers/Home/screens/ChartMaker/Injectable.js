import { compose } from "redux";
import { connect } from "react-redux";
import ChartMaker from ".";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(ChartMaker);
