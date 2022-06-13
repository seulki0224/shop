##
Uncaught Error: Cannot find module 'webpack/hot/log.js'
npm install
##
Uncaught Error: Cannot find module 'react-bootstrap'at webpackMissingModule
npm install react-bootstrap bootstrap
##
Uncaught Error: Cannot find module 'bootstrap/dist/css/bootstrap.min.css'
npm install bootstrap
## ajax
리액트에서 서버와 통신하려면 ajax 1
npm install axios
import axios from 'axios'

1. 어떤 데이터인지 (URL 형식으로)
2. 어떤 방법으로 요청할지 (GET or POST)
잘 기재해야 데이터를 보내줍니다. 

데이터를 가져올 때는 보통 GET 고르면 되고 <--브라우저에 요청가능
데이터를 서버로 보낼 때는 POST 고르면 됩니다. 

## GET/POST 요청하는 법?
GET요청을 날리고 싶으면 가장 쉬운 방법은 브라우저 주소창입니다.
거기에 URL 아무거나 적으면 그 곳으로 GET요청을 날려줍니다.
진짠지 테스트해보셈 

POST요청을 날리고 싶으면
<form action="요청할url" method="post"> 태그 이용하면 됩니다.
그럼 폼이 전송되었을 때 POST요청을 날려줍니다. 
근데 GET, POST 요청을 저렇게 날리면 단점이 뭐냐면 브라우저가 새로고침됩니다. 

## React Hook

img/shoes0.jpg
img/shoes3.jpg

#질문 
퍼블릭과 빌드
# git에 Static으로올리는거

$ npm run build
$ npm run preview

https://vitejs-kr.github.io/guide/static-deploy.html


# React JS를 Github Pages에 호스팅
# Build