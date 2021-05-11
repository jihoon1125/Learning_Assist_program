CREATE TABLE student(  
    S_name varchar(10) not null,
    address varchar(30) not null,
    phone char(11) not null,
    email varchar(30),
    major varchar(15) not null,
    sid char(10) not null PRIMARY key,
    s_account varchar(20) not null unique,
    passwd varchar(20) not null
) default charset utf8 comment '';

create table professor(
    p_name varchar(10) not null PRIMARY key,
    lab varchar(10) not null,
    pmajor varchar(15) not null
) default charset utf8 comment '';

CREATE TABLE COURSE(
    c_name varchar(10) not null,
    prof varchar(10),
    c_year smallint not null,
    major varchar(15) not null,
    room varchar(10) default '미배정',
    Ccode char(8) not null PRIMARY key,
    c_subject char(2) not null check(c_subject in ('전공', '교양')),
    C_time varchar(10) not null,
    credit tinyint not null,
    foreign key (prof) REFERENCES professor(p_name)
    on delete set null on update CASCADE 
) default charset utf8 comment '';

create table privatecourse(
    idx int AUTO_INCREMENT  PRIMARY KEY,
    psid char(10) not null,
    pccode char(8) not null,
    ptime varchar(10) not null,
    grade float default 0,
    foreign key (psid) REFERENCES student(sid)
    on delete cascade on update CASCADE,
    FOREIGN key (pccode) REFERENCES  course(ccode)
    on delete CASCADE on update CASCADE 
) 

