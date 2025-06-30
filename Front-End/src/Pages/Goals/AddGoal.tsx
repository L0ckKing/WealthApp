import "bootstrap/dist/css/bootstrap.min.css";

export function AddGoal() {
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
              placeholder="Type of goal"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="htmlForformGroupExampleInput"
              className="form-label"
            >
              Worth
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Value to achieve the goal"
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
