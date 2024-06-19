import React from "react";

export default function HomeFooter() {
  return (
    <footer id="home-footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="footer-info">
                <h3>JPS Ministry</h3>
                <p class="pb-3">
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
                <div class="social-links mt-3">
                  <a href="#" class="twitter">
                    <i class="bx bxl-twitter"></i>
                  </a>
                  <a href="#" class="facebook">
                    <i class="bx bxl-facebook"></i>
                  </a>
                  <a href="#" class="instagram">
                    <i class="bx bxl-instagram"></i>
                  </a>
                  <a href="#" class="google-plus">
                    <i class="bx bxl-skype"></i>
                  </a>
                  <a href="#" class="linkedin">
                    <i class="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Home</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">About us</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Services</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Testimonies</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Call to Prayer</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-2 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="#">Sunday Worship Services</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Midweek Services</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Special Services</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="#">Youth and Children's Services</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Small Group Meetings</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-4 col-md-6 footer-newsletter">
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

      <div class="container">
        <div class="copyright">
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
