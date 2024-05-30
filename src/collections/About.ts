const About = {
    slug: 'about',
    labels: {
      singular: 'About',
      plural: 'About Sections',
    },
    fields: [
      {
        name: 'title',
        type: 'text',
        required: true,
        label: 'Title',
      },
      {
        name: 'subtitle',
        type: 'text',
        required: true,
        label: 'Subtitle',
      },
      {
        name: 'description',
        type: 'textarea',
        required: true,
        label: 'Description',
      },
      {
        name: 'skills',
        type: 'array',
        label: 'Skills',
        fields: [
          {
            name: 'skillName',
            type: 'text',
            required: true,
            label: 'Skill Name',
          },
          {
            name: 'skillLevel',
            type: 'number',
            required: true,
            label: 'Skill Level (%)',
            min: 0,
            max: 100,
          },
        ],
      },
      {
        name: 'buttonText',
        type: 'text',
        required: true,
        label: 'Button Text',
      },
      {
        name: 'buttonLink',
        type: 'text',
        required: true,
        label: 'Button Link',
      },
      {
        name: 'image',
        type: 'upload',
        relationTo: 'media',
        required: true,
        label: 'Image',
      },
    ],
    access: {
      read: () => true,
    },
  };
  
  export default About;
  