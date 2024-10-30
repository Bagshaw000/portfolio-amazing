import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
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
      name: 'duration',
      title: 'Duration',
      type: 'number',
    }),
    defineField({
      name: 'tools',
      title: 'Tools',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        list: [
          {title: 'Canva', value: 'canva'},
          {title: 'Capcut', value: 'capcut'},
          {title: 'Metricool', value: 'metricool'},
          {title: 'Adobe premier', value: 'adobe'},
        ],
        layout: 'grid',
      },
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'text',
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
            {name: 'comment', type: 'text', title: 'Comment'},
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images',
    },
  },
})
