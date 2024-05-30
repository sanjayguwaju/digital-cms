const Facts = {
    slug: 'facts',
    labels: {
      singular: 'Fact',
      plural: 'Facts',
    },
    fields: [
      {
        name: 'icon',
        type: 'text',
        required: true,
        label: 'Icon Class',
      },
      {
        name: 'count',
        type: 'number',
        required: true,
        label: 'Count',
      },
      {
        name: 'description',
        type: 'text',
        required: true,
        label: 'Description',
      },
      {
        name: 'animationDelay',
        type: 'text',
        required: true,
        label: 'Animation Delay',
      },
    ],
    access: {
      read: () => true,
    },
  };
  
  export default Facts;
  