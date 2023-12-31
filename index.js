// 공통변수 설정
import express from 'express';
const app = express();
const port = 3575;
1
// 미들웨어 설정 (CORS 허용)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// 예제 엔드포인트
app.get('/echo', (req, res) => {
    res.json({
        message: 'Hello from the server!'
    });
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
