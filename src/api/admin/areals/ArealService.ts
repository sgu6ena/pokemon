import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IAreal} from "./areals.type";

export const arealAPI = createApi({
        reducerPath: 'arealAPI',
        baseQuery: fetchBaseQuery({
            baseUrl: process.env.NEXT_PUBLIC_SERVER_API,
        }),

        endpoints: (builder) => ({
            fetchAllAreals: builder.query<IAreal[], void>({
                query: () =>`/areals`
            }),
            fetchAllArealsWithHexagons: builder.query<IAreal[], void>({
                query: () =>`/areals/hexagons`
            }),
            fetchArealById: builder.query<IAreal[], string>({
                query: (id) =>`/areals/${id}`
            }),
            createArial:builder.mutation<IAreal,FormData>({
                query:(areal)=>({
                    url:`/areals`,
                    method:'POST',
                    body:areal
                } )
            })

        })
    }
)

export const {useFetchAllArealsQuery, useFetchArealByIdQuery, useFetchAllArealsWithHexagonsQuery} = arealAPI