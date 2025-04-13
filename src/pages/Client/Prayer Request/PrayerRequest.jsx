import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
import {
  CustomAutoComplete,
  CustomTextField,
} from "../../../components/CustomTextField";
import { CREATE_PRAYER_REQUEST } from "../../../graphql/prayer_request";

export default function PrayerRequest() {
  const { t } = useTranslation();

  const { currentUser } = useSelector((state) => state.auth);

  const [createRecord, { loading }] = useMutation(CREATE_PRAYER_REQUEST);

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

  useEffect(() => {
    setValue("first_name", currentUser?.first_name);
    setValue("last_name", currentUser?.last_name);
    setValue("email", currentUser?.email);
    setValue("phone", currentUser?.phone);
  }, []);

  console.log(errors);

  const onSubmit = async (values) => {
    try {
      const { data } = await createRecord({
        variables: {
          input: {
            ...values,
          },
        },
      });

      reset();
      toast.success("You have Successfully registered for Prayer Request !", {
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
                  <h2>Prayer Request</h2>
                  <p>{t("Prayer Request")}</p>
                </div>
                <p class="mb-0">
                  At JPS Church, we believe in the power of prayer and the
                  comfort it brings. Whether you are facing a challenging
                  situation, seeking guidance, or celebrating a blessing, we are
                  here to pray with you and for you. How to Submit a Prayer
                  Request Please fill out the form below to submit your prayer
                  request. Our dedicated prayer team will lift your concerns and
                  praises in prayer. Your prayer requests are treated with the
                  utmost respect and confidentiality. You can choose to share
                  your request with our prayer team only or have it included in
                  our church-wide prayer list.
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
              <form class="php-email-form" onSubmit={handleSubmit(onSubmit)}>
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
                    <CustomTextField
                      control={control}
                      name={"gender"}
                      select
                      label={"Gender"}
                      options={["Male", "Female"]}
                    />{" "}
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <CustomTextField
                      control={control}
                      name={"age"}
                      label={"Age"}
                      type={"number"}
                    />
                  </div>
                </div>
                <div class="form-group mt-3">
                  <CustomAutoComplete
                    control={control}
                    name={"prayer_issue"}
                    label={"Prayer Issue"}
                    options={[
                      {
                        id: "Mental Issues",
                        name: "Mental Issues",
                      },
                      {
                        id: "Addiction",
                        name: "Addiction",
                      },
                      {
                        id: "Back Pain",
                        name: "Back Pain",
                      },
                      {
                        id: "Severe Headache",
                        name: "Severe Headache",
                      },
                      {
                        id: "Miscarriage",
                        name: "Miscarriage",
                      },
                      {
                        id: "Other",
                        name: "Other",
                      },
                    ]}
                  />
                </div>
                {watch("prayer_issue") === "Other" && (
                  <div class="form-group mt-3">
                    <CustomTextField
                      control={control}
                      name={"other_prayer_issue"}
                      label={"Other Prayer Issue"}
                    />
                  </div>
                )}{" "}
                <div class="form-group mt-3">
                  <CustomTextField
                    control={control}
                    name={"address"}
                    label={"Address"}
                  />
                </div>{" "}
                <div class="form-group mt-3">
                  <CustomTextField
                    control={control}
                    name={"prayer_issue_description"}
                    label={"Prayer Issue Description"}
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
                  <div className="d-flex justify-content-center">
                    <button
                      className="submit-btn"
                      type={loading ? "button" : "submit"}
                      //   onClick={loading ? () => {} : onSubmit}
                    >
                      {t(loading ? "Loading..." : "Submit")}
                    </button>
                  </div>
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
    address: Yup.string().required("Address is required"),
    age: Yup.number()
      .required("Age is required")
      .integer("Age must be an integer"),
    // amount: Yup.string().required("Amount is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    first_name: Yup.string().required("First name is required"),
    gender: Yup.string().required("Gender is required"),
    last_name: Yup.string().required("Last name is required"),
    prayer_issue: Yup.string().required("Prayer issue is required"),
    other_prayer_issue: Yup.string().when("prayer_issue", {
      is: (value) => value === "Other",
      then: (schema) => schema.required("Other prayer issue is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    phone: Yup.string().required("Phone is required"),
    prayer_issue_description: Yup.string().required(
      "Prayer issue description is required"
    ),
  })
);
