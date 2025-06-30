import "bootstrap/dist/css/bootstrap.min.css";

export function Assets() {
  return (
    <>
      <div className="card" style={{margin: "15px"}}>
        <div className="card-header">Create</div>
        <div className="card-body">
          <h5 className="card-title">Add all your assets</h5>
          <p className="card-text">
            Add all the assets you own to better track and manage them!
          </p>
          <a href="#/dashboard/AddAsset" className="btn btn-primary">
            Add Asset
          </a>
        </div>
      </div>
      <div className="card" style={{margin: "15px"}}>
        <div className="card-header">Update</div>
        <div className="card-body">
          <h5 className="card-title">Update an asset</h5>
          <p className="card-text">
            Update any asset which value has changed!
          </p>
          <a href="#" className="btn btn-secondary">
            Update Asset
          </a>
        </div>
      </div>
    </>
  );
}
