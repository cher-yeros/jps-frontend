import { yupResolver } from "@hookform/resolvers/yup";
import { Visibility } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { CustomTextField } from "../../components/CustomTextField";

export default function MyProfile() {
  const { currentUser } = useSelector((state) => state.auth);
  // const { data, loading } = useQuery(GET_USER, {
  //   variables: { id: currentUser.id },
  // });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: validator,
    defaultValues: {},
  });

  return (
    <main id="home-main" className="home-main px-5">
      <div className="pagetitle">
        <h1>Profile</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">Users</li>
            <li className="breadcrumb-item active">Profile</li>
          </ol>
        </nav>
      </div>
      {/* <!-- End Page Title --> */}

      <section className="section profile">
        <div className="row">
          <div className="col-xl-4">
            <div className="card">
              <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                <img
                  src={currentUser?.avatar}
                  alt="Profile"
                  className="rounded-circle"
                />
                <h2>{currentUser?.firstname + " " + currentUser.lastname}</h2>
                <h3>{currentUser?.role}</h3>
              </div>
            </div>
          </div>

          <div className="col-xl-8">
            <div className="card">
              <div className="card-body pt-3">
                {/* <!-- Bordered Tabs --> */}
                <ul className="nav nav-tabs nav-tabs-bordered">
                  <li className="nav-item">
                    <button
                      className="nav-link active"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-overview"
                    >
                      Overview
                    </button>
                  </li>

                  <li className="nav-item">
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-change-password"
                    >
                      Change Password
                    </button>
                  </li>
                </ul>
                <div className="tab-content pt-2">
                  <div
                    className="tab-pane fade show active profile-overview"
                    id="profile-overview"
                  >
                    <h5 className="card-title">About</h5>
                    <p className="small fst-italic">
                      {currentUser?.role === "freelance" && currentUser?.bio}
                    </p>

                    <h5 className="card-title">Profile Details</h5>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Full Name</div>
                      <div className="col-lg-9 col-md-8">
                        {currentUser?.firstname + " " + currentUser.lastname}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Phone</div>
                      <div className="col-lg-9 col-md-8">
                        {currentUser?.phone}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Email</div>
                      <div className="col-lg-9 col-md-8">
                        {currentUser?.email}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Address</div>
                      <div className="col-lg-9 col-md-8">
                        {currentUser?.address}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Gender</div>
                      <div className="col-lg-9 col-md-8">
                        {currentUser?.gender}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Portfolio</div>
                      <div className="col-lg-9 col-md-8">
                        {currentUser?.portfolio_dir}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Skills</div>
                      <div className="col-lg-9 col-md-8"></div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-6 label">
                        User Balance
                      </div>
                      <div className="col-lg-9 col-md-6"></div>{" "}
                    </div>
                  </div>

                  <div
                    className="tab-pane fade pt-3"
                    id="profile-change-password"
                  >
                    {/* <!-- Change Password Form --> */}
                    <form>
                      <div className="row mb-3">
                        <CustomTextField
                          control={control}
                          name={"current_password"}
                          label={"Current Password"}
                          type={"password"}
                          InputProps={{
                            endAdornment: (
                              <IconButton>
                                <Visibility />
                              </IconButton>
                            ),
                          }}
                        />
                        <CustomTextField
                          control={control}
                          name={"new_password"}
                          label={"New Password"}
                          type={"password"}
                          InputProps={{
                            endAdornment: (
                              <IconButton>
                                <Visibility />
                              </IconButton>
                            ),
                          }}
                        />
                        <CustomTextField
                          control={control}
                          name={"confirm_new_password"}
                          label={"Confirm New Password"}
                          type={"password"}
                          InputProps={{
                            endAdornment: (
                              <IconButton>
                                <Visibility />
                              </IconButton>
                            ),
                          }}
                        />
                      </div>

                      <div className="text-center">
                        <button type="submit" className="btn btn-primary">
                          Change Password
                        </button>
                      </div>
                    </form>
                    {/* <!-- End Change Password Form --> */}
                  </div>
                </div>
                {/* <!-- End Bordered Tabs --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

const validator = yupResolver(
  Yup.object().shape({
    email: Yup.string().email().required(),
    // password: Yup.string()
    //   .required("Required")
    //   .min(6)
    //   .matches(strongPasswordRegex, "Use strong passowrd"),
  })
);
