export default {
  name: 'exhibition',
  type: 'document',
  title: 'Exhibitions',
  groups: [
    {
      name: 'main',
      title: 'Info',
      default: true
    },
    {
      name: 'media',
      title: 'Media',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Exhibition Title',
      description: 'The title of the exhibition',
      validation: (Rule: any) => Rule.required(),
      group: 'main',
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      validation: (Rule: any) => Rule.required(),
      group: 'main',
      options: {
        source: 'title'
      }
    },
    {
      name: 'displayTitle',
      type: 'boolean',
      title: 'Display Title?',
      description: 'Whether or not to display the exhibition title on the exhibition page',
      group: 'main',
    },
    {
      name: 'featuredImage',
      type: 'image',
      title: 'Featured Image',
      group: 'main',
    },
    {
      title: 'Start Date',
      name: 'start_date',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
      group: 'main',
    },
    {
      title: 'End Date',
      name: 'end_date',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
      group: 'main',
    },
    {
      name: 'description',
      type: 'array',
      title: 'Exhibition Description',
      description: 'The description for the exhibition',
      group: 'main',
      of: [{type: 'block'}]
    },
    {
      name: 'artists',
      type: 'array',
      title: 'Artists',
      description: 'The artists in the exhibition',
      group: 'main',
      of: [
        {
          type: 'reference',
          to: { type: 'artist' }
        }
      ]
    },
    {
      name: 'files',
      type: 'array',
      title: 'Files',
      description: 'Images/videos for exhibition',
      group: 'media',
      of: [
        {
          type: 'object',
          name: 'imageObject',
          title: 'Image',
          fields: [
            {
              type: 'image',
              name: 'imageFile'
            },
            {
              type: 'text',
              name: 'text',
              title: 'Caption'
            },
          ]
        },
        {
          type: 'object',
          name: 'videoObject',
          title: 'Video (File)',
          fields: [
            {
              type: 'file',
              name: 'videoFile'
            },
            {
              type: 'image',
              name: 'videoPoster'
            },
            {
              type: 'text',
              name: 'text',
              title: 'Caption'
            },
          ]
        },
        {
          type: 'object',
          name: 'youtubeObject',
          title: 'YouTube Video',
          fields: [
            {
              type: 'string',
              name: 'youtubeId',
            },
            {
              type: 'image',
              name: 'videoPoster'
            },
            {
              type: 'text',
              name: 'text',
              title: 'Caption'
            },
          ]
        }
      ]
    },
    {
      name: 'ogImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'The image that will appear when the site is shared on social media',
      group: 'seo',
    }
  ]
}