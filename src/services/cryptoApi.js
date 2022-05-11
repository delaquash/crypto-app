import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'REACT_APP_CRYPTO_RAPIDAPI_HOST',
    'X-RapidAPI-Key': 'REACT_APP_RAPIDAPI_KEY'
}


const baseUrl = 'REACT_APP_CRYPTO_RAPIDAPI_HOST';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi ({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getExchanges: builder.query({
            query: () => createRequest(`/exchanges`)
        }),
        getCryptosDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptosHistory: builder.query({
            query: ({ coinId, timePeriod }) => createRequest(`/coin/${coinId}/history/${timePeriod}`)
        })
    })
});

export const { useGetCryptosQuery, useGetCryptosDetailsQuery, useGetExchangesQuery, useGetCryptosHistoryQuery } = cryptoApi;
