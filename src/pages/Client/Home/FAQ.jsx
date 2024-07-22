import { useQuery } from "@apollo/client";
import React from "react";
import { GET_FAQS_FOR_USERS } from "../../../graphql/faq";
import { Skeleton } from "@mui/material";

export default function FAQ() {
  const { data, loading } = useQuery(GET_FAQS_FOR_USERS);

  return (
    <section id="faq" className="faq">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>F.A.Q</h2>
          <p>Frequently Asked Questions</p>
        </div>

        <div
          className="row faq-item d-flex align-items-stretch"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {loading
            ? [...Array(5).keys()].map((n) => (
                <>
                  <div className="col-lg-5">
                    <i className="bx bx-help-circle"></i>
                    <h4>
                      <Skeleton height={"2rem"} />
                    </h4>
                  </div>
                  <div className="col-lg-7">
                    <p>
                      <Skeleton height={"6rem"} />
                    </p>
                  </div>
                </>
              ))
            : data?.allFAQsForUsers.map((faq, i) => (
                <>
                  <div className="col-lg-5">
                    <i className="bx bx-help-circle"></i>
                    <h4>{i + 1 + ". " + faq?.question}</h4>
                  </div>
                  <div className="col-lg-7">
                    <p>{faq.answer}</p>
                  </div>
                </>
              ))}
        </div>
        {/* <!-- End F.A.Q Item--> */}
      </div>
    </section>
  );
}
