import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import boardService from '../services/BoardService';
import PaginationB5 from '../components/board/PaginationB5';


function BoardListPagingPage() {

    const [boards, setBoards] = useState([]);
    const [paging, setPaging] = useState({});

    useEffect(() => {
        initBoards();
    }, []);

    const initBoards = () => {
        boardService.getPagingList()
          .then((response) => {
            setBoards(response.data.boards);
            setPaging(response.data.page);
    
            console.log(response.data.boards);
            console.log(response.data.page);
          })
          .catch((e) => {
            console.log(e);
          });
    };

    const onClickPaging = (e) => {
        e.preventDefault();
        console.log(e.target.pathname);
        console.log(e.target.search);
    
        boardService.getPagingList(e.target.pathname, e.target.search)
          .then((response) => {
            setBoards(response.data.boards);
            setPaging(response.data.page);
    
            console.log(response.data.boards);
            console.log(response.data.page);
          })
          .catch((e) => {
            console.log(e);
          });
      };
      //<a class="page-link" href="/rboard/list2?pageNum=5&amount=10">5</a>

      const deleteBoard = (e) => {
        const { name, value } = e.target;
    
        console.log(name);
        console.log(value);
        
    
        boardService.remove(value)
          .then((response) => {

              const path = 'rboard/list2';
              const search = '?pageNum=' + paging.cri.pageNum + '&' + 'amount=' + paging.cri.amount;

              boardService.getPagingList(path, search)
              .then((response) => {
                setBoards(response.data.boards);
                setPaging(response.data.page);
        
                console.log(response.data.boards);
                console.log(response.data.page);
              })
              .catch((e) => {
                console.log(e);
              });


          })
          .catch((e) => {
            console.log(e);
          });
      };

    return  (
        <div className="container mt-3">
          <div className="container-fluid">
            {/* <!-- Page Heading --> */}
            <h1 className="h3 mb-2 text-gray-800">게시판</h1>
            <p className="mb-4">
              DataTables is a third party plugin that is used to generate the demo
              table below. For more information about DataTables, please visit the{' '}
              <a target="_blank" href="https://datatables.net">
                official DataTables documentation
              </a>
              .
            </p>
    
            {/* <!-- DataTales Example --> */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  DataTables Example
                </h6>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    className="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellspacing="0"
                  >
                    <thead>
                      <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>제목</th>
                        <th>날짜</th>
                        <th>히트</th>
                        <th className="text-center">삭제</th>
                      </tr>
                    </thead>
    
                    <tbody>
                      {boards &&
                        boards.map((board) => (
                          <tr key={board.bid}>
                            <td>{board.bid}</td>
                            <td>{board.bname}</td>
    
                            <td>
                              <Link to={'/board/' + board.bid}>{board.btitle}</Link>
                            </td>
    
                            <td>{board.bdate}</td>
                            <td>{board.bhit}</td>
                            <td className="text-center">
                              <button
                                className="btn btn-success"
                                value={board.bid}
                                onClick={deleteBoard}
                              >
                                삭제
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                {/* 페이징           */}
                <PaginationB5 paging={paging} onClickPaging={onClickPaging}></PaginationB5>       
                <hr />
                <Link to="/write">
                  <button type="button" className="btn btn-primary">
                    글쓰기
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        // <!-- /.container-fluid -->
      );
}

export default BoardListPagingPage;