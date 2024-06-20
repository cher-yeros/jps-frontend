import React from "react";

export default function AboutUs() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About</h2>
          <p>About Us</p>
        </div>

        <div className="row content">
          <div className="col-lg-6">
            <p>
              Welcome to JPS Ministry, a vibrant community dedicated to worship,
              fellowship, and service. Our mission is to glorify God through
              meaningful worship, compassionate outreach, and a commitment to
              spiritual growth. We believe in creating an inclusive environment
              where everyone can experience the love of Christ and find a place
              to belong.
            </p>

            <ul>
              <li>
                <i className="ri-check-double-line"></i>
                Worship Services: Uplifting and spirit-filled worship every
                Sunday.
              </li>
              <li>
                <i className="ri-check-double-line"></i>
                Bible Studies: Engaging and informative Bible study groups for
                all ages.
              </li>
              <li>
                <i className="ri-check-double-line"></i>
                Community Outreach: Various programs to support and uplift our
                local community.
              </li>
              <li>
                <i className="ri-check-double-line"></i>
                Youth Programs: Dynamic activities and mentorship for children
                and teenagers.
              </li>
              <li>
                <i className="ri-check-double-line"></i>
                Counseling and Support: Compassionate counseling services for
                individuals and families.
              </li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
              <b>Our Mission</b> <br />
              To glorify God by making disciples of all nations, building a
              loving community, and serving those in need. <br /> <br />
              <b>Our Vision</b> <br />
              To be a beacon of hope and light in our community, nurturing faith
              and inspiring action.
              <br /> <br />
              <b> What We Believe</b>
              <br />
              The Trinity: We believe in one God, eternally existing in three
              persons – Father, Son, and Holy Spirit. Salvation: We believe that
              salvation is a gift from God, received through faith in Jesus
              Christ. The Bible: We believe that the Bible is the inspired Word
              of God, serving as our guide for faith and practice. The Church:
              We believe the Church is the body of Christ, called to worship God
              and serve humanity.
            </p>
            <a href="#" className="btn-learn-more">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
