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
      of: [{
        type: 'block',
        marks: {
          annotations: [
            {
              name: 'link',
              type: 'object',
              title: 'External link',
              fields: [
                {
                  name: 'href',
                  type: 'url',
                  title: 'URL'
                },
                {
                  title: 'Open in new tab',
                  name: 'blank',
                  type: 'boolean',
                  default: true
                }
              ]
            }
          ]
        }
      }]
    },
  ]
}