export default {
  name: 'infoPage',
  type: 'document',
  title: 'Info Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'infoText',
      type: 'array',
      title: 'Info Text',
      description: 'This text will appear on the info page.',
      of: [{type: 'block'}]
    }
  ]
}