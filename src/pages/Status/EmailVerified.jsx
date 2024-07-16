import { useQuery } from "@apollo/client";
import { LinearProgress } from "@mui/material";
import React from "react";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import { VERIFY_EMAIL } from "../../graphql/user";
import "./status.css";
export default function EmailVerified() {
  const params = useParams();
  const location = useLocation();

  const { data, loading, error } = useQuery(VERIFY_EMAIL, {
    variables: {
      token: params?.token,
    },
  });

  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            {loading ? (
              <div className="message-box _success _info">
                <i
                  className="bi bi-arrow-clockwise rotate-icon"
                  aria-hidden="true"
                ></i>
                <h2> Loading</h2>
                <p>
                  <LinearProgress />
                </p>
              </div>
            ) : error ? (
              <div className="message-box _success _failed">
                <i className="bi bi-x-circle-fill" aria-hidden="true"></i>
                <h2> Your Email failed to be Verified</h2>
                <p> Try again later </p>
              </div>
            ) : (
              <div className="message-box _success">
                <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
                <h2>Your Email is Successfully Verified. </h2>
                <p>
                  Thank you for joining us. we will <br /> be in contact with
                  more details shortly
                </p>
              </div>
            )}

            {!loading && (
              <div className="text-center mt-4">
                <Link to="/login" className="btn btn-primary">
                  Back to Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
