import Link from 'next/link'
import {GetStaticProps, NextPage} from 'next/types'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import React from 'react'
import {Seo} from '@/types'
import {getSortedPostsData} from '@/utils/blogParse'
import {seo} from '@/utils/constants'
import revalidate from '@/utils/revalidate'
import {Routes} from '@/utils/routes'

import Layout from '@/components/Layout'

export type BlogPost = {
  id: string, date: string, title: string
}

type Props = {
  blogPosts: BlogPost[]
  seo: Seo
}

const Blog: NextPage<Props> = ({blogPosts, seo}) => {
  const {t} = useTranslation()
  const canonical = `${process.env.NEXT_PUBLIC_APP_URL}/blog`
  return (
    <Layout
      {...seo}
      canonical={canonical}
    >
      <h1>{t('blog')}</h1>
      <ul>
        {blogPosts.map((post) =>
          <li key={post.id} className='mb-2'>
            <Link href={Routes.blog + '/' + post.id}>{post.title}</Link>
          </li>,
        )}
      </ul>
    </Layout>
  )
}

export default Blog

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const blogPosts = getSortedPostsData()
  return {
    props: {
      blogPosts,
      seo: seo.blog,
      ...(await serverSideTranslations(locale as string)),
    },
    revalidate: revalidate,
  }
}
