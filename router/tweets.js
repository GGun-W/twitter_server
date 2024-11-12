import express from 'express'

const router = express.Router() // 라우터 기능 사용



// 해당 아이디에 대한 트윗 가져오기
// GET
// http://127.0.0.1:8000/tweets?username=:username

// 글번호에 대한 트윗 가져오기
// GET
// http://127.0.0.1:8000/tweets/:id

// 트윗하기
// POST
// http://127.0.0.1:8000/tweets
// json 형태로 입력 후 추가된 데이터까지 모두 json으로 출력

// 수정하기
// PUT
// http://127.0.0.1:8000/tweets/:id
// json 형태로 입력 후 추가된 데이터까지 모두 json으로 출력

// 삭제하기
// DELETE
// http://127.0.0.1:8000/tweets/:id








export default router // 객체 이름으로 설정. 외부에서 사용 가능