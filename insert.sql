insert into professor(lab, p_name, pmajor)
values('비900', '이기훈', '데이터베이스'),
    ('비901', '황호영', '알고리즘'),
    ('비902', '김태석', '임베디드'),
    ('비903', '공진흥', 'VLSI'),
    ('비904', '심동규', '영상처리'),
    ('비905', '민경진', '대수학'),
    ('비906', '박철수', '전자회로'),
    ('비907', '채형직', '선형대수학'),
    ('비908', '박지희', '교양'),
    ('비909', '김영희', '교양교양'),
    ('비910', '김순협', '공학설계'),
    ('비911', '양창헌', '영어');

insert into course(c_name, prof, c_year, major, room, ccode, c_subject, c_time, credit)
values('데이터베이스', '이기훈', 2020, '컴퓨터공학과', '새202', '00000001', '전공', '월수34', 3),
    ('자료구조', '이기훈', 2020, '컴퓨터공학과', '참313', '00000002', '전공', '화목12', 3),
    ('데이터통신', '황호영', 2020, '컴퓨터공학과', '새103', '00000003', '전공', '월수56', 3),
    ('운영체제', '김태석', 2020, '컴퓨터공학과', '새404', '00000004', '전공', '금12', 3),
    ('알고리즘', '황호영', 2020, '컴퓨터공학과', '옥101', '00000005', '전공', '월수34', 3),
    ('전자회로', '공진흥', 2020, '전자공학과', '새105', '00000006', '전공', '화목56', 3),
    ('디지털신호처리', '심동규', 2020, '컴퓨터공학과', '새206', '00000007', '전공', '금34', 3),
    ('공학수학1', '민경진', 2020, '전자공학과', '비409', '00000009', '전공', '화목56', 3),
    ('회로이론', '박철수', 2020, '컴퓨터공학과', '비619', '00000010', '전공', '화목65', 3),
    ('선형대수학', '채형직', 2020, '소프트웨어학부', '비403', '00000011', '전공', '월수65', 3),
    ('과학기술윤리', '박지희', 2020, '전체공통', '비402', '00000013', '교양', '월수21', 3),
    ('정보사회와수학', '김영희', 2020, '전체공통', '비403', '00000014', '교양', '화목56', 3),
    ('공학설계입문', '김순협', 2020, '컴퓨터공학과', '비427', '00000015', '전공', '금34', 3),
    ('대학영어', '양창헌', 2020, '전체공통', '한303', '00000016', '교양', '화목12', 3);