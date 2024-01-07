import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../API/api";

export const adsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["Ad"],
  endpoints: (build) => ({
    addImagesToAdv: build.mutation({
      query: ({ file }) => {
        const token = localStorage.getItem("refresh");
        const searchParams = new URLSearchParams();
        searchParams.append("title", file.get("title"));
        searchParams.append("description", file.get("description"));
        searchParams.append("price", file.get("price"));

        const formData = new FormData();
        const arrData = [...file];
        const length = arrData.length;
        for (let i = 1; i < length - 2; i++) {
          formData.append("files", file.get(`image${i}`));
        }

        return {
          url: `ads?${searchParams.toString()}`,
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        };
      },
      invalidatesTags: ["Ad"],
    }),
  }),
});

export const { useAddImagesToAdvMutation } = adsApi;
