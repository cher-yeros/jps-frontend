import React from "react";
import { useLocation } from "react-router";

export default function SingleBlog() {
  const { state } = useLocation();

  return (
    <main id="home-main">
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <div className="section-title mt-4">
                  <h2>Programs</h2>
                  <p>{state?.blog?.title}</p>
                </div>
                <p className="mb-0"></p>
                {/* <a href="contact.html" className="cta-btn">
                  Available for Hire
                  <br />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="news-single nav-arrow-b">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="news-img-box d-flex justify-content-center">
                <img src={state?.blog?.image} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <div className="post-information">
                <ul className="list-inline text-center color-a">
                  <li className="list-inline-item mr-2">
                    <strong>Author: </strong>
                    <span className="color-text-a">Morgan Jimenez</span>
                  </li>
                  <li className="list-inline-item mr-2">
                    <strong>Category: </strong>
                    <span className="color-text-a">Travel</span>
                  </li>
                  <li className="list-inline-item">
                    <strong>Date: </strong>
                    <span className="color-text-a">19 Apr. 2017</span>
                  </li>
                </ul>
              </div>
              <div className="post-content color-text-a">
                <p className="post-intro">{state?.blog?.excerpt}</p>
                {state?.blog?.title}
                <br />
                <pre style={{ fontSize: "inherit", fontFamily: "inherit" }}>
                  {state?.blog?.body}
                </pre>
                <blockquote className="blockquote">
                  <p className="mb-4">
                    "Be kind and compassionate to one another, forgiving each
                    other, just as in Christ God forgave you."
                  </p>
                  <footer className="blockquote-footer">
                    <strong> Ephesians 4:32 (NIV): </strong>
                    <cite title="Source Title"></cite>
                  </footer>
                </blockquote>
              </div>

              <div className="post-footer">
                <div className="post-share">
                  <span>Share: </span>
                  <ul className="list-inline socials">
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="bi bi-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="bi bi-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="bi bi-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="bi bi-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="col-md-10 offset-md-1 col-lg-10 offset-lg-1">
              <div className="title-box-d">
                <h3 className="title-d">Comments (4)</h3>
              </div>
              <div className="box-comments">
                <ul className="list-comments">
                  <li>
                    <div className="comment-avatar">
                      <img src="/assets/img/author-2.jpg" alt="" />
                    </div>
                    <div className="comment-details">
                      <h4 className="comment-author">Emma Stone</h4>
                      <span>18 Sep 2017</span>
                      <p className="comment-description">
                        Ephesians 4:32 is such a powerful reminder of the
                        importance of forgiveness in our Christian walk. It
                        challenges me to extend grace to others just as God has
                        shown me grace.
                      </p>
                      <a href="3">Reply</a>
                    </div>
                  </li>
                  <li className="comment-children">
                    <div className="comment-avatar">
                      <img src="/assets/img/author-1.jpg" alt="" />
                    </div>
                    <div className="comment-details">
                      <h4 className="comment-author">Oliver Colmenares</h4>
                      <span>18 Sep 2017</span>
                      <p className="comment-description">
                        "I've been struggling with forgiving someone who hurt me
                        deeply. This verse encourages me to pray for the
                        strength to forgive as Christ forgave. Thank you for
                        sharing."
                      </p>
                      <a href="3">Reply</a>
                    </div>
                  </li>
                  <li>
                    <div className="comment-avatar">
                      <img src="/assets/img/author-2.jpg" alt="" />
                    </div>
                    <div className="comment-details">
                      <h4 className="comment-author">Emma Stone</h4>
                      <span>18 Sep 2017</span>
                      <p className="comment-description">
                        This verse has been my anchor during tough times. It
                        reminds me that God's love is unconditional and His
                        forgiveness knows no bounds. Let's strive to mirror His
                        grace in our interactions."
                      </p>
                      <a href="3">Reply</a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="form-comments">
                <div className="title-box-d">
                  <h3 className="title-d">Leave a Reply</h3>
                </div>
                <form className="form-a">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label for="inputName">Enter name</label>
                        <input
                          type="text"
                          className="form-control form-control-lg form-control-a"
                          id="inputName"
                          placeholder="Name *"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label for="inputEmail1">Enter email</label>
                        <input
                          type="email"
                          className="form-control form-control-lg form-control-a"
                          id="inputEmail1"
                          placeholder="Email *"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="form-group">
                        <label for="inputUrl">Enter website</label>
                        <input
                          type="url"
                          className="form-control form-control-lg form-control-a"
                          id="inputUrl"
                          placeholder="Website"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="form-group">
                        <label for="textMessage">Enter message</label>
                        <textarea
                          id="textMessage"
                          className="form-control"
                          placeholder="Comment *"
                          name="message"
                          cols="45"
                          rows="8"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="btn btn-a">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* <!-- End Blog Single--> */}
    </main>
  );
}
