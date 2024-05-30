import { Block } from 'payload/types';

const FeatureItem: Block = {
  slug: 'featureItem',
  labels: {
    singular: 'Feature Item',
    plural: 'Feature Items',
  },
  fields: [
    {
      name: 'icon',
      type: 'text',
      required: true,
      label: 'FontAwesome Icon Class',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'animationDelay',
      type: 'text',
      required: true,
      label: 'Animation Delay (e.g., 0.1s, 0.3s, 0.5s)',
    },
  ],
};

export default FeatureItem;
