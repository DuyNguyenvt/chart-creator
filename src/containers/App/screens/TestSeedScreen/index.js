import React from "react";
import * as actions from "containers/App/actions";
import styled from "styled-components";
import history from "utils/history";

const Wrapper = styled.div`
  border-radius: 5px;
  border: solid 2px;
  min-width: 500px;
  width: 30%;
  margin: 30vh auto 0 auto;
  padding: 20px;
  text-align: center;
`;

const Button = styled.button`
  border-radius: 3px;
  padding: 6px 12px;
  background: red;
  color: white;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

const MyProfileBtn = styled.button`
  border-radius: 3px;
  padding: 6px 12px;
  background: green;
  color: white;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

const AccessTokenWrapper = styled.div`
  padding: 20px 0;
`;

const BtnsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

function TestSeedScreen(props) {
  const { accessToken, dispatch } = props;
  const handleSetAccount = () => {
    dispatch(actions.login());
  };
  // console.log("checkStore", React.useContext(ReactReduxContext).store);
  return (
    <Wrapper className="hs-test-screen--wrapper">
      <BtnsWrapper>
        <Button onClick={() => handleSetAccount()}>Test set account</Button>
        <MyProfileBtn onClick={() => history.push("/author/profile")}>
          Go to My profile
        </MyProfileBtn>
      </BtnsWrapper>
      <AccessTokenWrapper>{`Token: ${accessToken}`}</AccessTokenWrapper>
    </Wrapper>
  );
}

export default TestSeedScreen;
