import { useMutation, useQuery } from "@apollo/client";
import { Add, Delete, Edit, Launch } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import DataGridWrapper from "../../../components/DataGridWrapper";
import {
  DELETE_PRAYER_REQUEST,
  GET_PRAYER_REQUESTS,
} from "../../../graphql/prayer_request";

export default function PrayerRequests() {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  const { data, loading, refetch } = useQuery(GET_PRAYER_REQUESTS);
  const [deleteRecord, { loading: deleteLoading }] = useMutation(
    DELETE_PRAYER_REQUEST
  );

  const actions = [
    // {
    //   icon: <Launch />,
    //   onClick: () => {},
    //   color: "primary",
    // },
    // {
    //   icon: <Edit />,
    //   onClick: () => {},
    //   color: "success",
    // },
    {
      icon: <Delete />,
      onClick: async ({ row }) => {
        if (window.confirm("Are you sure you want to delete this record ?"))
          try {
            const result = await deleteRecord({ variables: { id: row?.id } });
            toast.success("Prayer request deleted successfully");

            refetch();
          } catch (error) {
            toast.error("Error deleting record");
          }
      },
      color: "error",
    },
  ];

  const columns = [
    {
      field: "full_name",
      headerName: "Full Name",
      flex: 1,
    },
    // {
    //   field: "last_name",
    //   headerName: "Last Name",
    //   flex: 1,
    // },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "age",
      headerName: "Age",
      flex: 0.5,
    },
    {
      field: "gender",
      headerName: "Gender",
      flex: 0.5,
    },
    {
      field: "createdAt",
      headerName: "Date",
      flex: 1,
      renderCell: ({ value }) => new Date(value).toLocaleDateString(),
    },
    {
      field: "prayer_issue",
      headerName: "Prayer Issue",
      flex: 1,
      renderCell: ({ value, row }) =>
        value === "Other" ? row?.other_prayer_issue : value,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "prayer_issue_description",
      headerName: "Request Detail",
      flex: 2,
    },
    {
      field: "Actions",
      headerName: "Actions",
      width: 100,
      renderCell: (param) => (
        <Stack direction={"row"}>
          {actions.map((action) => (
            <IconButton
              color={action?.color || "primary"}
              sx={{ fontSize: "2.75rem" }}
              onClick={() => action.onClick(param)}
            >
              {action.icon}
            </IconButton>
          ))}
        </Stack>
      ),
    },
  ];

  const toolbars = [
    {
      label: "Add New",
      icon: <Add />,
      onClick: () => setOpen(true),
    },
  ];

  return (
    <DataGridWrapper
      //   toolbars={toolbars}
      columns={columns}
      rows={data?.allPrayerRequests || []}
      loading={loading}
    />
  );
}
