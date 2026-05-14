import { defineCollection, z } from 'astro:content'

// 博客文章集合定义：标题、描述、日期、标签、封面图（可选）
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
})

export const collections = { blog }
