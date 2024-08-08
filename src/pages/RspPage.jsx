
import React,{useState} from 'react';
import RspCard from '../components/rsp/RspCard';


function RspPage() {

    const [players , setPlayers] = useState([
        {
            id: 1,
            username: '당신',
            arrRsp :['가위','바위','보']
        },
        {
            id: 2,
            username: '심판',
            arrRsp :[]
        },
        {
            id: 3,
            username: '컴퓨터',
            arrRsp :['랜덤생성']
        }      
    ])

    const resultString = (com_rsp, your_rsp) => {
        let result = '비겼습니다';
      
        if (com_rsp === your_rsp) {
          return (result = '비겼습니다');
        }
      
        if (com_rsp === 0) {
          if (your_rsp === 1) result = '당신이 이겼습니다.';      
          if (your_rsp === 2) result = '당신이 졌습니다.';
        }
      
        if (com_rsp === 1) {
          if (your_rsp === 0) result = '당신이 졌습니다.';      
          if (your_rsp === 2) result = '당신이 이겼습니다.';
        }
      
        if (com_rsp === 2) {
          if (your_rsp === 1) result = '당신이 졌습니다.';      
          if (your_rsp === 2) result = '당신이 이겼습니다.';
        }
      
        return result;
      };

    const handleClick = e => { // eslint-disable-next-line
        console.log(e.target.innerText)
        
        let rspArr = ['가위','바위','보']

        let user_rsp = rspArr.indexOf(e.target.innerText)
        let com_rsp = Math.floor(Math.random() * 2);

        let result = resultString(com_rsp,user_rsp)

        let copyPlayers = [...players]
        //copyPlayers[1].arrRsp = result
        copyPlayers[1].arrRsp = [result]
        copyPlayers[2].arrRsp = [rspArr[com_rsp]]
        
        setPlayers(copyPlayers)

    };

    return (
        <main>
            <div class="container mt-5">
                <div class="row">
                    {
                        players && players.map( player => (
                            <RspCard player={player} onClick={handleClick}></RspCard>
                        ))
                    }                    
                </div>
            </div>
        </main>
    );
}

export default RspPage;