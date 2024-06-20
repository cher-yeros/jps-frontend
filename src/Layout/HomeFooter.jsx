import React from "react";

export default function HomeFooter() {
  return (
    <footer id="home-footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-info">
                <h3>JPS Ministry</h3>
                <p className="pb-3">
                  <em>
                    a vibrant community dedicated to worship, fellowship, and
                    service. Our mission is to glorify God through meaningful
                    worship
                  </em>
                </p>
                <p>
                  Bole Rwanda, Addis Ababa, Ethiopia
                  <br />
                  <br />
                  <strong>Phone:</strong> +251 89 55488 55
                  <br />
                  <strong>Email:</strong> info@example.com
                  <br />
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="#" className="facebook">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="#" className="instagram">
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a href="#" className="google-plus">
                    <i className="bx bxl-skype"></i>
                  </a>
                  <a href="#" className="linkedin">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">About us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Services</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Testimonies</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Call to Prayer</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Sunday Worship Services</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Midweek Services</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Special Services</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Youth and Children's Services</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Small Group Meetings</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Subscribe to our newsletter</p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>JPS Ministry</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
