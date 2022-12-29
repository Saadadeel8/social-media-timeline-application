import React, { useEffect } from 'react';
import '../../styles/newsFeed.css';
import { useInfiniteQuery } from 'react-query';
import { LoadingOutlined } from '@ant-design/icons';
import Post from '../post/Post';
import { fetchTimelineData } from '../../services/common-service';

export default function NewsFeed() {
  const {
    data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage,
  } = useInfiniteQuery(
    'repos',
    ({ pageParam = 1 }) => fetchTimelineData(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        return nextPage;
      },
    },
  );
  useEffect(() => {
    let fetching = false;
    const handleScroll = async (e) => {
      const { scrollHeight, scrollTop, clientHeight } = e.target.scrollingElement;
      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
        fetching = true;
        if (hasNextPage) await fetchNextPage();
        fetching = false;
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [fetchNextPage, hasNextPage]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {isSuccess && data.pages.map((page) => page.data.map((post) => (
          <Post key={post.id} post={post} />
        )))}
      </div>
      <div className="feedLoading">
        {isFetchingNextPage && <LoadingOutlined style={{ width: 100, height: 100 }} />}
      </div>
    </div>
  );
}
