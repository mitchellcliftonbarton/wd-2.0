export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site Title',
      description: 'The meta title for the site',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Site Description',
      description: 'The meta description for the site',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'ogImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'The image that will appear when the site is shared on social media'
    }
  ]
}