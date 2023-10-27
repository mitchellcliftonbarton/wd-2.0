export default {
  name: 'artist',
  type: 'document',
  title: 'Artists',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'The artist name',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      validation: (Rule: any) => Rule.required(),
      options: {
        source: 'name'
      }
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'array', 
      of: [{type: 'block'}]
    },
  ]
}