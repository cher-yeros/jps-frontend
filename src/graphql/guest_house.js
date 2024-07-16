import { gql } from "@apollo/client";

export const GET_GUEST_HOUSE_PRAYER_SCHEDULES = gql`
  query GuestHousePrayerSchedules {
    guestHousePrayerSchedules {
      id
      date
      start_time
      end_time
      availabile
      payment_amount_usd
      payment_amount_etb
      pickup_extra_payment_usd
      pickup_extra_payment_etb
      createdAt
      updatedAt
      status
    }
  }
`;

export const CREATE_GUEST_HOUSE_PRAYER_SCHEDULE = gql`
  mutation CreateGuestHousePrayerSchedule(
    $input: CreateGuestHousePrayerScheduleInput!
  ) {
    createGuestHousePrayerSchedule(input: $input) {
      id
    }
  }
`;

export const CREATE_GUEST_HOUSE_PRAYER = gql`
  mutation CreateGuestHousePrayer($input: CreateGuestHousePrayerInput!) {
    createGuestHousePrayer(input: $input)
  }
`;

export const GET_GUEST_HOUSE_PRAYER_SCHEDULE_FOR_USER = gql`
  query GuestHousePrayerScheulesForUsers {
    guestHousePrayerScheulesForUsers {
      id
      date
      start_time
      end_time
      availabile
      status
      payment_amount_usd
      payment_amount_etb
      pickup_extra_payment_usd
      pickup_extra_payment_etb
      createdAt
    }
  }
`;

export const CREATE_GUEST_HOUSE_PRAYER_ORDER = gql`
  mutation CreateGuestHouseOrder($input: CreateGuestHousePrayerInput) {
    createGuestHouseOrder(input: $input)
  }
`;

export const CAPTURE_GUEST_HOUSE_PRAYER_ORDER = gql`
  mutation CaptureGuestHouseOrder($orderId: String!) {
    captureGuestHouseOrder(orderID: $orderId)
  }
`;

export const GET_GUEST_HOUSE_PRAYERS = gql`
  query GuestHousePrayers {
    guestHousePrayers {
      id
      first_name
      last_name
      email
      phone
      request_detail
      include_pickup_from_airport
      status
      createdAt
      updatedAt

      start_date
      end_date
      # schedule {
      #   start_time
      #   end_time
      #   payment_amount_etb
      #   payment_amount_usd
      # }
    }
  }
`;

export const UPDATE_GUEST_HOUSE_PRAYER_SCHEDULE = gql`
  mutation UpdateGuestHousePrayerSchedule(
    $input: UpdateGuestHousePrayerScheduleInput!
  ) {
    updateGuestHousePrayerSchedule(input: $input)
  }
`;

export const DELETE_GUEST_HOUSE_PRAYER_SCHEDULE = gql`
  mutation DeleteGuestHousePrayerSchedule($id: Int!) {
    deleteGuestHousePrayerSchedule(id: $id)
  }
`;

export const DELETE_GUEST_HOUSE_PRAYER = gql`
  mutation DeleteGuestHousePrayer($id: Int!) {
    deleteGuestHousePrayer(id: $id)
  }
`;
