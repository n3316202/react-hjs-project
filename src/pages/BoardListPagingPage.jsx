import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import boardService from '../services/BoardService';
import PaginationB5 from '../components/board/PaginationB5';
import UpdateModal from './../components/board/UpdateModal';

function BoardListPagingPage() {
  const [boards, setBoards] = useState([]);
  const [paging, setPaging] = useState({});

  useEffect(() => {
    initBoards();

    var myModal = document.getElementById('exampleModal');
    console.log(myModal);
    //myModal.hide();
  }, []);

  const initBoards = () => {
    boardService
      .getPagingList()
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

    boardService
      .getPagingList(e.target.pathname, e.target.search)
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

  const deleteBoard = (e) => {
    const { name, value } = e.target;

    console.log(name);
    console.log(value);

    boardService
      .remove(value)
      .then((response) => {
        const path = 'boards/list';
        const search =
          '?pageNum=' +
          paging.criteria.pageNum +
          '&' +
          'amount=' +
          paging.criteria.amount;

        boardService
          .getPagingList(path, search)
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

  const linkClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
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
                            {/* <Link to={'/boards/' + board.bid}>
                            {board.btitle}
                          </Link> */}
                            <Link onClick={linkClick}>{board.btitle}</Link>
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
              <PaginationB5
                paging={paging}
                onClickPaging={onClickPaging}
              ></PaginationB5>
              <hr />
              <Link to="/boards/write">
                <button type="button" className="btn btn-primary">
                  글쓰기
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* // <!-- /.container-fluid --> */}
      <div
        className="modal fade show"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        style={{ display: 'block' }}
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-sl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                글쓰기
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
              <br />
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  작성자:
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  제목:
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="message-text" className="col-form-label">
                  내용:
                </label>
                <textarea className="form-control" rows={8} defaultValue={''} />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                전송
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BoardListPagingPage;
