import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// base URL과 엔드포인트들로 서비스 정의
export const diseaseApi = createApi({
  reducerPath: 'diseaseApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASEURL }),
  endpoints: (builder) => ({
    getDiseaseName: builder.query({
      query: (keyword) => `?name=${keyword}`,
    }),
  }),
});

// 정의된 엔드포인트에서 자동으로 생성된 훅을 함수형 컴포넌트에서 사용하기 위해 export
export const { useGetDiseaseNameQuery } = diseaseApi;
