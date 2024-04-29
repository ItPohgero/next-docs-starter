import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const Docs = defineDocumentType(() => ({
  name: 'Docs',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the Docs',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the Docs',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/docs/${doc._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'src/docs',
  documentTypes: [Docs],
})
