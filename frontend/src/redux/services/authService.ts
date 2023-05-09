import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URLS } from "../../constants";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URLS.api
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: "/auth/login",
                method: "POST",
                body: JSON.stringify(body),
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "same-origin"
            })
        }),
        register: builder.mutation({
            query: (body) => ({
                url: "/auth/register",
                method: "POST",
                body: JSON.stringify(body),
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "same-origin"
            })
        }),
    })
});

export const {
    useLoginMutation,
    useRegisterMutation
} = authApi;