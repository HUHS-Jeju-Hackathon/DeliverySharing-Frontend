import styled from 'styled-components';
import {
  BiPencil,
  BiCommentDetail,
  BiLogInCircle,
  BiLogOutCircle,
} from 'react-icons/bi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EntireLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FrameLayout = styled.div`
  display: flex;
  justify-content: center;
  background-color: #e5e7e9;
  height: 50px;
  width: 349px;
  padding: 0px 13px 0px 13px;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.p`
  font-weight: 700;
  color: #383e3e;
`;

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PencilIcon = styled(BiPencil)`
  color: #626567;
  width: 23px;
  height: 23px;
  cursor: pointer;
  margin: 0px 3px 0px 3px;
  transition: 0.2s;
  :hover {
    color: #383e3e;
  }
`;

const ListIcon = styled(BiCommentDetail)`
  color: #626567;
  width: 23px;
  height: 23px;
  cursor: pointer;
  margin: 0px 3px 0px 3px;
  transition: 0.2s;
  :hover {
    color: #383e3e;
  }
`;

const LoginIcon = styled(BiLogInCircle)`
  color: #626567;
  width: 23px;
  height: 23px;
  cursor: pointer;
  margin: 0px 3px 0px 3px;
  transition: 0.2s;
  :hover {
    color: #383e3e;
  }
`;

const LogoutIcon = styled(BiLogOutCircle)`
  color: #626567;
  width: 23px;
  height: 23px;
  cursor: pointer;
  margin: 0px 3px 0px 3px;
  transition: 0.2s;
  :hover {
    color: #383e3e;
  }
`;

const Header = () => {
  const navigate = useNavigate();

  const isLogin = window.sessionStorage.getItem('userId');
  console.log(isLogin);

  const OnClickLogout = () => {
    window.sessionStorage.removeItem('userId');
    alert('로그아웃 되었습니다.');
    navigate('/');
  };

  const OnClickGoWritingPage = () => {
    if (isLogin) {
      navigate('/writing');
    } else {
      alert('로그인이 필요한 기능입니다.');
      navigate('/');
    }
  };

  return (
    <EntireLayout>
      <FrameLayout>
        <Logo>Nbbang</Logo>
        <NavigationContainer>
          <PencilIcon onClick={OnClickGoWritingPage} />
          <ListIcon onClick={() => navigate('/list')} />
          {isLogin ? (
            <LogoutIcon onClick={OnClickLogout} />
          ) : (
            <LoginIcon onClick={() => navigate('/')} />
          )}
        </NavigationContainer>
      </FrameLayout>
    </EntireLayout>
  );
};

export default Header;

export const KimGaeunComponent = () => {
  return 'puhaha!';
};
