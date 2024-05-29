import { CollectionConfig } from 'payload/types';
import { v4 as uuidv4 } from 'uuid';

const AboutUs: CollectionConfig = {
  slug: 'aboutUs',
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
      name: 'content',
      type: 'textarea',
      required: true,
    },
  ],
  
};

export default AboutUs;
