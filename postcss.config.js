module.exports = {
  plugins: [
    require('postcss-css-variables')({
      variables: {
        '--brandPrimary': '#DC234D'
      }
    }),
    require('postcss-custom-media')({
      extensions: {
        '--medium-viewport': '(min-width: 700px)'
      }
    }),
    require('postcss-nested')(),
    require('postcss-hexrgba')(),
    require('postcss-cssnext')(),
    require('cssnano')()
  ]
}
