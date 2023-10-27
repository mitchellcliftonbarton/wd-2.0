export default {
  name: 'homePage',
  type: 'document',
  title: 'Home Page',
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
      description: 'This text will appear in the middle of the home page, and override anything else.',
      of: [{type: 'block'}]
    }
  ]
}