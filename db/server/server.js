const express = require('express');
const path = require('path');
const os = require("os");
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const async = require('async');
const await = require('await');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'public/')));
app.use(cors());

app.listen(PORT, () => {
console.log(`Check out the app at http://localhost:${PORT}`);
});


//MySQL 코드
const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit:5,
    host: 'localhost',
    user: 'root',
    database: 'school',
    password: 'vmfkdlsgo1'
});

/* 회원가입 홈페이지 접속 */
app.get('/api', function(req,res,next){
    
    res.redirect('http://localhost:3000/join');   
    
});

/* 회원가입 하여 내 정보 집어넣는 로직 */
app.post('/join', function(req,res,next){    
    console.log(req.body);

    var name = req.body.data.name;
    var phone = req.body.data.phone;    
    var addr = req.body.data.addr;
    var email = req.body.data.email;
    var major = req.body.data.major;
    var sid = req.body.data.sid;
    var account = req.body.data.account;
    var password = req.body.data.password;

    var datas = [name, addr, phone, email, major, sid, account, password];

    pool.getConnection(function (err, connection)
    {
        
        var sqlForInsertBoard = "insert into STUDENT(S_name, Address, Phone, Email, Major, SID, S_account, Passwd)  values(?,?,?,?,?,?,?,?)";
        connection.query(sqlForInsertBoard, datas, function(err,rows){
            if(err) {console.error("err :  "+ err);  res.send("실패");}
            else { res.send("완료") }
        });
        connection.release();
    });

})

/* 과목 검색 로직 처리 GET */
app.post('/search',function(req,res,next)
{
    var course = req.body.data;   
    console.log(course);
    pool.getConnection(function(err,connection)
    {
        var sql1 = "select * from COURSE where C_name=?";
        var sql2 = "select COUNT (*) AS count from COURSE where C_name=?";
        
        connection.query(sql1,[course], function(err,row1)
        {
            if(err) console.error(err);             
            console.log("1개 글 조회 결과 확인 : ", );              
            connection.query(sql2,[course], function(err,row2)
                 {
                    if(err) console.error(err);  
                    console.log("1개 글 조회 결과 확인 : ",row1,row2);
                    res.send({row1,row2});   
                }) 
                         
            //res.send('read', {title: "글 조회", row:row[0]}); 
        });

       
        connection.release();   
    });
});

