import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const specialtyApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSpecialty: build.mutation({
      query: (data) => ({
        url: "/specialty",
        method: "POST",
        contentType: "multipart/form-data",
        data: data,
      }),
      invalidatesTags: [tagTypes.specialty],
    }),

    getSpecialties: build.query({
      query: () => ({
        url: "/specialty",
        method: "GET",
      }),
      providesTags: [tagTypes.specialty],
    }),

    deleteSpecialty: build.mutation({
      query: (id) => ({
        url: `/specialty/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.specialty],
    }),
  }),
});

export const {
  useCreateSpecialtyMutation,
  useGetSpecialtiesQuery,
  useDeleteSpecialtyMutation,
} = specialtyApi;
