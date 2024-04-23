import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../databases/realtimeDatabase'

export const shopApi = createApi({
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => `categories.json`
        }),
        getProductsByCategory: builder.query({
            query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
            transformResponse: (response) => {
                // console.log(response);
                const responseTransformed = Object.values(response)
                return responseTransformed
            }
        }),
        getProductById: builder.query({
            query: (productId) => `products.json?orderBy="id"&equalTo=${productId}`,
            transformResponse: (response) => {
                // console.log(response);
                const responseTransformed = Object.values(response)
                if (responseTransformed.length) return responseTransformed[0]
                return null
            }
        })
    })
})

export const {useGetCategoriesQuery, useGetProductByIdQuery, useGetProductsByCategoryQuery} = shopApi