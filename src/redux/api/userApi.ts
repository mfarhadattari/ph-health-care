import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMyProfile: build.query({
            query: () => ({
                url: `/user/profile`,
                method: "GET",
            }),
            providesTags: [tagTypes.doctor],
        }),
    }),
});

export const {
    useGetMyProfileQuery
} = userApi;
