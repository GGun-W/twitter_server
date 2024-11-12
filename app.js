import express from 'express'
import tweetsRouter from './router/tweets.js' // 연결
import authRouter from './router/auth.js' // 연결

const app = express() // 객체 생성

app.use(express.json()) // 미들웨어 생성. json사용

app.use('/tweets', tweetsRouter)
app.use('/auth', authRouter)


app.use((req, res, next) => { // 라우팅 사용
    res.sendStatus(404)
})

app.listen(8080) // 대기 설정. 8080->라우터 등 기본 포트 3000번이 존재하기 때문에. 충돌 방지