/* 수강신청한 과목 집어넣는 로직*/
app.post('/enroll', function(req,res,next){    
    var count = req.body.count;
    var SID = req.body.sid; 
   
    var enroll_com = false;
   
    function dodo(item, i) {
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                console.log(item, i, count);
                pool.getConnection(function (err, connection)
            {
                var sql_timeoverlapped = "select COUNT (*) as cnt from PRIVATECOURSE where (Ptime, PSID) IN (select p.Ptime, p.PSID FROM privatecourse as p where p.Ptime=? and p.PSID=?)"
                connection.query(sql_timeoverlapped, [item.req_time, SID], function(err,rows){
        
                    if(err) console.error("err :  "+ err);
                    console.log(rows[0].cnt, i);
        
                    if(rows[0].cnt!==0){   
                        if(enroll_com===false) {                      
                        res.send("중복");
                        console.log("중복");
                        enroll_com=true;
                        }
                    }   
        
        
                    else{               
                        var sqlForInsertBoard = "insert into PRIVATECOURSE(PSID, PCCode, Ptime)  values(?,?,?)";
        
                        connection.query(sqlForInsertBoard, [SID, item.req_code, item.req_time], function(err,rows){
                        if(err) console.error("err :  "+ err);
                       
                        if(i===count-1  && enroll_com===false)
                            {                            
                                res.send("완료");
                                console.log("완료", i);               
                            }
                           
                            });               
                    } 
                    
                })   
                connection.release();
            });
                resolve();
                
            }, 100)
        })
    }


    async function test(array){
        for(var i=0; i<count; i++)
    {              
        await dodo(array[i], i);

    }
}

    test(req.body.data);       
        
    });

    app.post('/changepw', function(req,res){
        var useridpw = [req.body.password, req.body.username];
        pool.getConnection(function(err, connection){
            var sql = "update STUDENT SET passwd=? where SID=?";
            console.log(useridpw);
            connection.query(sql, useridpw, function(err, rows){
                console.log(rows);
            });
            connection.release();
        });
    })



    /*기우 파트*/


    app.post('/isLogin', function(req, res){
        var useridpw = [req.body.username, req.body.password];
        pool.getConnection(function(err, connection){
            var sql = "select count(*) as cnt from student where SID=? and Passwd=?";
            console.log(useridpw);
            connection.query(sql, useridpw, function(err, rows){
                console.log('rs '+rows[0].cnt);
                res.send({rs: rows[0].cnt}); 
            
            });
            connection.release();
        });
    })
    // app.get('/isLogin', (req, res)=>{
    //     res.redirect('http://localhost:4000/Mypage')   
    // })
    
    app.post('/Mypage', function(req, res){
        console.log('this is Mypage!');
        console.log(req.body.id);
        var userinfo = [req.body.id];
        pool.getConnection(function(err, connection){
            var sql1 = "select count(*) as cnt from student as s, privatecourse as p where p.PSID=s.SID and s.SID = ?";
            var sql2 = "select S_name, SID, Ptime, C_name from (student as s INNER JOIN (privatecourse as p) on p.PSID = s.SID) INNER JOIN course as c on p.PCCode=c.Ccode where s.SID = ?";
            var sql3 = "select S_name from student where SID = ?";
        connection.query(sql3, userinfo, function(err,rows3){
            connection.query(sql1, userinfo, function(err,rows1){
                connection.query(sql2, userinfo, function(err,rows2){
                    res.send({rows1, rows2, rows3});
                    console.log(rows1, rows2, rows3);
                });
            });
        });
            connection.release();
        });
    })
    
    


    app.post('/ViewGrade', function(req, res){
        console.log('this is gradeView!');
        console.log(req.body.id);
        var gradeinfo=[req.body.id];
        pool.getConnection(function(err, connection){
            var sql1 = "select SUM(CREDIT) as SUM FROM privatecourse join course on PCCode = Ccode WHERE PSID=?";
            var sql2 = "select AVG(Grade) as AA from privatecourse join course on PCCode = CCode where PSID=? GROUP BY C_subject";
            var sql3 = "SELECT AVG(Grade) as BB FROM privatecourse where PSID=?";
            var sql4 = "select COUNT(*) as cnt from privatecourse, course where PCCode = CCode and PSID=?";
            var sql5 = "select C_name, Grade from privatecourse, course where PCCode = CCode and PSID=? ORDER BY C_name ASC";
            connection.query(sql1, gradeinfo, function(err, rows1){
                console.log(rows1);
                connection.query(sql2, gradeinfo, function(err, rows2){
                    
                    connection.query(sql3, gradeinfo, function(err, rows3){
                        connection.query(sql4, gradeinfo, function(err, rows4){
                            connection.query(sql5, gradeinfo, function(err, rows5){
                                console.log(rows1);
                                console.log(rows2);
                                console.log(rows3);
                                console.log(rows4);
                                console.log(rows5);
                                res.send({rows1, rows2, rows3, rows4, rows5});
                            });
                        });
                    });
                });
            });
        });
    });

    app.post('/ReadInfo', function(req, res){
        console.log('this is ReadInfo!');
        console.log(req.body.id);
        var readinfo=[req.body.id];
        pool.getConnection(function(err, connection){
            var sql1 = "select S_name, Address, Phone, Email, Major, SID, S_account from student where SID=?";
            connection.query(sql1, readinfo, function(err, rows1){
                console.log(rows1);
                res.send({rows1});
            });
        });
    });