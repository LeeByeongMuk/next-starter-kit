import { fetchApi } from '@/app/utils/api';

interface PostsReq {
  page: number;
}

const fetchPosts = async ({ page }: PostsReq) => {
  return await fetchApi(`/api/posts?page=${page}`, {
    method: 'GET',
  });
};

interface PostReq {
  id: string;
}

const fetchPost = async ({ id }: PostReq) => {
  return await fetchApi(`/api/posts/${id}`, {
    method: 'GET',
  });
};

interface PostCreateReq {
  title: string;
  type: string | null;
  contents: string;
  is_open: boolean | null;
}

const fetchPostCreate = async ({
  title,
  type,
  contents,
  is_open,
}: PostCreateReq) => {
  return await fetchApi('/api/posts', {
    method: 'POST',
    body: JSON.stringify({
      title,
      type: type || null,
      contents,
      is_open,
    }),
  });
};

interface PostUpdateReq {
  id: string;
  title: string;
  type: string | null;
  contents: string;
  is_open: boolean | null;
}

const fetchPostUpdate = async ({
  id,
  title,
  type,
  contents,
  is_open,
}: PostUpdateReq) => {
  return await fetchApi(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      type: type || null,
      contents,
      is_open,
    }),
  });
};

export { fetchPosts, fetchPost, fetchPostCreate, fetchPostUpdate };
export type { PostCreateReq, PostUpdateReq };
