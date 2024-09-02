import { TDoctor, TMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const doctorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDoctor: build.mutation({
      query: (data) => ({
        url: "/user/create-doctor",
        method: "POST",
        contentType: "multipart/form-data",
        data: data,
      }),
      invalidatesTags: [tagTypes.doctor],
    }),

    getDoctors: build.query({
      query: (query) => ({
        url: `/doctor`,
        method: "GET",
        params: { ...query },
      }),
      transformResponse: (response: TDoctor[], meta: TMeta) => {
        return {
          doctors: response,
          meta,
        };
      },
      providesTags: [tagTypes.doctor],
    }),

    getDoctorDetails: build.query({
      query: (id) => ({
        url: `/doctor/${id}`,
        method: "GET",
      }),
      transformResponse: (response: TDoctor) => {
        return response
      },
      providesTags: [tagTypes.doctor],
    }),

    deleteDoctor: build.mutation({
      query: (id) => ({
        url: `/doctor/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.doctor],
    }),

    updateDoctor: build.mutation({
      query: ({ id, data }) => ({
        url: `/doctor/${id}`,
        method: "PATCH",
        data: data
      }),
      invalidatesTags: [tagTypes.doctor],
    }),
  }),
});

export const {
  useCreateDoctorMutation,
  useGetDoctorsQuery,
  useGetDoctorDetailsQuery,
  useDeleteDoctorMutation,
  useUpdateDoctorMutation
} = doctorApi;
