import React from "react";
import { useLocation, useParams } from "react-router";
import "./status.css";
export default function PaymentSuccessful() {
  const params = useParams();
  const location = useLocation();

  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="message-box _success">
              <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
              <h2>Your payment was successful. </h2>
              <p>
                Thank you for your payment. we will be in contact with more
                details shortly
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
