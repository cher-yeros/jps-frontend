import { MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Partnership() {
  const [currency, setCurrency] = useState("ETB");
  const [type, setType] = useState("Weekly");

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "all",
    // resolver: validator,
    defaultValues: {},
  });

  const types = ["Weekly", "Monthly", "Quarterly", "Annually"];

  return (
    <main id="home-main">
      <div class="page-title" data-aos="fade">
        <div class="heading">
          <div class="container">
            <div class="row d-flex justify-content-center text-center">
              <div class="col-lg-8">
                <div className="section-title mt-4">
                  <h2>Partnership</h2>
                  <p>Be our partner</p>
                </div>
                <p class="mb-0">
                  Your financial contributions play a crucial role in sustaining
                  our ministries and outreach efforts. Whether you choose to
                  make a one-time donation or become a regular supporter, your
                  generosity helps us continue to meet the spiritual and
                  practical needs of those we serve.
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
                  <button
                    type="button"
                    style={{
                      flex: 1,
                      background: currency !== "ETB" && "transparent",
                      border: "1px solid #ed502e",
                      color: currency !== "ETB" && "#ed502e",
                    }}
                    onClick={() => setCurrency("ETB")}
                  >
                    Local Currency (ETB)
                  </button>
                  <button
                    type="button"
                    style={{
                      flex: 1,
                      background: currency !== "USD" && "transparent",
                      border: "1px solid #ed502e",
                      color: currency !== "USD" && "#ed502e",
                    }}
                    onClick={() => setCurrency("USD")}
                  >
                    Foreign Currency (USD)
                  </button>
                </div> */}

                <div class="row">
                  <div class="col-md-6 form-group">
                    <TextField fullWidth label={"First Name"} />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <TextField fullWidth label={"Last Name"} />
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col-md-6 form-group">
                    <TextField fullWidth label={"Phone"} />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <TextField fullWidth label={"Email"} />
                  </div>
                </div>

                <div class="form-group mt-3">
                  <TextField fullWidth select label={"Payment Method"}>
                    <MenuItem value="Telebirr">Telebirr</MenuItem>
                    <MenuItem value="CBE Birr">CBE Birr</MenuItem>
                    <MenuItem value="Master Card">Master Card</MenuItem>
                    <MenuItem value="Debit/Credit Card">
                      Debit/Credit Card
                    </MenuItem>
                    <MenuItem value="Paypal">Paypal</MenuItem>
                  </TextField>
                </div>
                <div class="form-group mt-3 d-flex gap-2 align-items-center">
                  <TextField fullWidth label={"Amount"} type="number" />

                  <div class="d-flex align-items-stretch justify-content-center gap-2 mb-2">
                    <button
                      type="button"
                      style={{
                        flex: 1,
                        background: currency !== "ETB" && "transparent",
                        border: "1px solid #ed502e",
                        color: currency !== "ETB" && "#ed502e",
                      }}
                      onClick={() => setCurrency("ETB")}
                    >
                      ETB
                    </button>
                    <button
                      type="button"
                      style={{
                        flex: 1,
                        background: currency !== "USD" && "transparent",
                        border: "1px solid #ed502e",
                        color: currency !== "USD" && "#ed502e",
                      }}
                      onClick={() => setCurrency("USD")}
                    >
                      USD
                    </button>
                  </div>
                </div>
                <div class="form-group mt-3 d-flex gap-4">
                  {types?.map((t) => (
                    <button
                      type="button"
                      style={{
                        flex: 1,
                        background: type !== t && "transparent",
                        border: "1px solid #ed502e",
                        color: type !== t && "#ed502e",
                      }}
                      onClick={() => setType(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <div class="form-group mt-3">
                  <TextField fullWidth label={"Message"} multiline rows={3} />
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div class="text-center">
                  <button type="submit">Give</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
