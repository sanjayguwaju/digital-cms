import { CollectionConfig } from 'payload/types';
import { v4 as uuidv4 } from 'uuid';

const Homepage: CollectionConfig = {
  slug: 'homepage',
  fields: [
    {
      name: 'text',
      type: 'text',
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
      name: 'content',
      type: 'textarea',
      required: true,
    },
  ],
};

export default Homepage;
