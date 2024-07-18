import { yupResolver } from "@hookform/resolvers/yup";
import { IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import * as Yup from "yup";
import {
  CustomDateTimePicker,
  CustomTextField,
} from "../../components/CustomTextField";
import { Link, useNavigate } from "react-router-dom";
import { CREATE_USER } from "../../graphql/user";
import { useMutation } from "@apollo/client";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function SignUp() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [showPwd, setShowPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);

  const [createUser, { loading }] = useMutation(CREATE_USER);

  const {
    control,
    handleSubmit,
    reset,
    trigger,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: validator,
    defaultValues: {},
  });

  const onSubmit = async () => {
    const isValid = await trigger([
      "first_name",
      "last_name",
      "phone",
      "email",
      "gender",
      "dob",
      "password",
      "confirm_password",
      "address",
    ]);

    if (isValid)
      try {
        await createUser({
          variables: {
            input: {
              first_name: watch("first_name"),
              last_name: watch("last_name"),
              phone: watch("phone"),
              email: watch("email"),
              gender: watch("gender"),
              dob: watch("dob"),
              address: watch("address"),
              password: watch("password"),
              // confirm_password: watch("confirm_password"),
            },
          },
        });

        reset();
        toast.success("User Successfully Registered!", { autoClose: 500 });

        navigate("/login", { state: { unverified: true } });
      } catch (error) {
        console.log(error);
        toast.error(error.message, {
          autoClose: 500,
        });
      }
  };

  return (
    <main id="home-main">
      <div class="page-title" data-aos="fade">
        <div class="heading">
          <div class="container">
            <div class="row d-flex justify-content-center text-center">
              <div class="col-lg-8">
                <div className="section-title mt-4">
                  <h2>Sign Up</h2>
                  <p>Sign Up</p>
                </div>
                <p class="mb-0">
                  {/* Your financial contributions play a crucial role in sustaining
                  our ministries and outreach efforts. Whether you choose to
                  make a one-time donation or become a regular supporter, your
                  generosity helps us continue to meet the spiritual and
                  practical needs of those we serve. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        id="contact"
        class="contact section-bg"
        style={{ paddingTop: 0 }}
      >
        <div class="container" data-aos="fade-up">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <form class="php-email-form">
                <div class="row">
                  <div class="col-md-6 form-group">
                    <CustomTextField
                      control={control}
                      name={"first_name"}
                      label={"First Name"}
                    />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <CustomTextField
                      control={control}
                      name={"last_name"}
                      label={"Last Name"}
                    />
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col-md-6 form-group">
                    <CustomTextField
                      control={control}
                      name={"phone"}
                      label={"Phone"}
                    />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <CustomTextField
                      control={control}
                      name={"email"}
                      label={"Email"}
                    />
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-6 form-group">
                    <CustomTextField
                      control={control}
                      name={"gender"}
                      label={"Gender"}
                      select
                      options={["Male", "Female"]}
                    />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <CustomDateTimePicker
                      control={control}
                      name={"dob"}
                      label={"Date of Birth"}
                    />
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col-md-6 form-group">
                    <CustomTextField
                      control={control}
                      name={"password"}
                      label={"Password"}
                      type={showPwd ? "text" : "password"}
                      endAdornment={
                        <IconButton onClick={() => setShowPwd(!showPwd)}>
                          {!showPwd ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      }
                    />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <CustomTextField
                      control={control}
                      name={"confirm_password"}
                      label={"Confirm Password"}
                      type={showConfirmPwd ? "text" : "password"}
                      endAdornment={
                        <IconButton
                          onClick={() => setShowConfirmPwd(!showConfirmPwd)}
                        >
                          {!showConfirmPwd ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      }
                    />
                  </div>
                </div>

                <div class="form-group mt-3">
                  <CustomTextField
                    control={control}
                    name={"address"}
                    label={"Address"}
                    multiline
                    rows={1}
                  />
                </div>

                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div class="text-center">
                  <button
                    className="submit-btn"
                    type="button"
                    onClick={loading ? () => {} : onSubmit}
                  >
                    {t(loading ? "Loading..." : "Sign Up")}
                  </button>
                </div>

                <div className="col-12">
                  <p className="small mb-0">
                    {t("Already Registered?")}{" "}
                    <Link to={"/login"}>{t("Sign In")}</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const validator = yupResolver(
  Yup.object().shape({
    first_name: Yup.string().required("First Name is required!"),
    last_name: Yup.string().required("Last Name is required!"),
    phone: Yup.string().required("Phone is required!"),
    email: Yup.string()
      .email("Enter a Valid Email!")
      .required("Email is required!"),
    gender: Yup.string().required("Gender is required!"),
    dob: Yup.date().required("Date of Birth is required!"),
    address: Yup.string().required("Address is required!"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required!"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required!"),
  })
);
