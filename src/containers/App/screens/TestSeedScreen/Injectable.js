import { connect } from "react-redux";
import { compose } from "redux";

import TestSeedScreen from ".";

const mapStateToProps = (state) => {
  const { global: globalDomain } = state;
  return {
    accessToken: globalDomain.accessToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect
  // ...
)(TestSeedScreen);
