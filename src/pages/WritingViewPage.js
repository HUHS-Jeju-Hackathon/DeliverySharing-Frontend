import { useEffect } from "react";

const WritingViewPage = () => {

  useEffect(() => {
    window.location.href = "/ListPage.html"
  }, [])

  return <>개별 글 확인 페이지</>;
};

export default WritingViewPage;
