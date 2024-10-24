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
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
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
          {title: 'Metricool', value: 'metricool'},
        ],
        layout: 'grid',
      },
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images',
    },
  },
})
