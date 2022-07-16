import { useRef, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API = 'http://192.168.225.53:3003';

const EntireLayout = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
`;

const FrameLayout = styled.div`
  display: flex;
  width: 375px;
  background-color: #f8f9f9;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  display: flex;
  padding: 7px 0px 0px 0px;
  font-weight: 700;
`;

const AllContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

const EachContentContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px 10px 0px;
`;

const InputName = styled.p`
  display: flex;
  align-items: center;
  font-size: 13px;
  width: 75px;
  height: 30px;
  margin: 0px;
`;

const InputContent = styled.input`
  display: flex;
  padding: 0px 10px 0px 10px;
  border-radius: 8px;
  border-style: none;
  border: 1px solid #5a5c63;
  height: 30px;
  width: 190px;
  :focus {
    outline: auto;
  }
`;

const SubmitButton = styled.button`
  display: flex;
  border-style: none;
  border-radius: 8px;
  width: 100px;
  height: 30px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  background-color: #f5b7b1;
  :hover {
    background-color: #f1948a;
  }
  cursor: pointer;
`;

const JoinPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickName, setNickName] = useState('');

  const focusEmail = useRef();
  const focusPassword = useRef();
  const focusNickName = useRef();

  const onClickSubmit = () => {
    if (email === '') focusEmail.current.focus();
    else if (password === '') focusPassword.current.focus();
    else if (nickName === '') focusNickName.current.focus();
    else {
      axios
        .post(`${API}/user`, {
          email: email,
          nickname: nickName,
          password: password,
        })
        .then((res) => {
          alert('회원가입 성공');
          navigate('/');
        })
        .catch((e) => {
          alert('회원가입 실패');
          navigate('/list');
          console.log(e);
        });
    }
  };

  return (
    <EntireLayout>
      <FrameLayout>
        <Title>회원가입</Title>

        <AllContentContainer>
          <EachContentContainer>
            <InputName>이메일</InputName>
            <InputContent
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={focusEmail}
            />
          </EachContentContainer>

          <EachContentContainer>
            <InputName>비밀번호</InputName>
            <InputContent
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ref={focusPassword}
            />
          </EachContentContainer>

          <EachContentContainer>
            <InputName>닉네임</InputName>
            <InputContent
              value={nickName}
              onChange={(e) => setNickName(e.target.value)}
              ref={focusNickName}
              maxLength="10"
              placeholder="10자 이내의 닉네임"
            />
          </EachContentContainer>
        </AllContentContainer>

        <SubmitButton onClick={onClickSubmit}>확인</SubmitButton>
      </FrameLayout>
    </EntireLayout>
  );
};

export default JoinPage;
