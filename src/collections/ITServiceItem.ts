import { CollectionConfig } from 'payload/types';
import { v4 as uuidv4 } from 'uuid';

const ITServiceItem: CollectionConfig = {
  slug: 'ITServiceItem',
  fields: [
    {
      name: 'text',
      type: 'text',
      defaultValue: uuidv4,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'scheduleMeeting',
      type: 'checkbox',
      required: true,
    },
  ],
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
};

export default ITServiceItem;
