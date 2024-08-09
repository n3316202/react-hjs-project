
import React,{useState} from 'react';


function LottoPage() {

    const [nums,setNums] = useState(setNumbers)

    const setNumbers = () => {
        const lottoNums = new Set();

        while(lottoNums.size < 6){
            let num = Math.floor(Math.random() * 45) +1 ;
            lottoNums.add(num)
        }
        console.log(lottoNums)
        return lottoNums;

    }

    return (
        <div className="container">
        <div className="row mt-sm-5">
          {
            nums && nums.map( num => (
              <LottoBall num = {num} ></LottoBall> 
            ))
          }
        </div>
      </div>
    );
}

export default LottoPage;