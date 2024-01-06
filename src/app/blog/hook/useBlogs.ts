import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'
import useSWR from 'swr'
import { ExtendedRecordMap } from 'notion-types'
import axios from 'axios'

export const LIMIT = 3
export const TAGS = [
  {
    title: 'News',
    tag: '',
  },
  {
    title: 'Campaign',
    tag: 'Campaign',
  },
  {
    title: 'Desig 101',
    tag: 'Desig 101',
  },
  {
    title: 'Technology',
    tag: 'Technology',
  },
  {
    title: 'Lab Updates',
    tag: 'Lab Updates',
  },
  {
    title: 'Others',
    tag: 'Others',
  },
]

export const useBlogs = (): {
  data: Partial<{
    pageIds: string[]
    metadataMap: PageMap
  }>
  error: Error | undefined
} => {
  const { data, error } = useSWR<
    { pageIds: string[]; metadataMap: PageMap },
    Error
  >('/api/blog', async () => {
    const { data } = await axios.get(`/api/blog`)
    return data
  })

  return { data: data || {}, error }
}

export const useBlogDetails = (
  pageId: string,
): {
  data: Partial<{
    map: ExtendedRecordMap
    recommends: string[]
    metadata: PageMetadata
  }>
  error: Error | undefined
} => {
  const { data, error } = useSWR<
    { map: ExtendedRecordMap; recommends: string[] },
    Error
  >([pageId, 'blog'], async () => {
    const { data } = await axios.get(`/api/blog/${pageId}`)
    return data
  })

  return { data: data || {}, error }
}

export const useBlogTypes = (pageIds: string[], metadata: PageMap) => {
  const params = useSearchParams()
  const tag = params.get('tag') || ''
  const availableIds = useMemo(
    () =>
      pageIds.filter((pageId) => {
        const { publishedAt } = metadata[pageId] || { publishedAt: Date.now() }
        return publishedAt < Date.now()
      }),
    [pageIds, metadata],
  )

  const pinnedIds = useMemo(() => {
    return availableIds.filter((pageId) => {
      const { pinned } = metadata[pageId] || { pinned: false }
      return pinned
    })
  }, [availableIds, metadata])

  const taggedIds = useMemo(
    () =>
      availableIds.filter((pageId) => {
        const { tags } = metadata[pageId] || { tags: [] }
        if (!tag) return true
        if (tag === 'Others')
          return !TAGS.map(({ tag }) => tags.includes(tag)).reduce(
            (a, b) => a || b,
            false,
          )
        return tags.includes(tag)
      }),
    [availableIds, tag, metadata],
  )

  const total = useMemo(() => taggedIds.length, [taggedIds])
  const thumbnailIds = useMemo(() => {
    return taggedIds.slice(0, Math.min(LIMIT, total))
  }, [taggedIds, total])

  return {
    tag,
    total,
    pinnedIds,
    thumbnailIds,
  }
}