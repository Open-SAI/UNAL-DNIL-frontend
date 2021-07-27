module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
	  port: 8081
  },
  publicPath: process.env.NODE_ENV === 'production' 
	? '/UNAL-DNIL-frontend/'
	: '/UNAL-DNIL-frontend'
}
