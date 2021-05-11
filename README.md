# Learning Assist Program
## 학사정보관리 프로그램

학사정보관리 시스템으로 기존의 [캠퍼스 서비스](https://klas.kw.ac.kr/) 유사한 웹 애플리케이션을 개발한다. 
  * [회원가입](#회원가입) 
  * [로그인](#로그인) 
  * [비밀번호 변경](#비밀번호-변경)
  * [개인정보 조회](#개인정보-조회)
  * [수강과목 시간표 조회](#수강과목-시간표-조회) 
  * [과목 수강신청](#과목-수강신청)
  * [수강 및 성적 조회](#수강-및-성적-조회) 
  * [친구와 시간표 공유](#친구와-시간표-공유하기)

기능이 있는 웹 서비스를 MySQL, Node.js, React, Express를 사용하여 구현하였다. 

-----------
## USAGE
* git clone https://github.com/jihoon1125/Learning_Assist_program.git

* cd Learning_Assist_program/db

* npm install

* \db\server\server.js 의 Line20~ 에서 MySQL school Database 생성 후 비밀번호 등 설정 변경

* school Database에 테이블 생성 (\create-table.sql) 파일 참조



----------
## DATABASE
### Table
+ **STUDENT Table**

![11](https://user-images.githubusercontent.com/59654033/117769840-2feb5d00-b26f-11eb-8cf3-02f17fc78994.PNG)

+ **COURSE Table**

![image](https://user-images.githubusercontent.com/59654033/117769981-590bed80-b26f-11eb-83cf-f98e5b4c49ab.png)

+ **PRIVATECOURSE Table**

![image](https://user-images.githubusercontent.com/59654033/117770027-66c17300-b26f-11eb-8dc3-7dec3ddcffa9.png)

+ **PROFESSOR Table**

![image](https://user-images.githubusercontent.com/59654033/117770068-7345cb80-b26f-11eb-84b6-1c7053b211ab.png)

+ **ER Diagram**

![image](https://user-images.githubusercontent.com/59654033/117770333-c1f36580-b26f-11eb-8337-89ce398e3c59.png)

---
## OPTIONS
#### 회원가입

![image](https://user-images.githubusercontent.com/59654033/117770697-3201eb80-b270-11eb-81ff-1391c38bd780.png)
![image](https://user-images.githubusercontent.com/59654033/117770711-37f7cc80-b270-11eb-8f34-5d02a1063583.png)

> 필수 정보 미입력 및 중복 ID로 회원가입 시도 시 Error Alert, 회원 가입 성공 시 로그인 페이지로 이동
___
#### 로그인

![image](https://user-images.githubusercontent.com/59654033/117771063-ab014300-b270-11eb-9521-fdb0b9c52f67.png)

> 로그인 실패 시 Error Alert, 로그인 성공 시 시간표 조회 페이지로 이동
___
#### 비밀번호 변경

![image](https://user-images.githubusercontent.com/59654033/117771150-c3715d80-b270-11eb-9f77-e247c2a00e60.png)

> 비밀번호 변경 완료 시 로그인 페이지로 이동 후 로그인 요구

___
#### 개인정보 조회

![image](https://user-images.githubusercontent.com/59654033/117781494-aee69280-b27b-11eb-974d-bac9fab77ec5.png)

> 시간표 페이지에서 [개인정보조회] 클릭 후 비밀번호를 제외한 정보 조회

___
#### 수강과목 시간표 조회

![image](https://user-images.githubusercontent.com/59654033/117772114-cc166380-b271-11eb-80d9-10390fe35d20.png)

> DB에서 개인 수강 과목 정보를 가져온 후 시간표 출력

___
#### 과목 수강신청

![image](https://user-images.githubusercontent.com/59654033/117772404-1992d080-b272-11eb-9fc8-4e5f3d10a6bb.png)

  + 시간표가 중복되는 경우 아래와 같이 중복되지 않은 시간표들만 신청됨

![image](https://user-images.githubusercontent.com/59654033/117772508-39c28f80-b272-11eb-8358-b1cd16c8699d.png)

> 과목 검색 시 해당하는 과목의 정보가 검색결과에 조회됨

> 신청 버튼을 누르면 신청목록에 과목이 담기며 삭제 또한 가능

> 수강신청 완료는 저장 버튼을 통해 가능

___
#### 수강 및 성적 조회

![image](https://user-images.githubusercontent.com/59654033/117772949-b190ba00-b272-11eb-879d-32f17cb9a436.png)

> 전체 평점, 교양 평점, 전공 평점, 이수 학점 등 조회 가능

> 학기별 성적 조회 가능

> 전공, 교양 전체 평점에 대한 데이터 시각화 구현

> 이번 학기 성적 조회 가능

___
#### 친구와 시간표 공유하기

![image](https://user-images.githubusercontent.com/59654033/117773080-ddac3b00-b272-11eb-859d-60ade3248280.png)

> 친구의 학번 입력 후 친구 시간표 조회





