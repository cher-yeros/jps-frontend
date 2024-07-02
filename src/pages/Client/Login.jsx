import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Visibility, VisibilityOff, Warning } from "@mui/icons-material";
import { Alert, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { CustomTextField } from "../../components/CustomTextField";
import { LOGIN_USER } from "../../graphql/user";
import { loginFinished } from "../../redux/slices/authSlice";

export default function Login() {
  const { t } = useTranslation();
  const { state } = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPwd, setShowPwd] = useState(false);

  const [loginUser, { loading }] = useMutation(LOGIN_USER);

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
    defaultValues: {
      plan: "Monthly",
      currency: "ETB",
    },
  });

  const onSubmit = async () => {
    const isValid = await trigger(["email", "password"]);

    if (isValid)
      try {
        const { data } = await loginUser({
          variables: {
            input: {
              email: watch("email"),
              password: watch("password"),
            },
          },
        });

        dispatch(loginFinished(data?.loginUser));

        if (data?.loginUser?.user?.role === "admin") navigate("/admin");
        else navigate("/");

        reset();
        toast.success("You have Successfully logged in!", { autoClose: 500 });
      } catch (error) {
        toast.error(error.message, {
          autoClose: 500,
        });
      }
  };

  const resetPassword = async () => {
    const isValid = await trigger(["email"]);

    if (isValid)
      try {
        const { data } = await loginUser({
          variables: {
            input: {
              email: watch("email"),
              password: watch("password"),
            },
          },
        });

        dispatch(loginFinished(data?.loginUser));

        if (data?.loginUser?.user?.role === "admin") navigate("/admin");
        else navigate("/");

        reset();
        toast.success("You have Successfully logged in!", { autoClose: 500 });
      } catch (error) {
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
                  <h2>{t("Sign In")}</h2>
                  <p>{t("Sign In")}</p>
                </div>
                <p class="mb-0"></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="contact" class="contact section-bg">
        <div class="container" data-aos="fade-up">
          <div class="row justify-content-center">
            <div class="col-lg-5">
              <form class="php-email-form">
                <div className="pt-0 pb-2">
                  <h5 className="card-title text-center pb-0 fs-4">
                    {t("Login into an Account")}
                  </h5>
                  <p className="text-center small">
                    {t("Enter your personal details to login account")}
                  </p>
                </div>

                <div class="row">
                  <div class="col-md-12 form-group">
                    {state?.unverified && (
                      <Alert variant="filled" color="error" icon={<Warning />}>
                        {t("Please Check Your Email to Verify !")}
                      </Alert>
                    )}
                  </div>{" "}
                </div>
                <div class="row">
                  <div class="col-md-12 form-group">
                    <CustomTextField
                      control={control}
                      name={"email"}
                      label={"Email"}
                    />
                  </div>
                  <div class="col-md-12 form-group mt-3 mt-md-0">
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
                </div>

                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div class="text-center mt-3" style={{ marginTop: "2rem" }}>
                  <button
                    className="submit-btn"
                    type="button"
                    onClick={loading ? () => {} : onSubmit}
                  >
                    {t(loading ? "Loading..." : "Login")}
                  </button>
                </div>

                <div className="col-12">
                  <p className="small mb-0">
                    {t("Not sign up yet?")}{" "}
                    <Link to={"/sign-up"}>{t("Sign Up")}</Link>
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
    email: Yup.string()
      .email("Enter a Valid Email!")
      .required("Email is required!"),
    password: Yup.string().required("Password is Required").min(6),
    // .matches(strongPasswordRegex, "Use strong passowrd"),
  })
);
