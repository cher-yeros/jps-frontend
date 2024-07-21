import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { CustomTextField } from "../../../components/CustomTextField";
import { CREATE_PARTNERSHIP } from "../../../graphql/partnership";
import OneTimePaypalButton from "./OneTimePaypalButton";

export default function Partnership() {
  const { t } = useTranslation();

  const { currentUser } = useSelector((state) => state.auth);

  const [createPartnership, { loading }] = useMutation(CREATE_PARTNERSHIP);

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
      partnership_plan: "1",
      currency: "ETB",
      partnership_type: "Recurring",
    },
  });

  useEffect(() => {
    setValue("first_name", currentUser?.first_name);
    setValue("last_name", currentUser?.last_name);
    setValue("email", currentUser?.email);
    setValue("phone", currentUser?.phone);
  }, []);

  const types = [
    { label: "Monthly", value: "1" },
    { label: "Quarterly", value: "3" },
    { label: "Half-Anually", value: "6" },
    { label: "Anually", value: "12" },
  ];

  const onSubmit = async (values) => {
    const isValid = await trigger([
      "firstname",
      "lastname",
      "phone",
      "email",
      "payment_method",
      "partnership_plan",
      "amount",
      "currency",
      "address",
      "additional_message",
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
              partnership_plan: watch("partnership_plan"),
              partnership_type: watch("partnership_type"),
              amount: parseFloat(watch("amount")),
              currency: watch("currency"),
              address: watch("address"),
              additional_message: watch("additional_message"),
            },
          },
        });

        if (data?.createPartnership?.status === "success") {
          window.location = data?.createPartnership?.data?.checkout_url;
        }
        // reset();
        toast.success("You have Successfully registered for partnership !", {
          autoClose: 500,
        });
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
                  <h2>{t("Partnership")}</h2>
                  <p>{t("Be our partner")}</p>
                </div>
                <p class="mb-0">{t("Be our partner Body")}</p>
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

                <div class="form-group mt-3">
                  <CustomTextField
                    control={control}
                    name={"payment_method"}
                    select
                    label={"Payment Method"}
                    options={["Local Currency", "Paypal"]}
                  />
                </div>

                <div className="row">
                  <div className="col-sm-12 col-lg-8">
                    <CustomTextField
                      control={control}
                      name={"amount"}
                      label={"Amount"}
                      type="number"
                      flex={1}
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

                <div class="row mt-3 ">
                  {types?.map((t) => (
                    <div className="col-md-6 col-lg-3 pb-1">
                      <button
                        className="submit-btn"
                        type="button"
                        style={{
                          width: "100%",
                          background:
                            watch("partnership_plan") !== t?.value &&
                            "transparent",
                          border: "1px solid #ed502e",
                          color:
                            watch("partnership_plan") !== t?.value && "#ed502e",
                        }}
                        onClick={() => setValue("partnership_plan", t.value)}
                      >
                        {t?.label}
                      </button>
                    </div>
                  ))}
                </div>
                <div className="form-group mt-3">
                  <CustomTextField
                    control={control}
                    name={"address"}
                    label={"Address"}
                    x
                  />{" "}
                </div>
                <div class="form-group mt-3">
                  <CustomTextField
                    control={control}
                    name={"additional_message"}
                    label={"Message"}
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
                    // watch("partnership_type") === "One Time" ? (

                    // ) : (
                    //   <RecurringPaypalButton watch={watch} trigger={trigger} />
                    // )

                    <OneTimePaypalButton watch={watch} trigger={trigger} />
                  ) : (
                    <div className="d-flex justify-content-center">
                      <button
                        className="submit-btn btn-block"
                        type="button"
                        onClick={loading ? () => {} : onSubmit}
                      >
                        {t(loading ? "Loading..." : "Register")}
                      </button>
                    </div>
                  )}{" "}
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
    partnership_type: Yup.string().required("partnership Type is required!"),
    partnership_plan: Yup.string().when("partnership_type", {
      is: (value) => value !== "One Time",
      then: (schema) => schema.required("Partnership Plan is required!"),
      otherwise: (schema) =>
        schema.notRequired("partnership Plan is required!"),
    }),
    amount: Yup.number().min(0).required("Amount is required!"),
    payment_method: Yup.string().required("Payment Method is required!"),
    // church_name: Yup.string().required("Church Name is is required!"),
    address: Yup.string().required("Address is required!"),
    additional_message: Yup.string().notRequired(),
  })
);
