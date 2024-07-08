import React from "react";

export default function FAQ() {
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
          <div className="col-lg-5">
            <i className="bx bx-help-circle"></i>
            <h4> 1. What should I expect during a Sunday service?</h4>
          </div>
          <div className="col-lg-7">
            <p>
              Our Sunday services include vibrant worship music, inspiring
              sermons, and a welcoming community. Services typically last about
              an hour and a half and include singing, prayer, scripture reading,
              and a message from our pastor. We also have programs for children
              and youth during this time.
            </p>
          </div>
        </div>
        {/* <!-- End F.A.Q Item--> */}

        <div
          className="row faq-item d-flex align-items-stretch"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="col-lg-5">
            <i className="bx bx-help-circle"></i>
            <h4>2. Do I need to dress a certain way to attend?</h4>
          </div>
          <div className="col-lg-7">
            <p>
              No, there is no dress code at our church. We encourage you to come
              as you are, whether that means dressing casually or more formally.
              Our focus is on worship and community, not on what you wear.
            </p>
          </div>
        </div>
        {/* <!-- End F.A.Q Item--> */}

        <div
          className="row faq-item d-flex align-items-stretch"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="col-lg-5">
            <i className="bx bx-help-circle"></i>
            <h4>3. Is there a place for my children?</h4>
          </div>
          <div className="col-lg-7">
            <p>
              Absolutely! We offer a variety of programs for children of all
              ages. During our Sunday services, we have a children's ministry
              that provides age-appropriate lessons and activities. We also have
              a nursery for infants and toddlers.
            </p>
          </div>
        </div>
        {/* <!-- End F.A.Q Item--> */}

        <div
          className="row faq-item d-flex align-items-stretch"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="col-lg-5">
            <i className="bx bx-help-circle"></i>
            <h4>4. How can I get involved in the church?</h4>
          </div>
          <div className="col-lg-7">
            <p>
              There are many ways to get involved at our church. You can join a
              small group, volunteer in one of our ministries, participate in
              community outreach projects, or attend our various events and
              workshops. Feel free to speak with one of our pastors or visit our
              "Get Involved" page on the website for more information.
            </p>
          </div>
        </div>
        {/* <!-- End F.A.Q Item--> */}

        <div
          className="row faq-item d-flex align-items-stretch"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="col-lg-5">
            <i className="bx bx-help-circle"></i>
            <h4>5. What do you believe?</h4>
          </div>
          <div className="col-lg-7">
            <p>
              We believe in the Trinity: one God in three persons – Father, Son,
              and Holy Spirit. We believe that salvation is a gift from God
              through faith in Jesus Christ. We also believe that the Bible is
              the inspired Word of God and serves as our guide for faith and
              practice. For more detailed information, please visit our "What We
              Believe" page.
            </p>
          </div>
        </div>
        {/* <!-- End F.A.Q Item--> */}
      </div>
    </section>
  );
}
