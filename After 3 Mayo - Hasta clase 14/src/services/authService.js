import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { apiKey, baseAuthUrl } from "../databases/users"

export const authApi = createApi({
    reducerPath: "authApi", //Establish a unique name for the API
    baseQuery: fetchBaseQuery({ baseUrl: baseAuthUrl }),
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: ({ ...auth }) => ({
                url: `/accounts:signUp?key=${apiKey}`,
                method: "POST",
                body: auth,
            }),
        }),
        //Add login
        signIn: builder.mutation({
            query: ({...auth}) => ({
                url: `/accounts:signInWithPassword?key=${apiKey}`,
                method: "POST",
                body: auth
            })
        })
    }),
})

export const { useSignInMutation, useSignUpMutation } = authApi
