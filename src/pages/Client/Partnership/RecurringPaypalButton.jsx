import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import {
  CAPTURE_SUBSCRIPTION,
  CREATE_SUBSCRIPTION,
} from "../../../graphql/partnership";
import { PAYPAL_CLIENT_ID } from "../../../utils/misc";

export default function RecurringPaypalButton({ watch, trigger }) {
  const navigate = useNavigate();

  const [createSubscriptionMut, { ...createSubscriptionMutation }] =
    useMutation(CREATE_SUBSCRIPTION);
  const [captureSubscription, { ...captureSubscriptionMut }] =
    useMutation(CAPTURE_SUBSCRIPTION);

  const [isPaying, setIsPaying] = useState(false);
  const [billingAddress, setBillingAddress] = useState({
    addressLine1: "",
    addressLine2: "",
    adminArea1: "",
    adminArea2: "",
    countryCode: "",
    postalCode: "",
  });

  async function createSubscription(data, actions) {
    // return;
    const isValid = await trigger([
      "first_name",
      "last_name",
      "phone",
      "email",
      "payment_method",
      "partnership_plan",
      "partnership_type",
      "amount",
      "currency",
      "additional_message",
      "church_name",
      "address",
    ]);

    let planID;

    if (isValid)
      try {
        const { data } = await createSubscriptionMut({
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
              additional_message: watch("additional_message"),
              church_name: watch("church_name"),
              address: watch("address"),
            },
          },
        });

        planID = data?.createSubscription;
        return data?.createSubscription;
      } catch (error) {
        // console.log(error);
        toast.error(error.message);
      }

    // console.log({ planID });

    const subscriptionID = actions.subscription.create({
      plan_id: planID, // Creates the subscription
    });

    // console.log({ subscriptionID });

    return planID;

    return subscriptionID;
    // return actions.subscription.create({
    //   plan_id: planID, // Creates the subscription
    // });
  }

  async function onApproveSubscription(data) {
    try {
      const response = await captureSubscription({
        variables: { orderId: data.orderID },
      });

      if (response.data?.captureOrder?.result?.status === "COMPLETED") {
        navigate("/payment-success/succeedeed");
      }
    } catch (error) {
      // console.log(error);
      toast.error(error.message);
    }
  }

  function onError(error) {
    // Do something with the error from the SDK
  }

  function handleBillingAddressChange(field, value) {
    setBillingAddress((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  return (
    <PayPalScriptProvider
      options={{
        components: "card-fields,buttons",
        clientId: PAYPAL_CLIENT_ID,
        vault: true,
        intent: "subscription",
      }}
    >
      <PayPalButtons
        createSubscription={createSubscription}
        onApprove={onApproveSubscription}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
}
