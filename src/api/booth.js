import { http } from './http';

// GET : 부스 상세 조회
export const GetBooth = async boothId => {
  try {
    const response = await http.get(`/booths/${boothId}/`);
    console.log(response.data.data);
    return Promise.resolve(response.data.data);
  } catch (error) {
    console.error('부스 상세 조회 실패', error);
    return Promise.reject(error);
  }
};

// PATCH : 부스 스크랩 여부 변경
export const PatchBoothScrap = async boothId => {
  try {
    const response = await http.patch(`/booths/${boothId}/likes/`);
    console.log(response);
    return Promise.resolve(response);
  } catch (error) {
    console.error('부스 스크랩 여부 변경 실패', error.response);
    confirmLogin(error);
    return Promise.reject(error);
  }
};

// PATCH : 메뉴 스크랩 여부 변경
export const PatchMenuScrap = async menuId => {
  try {
    const response = await http.patch(`/booths/${menuId}/menu/`);
    console.log(response);
    return Promise.resolve(response);
  } catch (error) {
    console.error('메뉴 스크랩 여부 변경 실패', error.response);
    return Promise.reject(error);
  }
};

// POST : 부스 댓글 작성
export const PostComment = async (boothId, content) => {
  try {
    const response = await http.post(`/booths/${boothId}/comments/`, {
      content: content
    });
    return Promise.resolve(response);
  } catch (error) {
    console.error('부스 댓글 작성 실패', error.response);
    confirmLogin(error);
    return Promise.reject(error);
  }
};

// DELETE : 부스 댓글 삭제
export const DeleteComment = async id => {
  try {
    const response = await http.delete(`/booths/comments/${id}/`);
    return Promise.resolve(response);
  } catch (error) {
    console.error('부스 댓글 삭제 실패', error.response);
    confirmLogin(error);
    return Promise.reject(error);
  }
};

// 로그인이 필수적인 기능 처리 함수
const confirmLogin = error => {
  if (error.response && error.response.status === 401) {
    const confirmLogin = window.confirm('로그인이 필요합니다.');
    if (confirmLogin) {
      window.location.replace('/login');
    }
  }
};
