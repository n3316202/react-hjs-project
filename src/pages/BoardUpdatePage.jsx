import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import boardService from '../services/BoardService';
import PaginationB5 from '../components/board/PaginationB5';

function BoardUpdatePage() {
  const initBoardState = {
    bname: '',
    btitle: '',
    bcontent: '',
  };
  const { bid } = useParams();

  const [board, setBoard] = useState(initBoardState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBoard({ ...board, [name]: value });
  };

  const cancelClick = () => {
    navigate(`/boards`);
  };
  //useEffect 처음 한번만 랜더링
  useEffect(() => {
    boardService
      .get(bid)
      .then((response) => {
        console.log(response.data);
        setBoard(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const navigate = useNavigate();

  const saveBoard = () => {
    let data = {
      bname: board.bname,
      btitle: board.btitle,
      bcontent: board.bcontent,
    };

    boardService
      .write(data)
      .then((response) => {
        setSubmitted(true);
        console.log(response.data);
        //페이지 이동
        navigate(`/boards`);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <div className="container mt-3">
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center mt-3">업데이트도 할수 있어요</h3>
              <div className="card-body">
                <div className="form-group">
                  <label> Type </label>
                  <select placeholder="type" className="form-control">
                    <option value="1">자유게시판</option>
                    {/* <option value="2">질문과 답변</option> */}
                  </select>
                </div>
                <div className="form-group mt-3">
                  <label> Name </label>
                  <input
                    type="text"
                    placeholder="이름을 넣으시오"
                    name="bname"
                    className="form-control"
                    value={board.bname}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mt-3">
                  <label> Title </label>
                  <input
                    placeholder="제목을 넣으시오."
                    name="btitle"
                    className="form-control"
                    value={board.btitle}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mt-3 mb-3">
                  <label> Content </label>

                  <textarea
                    placeholder="내용을 적으시오"
                    name="bcontent"
                    className="form-control"
                    value={board.bcontent}
                    onChange={handleInputChange}
                    rows="10"
                  />
                </div>
                <button className="btn btn-success" onClick={saveBoard}>
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  style={{ marginLeft: '10px' }}
                  onClick={cancelClick}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardUpdatePage;
