import React from "react";
import { Link } from "react-router-dom";
import "./status.css";
export default function PageNotFound() {
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="message-box _success _failed">
              <i className="bi bi-x-circle-fill" aria-hidden="true"></i>
              <h2> Page Not Found </h2>
              <p> 404 </p>
            </div>

            <div className="text-center mt-4">
              <Link to="/" className="btn btn-primary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
