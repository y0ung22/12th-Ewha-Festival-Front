import { http } from './http';

// GET : TF 부스 목록 조회
export const GetTFBoothList = async type => {
  try {
    const response = await http.get(`/notices/event/?type=${type}`);
    console.log(response.data);
    return Promise.resolve(response.data.events);
  } catch (error) {
    console.error('TF 부스 목록 조회 실패', error);
    return Promise.reject(error);
  }
};

// GET : TF 부스 상세 조회
export const GetTFBoothDetail = async boothId => {
  try {
    const response = await http.get(`/notices/event/${boothId}/`);
    console.log(response.data.data);
    return Promise.resolve(response.data.data);
  } catch (error) {
    console.error('TF 부스 상세 조회 실패', error);
    return Promise.reject(error);
  }
};

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
