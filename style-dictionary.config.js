export default {
  source: ['tokens/*.json'],
  platforms: {
    js: {
      transformGroup: 'js',
      buildPath: 'src/tokens/',
      files: [
        {
          destination: 'design-tokens.js',
          format: 'javascript/es6',
        },
      ],
    },
  },
  files: [
    {
      destination: 'colors.js',
      format: 'javascript/es6',
      filter: (token) => token.attributes.category === 'color',
    },
    {
      destination: 'spacing.js',
      format: 'javascript/es6',
      filter: (token) => token.attributes.category === 'spacing',
    },
  ],
}
