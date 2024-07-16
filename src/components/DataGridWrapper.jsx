import { Box, Button, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useLocation } from "react-router";

export default function DataGridWrapper({
  toolbars,
  columns,
  rows,
  customStyle,
  loading,
  children,
}) {
  console.log({ toolbars, columns, rows });
  const { pathname } = useLocation();

  return (
    <Box
      height={"100%"}
      sx={
        {
          // "& .MuiButton-root": { fontSize: "1.35rem" },
          // "& .MuiDataGrid-cell": {
          //   fontSize: "1.25rem",
          // },
        }
      }
    >
      {toolbars?.length > 0 && (
        <Stack direction={"row"} pb={1} alignItems={"center"}>
          <Stack flex={1}></Stack>
          <Stack direction={"row"} spacing={1}>
            {toolbars?.map((toolbar) => (
              <Button variant="contained" onClick={toolbar.onClick}>
                {toolbar.label}
              </Button>
            ))}
          </Stack>
        </Stack>
      )}

      <DataGrid
        density="compact"
        sx={{
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: "#dfdfdf",
          },
        }}
        columns={columns || []}
        rows={rows || []}
        loading={loading}
      />
    </Box>
  );
}
