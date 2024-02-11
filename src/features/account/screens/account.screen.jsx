import React from "react";
import LottieView from 'lottie-react-native'
import styled from 'styled-components/native';

import { AccountBackground, AccountContainer, AccountCover, AuthButton, Title } from "../components/account.styles";
import { Spacer } from '../../../components/spacer/spacer.component'

export const StyledLottieView = styled(LottieView).attrs({
  key: "animation",
  autoPlay: true,
  loop: true,
  resizeMode: "cover",
  source: require("../../../../assets/watermelon.json")
})`
   width: 100%;
   height: 40%;
   position: absolute;
   top: 2px;
`;

export const AccountScreen = ({ navigation }) => {
  return <AccountBackground >
    <AccountCover />
    <StyledLottieView />
    <Title>Meals To Go</Title>
    <AccountContainer >
      <AuthButton
        icon="lock-open-outline"
        mode="contained"
        onPress={() => navigation.navigate('Login')}
      >
        Login
      </AuthButton>
      <Spacer size="large">
        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => navigation.navigate('Register')}
        >
          Register
        </AuthButton>
      </Spacer>
    </AccountContainer>
  </AccountBackground>;
};
