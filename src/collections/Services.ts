const Services = {
  slug: 'services',
  labels: {
    singular: 'Service',
    plural: 'Services',
  },
  fields: [
    {
      name: 'icon',
      type: 'text',
      required: true,
      label: 'Icon Class',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Description',
    },
    {
      name: 'animationDelay',
      type: 'text',
      required: true,
      label: 'Animation Delay',
    },
    {
      name: 'link',
      type: 'text',
      required: true,
      label: 'Link',
    },
  ],
  access: {
    read: () => true,
  },
};

export default Services;
