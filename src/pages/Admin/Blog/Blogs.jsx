import { useMutation, useQuery } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Add, Delete, Edit, Launch } from "@mui/icons-material";
import { Box, Grid, IconButton, Stack } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import * as Yup from "yup";
import CustomModal from "../../../components/CustomModal";
import {
  CustomAutoComplete,
  CustomTextField,
} from "../../../components/CustomTextField";
import DataGridWrapper from "../../../components/DataGridWrapper";
import {
  CREATE_BLOG,
  DELETE_BLOG,
  GET_BLOGS,
  GET_CATEGORYS,
  UPDATE_BLOG,
} from "../../../graphql/blog";
export default function Blogs() {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const [selectedRecord, setSelectedRecord] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  const { data, loading, refetch } = useQuery(GET_BLOGS);

  const [deleteBlog, { deleteBlogMut }] = useMutation(DELETE_BLOG);

  const actions = [
    {
      icon: <Launch />,
      onClick: ({ row }) => {
        navigate("/blog/" + row?.title?.toLowerCase().replaceAll(" ", "-"), {
          state: { blog: row },
        });
      },
      color: "primary",
    },
    {
      icon: <Edit />,
      onClick: async ({ row }) => {
        setIsEdit(true);
        setSelectedRecord(row);
        setOpen(true);
      },
      color: "success",
    },
    {
      icon: <Delete />,
      onClick: async ({ row }) => {
        if (window.confirm("Are you sure you want to delete this blog ?"))
          try {
            const result = await deleteBlog({ variables: { id: row?.id } });
            toast.success("Blog deleted successfully");

            refetch();
          } catch (error) {
            toast.error("Error deleting blog");
          }
      },
      color: "error",
    },
  ];

  const columns = [
    {
      field: "user",
      headerName: "Owner",
      flex: 1,
      renderCell: ({ value }) => {
        return value.first_name + " " + value.last_name;
      },
    },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
    },
    {
      field: "category",
      headerName: "Title",
      flex: 1,
      renderCell: ({ value }) => value.title,
    },
    {
      field: "excerpt",
      headerName: "Subject",
      flex: 1,
    },
    {
      field: "body",
      headerName: "Body",
      flex: 1,
    },
    {
      field: "Actions",
      headerName: "Actions",
      width: 150,
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
    <>
      <DataGridWrapper
        toolbars={toolbars}
        columns={columns}
        rows={data?.blogs || []}
        loading={loading}
      />

      <AddBlog
        refetch={refetch}
        title={"Add Blog"}
        open={open}
        onClose={() => setOpen(false)}
        isEdit={isEdit}
        record={selectedRecord}
      />
    </>
  );
}

function AddBlog({ open, onClose, title, refetch, record, isEdit }) {
  const [createBlog, { loading }] = useMutation(CREATE_BLOG);
  const [editBlog, { editBlogMut }] = useMutation(UPDATE_BLOG);

  const [imgUrl, setImgUrl] = useState(null);

  const lookups = useQuery(GET_CATEGORYS);

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: validator,
    defaultValues: {},
  });

  useEffect(() => {
    if (isEdit) {
      setValue("id", record?.id);
      setValue("title", record?.title);
      setValue("excerpt", record?.excerpt);
      setValue("body", record?.body);
      setValue("categoryId", record?.category?.id);
      setValue("image", record?.image);
    }
  }, [record, isEdit]);

  const onSubmit = async (values) => {
    const link =
      process.env.NODE_ENV === "production"
        ? "https://api.jpstvethiopia.com/api/upload-file"
        : "http://localhost:4000/api/upload-file";
    try {
      if (!isEdit) {
        const formData = new FormData();

        formData.append("picture", values.picture);

        const response = await axios.post(link, formData);

        // console.log(response);
        // return;
        delete values.picture;
        const { data } = await createBlog({
          variables: { input: { ...values, image: response.data?.fileName } },
        });
      } else {
        const { data } = await editBlog({
          variables: { input: { ...values } },
        });
      }

      refetch();
      reset();
      onClose();
      toast.success("Blog Successfully Added!", { autoClose: 500 });
    } catch (error) {
      toast.error(error.message, {
        autoClose: 500,
      });
    }
  };

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }

    setValue("picture", file);
  };

  return (
    <CustomModal
      open={open}
      onClose={onClose}
      title={title}
      onSubmit={handleSubmit(onSubmit)}
      loading={loading}
    >
      <Grid container columnSpacing={4} rowSpacing={2}>
        <Grid item lg={6}>
          <CustomTextField control={control} name={"title"} label={"Title"} />
        </Grid>
        <Grid item lg={6}>
          <CustomTextField
            control={control}
            name={"excerpt"}
            label={"Subject"}
          />
        </Grid>
        <Grid item lg={6}>
          <CustomAutoComplete
            control={control}
            name={"categoryId"}
            label={"Category"}
            loading={lookups.loading}
            options={lookups.data?.categories?.map((c) => ({
              id: c.id,
              name: c.title,
            }))}
          />
        </Grid>
        <Grid item lg={6}>
          {/* <CustomTextField
            control={control}
            name={"image"}
            label={"Image Link"}
          /> */}
        </Grid>
        <Grid item lg={6}>
          <CustomTextField
            control={control}
            name={"body"}
            label={"Body"}
            multiline
            rows={10}
          />
        </Grid>

        <Grid item lg={6}>
          <Box
            height={"18rem"}
            sx={{
              mt: 1.65,
              background: "#ebebeb",
              border: 3,
              borderStyle: "dashed",
              borderColor: "gray",
              borderRadius: 1,
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
            }}
            onClick={() => document.getElementById("image-uploader").click()}
          >
            {imgUrl && (
              <img
                style={{ height: "100%", width: "auto" }}
                src={imgUrl}
                alt="adf"
              />
            )}
          </Box>
          <input
            type="file"
            hidden
            id="image-uploader"
            onChange={onFileChange}
          />
        </Grid>
      </Grid>
    </CustomModal>
  );
}

const validator = yupResolver(
  Yup.object().shape({
    title: Yup.string().required("Title is required!"),
    excerpt: Yup.string().required("excerpt is required!"),
    body: Yup.string().required("Body is required!"),
    categoryId: Yup.number().required("Category is required!"),
  })
);
