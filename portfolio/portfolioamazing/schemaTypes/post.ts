import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',

  liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Amazing Irechukwu',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      initialValue: 'content',
      options: {
        list: [
          {title: 'Content Creation', value: 'content'},
          {title: 'Ad Production', value: 'ad'},
          {title: 'Branding', value: 'brand'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'image', type: 'image', title: 'Image'},
            {name: 'subtitle', type: 'string', title: 'Subtitle'},
            {name: 'body', type: 'string', title: 'Body'},
          ],
        },
      ],
    }),
    defineField({
      name: 'tag',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Name'},
            {name: 'email', type: 'string', title: 'Email'},
            {name: 'comment', type: 'string', title: 'Comment'},
            {name: 'publishedAt', type: 'datetime', title: 'Published at'},
            {
              name: 'reply',
              type: 'array',
              title: 'Reply',
              of: [
                {
                  type: 'object',
                  fields: [
                    {name: 'name', type: 'string', title: 'Name'},
                    {name: 'email', type: 'string', title: 'Email'},
                    {name: 'comment', type: 'string', title: 'Comment'},
                    {name: 'publishedAt', type: 'datetime', title: 'Published at'},
                  {name:"replyTo", type:"string", title:"Reply to"}
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      // subtitle: 'body',
      author: 'author.name',
      media: 'mainImage',
    },
  },
})
