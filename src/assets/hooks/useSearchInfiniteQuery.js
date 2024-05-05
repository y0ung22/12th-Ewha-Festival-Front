import { useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

//api
import { GetBoothSearch } from '../../api/booth';

const useSearchInfiniteQuery = (place, keyword) => {
  const {
    data,
    isLoading,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage
  } = useInfiniteQuery({
    queryKey: ['getNewBooth', place, keyword],
    queryFn: ({ pageParam = 1 }) => {
      return GetBoothSearch(place, keyword, pageParam);
    },
    getNextPageParam: lastPage =>
      lastPage.page < lastPage.total_page ? lastPage.page + 1 : undefined
  });

  const totalItem = useMemo(() => {
    const total = data?.pages[0].total;

    return total;
  }, [data]);

  const booths = useMemo(() => {
    const boothsData = data?.pages ? data.pages.flatMap(page => page.data) : [];

    return boothsData;
  }, [data]);

  return {
    booths,
    totalItem,
    isLoading,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage
  };
};

export default useSearchInfiniteQuery;
