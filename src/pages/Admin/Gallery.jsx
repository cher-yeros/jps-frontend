import { useMutation, useQuery } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Add, Delete, Launch } from "@mui/icons-material";
import { Box, Grid, IconButton, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import GLightbox from "glightbox";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import * as Yup from "yup";
import CustomModal from "../../components/CustomModal";
import {
  CustomAutoComplete,
  CustomTextField,
} from "../../components/CustomTextField";
import DataGridWrapper from "../../components/DataGridWrapper";
import {
  CREATE_GALLERY,
  DELETE_GALLERY,
  GET_GALLERY,
  GET_GALLERY_CATEGORY,
  UPDATE_GALLERY,
} from "../../graphql/gallery";

export default function AdminGallery() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const { data, loading, refetch } = useQuery(GET_GALLERY);

  const [editGallery, { editGalleryMut }] = useMutation(UPDATE_GALLERY);
  const [deleteGallery, { deleteGalleryMut }] = useMutation(DELETE_GALLERY);

  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".portfolio-lightbox",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
    });

    // Clean up on component unmount
    return () => {
      lightbox.destroy();
    };
  }, []);

  const actions = [
    {
      icon: <Launch />,
      onClick: () => {
        navigate("/gallery");
      },
      color: "primary",
    },
    // {
    //   icon: <Edit />,
    //   onClick: () => {},
    //   color: "success",
    // },
    {
      icon: <Delete />,
      onClick: async ({ row }) => {
        const confirm = window.confirm(
          "Are you sure you want to delete this gallery image?"
        );
        if (confirm)
          try {
            await deleteGallery({ variables: { id: row?.id } });
            toast.success("Category deleted successfully!");
            refetch();
          } catch (error) {
            toast.error("Error deleting gallery image");
          }
      },
      color: "error",
    },
  ];

  const columns = [
    {
      field: "title",
      headerName: "Title",
      flex: 1,
    },
    {
      field: "city",
      headerName: "Sub Title",
      flex: 1,
    },
    // {
    //   field: "image",
    //   headerName: "Sub Title",
    //   flex: 1,
    //   renderCell: ({ value }) => (
    //     <a
    //       data-gallery="portfolioGallery"
    //       className="portfolio-lightbox preview-link"
    //       href={value}
    //       // style={{ minWidth: "13rem" }}
    //     >
    //       <img
    //         src={value}
    //         className="img-fluid"
    //         alt=""
    //         // style={{ minWidth: "13rem" }}
    //       />
    //     </a>
    //   ),
    // },

    {
      field: "category",
      headerName: "Gallery Category",
      flex: 1,
      renderCell: ({ value, row }) => value?.title,
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
      {" "}
      <DataGridWrapper
        toolbars={toolbars}
        columns={columns}
        rows={data?.galleries || []}
        loading={loading}
      />
      <AddGallery
        refetch={refetch}
        title={"Add Gallery"}
        open={open}
        onClose={() => setOpen(false)}
      />{" "}
    </>
  );
}

function AddGallery({ open, onClose, title, refetch }) {
  const [selectedImages, setSelectedImages] = useState([]);

  const [createGallery, { loading }] = useMutation(CREATE_GALLERY);

  const lookups = useQuery(GET_GALLERY_CATEGORY);

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
    watch,
  } = useForm({
    mode: "all",
    resolver: validator,
    defaultValues: {
      // picture: [],
    },
  });

  const onSubmit = async (values) => {
    try {
      const link =
        process.env.NODE_ENV === "production"
          ? "https://api.jpstvethiopia.com/api/upload-file"
          : "http://localhost:4000/api/upload-file";

      let filesNames = await Promise.all(
        Object.keys(selectedImages)?.map(async (key) => {
          const formData = new FormData();

          formData.append("picture", selectedImages[key]);

          const response = await axios.post(link, formData);

          return response.data?.fileName;
        })
      );

      // delete values.picture;

      const { data } = await createGallery({
        variables: { input: { ...values, images: filesNames } },
      });

      refetch();
      reset();
      onClose();
      toast.success("Gallery Successfully Added!", { autoClose: 500 });
    } catch (error) {
      toast.error(error.message, {
        autoClose: 500,
      });
    }
  };

  const onFileChange = async (e) => {
    const files = e.target.files;
    // setValue("picture", [...files]);
    setSelectedImages(e.target.files);
    // await Promise.all(
    //   files?.map((file) => {

    //   })
    // );
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
        <Grid item md={6} xs={12}>
          <CustomTextField control={control} name={"title"} label={"Title"} />
          <CustomTextField
            control={control}
            name={"city"}
            label={"Sub Title"}
          />
          <Box my={1}></Box>
          <CustomAutoComplete
            control={control}
            name={"gallery_category_id"}
            label={"Category"}
            loading={lookups.loading}
            options={lookups.data?.galleryCategories?.map((c) => ({
              id: c.id,
              name: c.title,
            }))}
          />
        </Grid>
        <Grid item md={6} xs={12}>
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
              alignItems: "center",
              color: "black",
              fontSize: "1.5rem",
            }}
            onClick={() => document.getElementById("image-uploader").click()}
          >
            {/* {imgUrl && (
              <img
                style={{ height: "100%", width: "auto" }}
                src={imgUrl}
                alt="adf"
              />
            )} */}

            {selectedImages?.length + " Images choosen"}
          </Box>
          <input
            type="file"
            hidden
            id="image-uploader"
            onChange={onFileChange}
            multiple
          />
        </Grid>
      </Grid>
    </CustomModal>
  );
}

const validator = yupResolver(
  Yup.object().shape({
    title: Yup.string().required("Title is required"),
    city: Yup.string().required("Sub Title is required"),
    // image: Yup.string()
    //   .url("Image must be a valid URL")
    //   .required("Image is required"),
    gallery_category_id: Yup.number().required(
      "Service category ID is required"
    ),
  })
);
