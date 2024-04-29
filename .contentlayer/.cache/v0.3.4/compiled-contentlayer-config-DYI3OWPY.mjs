// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
var Docs = defineDocumentType(() => ({
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
var contentlayer_config_default = makeSource({
  contentDirPath: 'src/docs',
  documentTypes: [Docs],
})
export { contentlayer_config_default as default }
//# sourceMappingURL=compiled-contentlayer-config-DYI3OWPY.mjs.map
