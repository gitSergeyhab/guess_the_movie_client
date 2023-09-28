import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { MovieData } from '../types/types';

const BASE_URL = 'https://api.kinopoisk.dev/v1.3'
// movie?selectFields=id&selectFields=name&selectFields=type&selectFields=votes.kp&sortField=votes.kp&sortType=-1&page=1&limit=100


export const cinemaApi = createApi({
  reducerPath: 'cinemaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: {
      'X-API-KEY': process.env.API_KEY || ''
    }
  }),
  endpoints: (build) => ({
    getFilms: build.query<MovieData, number>({
      query: (limit) => ({
        url: `/movie?selectFields=id&selectFields=name&selectFields=type&selectFields=votes.kp`,
        params: {
          limit,
          sortField: 'votes.kp',
          sortType: -1,
          page: 1
        }
      })
    }),
    getImages: build.query<MovieData, number>({
      query: (limit) => ({
        url: `/movie?selectFields=id&selectFields=name&selectFields=type&selectFields=votes.kp`,
        params: {
          limit,
          sortField: 'votes.kp',
          sortType: -1,
          page: 1
        }
      })
    })
  })
})


export const {useGetFilmsQuery} = cinemaApi
