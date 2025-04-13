import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { CustomTextField } from "../../components/CustomTextField";
import { RESET_PASSWORD } from "../../graphql/user";
import "./status.css";

export default function ResetPassword() {
  const params = useParams();
  const navigate = useNavigate();

  const [resetPwd, { loading }] = useMutation(RESET_PASSWORD);

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

  const onSubmit = async (values) => {
    try {
      const { data } = await resetPwd({
        variables: {
          email: values.email,
          newPassword: values.newPassword,
          resetToken: params?.token,
        },
      });

      navigate("/login");
      toast.success("Password Reset Successfully!", { autoClose: 500 });
    } catch (error) {
      toast.error(error.message, {
        autoClose: 500,
      });
    }
  };

  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="message-box _success">
              {/* <i className="bi bi-check-circle-fill" aria-hidden="true"></i> */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Reset Password </h2>
                <p>
                  <CustomTextField
                    control={control}
                    name={"email"}
                    label={"Email"}
                  />
                </p>
                <p>
                  <CustomTextField
                    control={control}
                    name={"newPassword"}
                    label={"New Password"}
                    type={"password"}
                  />
                </p>
                <p>
                  <CustomTextField
                    control={control}
                    name={"confirmNewPassword"}
                    label={"Confirm New Password"}
                    type={"password"}
                  />
                </p>{" "}
                <div className="text-center mt-4">
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const validator = yupResolver(
  Yup.object().shape({
    email: Yup.string()
      .email("Enter a Valid Email!")
      .required("Email is required!"),
    newPassword: Yup.string().required("New Password is Required").min(6),
    confirmNewPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Confirm Password is required!"),
    // .matches(strongPasswordRegex, "Use strong passowrd"),
  })
);
