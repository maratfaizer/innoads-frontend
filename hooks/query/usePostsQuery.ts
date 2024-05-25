import fetchApiPosts from '@/utils/api/client/fetchApiPosts';
import { GetPostsParams } from '@/utils/api/prisma/fetchAds';
import { useQuery } from '@tanstack/react-query';

export default function usePostsQuery(params: Partial<GetPostsParams>, enabled = true) {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetchApiPosts(params),
    enabled: enabled,
  });
  return {
    posts: data,
    postsLoading: isLoading,
    postsError: error,
    postsRefetch: refetch,
  };
}
