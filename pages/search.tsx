import Layout from '@/components/Layout'
import Select from '@/components/ui/Select';
import InfinitePosts from "@/modules/InfinitePosts";
import {Seo} from "@/types";
import {seo} from '@/utils/constants'
import {selectOptions, SelectProps} from "@/utils/options";
import revalidate from '@/utils/revalidate'
import type {GetStaticProps} from 'next'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useRouter} from 'next/router'
import {NextPage} from 'next/types'
import React, {useState} from 'react'

interface SearchPageProps {
  seo: Seo
}

const SearchPage: NextPage<SearchPageProps> = ({seo}) => {
  const {t} = useTranslation()
  const router = useRouter()
  const [category, setCategory] = useState<SelectProps>(
    selectOptions.find(x => x.value === Number(router.query['categoryId'])) || selectOptions[0],
  )

  return (
    <Layout {...seo}>
      <h1>{t('search')}</h1>
      <hr/>
      <Select onChange={setCategory} defaultValue={category.value}/>
      <hr/>
      <InfinitePosts initPage={0} initPosts={[]} options={{categoryId: category.value}}/>
    </Layout>
  )
}

export default SearchPage

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string)),
      seo: seo.search,
    },
    revalidate: revalidate,
  }
}
