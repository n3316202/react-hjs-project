
import React,{useState, useEffect} from 'react';
import LottoBall from './../components/lotto/LottoBall';


function LottoPage() {

  const setNumbers = () => {
    const lottoSet = new Set();

    while(lottoSet.size < 6){
        let num = Math.floor(Math.random() * 45) +1 ;
        lottoSet.add(num)
    }
    console.log(lottoSet)
    return Array.from(lottoSet);;

  }

    const [nums,setNums] = useState(setNumbers)

    useEffect(()=>{
      console.log('화면 갱신')
    })
    
    return (
        <div className="container">
        <div className="row mt-sm-5">
          {
            nums && nums.map( lottoNum => (
              <LottoBall lottoNum = {lottoNum} ></LottoBall> 
            ))
          }
        </div>
      </div>
    );
}

export default LottoPage;