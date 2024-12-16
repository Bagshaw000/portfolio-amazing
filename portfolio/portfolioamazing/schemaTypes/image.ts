import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'websiteimages',
  title: 'WebsiteImages',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'image',
    }),

    defineField({
      name: 'profile',
      title: 'Profile',
      type: 'image',
    }),

    defineField({
      name: 'service',
      title: 'Service',
      type: 'array',
      of: [{type: 'image'}],
    }),
  ],
})
