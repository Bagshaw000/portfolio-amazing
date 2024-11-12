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
      initialValue: 'Content Creation',
      options: {
        list: [
          {title: 'Content Creation', value: 'Content Creation'},
          {title: 'Ad Production', value: 'Ad Production'},
          {title: 'Branding', value: 'Branding'},
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
          {title: 'Canva', value: 'Canva'},
          {title: 'Capcut', value: 'Capcut'},
          {title: 'Metricool', value: 'Metricool'},
          {title: 'Adobe premier', value: 'Adobe premier'},
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
