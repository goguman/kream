require("dotenv").config({path: "../.env"}); // dotenv 패키지 설치 후 .env 파일 경로 설정(.env 인식)

const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser"); // 요청정보 처리
const cors = require("cors"); // 교차 출처 리소스 공유(Cross-Origin Resource Sharing, CORS)

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); // 객체 형식 처리
app.set('port', PORT);

let corsOptions = {
    origin: "*", // 출처 허용 옵션
    credential: true, // 사용자 인증이 필요한 리소스(쿠키, ...등) 접근
};

app.use(cors(corsOptions)); // 미들웨어 설정 작업

console.log("dbname");
console.log(process.env.DB_DBNAME);

const db = mysql.createPool({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME,
});

app.listen(PORT, () => {
    console.log(`Server run : http://localhost:${PORT}/`)
});

app.get('/justDroppedList', (req, res) => {
    const sqlString =
        'SELECT ' +
        'J.MODEL_CODE, ' +
        'B.NAME_EN AS BRAND_NAME, ' +
        'J.MODEL_NAME, ' +
        'FORMAT(RELEASE_PRICE, 0) AS RELEASE_PRICE, ' +
        'J.THUMBNAIL_PATH ' +
        'FROM JUST_DROPPED J, BRAND B ' +
        'WHERE J.BRAND_CODE = B.BRAND_CODE';
    db.query(sqlString, (error, rows) => {
        if(error) throw error;
        console.log('Products List is : ', rows);
        res.send(rows);
    })
});

app.get('/getTopShortcutList', (req, res) => {
    const sqlString =
        'SELECT ' +
        'TITLE, ' +
        'THUMBNAIL_PATH, ' +
        'DIRECTION_URL ' +
        'FROM MAIN_TOP_SHORTCUT';
    db.query(sqlString, (error, rows) => {
        if(error) throw error;
        console.log('Products List is : ', rows);
        res.send(rows);
    })
});

app.get('/getBrandFocusList', (req, res) => {
    const sqlString = 'SELECT BRAND_CODE, NAME_KR AS TITLE, THUMBNAIL_PATH FROM BRAND ORDER BY BRAND_CODE ASC';
    db.query(sqlString, (error, rows) => {
        if(error) throw error;
        console.log('BRAND FOCUS LIST is : ', rows);
        res.send(rows);
    })
});

app.get('/register', (req, res) => {
    const {email} = req.query;
    const sqlString = `SELECT email FROM User WHERE email='${email}'`;
    db.query(sqlString, (error, rows) => {
        if(error) throw error;
        console.log('userEmail List is : ', rows);
        res.send(rows);
    })
});

app.post('/signUp', async (req, res)=> {
    const { email, password, size } = req.body;
    const sqlString = `INSERT INTO User(id, email, password, size, email_receive, message_receive) VALUES('${email}','${email}', '${password}', '${size}', '${email_receive}', '${message_receive}')`;
    db.query(sqlString, (error, rows) =>{
        if(error) throw error;
        console.log('회원가입 성공');
    })
});

