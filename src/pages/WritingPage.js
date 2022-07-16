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
  margin: 10px 0px 5px 0px;
`;

const InputName = styled.p`
  display: flex;
  align-items: center;
  font-size: 13px;
  width: 100px;
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

const TextAreaContent = styled.textarea`
  display: flex;
  border-radius: 8px;
  border-style: none;
  border: 1px solid #5a5c63;
  padding: 10px;
  width: 190px;
  height: 100px;
`;

const ExampleDescription = styled.p`
  display: flex;
  font-size: 10px;
  color: #797d7f;
  padding: 0px;
  margin: 0px 0px 8px 100px;
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

const Contents = ({
  inputName,
  value,
  onChange,
  refs,
  example,
  textArea,
  number,
}) => {
  return (
    <>
      <EachContentContainer>
        <InputName>{inputName}</InputName>

        {textArea ? (
          <TextAreaContent
            value={value}
            onChange={(e) => onChange(e.target.value)}
            ref={refs}
            type={number ? 'number' : 'string'}
          />
        ) : (
          <InputContent
            value={value}
            onChange={(e) => onChange(e.target.value)}
            ref={refs}
            type={number ? 'number' : 'string'}
          />
        )}
      </EachContentContainer>
      <ExampleDescription>{example}</ExampleDescription>
    </>
  );
};

const WritingPage = () => {
  const navigate = useNavigate();

  const [content, setContent] = useState('');
  const [town, setTown] = useState('');
  const [callMethod, setCallMethod] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantLink, setRestaurantLink] = useState('');
  const [restaurantAdress, setRestaurantAdress] = useState('');

  const focusContent = useRef();
  const focusTown = useRef();
  const focusCallMethod = useRef();
  const focusMinPrice = useRef();
  const focusRestaurantName = useRef();
  const focusRestaurantLink = useRef();
  const focusRestaurantAdress = useRef();

  const onClickSubmit = () => {
    if (town === '') focusTown.current.focus();
    else if (restaurantName === '') focusRestaurantName.current.focus();
    else if (restaurantLink === '') focusRestaurantLink.current.focus();
    else if (minPrice === '') focusMinPrice.current.focus();
    else if (content === '') focusContent.current.focus();
    else if (callMethod === '') focusCallMethod.current.focus();
    else {
      axios
        .post(`${API}/writing`, {
          text: content,
          writerId: window.sessionStorage.getItem('userId'),
          restaurantName,
          restaurantLink,
          restaurantAddress: restaurantAdress,
          minPrice,
          town,
          contactLink: callMethod,
        })
        .then((res) => {
          console.log(res);
          alert('글이 성공적으로 업로드되었습니다.');
          navigate('/list');
        })
        .catch((e) => {
          alert('글 업로드에 실패하였습니다.');
          console.log(e);
        });
    }
  };

  return (
    <EntireLayout>
      <FrameLayout>
        <Title>글쓰기</Title>

        <AllContentContainer>
          <Contents
            inputName="위치"
            value={town}
            onChange={setTown}
            refs={focusTown}
            example="Ex) 서울특별시 성동구 행당동"
          />
          <Contents
            inputName="식당 이름"
            value={restaurantName}
            onChange={setRestaurantName}
            refs={focusRestaurantName}
            example="Ex) 도라에몽 불닭오뎅"
          />
          <Contents
            inputName="식당 주소"
            value={restaurantAdress}
            onChange={setRestaurantAdress}
            refs={focusRestaurantAdress}
            example="서울 성동구 마조로5길 4-16"
          />
          <Contents
            inputName="식당 링크"
            value={restaurantLink}
            onChange={setRestaurantLink}
            refs={focusRestaurantLink}
            example=""
          />
          <Contents
            inputName="배달 최소금액"
            value={minPrice}
            onChange={setMinPrice}
            refs={focusMinPrice}
            example="Ex) 13000"
            number={true}
          />
          <Contents
            inputName="내용"
            value={content}
            onChange={setContent}
            refs={focusContent}
            example="Ex) 왕십리역 6출에서 만나고 싶습니다."
            textArea={true}
          />
          <Contents
            inputName="연락 방법"
            value={callMethod}
            onChange={setCallMethod}
            refs={focusCallMethod}
            example="Ex) https://open.kakao.com/o/gnXWMHV"
          />
        </AllContentContainer>

        <SubmitButton onClick={onClickSubmit}>확인</SubmitButton>
      </FrameLayout>
    </EntireLayout>
  );
};

export default WritingPage;
