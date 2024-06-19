import React from "react";

export default function WhyUs() {
  return (
    <section id="why-us" class="why-us section-bg">
      <div class="container-fluid" data-aos="fade-up">
        <div class="row">
          <div
            class="col-lg-5 align-items-stretch video-box"
            style={{ backgroundImage: "url('assets/img/thumb-1.jpg')" }}
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <a
              href="https://www.youtube.com/watch?v=16q9REoIH9E "
              class="venobox play-btn mb-4"
              data-vbtype="video"
              data-autoplay="true"
            ></a>
          </div>

          <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">
            <div class="content">
              <h3>
                In
                <strong> JPS Ministry</strong>
              </h3>
              <p>
                Whether you're seeking a new church home, exploring faith for
                the first time, or looking to deepen your spiritual journey, JPS
                Ministry welcomes you with open arms. Come and be a part of our
                family, where you can grow in faith, serve with love, and
                experience the transformative power of God's grace.
              </p>
            </div>

            <div class="accordion-list">
              <ul>
                <li>
                  <a
                    data-bs-toggle="collapse"
                    class="collapse"
                    data-bs-target="#accordion-list-1"
                  >
                    <span>01</span> Worship Services
                    <i class="bx bx-chevron-down icon-show"></i>
                    <i class="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="accordion-list-1"
                    class="collapse show"
                    data-bs-parent=".accordion-list"
                  >
                    <p>
                      Uplifting and spirit-filled worship every Sunday. Bible
                      Studies Engaging and informative Bible study groups for
                      Studies Engaging and informative Bible study groups for
                      Studies Engaging and informative Bible study groups for
                      all ages.?
                    </p>
                  </div>
                </li>

                <li>
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-list-2"
                    class="collapsed"
                  >
                    <span>02</span> Community Outreach:
                    <i class="bx bx-chevron-down icon-show"></i>
                    <i class="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="accordion-list-2"
                    class="collapse"
                    data-bs-parent=".accordion-list"
                  >
                    <p>
                      Various programs to support and uplift our local
                      community. Youth Programs: Dynamic activities and
                      mentorship for children and teenagers. mentorship for
                      children and teenagers. mentorship for children and
                      teenagers.
                    </p>
                  </div>
                </li>

                <li>
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-list-3"
                    class="collapsed"
                  >
                    <span>03</span> Counseling and Support
                    <i class="bx bx-chevron-down icon-show"></i>
                    <i class="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="accordion-list-3"
                    class="collapse"
                    data-bs-parent=".accordion-list"
                  >
                    <p>
                      Compassionate counseling services for individuals and
                      Compassionate counseling services for individuals and
                      Compassionate counseling services for individuals and
                      Compassionate counseling services for individuals and
                      families.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
