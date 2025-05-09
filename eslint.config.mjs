const eslintConfig = [
    ...compat.config({
      extends: ['next'],
      settings: {
        next: {
          rootDir: './src',
        },
      },
    }),
  ]
  export default eslintConfig