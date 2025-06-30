import "bootstrap/dist/css/bootstrap.min.css";

export function Goals() {
  return (
    <>
      <div className="card" style={{margin: "15px"}}>
        <div className="card-header">Create</div>
        <div className="card-body">
          <h5 className="card-title">Add all your goals</h5>
          <p className="card-text">
            Add all the goals you own to better track and manage them!
          </p>
          <a href="#/dashboard/AddGoal" className="btn btn-primary">
            Add Goals
          </a>
        </div>
      </div>
      <div className="card" style={{margin: "15px"}}>
        <div className="card-header">Update</div>
        <div className="card-body">
          <h5 className="card-title">Update an Goals</h5>
          <p className="card-text">
            Update any Goals which value has changed!
          </p>
          <a href="#" className="btn btn-secondary">
            Update Goals
          </a>
        </div>
      </div>
    </>
  );
}
