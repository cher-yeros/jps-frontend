import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
import {
  CustomDateTimePicker,
  CustomTextField,
} from "../../../components/CustomTextField";
import { CREATE_VISITOR } from "../../../graphql/visitor";
import PaypalButtonVisitor from "./PaypalButtonVisitor";

export default function Visitors() {
  const { t } = useTranslation();

  const { currentUser } = useSelector((state) => state.auth);

  const [createPartnership, { loading }] = useMutation(CREATE_VISITOR);

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
      currency: "ETB",
      payment_amount: 5000,
    },
  });

  useEffect(() => {
    setValue("first_name", currentUser?.first_name);
    setValue("last_name", currentUser?.last_name);
    setValue("email", currentUser?.email);
    setValue("phone", currentUser?.phone);
  }, []);

  useEffect(() => {
    if (watch("currency") === "ETB") {
      setValue("payment_amount", 5000);
    } else {
      setValue("payment_amount", 300);
    }
  }, [watch("currency")]);

  const onSubmit = async (values) => {
    const isValid = await trigger([
      "first_name",
      "last_name",
      "phone",
      "email",
      "payment_method",
      "payment_amount",
      "currency",
      "date",
      "address",
      "request_detail",
    ]);

    if (isValid)
      try {
        const { data } = await createPartnership({
          variables: {
            input: {
              first_name: watch("first_name"),
              last_name: watch("last_name"),
              phone: watch("phone"),
              email: watch("email"),
              payment_method: watch("payment_method"),
              payment_amount: parseFloat(watch("payment_amount")),
              currency: watch("currency"),
              date: watch("date"),
              address: watch("address"),
              request_detail: watch("request_detail"),
            },
          },
        });

        if (data?.createVisitor?.status === "success") {
          window.location = data?.createVisitor?.data?.checkout_url;
        }
        // reset();
        toast.success(
          "You have Successfully registered for Visitors Program !",
          {
            autoClose: 500,
          }
        );
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
                  <h2>Visitors</h2>
                  <p>{t("National and International Visitors")}</p>
                </div>
                <p class="mb-0">
                  {t("National and International Visitors Body")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="contact" class="contact section-bg">
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

                <div class="row mt-0">
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
                <div class="row mt-0">
                  <div class="col-md-6 form-group">
                    <CustomDateTimePicker
                      control={control}
                      name={"date"}
                      label={"Date"}
                    />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <CustomTextField
                      control={control}
                      name={"payment_method"}
                      select
                      label={"Payment Method"}
                      options={["Local Currency", "Paypal"]}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12 col-lg-8">
                    <CustomTextField
                      control={control}
                      name={"payment_amount"}
                      label={"Amount"}
                      type="number"
                      flex={1}
                      disabled
                      endAdornment={
                        <Typography color={"GrayText"}>
                          {t(watch("currency"))}
                        </Typography>
                      }
                    />
                  </div>
                  <div className="col-sm-12 col-lg-4 mt-3">
                    {" "}
                    <div class="d-flex align-items-stretch justify-content-center gap-2 ">
                      <button
                        className="submit-btn"
                        type="button"
                        style={{
                          flex: 1,
                          background:
                            watch("currency") !== "ETB" && "transparent",
                          border: "1px solid #ed502e",
                          color: watch("currency") !== "ETB" && "#ed502e",
                          padding: "14px 30px",
                        }}
                        onClick={() => setValue("currency", "ETB")}
                      >
                        {t("ETB")}
                      </button>
                      <button
                        className="submit-btn"
                        type="button"
                        style={{
                          flex: 1,
                          background:
                            watch("currency") !== "USD" && "transparent",
                          border: "1px solid #ed502e",
                          color: watch("currency") !== "USD" && "#ed502e",
                        }}
                        onClick={() => setValue("currency", "USD")}
                      >
                        {t("USD")}
                      </button>
                    </div>
                  </div>
                </div>

                <div class="form-group mt-3">
                  <CustomTextField
                    control={control}
                    name={"address"}
                    label={"Address"}
                  />
                </div>
                <div class="form-group mt-3">
                  <CustomTextField
                    control={control}
                    name={"request_detail"}
                    label={"Request Detail"}
                    multiline
                    rows={3}
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
                  {watch("payment_method") === "Paypal" ? (
                    <PaypalButtonVisitor watch={watch} trigger={trigger} />
                  ) : (
                    <div className="d-flex justify-content-center">
                      <button
                        className="submit-btn"
                        type="button"
                        onClick={loading ? () => {} : onSubmit}
                      >
                        {t(loading ? "Loading..." : "Register")}
                      </button>
                    </div>
                  )}
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
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    address: Yup.string().required("Address is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    payment_amount: Yup.number()
      .positive("Payment amount must be a positive number")
      .required("Payment amount is required"),
    date: Yup.date().required("Payment method is required"),
    payment_method: Yup.string().required("Payment method is required"),
    phone: Yup.string().required("Phone is required"),
    request_detail: Yup.string().required("Request detail is required"),
    user_id: Yup.number().integer("User ID must be an integer").optional(),
  })
);
