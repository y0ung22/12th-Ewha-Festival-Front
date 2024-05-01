import { http } from './http';

// GET : TF 공지 목록 조회
export const GetNoticeList = async page => {
  try {
    const response = await http.get(`/notices/?page=${page}`);
    console.log(response.data.data);
    return Promise.resolve(response.data.data);
  } catch (error) {
    console.error('TF 공지 목록 조회 실패', error);
    return Promise.reject(error);
  }
};
