const Projects = {
    slug: 'projects',
    labels: {
      singular: 'Project',
      plural: 'Projects',
    },
    fields: [
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
        name: 'category',
        type: 'text',
        required: true,
        label: 'Category',
      },
      {
        name: 'image',
        type: 'upload',
        relationTo: 'media',
        required: true,
        label: 'Image',
      },
      {
        name: 'imageAlt',
        type: 'text',
        required: true,
        label: 'Image Alt Text',
      },
      {
        name: 'detailLink',
        type: 'text',
        required: true,
        label: 'Detail Link',
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
  
  export default Projects;
  