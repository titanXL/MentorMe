module.exports = {
  plugins: [
    require('postcss-css-variables')({
      variables: {
        '--brandPrimary': '#DC234D',
        '--brandPrimaryDark': '#9a1936',
        '--buttonPrimary': '#4183C4'
      }
    }),
    require('postcss-custom-media')({
      extensions: {
        '--medium-viewport': '(min-width: 700px)',
        '--small-viewport': '(max-width: 420px)'
      }
    }),
    require('postcss-nested')(),
    require('postcss-hexrgba')(),
    require('postcss-cssnext')(),
    require('cssnano')()
  ]
}
