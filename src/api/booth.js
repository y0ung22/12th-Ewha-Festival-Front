import { http, getCookie } from './http';

// GET : 부스 목록 조회
export const GetBoothList = async (type, day, college, page) => {
  try {
    const response = await http.get(
      `/booths/?type=${type}&day=${day}&college=${college}&page=${page}`
    );
    return Promise.resolve(response.data);
  } catch (error) {
    console.error('부스 목록 조회 실패', error);
    return Promise.reject(error);
  }
};

// GET : 부스 상세 조회
export const GetBoothDetail = async boothId => {
  try {
    const response = await http.get(`/booths/${boothId}/`);
    return Promise.resolve(response.data.data);
  } catch (error) {
    console.error('부스 상세 조회 실패', error);
    return Promise.reject(error);
  }
};

// GET : 부스 댓글 조회
export const GetBoothComment = async boothId => {
  try {
    const response = await http.get(`/booths/${boothId}/comments/`);
    return Promise.resolve(response.data.data);
  } catch (error) {
    console.error('부스 댓글 조회 실패', error);
    return Promise.reject(error);
  }
};

// PATCH : 부스 스크랩 여부 변경
export const PatchBoothScrap = async boothId => {
  try {
    const response = await http.patch(`/booths/${boothId}/likes/`);
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
    return Promise.resolve(response);
  } catch (error) {
    console.error('메뉴 스크랩 여부 변경 실패', error.response);
    confirmLogin(error);
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

// GET : 부스 검색
export const GetBoothSearch = async (type, keyword, page) => {
  try {
    const response = await http.get(
      `/booths/search/?keyword=${keyword}&type=${type}&page=${page}`
    );
    return Promise.resolve(response.data);
  } catch (error) {
    console.error('부스 검색 조회 실패', error);
    return Promise.reject(error);
  }
};

// GET : 홈화면 부스 조회
export const GetBoothHome = async () => {
  const token = getCookie('token');
  try {
    const response = await http.get(`/booths/home`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return Promise.resolve(response.data);
  } catch (error) {
    console.error('부스 홈 조회 실패', error);
    return Promise.reject(error);
  }
};

// GET : 부스 상세 조회
export const GetBoothInfo = async boothId => {
  try {
    const response = await http.get(`/manages/${boothId}/`);
    return Promise.resolve(response.data.data);
  } catch (error) {
    console.error('부스 상세 조회 실패', error);
    return Promise.reject(error);
  }
};

// PATCH : 부스 관리자 수정
export const PatchBooth = async (boothId, formData) => {
  try {
    const response = await http.patch(`/manages/${boothId}/`, formData);

    return response.data;
  } catch (error) {
    console.error('오류:', error);
    confirmLogin(error);
    throw error;
  }
};

// GET : 메뉴 목록 조회
export const GetMenuList = async boothId => {
  try {
    const response = await http.get(`/manages/${boothId}/menus/`);
    return Promise.resolve(response.data.data);
  } catch (error) {
    console.error('메뉴 목록 조회 실패', error);
    confirmLogin(error);
    return Promise.reject(error);
  }
};

// GET : 메뉴 상세 조회
export const GetMenuDetail = async (boothId, menuId) => {
  try {
    const response = await http.get(`/manages/${boothId}/menus/${menuId}/`);
    const menuDetail = {
      ...response.data.data,
      opened: response.data.data.is_soldout
    };
    return Promise.resolve(menuDetail);
  } catch (error) {
    console.error('메뉴 상세 조회 실패', error);

    return Promise.reject(error);
  }
};

// PATCH : 메뉴 상세 수정
export const PatchMenu = async (boothId, menuId, formData) => {
  try {
    const response = await http.patch(
      `/manages/${boothId}/menus/${menuId}/`,
      formData
    );
    return response.data;
  } catch (error) {
    confirmLogin(error);
    console.error('오류:', error);
    throw error;
  }
};

// POST : 메뉴 추가
export const PostMenu = async (boothId, formData) => {
  try {
    const response = await http.post(`/manages/${boothId}/menus/`, formData);
    return Promise.resolve(response);
  } catch (error) {
    console.error('메뉴 추가 실패', error.response);
    confirmLogin(error);
    return Promise.reject(error);
  }
};

// DELETE : 메뉴 삭제
export const DeleteMenu = async (boothId, menuId) => {
  try {
    const response = await http.delete(`/manages/${boothId}/menus/${menuId}/`);
    return Promise.resolve(response);
  } catch (error) {
    console.error('메뉴 삭제 실패', error.response);
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
