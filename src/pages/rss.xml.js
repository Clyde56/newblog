import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
  const posts = await getCollection('blog')
  posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())

  return rss({
    title: 'My Blog',
    description: '个人博客 — 分享技术与生活',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/${post.slug}/`,
    })),
  })
}
