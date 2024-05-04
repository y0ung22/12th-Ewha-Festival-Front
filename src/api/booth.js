import { http } from './http';

// GET : 부스 목록 조회
export const GetBoothList = async (type, day, college, page) => {
  try {
    const response = await http.get(
      `/booths/?type=${'부스'}&day=${day}&college=${college}&page=${page}`
    );
    console.log(response.data);
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
    console.log(response.data.data);
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
    console.log(response.data.data);
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

// GET : 부스 검색
export const GetBoothSearch = async (type, keyword, page) => {
  try {
    const response = await http.get(
      `/booths/search/?keyword=${keyword}&type=${type}&page=${page}`
    );
    console.log(response.data);
    return Promise.resolve(response.data);
  } catch (error) {
    console.error('부스 검색 조회 실패', error);
    return Promise.reject(error);
  }
};

// GET : 홈화면 부스 조회
export const GetBoothHome = async () => {
  try {
    const response = await http.get(`/booths/home`);
    console.log(response.data);
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
    console.log(response.data.data);
    return Promise.resolve(response.data.data);
  } catch (error) {
    console.error('부스 상세 조회 실패', error);
    return Promise.reject(error);
  }
};

// PATCH : 부스 관리자 수정
{
  /*
export const PatchBooth = async ({ boothId, formData, otherData }) => {
  // JSON으로 변환
  const jsonPayload = {
    otherData
  };

  formData.append(
    'jsonPayload',
    new Blob([JSON.stringify(jsonPayload)], {
      type: 'application/json'
    })
  );

  try {
    const response = await http.patch(`/manages/${boothId}/`, {
      formData: formData
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      throw new Error('부스 정보 수정에 실패했습니다.');
    }
  } catch (error) {
    console.error('오류:', error);
    throw error;
  }
};
 */
}

export const PatchBooth = async (boothId, formData) => {
  try {
    const response = await http.patch(`/manages/${boothId}/`, formData);

    if (!response.ok) {
      throw new Error('이미지 업로드 실패');
    }

    const result = await response.data;
    return result;
  } catch (error) {
    console.error('오류:', error);
    throw error;
  }
};

// GET : 메뉴 목록 조회
export const GetMenuList = async boothId => {
  try {
    const response = await http.get(`/manages/${boothId}/menus/`);
    console.log(response.data.data);
    return Promise.resolve(response.data.data);
  } catch (error) {
    console.error('메뉴 목록 조회 실패', error);
    confirmLogin(error);
    return Promise.reject(error);
  }
};

// POST : 메뉴 추가
export const PostMenu = async (boothId, data) => {
  try {
    const response = await http.post(`/manages/${boothId}/menus/`, {
      data: data
    });
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
    //confirmLogin(error);
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
