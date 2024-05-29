import { CollectionConfig } from 'payload/types';
import { v4 as uuidv4 } from 'uuid';

const PhotographyServiceItem: CollectionConfig = {
  slug: 'PhotographyServiceItem',
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
    {
      name: 'bookAndPaymentProcedure',
      type: 'checkbox',
      required: true,
    },
  ],
};

export default PhotographyServiceItem;
