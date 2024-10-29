import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
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
  ],
})
