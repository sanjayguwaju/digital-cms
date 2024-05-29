import { CollectionConfig } from 'payload/types';

const Services: CollectionConfig = {
  slug: 'services',
  fields: [
    {
      name: 'ITServices',
      type: 'relationship',
      relationTo: 'ITServices',
    },
    {
      name: 'medicalServices',
      type: 'relationship',
      relationTo: 'medicalServices',
    },
    {
      name: 'photography',
      type: 'relationship',
      relationTo: 'photographyServices',
    },
    {
      name: 'accounting',
      type: 'relationship',
      relationTo: 'accountingServices',
    },
    {
      name: 'cakes',
      type: 'relationship',
      relationTo: 'cakeServices',
    },
    {
      name: 'dietician',
      type: 'relationship',
      relationTo: 'dieticianServices',
    },
    {
      name: 'beautician',
      type: 'relationship',
      relationTo: 'beauticianServices',
    },
  ],
};

export default Services;
