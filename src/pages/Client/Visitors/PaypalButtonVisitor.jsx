import React from "react";

import { useMutation } from "@apollo/client";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import {
  CAPTURE_VISITOR_PRAYER_ORDER,
  CREATE_VISITOR_PRAYER_ORDER,
} from "../../../graphql/visitor";
import { PAYPAL_CLIENT_ID } from "../../../utils/misc";

export default function PaypalButtonVisitor({ watch, trigger }) {
  const navigate = useNavigate();

  const [createOrderMut, { ...createOrderMutation }] = useMutation(
    CREATE_VISITOR_PRAYER_ORDER
  );
  const [captureOrder, { ...captureOrderMut }] = useMutation(
    CAPTURE_VISITOR_PRAYER_ORDER
  );

  async function createOrder(data) {
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
              payment_amount: parseFloat(watch("payment_amount")),
              currency: watch("currency"),
              date: watch("date"),
              address: watch("address"),
              request_detail: watch("request_detail"),
            },
          },
        });

        orderId = data?.createVisitorOrder;
        return data?.createVisitorOrder;
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

      if (response.data?.captureVisitorOrder?.result?.status === "COMPLETED") {
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
