import { CollectionConfig } from 'payload/types';
import { v4 as uuidv4 } from 'uuid';

const AccountingServices: CollectionConfig = {
  slug: 'accountingServices',
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
      name: 'scheduleMeeting',
      type: 'checkbox',
      required: true,
    },
  ],
};

export default AccountingServices;