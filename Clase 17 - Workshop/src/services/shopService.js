import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { baseUrl } from "../databases/realtimeDatabase"

export const shopApi = createApi({
    reducerPath: "shopApi", //Establish a unique name for the API
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['profileImageGet', 'locationGet', 'getOrders'], //Declare tags
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => `categories.json`,
        }),
        getProductsByCategory: builder.query({
            query: (category) =>
                `products.json?orderBy="category"&equalTo="${category}"`,
            transformResponse: (response) => {
                const responseTransformed = Object.values(response)
                return responseTransformed
            },
        }),
        getProductById: builder.query({
            query: (productId) =>
                `products.json?orderBy="id"&equalTo=${productId}`,
            transformResponse: (response) => {
                const responseTransformed = Object.values(response)
                if (responseTransformed.length) return responseTransformed[0]
                return null
            },
        }),
        postOrder: builder.mutation({
            query: ({...order}) => ({
                url: 'orders.json',
                method: 'POST',
                body: order
            }),
            invalidatesTags: ['getOrders']
        }),
        getProfileImage: builder.query({
            query: (localId) => `profileImages/${localId}.json`,
            providesTags: ['profileImageGet']
        }),
        //We make a PUT request for not creating additional key, because de localId is already an unique key.
        postProfileImage: builder.mutation({
            query: ({image, localId}) => ({
                url: `profileImages/${localId}.json`,
                method: "PUT",
                body: {
                    image: image
                },
            }),
            invalidatesTags: ['profileImageGet'] //Invalidates will trigger a refetch on profileImageGet
        }),
        getLocation: builder.query({
            query: (localId) => `locations/${localId}.json`,
            providesTags: ['locationGet']
        }),
        postLocation: builder.mutation({
            query: ({location, localId}) => ({
                url: `locations/${localId}.json`,
                method: "PUT",
                body: {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    address: location.address,
                    updatedAt: location.updatedAt
                },
            }),
            invalidatesTags: ['locationGet'] //Invalidates will trigger a refetch on profileImageGet
        }),
        getOrders: builder.query({
            query: () => `orders.json`,
            providesTags: ['getOrders']
        }),
    }),
})

export const {
    useGetCategoriesQuery,
    useGetProductByIdQuery,
    useGetProductsByCategoryQuery,
    usePostOrderMutation,
    useGetProfileImageQuery,
    usePostProfileImageMutation,
    useGetLocationQuery,
    usePostLocationMutation,
    useGetOrdersQuery
} = shopApi
