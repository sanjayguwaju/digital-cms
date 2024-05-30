const Hero = {
    slug: 'hero',
    labels: {
        singular: 'Hero',
        plural: 'Heros',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            type: 'textarea',
            required: true,
        },
        {
            name: 'primaryButton',
            type: 'group',
            fields: [
                {
                    name: 'text',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'link',
                    type: 'text',
                    required: true,
                },
            ],
        },
        {
            name: 'secondaryButton',
            type: 'group',
            fields: [
                {
                    name: 'text',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'link',
                    type: 'text',
                    required: true,
                },
            ],
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media', // Assuming you have a media collection for images
            required: true,
        },
    ],
    access: {
        read: () => true,

    },
};

export default Hero;
