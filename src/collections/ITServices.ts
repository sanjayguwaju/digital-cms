import { CollectionConfig } from 'payload/types';
import { v4 as uuidv4 } from 'uuid';

const ITServices: CollectionConfig = {
  slug: 'ITServices',
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
          relationTo: 'ITServiceItem',
        },
      ],
    },
  ],
};

export default ITServices;
