import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Stack, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { CustomTextField } from "../../../components/CustomTextField";
import { CREATE_PARTNERSHIP } from "../../../graphql/partnership";

export default function Visitors() {
  const { t } = useTranslation();

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
      plan: "Monthly",
      currency: "ETB",
    },
  });

  const onSubmit = async (values) => {
    const isValid = await trigger([
      "firstname",
      "lastname",
      "phone",
      "email",
      "payment_method",
      "plan",
      "amount",
      "currency",
      "message",
    ]);

    if (isValid)
      try {
        const { data } = await createPartnership({
          variables: {
            input: {
              firstname: watch("firstname"),
              lastname: watch("lastname"),
              phone: watch("phone"),
              email: watch("email"),
              payment_method: watch("payment_method"),
              plan: watch("plan"),
              amount: parseFloat(watch("amount")),
              currency: watch("currency"),
              message: watch("message"),
            },
          },
        });

        if (data?.createPartnership?.status === "success") {
          window.open(data?.createPartnership?.data?.checkout_url, "_blank");
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
                {/* <div class="d-flex align-items-center justify-content-center gap-2 mb-2">
                  <button className="submit-btn"
                    type="button"
                    style={{
                      flex: 1,
                      background: currency !== "ETB" && "transparent",
                      border: "1px solid #ed502e",
                      color: currency !== "ETB" && "#ed502e",
                    }}
                    onClick={() => setValue("currency","ETB")}
                  >
                    Local Currency (ETB)
                  </button>
                  <button className="submit-btn"
                    type="button"
                    style={{
                      flex: 1,
                      background: currency !== "USD" && "transparent",
                      border: "1px solid #ed502e",
                      color: currency !== "USD" && "#ed502e",
                    }}
                    onClick={() => setValue("currency","USD")}
                  >
                    Foreign Currency (USD)
                  </button>
                </div> */}

                <div class="row">
                  <div class="col-md-6 form-group">
                    <CustomTextField
                      control={control}
                      name={"firstname"}
                      label={"First Name"}
                    />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <CustomTextField
                      control={control}
                      name={"lastname"}
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
                    options={["Local Currency", "International Card", "Paypal"]}
                  />
                </div>
                <Stack direction={"row"} alignItems={"end"} spacing={2}>
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

                  <div class="d-flex align-items-stretch justify-content-center gap-2 mb-2">
                    <button
                      className="submit-btn"
                      type="button"
                      style={{
                        flex: 1,
                        background:
                          watch("currency") !== "ETB" && "transparent",
                        border: "1px solid #ed502e",
                        color: watch("currency") !== "ETB" && "#ed502e",
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
                </Stack>
                {/* <div class="form-group mt-3 d-flex gap-4">
                  {types?.map((t) => (
                    <button
                      className="submit-btn"
                      type="button"
                      style={{
                        flex: 1,
                        background: watch("plan") !== t && "transparent",
                        border: "1px solid #ed502e",
                        color: watch("plan") !== t && "#ed502e",
                      }}
                      onClick={() => setValue("plan", t)}
                    >
                      {t}
                    </button>
                  ))}
                </div> */}
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
                  <button
                    className="submit-btn"
                    type="button"
                    onClick={loading ? () => {} : onSubmit}
                  >
                    {t(loading ? "Loading..." : "Register")}
                  </button>
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
    firstname: Yup.string().required("First Name is required!"),
    lastname: Yup.string().required("Last Name is required!"),
    phone: Yup.string().required("Phone is required!"),
    email: Yup.string()
      .email("Enter a Valid Email!")
      .required("Email is required!"),
    payment_method: Yup.string().required("Payment Method is required!"),
    currency: Yup.string().required("Currency is required!"),
    amount: Yup.number().min(0).required("Amount is required!"),
    plan: Yup.string().required("Plan is required!"),
    message: Yup.string().notRequired(),
  })
);
