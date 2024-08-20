import React from 'react';

const Main = () => {
  return (
    <div className="info">
        <dl>
          <dt>React 프로젝트 생성 및 실행</dt>
          <dd>비주얼 코드(react폴더 열기)</dd>
          <dd>터미널(Ctrl + j)에 이용</dd>
          <dd>React환경 모듈 설치 (npm i -g create-react-app)</dd>
          <dd>
            프로젝트생성 (npx create-react-app tutorial)<br />
            ㄴ폴더이동(cd tutorial), <br />
            ㄴ프로젝트실행(npm start) <br />
            ㄴ프로젝트중지(Ctrl + c)
          </dd>
        </dl>
        <dl>
          <dt> 문법 </dt>
          <dd> JSX(Javascript XML) - 스크립트 확장 문법 </dd>
          <dd> Fragments(&#60;&#62; &#60;/&#62;) - 자식요소들을 그룹할 수 있음</dd>
          <dd>
              내보내기 (export default 컨포넌트명) <br />
              가져오기(js,img) (import 별칭 from './파일명') <br />
              가져오기(css) (import './파일명')
          </dd>
        </dl>
      
    </div>
  )
}

export default Main;
