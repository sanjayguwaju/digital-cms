import { CollectionConfig } from 'payload/types';
import FeatureItem from './FeatureItem';

const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'blocks',
      blocks: [
        FeatureItem,
      ],
    },
  ],
  access: {
    read: () => true, // Publicly readable
  },
};

export default Pages;
