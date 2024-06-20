import { gql } from "@apollo/client";

export const CREATE_PARTNERSHIP = gql`
  mutation CreatePartnership($input: CreatePartnershipInput) {
    createPartnership(input: $input) {
      message
      status
      data {
        checkout_url
      }
    }
  }
`;
