import './App.css';
import React,{ useEffect, useState } from 'react';
import axois from 'axios';
import axios from 'axios';

function App() {
//1. useState 선언
  const [data, setData] = useState([]); 

  //2. 통신하기 (2-4 통신선언)
  const load_data = async() => {
    let result = await axios.get('/message.json');

    //3. 콘솔에 값 잘 가져왔는지 확인
    console.log(result);

    //4. 잘 담긴 데이터 값을 setDat 에 넣어주기
    setData(result.data);
  }


//5. setData 값이 잘 나오는지 확인
  useEffect(()=>{
    console.log(data);
  }, [data]);
  
//6. load_data 한번 실행
  useEffect(()=>{
    load_data();
  },[]);
 
  return (
    <div>
      <h2>연습5</h2>
    
      <ul>     
  {/* 7.map 사용하여 배열을 다른 형태의 배열로 반환    */}
        {data.map((item, index)=>{
          return  <li>{item.date} {item.message}</li>;
        })}       
      </ul>


    </div>
  );
}

export default App;