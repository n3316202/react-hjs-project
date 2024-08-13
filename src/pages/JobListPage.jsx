
import React,{useState} from 'react';
import styled from 'styled-components'; // 설치한 라이브러리를 import 한다.


// 백틱을 사용하여 css를 작성한다.
const StyledTitle = styled.div`
.job-list {
  max-width: 960px;
  margin: 40px auto;
}
.job-list ul {
  padding: 0;
}
.job-list li {
  list-style-type: none;
  background: white;
  padding: 16px;
  margin: 16px 0;
  border-radius: 4px;
}
.job-list h2 {
  margin: 0 0 10px;
  text-transform: capitalize;
}
.salary {
  display: flex;
}
.salary img {
  width: 30px;
}
.salary p {
  color: #17bf66;
  font-weight: bold;
  margin: 10px 4px;
}
.list-move {
  transition: all 1s;
}`;


function JobListPage() {

   

    return(
        <main>

        </main>

    ) ;

}

//📌 'styled-components' 사용하기  

export default JobListPage;