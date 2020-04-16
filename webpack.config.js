module.exports = {
  // entry: './app/app.ts',
  entry: './js/app.js',

  // // tells webpack that source-map should be created inline
  // // with a fine bundle it produces
  // devtool: 'inline-source-map',

  // // configures web-pack plugins
  // module: {
  //   // tells web-pack what plugin to use and how
  //   rules: [
  //     {
  //       // 'ts-loader' plugin enables web-pack to compile typescript code
  //       // as part of its bundling process
  //       use: 'ts-loader',
  //       test: /\.tsx?$/,
  //       exclude: /node_modules/
  //     }
  //   ]
  // },

  // // tells webpack file it should use for module resolution
  // resolve: {
  //   extensions: ['.tsx', '.ts', '.js']
  // },

  // // specifies the name of the bundle file that webpack will produce 
  // // once we begin bundling, it will be the name of the file which will sent to the browser
  // output: {
  //   filename: 'bundle.js'
  // },

  devServer: {
    // keeps my browser from automatic refreshing each time a new bundle is produced
    // the motivation is to refresh the browser manually to observe the changes
    inline: false
  }
};
