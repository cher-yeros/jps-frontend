import React from "react";

import { useMutation } from "@apollo/client";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { CAPTURE_ORDER, CREATE_ORDER } from "../../../graphql/partnership";
import { PAYPAL_CLIENT_ID } from "../../../utils/misc";

export default function OneTimePaypalButton({ watch, trigger }) {
  const navigate = useNavigate();

  const [createOrderMut, { ...createOrderMutation }] =
    useMutation(CREATE_ORDER);
  const [captureOrder, { ...captureOrderMut }] = useMutation(CAPTURE_ORDER);

  async function createOrder(data) {
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

    let orderId;

    if (isValid) {
      try {
        const { data } = await createOrderMut({
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

        orderId = data?.createOrder;
        return data?.createOrder;
      } catch (error) {
        // toast.error("Please Fill all Fields");
      }

      return orderId;
    } else {
      // toast.error("Please Fill all Fields");
    }
  }

  async function onApprove(data) {
    try {
      const response = await captureOrder({
        variables: { orderId: data.orderID },
      });

      if (response.data?.captureOrder?.result?.status === "COMPLETED") {
        navigate("/payment-success/succeedeed");
      }
    } catch (error) {
      // console.log(error);
      // toast.error(error.message);
      // toast.error("Please Fill all Fields");
    }
  }

  function onError(error) {
    toast.error("Please Fill all Fields");
    // toast.error(error.message);
    // Do something with the error from the SDK
  }

  return (
    <PayPalScriptProvider
      options={{
        components: "card-fields,buttons",
        clientId: PAYPAL_CLIENT_ID,
      }}
    >
      <PayPalButtons
        createOrder={createOrder}
        onApprove={onApprove}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
}
