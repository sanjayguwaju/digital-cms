import { CollectionConfig } from 'payload/types';
import { v4 as uuidv4 } from 'uuid';

const CakeServiceItem: CollectionConfig = {
  slug: 'CakeServiceItem',
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
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'displayPrice',
      type: 'checkbox',
      required: true,
    },
  ],
};

export default CakeServiceItem;
