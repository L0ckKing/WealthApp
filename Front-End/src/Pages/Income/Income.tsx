import "bootstrap/dist/css/bootstrap.min.css";

export function Income() {
  return (
    <>
      <div className="card" style={{margin: "15px"}}>
        <div className="card-header">Create</div>
        <div className="card-body">
          <h5 className="card-title">Add all your income sources</h5>
          <p className="card-text">
            Add all the income source you own to better track and manage them!
          </p>
          <a href="#/dashboard/AddIncome" className="btn btn-primary">
            Add Income
          </a>
        </div>
      </div>
      <div className="card" style={{margin: "15px"}}>
        <div className="card-header">Update</div>
        <div className="card-body">
          <h5 className="card-title">Update an income source</h5>
          <p className="card-text">
            Update any income source which value has changed!
          </p>
          <a href="#" className="btn btn-secondary">
            Update Income
          </a>
        </div>
      </div>
    </>
  );
}
