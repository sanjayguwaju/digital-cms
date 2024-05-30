import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'
import cors from 'cors';

import Users from './collections/Users'
import Article from './collections/Articles'
import Category from './collections/Categories'
import Comment from './collections/Comments'
import Media from './collections/Medias'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import AboutUs from './collections/AboutUs'
import Services from './collections/Services'
import ITServices from './collections/ITServices'
import ITServiceItem from './collections/ITServiceItem'
import MedicalServices from './collections/MedicalServices'
import PhotographyServices from './collections/PhotographyServices'
import PhotographyServiceItem from './collections/PhotographyServiceItem'
import AccountingServices from './collections/AccountingServices'
import CakeServices from './collections/CakeServices'
import CakeServiceItem from './collections/CakeServiceItem'
import DieticianServices from './collections/DieticianServices'
import BeauticianServices from './collections/BeauticianServices'
import ContactUs from './collections/ContactUs'
import Homepage from './collections/Homepage'
import Hero from './collections/Hero'

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: lexicalEditor({}),
  collections: [
    Users,
    Hero,
    Media,
  ],
  express: {
    middleware: [
      cors({
        origin: 'http://127.0.1.1:3000/', // Replace with your allowed origin(s)
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
      }),
    ],
  },
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  cors: ['http://localhost:4321/'],
  serverURL:'http://localhost:5000'
})
