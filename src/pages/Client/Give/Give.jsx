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
import { CREATE_DONATION } from "../../../graphql/donation";
import GivePaypalButton from "./GivePaypalButton";

export default function Give() {
  const { t } = useTranslation();

  const { currentUser } = useSelector((state) => state.auth);

  const [createPartnership, { loading }] = useMutation(CREATE_DONATION);

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

  useEffect(() => {
    setValue("first_name", currentUser?.first_name);
    setValue("last_name", currentUser?.last_name);
    setValue("email", currentUser?.email);
    setValue("phone", currentUser?.phone);
  }, []);

  const onSubmit = async (values) => {
    const isValid = await trigger([
      "first_name",
      "last_name",
      "phone",
      "email",
      "payment_method",
      "amount",
      "currency",
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
              amount: parseFloat(watch("amount")),
              currency: watch("currency"),
              additional_message: watch("additional_message"),
            },
          },
        });

        if (data?.createDonation?.status === "success") {
          window.location = data?.createDonation?.data?.checkout_url;
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
                  <h2>{t("Give")}</h2>
                  <p>{t("Give to Church")}</p>
                </div>
                <p class="mb-0">{t("Give to Church Body")}</p>
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

                <div class="form-group mt-3">
                  <CustomTextField
                    control={control}
                    name={"message"}
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
                  {" "}
                  {watch("payment_method") === "Paypal" ? (
                    <GivePaypalButton watch={watch} trigger={trigger} />
                  ) : (
                    <div className="d-flex justify-content-center">
                      <button
                        className="submit-btn"
                        type="button"
                        onClick={loading ? () => {} : onSubmit}
                      >
                        {t(loading ? "Loading..." : "Give")}
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
    first_name: Yup.string().required("First Name is required!"),
    last_name: Yup.string().required("Last Name is required!"),
    phone: Yup.string().required("Phone is required!"),
    email: Yup.string()
      .email("Enter a Valid Email!")
      .required("Email is required!"),
    payment_method: Yup.string().required("Payment Method is required!"),
    currency: Yup.string().required("Currency is required!"),
    amount: Yup.number().min(0).required("Amount is required!"),
    additional_message: Yup.string().notRequired(),
  })
);
