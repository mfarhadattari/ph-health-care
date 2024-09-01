import { TMeta, TResSchedule } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const scheduleApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSchedule: build.mutation({
      query: (data) => ({
        url: "/schedule",
        method: "POST",
        contentType: "application/json",
        data: data,
      }),
      invalidatesTags: [tagTypes.schedule],
    }),

    getSchedules: build.query({
      query: (query) => ({
        url: "/schedule",
        method: "GET",
        params: { ...query },
      }),
      transformResponse: (response: TResSchedule[], meta: TMeta) => {
        return {
          schedules: response,
          meta,
        };
      },
      providesTags: [tagTypes.schedule],
    }),

    deleteSchedule: build.mutation({
      query: (id) => ({
        url: `/schedule/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.schedule],
    }),
  }),
});

export const { useCreateScheduleMutation, useGetSchedulesQuery, useDeleteScheduleMutation } = scheduleApi;
