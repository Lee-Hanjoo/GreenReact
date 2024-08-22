import React from 'react'

const Deploy = () => {
  return (
    <div className='info'>
        <dl>
            <dt>Deploy</dt>
            <dd>npm i gh-pages</dd>
            <dd>
                package.json 수정<br/>
                ㄴ "homepage":"https://id.github.io/repository"<br/>
                ㄴ "scripts"에 추가 ("deploy": "gh-pages -d build")
            </dd>
            <dd>
                BrowserRouter - Router마크업에 basename="/repository" 추가<br/>
                HashRouter - basename 필요없음.
            </dd>
            <dd>
                -1. 배포버전 생성 - npm run build<br/>
                -2. 깃허브 배포 - npm run deploy
            </dd>
        </dl>
    </div>
  )
}

export default Deploy