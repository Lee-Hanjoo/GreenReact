import React from 'react';
import styleModule from '../css/style.module.scss'
import '../css/style.scss';

const Css = () => {
  let cssFunction = {
    objColor: {color:'orange'}
  }
  return (
    <div className='info'>
      {/* <div className="test">Css</div>
      <div className={styleModule.test}>styleModule Css</div>
      <div style={cssFunction.objColor}>cssFunction</div> */}

      <dl>
        <dt>SCSS</dt>
        <dd>npm install sass</dd>
        <dd>import '../css/style.scss'</dd>
        <dd>별도의 컴파일이 필요 없음.</dd>
        <dt>module css</dt>
      </dl>
      <dl>
        <dd>파일명 규칙 : 파일명.module.css</dd>
        <dd>import 별칭 from '../css/파일명.module.scss'</dd>
        <dd>className = &#123;별칭.클래스명&#125;</dd>
        <dd>클래스명 중복을 방지하기 위해 사용됨</dd>
      </dl>
    </div>
  )
}

export default Css