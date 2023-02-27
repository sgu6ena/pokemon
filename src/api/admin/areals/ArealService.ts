import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IAreal} from "./areals.type";

export const arealAPI = createApi({
        reducerPath: 'arealAPI',
        baseQuery: fetchBaseQuery({
            baseUrl: 'http://127.0.0.1:8000/api',
        }),

        endpoints: (builder) => ({
            fetchAllAreals: builder.query<IAreal[], void>({
                query: () =>`/areals`
            })
        })
    }
)

export const {useFetchAllArealsQuery} = arealAPI