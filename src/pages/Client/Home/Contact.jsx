import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { CustomTextField } from "../../../components/CustomTextField";
import { CREATE_FEEDBACK } from "../../../graphql/user";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";

export default function Contact() {
  const { t } = useTranslation();

  const [sendFeedback, { loading }] = useMutation(CREATE_FEEDBACK);
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
      const { data } = await sendFeedback({
        variables: {
          input: {
            ...values,
          },
        },
      });

      if (data?.createPartnership?.status === "success") {
        window.location = data?.createPartnership?.data?.checkout_url;
      }
      reset();
      toast.success("You have Successfully Contacted !", {
        autoClose: 500,
      });
    } catch (error) {
      toast.error(error.message, {
        autoClose: 500,
      });
    }
  };

  return (
    <section id="contact" className="contact section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{t("Contact")}</h2>
          <p>{t("Contact Us")}</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-12">
                <div className="info-box">
                  <i className="bx bx-map"></i>
                  <h3>{t("Our Address")}</h3>
                  <p>{t("Bole Rwanda Street, Behind Rwanda Embassy")}</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-envelope"></i>
                  <h3>{t("Email Us")}</h3>
                  <p>
                    info@example.com
                    <br />
                    contact@example.com
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-phone-call"></i>
                  <h3>{t("Call Us")}</h3>
                  <p>
                    +251 589 558 55
                    <br />
                    +251 678 255 41
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <form className="php-email-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-md-6 form-group">
                  <CustomTextField
                    control={control}
                    name={"name"}
                    label={"Full Name"}
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <CustomTextField
                    control={control}
                    name={"email"}
                    label={"Email"}
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <CustomTextField
                  control={control}
                  name={"phone"}
                  label={"Phone Number"}
                />
              </div>
              <div className="form-group mt-3">
                <CustomTextField
                  control={control}
                  name={"subject"}
                  label={"Subject"}
                />
              </div>
              <div className="form-group mt-3">
                <CustomTextField
                  control={control}
                  name={"message"}
                  label={"Your Message"}
                  multiline
                  rows={4}
                />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">
                  {t(loading ? "Loading..." : "Send Message")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

const validator = yupResolver(
  Yup.object().shape({
    name: Yup.string().required("First Name is required!"),
    phone: Yup.string().required("Phone is required!"),
    email: Yup.string()
      .email("Enter a Valid Email!")
      .required("Email is required!"),

    subject: Yup.string().required("Address is required!"),
    message: Yup.string().required(),
  })
);
