import { CollectionConfig } from 'payload/types';
import { v4 as uuidv4 } from 'uuid';

const PhotographyServices: CollectionConfig = {
  slug: 'photographyServices',
  fields: [
    {
      name: 'text',
      type: 'text',
      defaultValue: uuidv4,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'item',
          type: 'relationship',
          relationTo: 'PhotographyServiceItem',
        },
      ],
    },
  ],
};

export default PhotographyServices;
