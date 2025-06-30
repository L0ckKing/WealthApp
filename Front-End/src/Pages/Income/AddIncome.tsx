import "bootstrap/dist/css/bootstrap.min.css";

export function AddIncome() {
  return (
    <>
      <div className="card" style={{ margin: "15px" }}>
        <div className="card-header">Create</div>
        <div className="card-body">
          <div className="mb-3">
            <label
              htmlFor="htmlForformGroupExampleInput"
              className="form-label"
            >
              Category
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Type of income source"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="htmlForformGroupExampleInput"
              className="form-label"
            >
              Amount
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Add value of each earning"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="htmlForformGroupExampleInput"
              className="form-label"
            >
              Interval
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Time Interval between each earning"
            />
          </div>
          <div className="mb-3">
            <button type="button" className="btn btn-dark">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
