// Router.js
// rafce
import { useLocation, useNavigate } from 'react-router-dom'
import React from 'react'

const Router = () => {
    // 사용자 훅 같은건 무조건 한번 받은다음 사용할 수 있음.
    const params = useLocation()
    console.log(params.state.page);
    
    const nav = useNavigate();
    const move = () => {
        nav('/')
    }

  return (
    <div className='info' onClick={move}>
        <dl>
            <dt>Router</dt>
            <dd>모듈설치 (npm install react-router-dom)</dd>
            <dd>모듈 가져오기 (import &#123;Link....&#125; from 'react-router-dom' )</dd>
            <dd>
                작동원리 <br/>
                Link 컴포넌트로 브라우저 주소창 변경, <br/>
                브라우저 주소값과 path값을 비교하여 일치하는 컴포넌트를 화면에 노출.
<textarea cols="100" rows="15">
{`<Router>
    <header>
    <Link to="/">HOME</Link>
    <Link to="/css">CSS</Link>
    <Link to="/router">Router</Link>
    <Link to="/state">State&Props</Link>
    <Link to="/git">GitHub Deploy</Link>
    </header>
    <Css />
    <Routes>
        <Route path="/" element={<Main/>}    />
        <Route path="/css" element={<Css/>}    />
        <Route path="/*" element={<Not />}    />
        <Route path="/router" element={<RouterJs />}    />
    </Routes>
</Router>`}
</textarea>
            </dd>
            <dd>
                Link컴포넌트에서 state로 값 전달<br/>
                ㄴ useLocation()으로 값 받기.
            </dd>
            <dd>
                location.href = useNavigate('/css') <br/>
                스크립트 영역에서 원하는 컴포넌트로 이동
            </dd>
        </dl>
    </div>
  )
}

export default Router