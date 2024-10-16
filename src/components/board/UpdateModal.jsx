import React from 'react';

const UpdateModal = () => {
  return (
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
  );
};

export default UpdateModal;
