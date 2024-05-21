'use client';
import Select from '@/components/ui/Select';
import Spinner from '@/components/ui/Spinner';
import useApp from '@/hooks/useApp';
import InfinitePosts from '@/modules/InfinitePosts';
import { Option } from '@/types/global';
import { routes } from '@/utils/constants';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';

const SearchPage = () => {
  const router = useRouter();
  const { categories } = useApp();
  const searchParams = useSearchParams();
  const search = searchParams.get('categoryId');
  const [category, setCategory] = useState<Option | undefined>();

  const handleSelect = useCallback((active: Option) => {
    router.push(routes.search + '?categoryId=' + active.value);
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      const res = categories.find(category => category.value === Number(search)) || categories[0];
      setCategory(res);
    }
  }, [categories, search]);

  if (categories.length === 0 || !category) {
    return <Spinner />;
  }

  return (
    <>
      <Select options={categories} onChange={handleSelect} value={category} />
      <hr />
      <InfinitePosts
        initPage={0}
        initPosts={[]}
        options={{ categoryId: category.value, published: true }}
      />
    </>
  );
};

export default SearchPage;
