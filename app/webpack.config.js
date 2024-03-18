let config = {
  mode: 'production',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: [require('path').resolve(__dirname, "kotlin/app.mjs")]
};
config.output = {
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "index.js"
            : "index-[name].js";
    },
    
    libraryTarget: "umd",
    globalObject: "this"
};
config.output.path = require('path').resolve(__dirname, "../../../../app/build/dist/production")
// Report progress to console
// noinspection JSUnnecessarySemicolon
;(function(config) {
    const webpack = require('webpack');
    const handler = (percentage, message, ...args) => {
        const p = percentage * 100;
        let msg = `${Math.trunc(p / 10)}${Math.trunc(p % 10)}% ${message} ${args.join(' ')}`;
        msg = msg.replace(require('path').resolve(__dirname, "../.."), '');;
        console.log(msg);
    };

    config.plugins.push(new webpack.ProgressPlugin(handler))
})(config);

// noinspection JSUnnecessarySemicolon
;(function(config) {
    const tcErrorPlugin = require('kotlin-test-js-runner/tc-log-error-webpack');
    config.plugins.push(new tcErrorPlugin())
    config.stats = config.stats || {}
    Object.assign(config.stats, config.stats, {
        warnings: false,
        errors: false
    })
})(config);

// patch.js
// default-settings
;(function (config) {
if (!!config.output) { 
  config.output.chunkFilename = '[name].[contenthash].js'
  config.output.clean = true
}
})(config)

// font-rules
;(function (config) {
config.module.rules.push( 
  { 
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader',
    options: {
      name: '[name].[contenthash].[ext]',
      publicPath: '/fonts',
      outputPath: './fonts',
      esModule: false,
    },
  },
)
})(config)

// generated_5
;(function (config) {

            if (config.devServer) {
                config.devServer.historyApiFallback = true
            }
        
})(config)

// resources
;(function (config) {
config.resolve.modules.unshift(
    '/home/runner/work/kotlin-fluentui-sample/kotlin-fluentui-sample/app/src/jsMain/resources'
)
})(config)

// rules
;(function (config) {
config.module.rules.push(
  {
    test: /\.css$/,
    loader: 'css-loader',
    options: {
      esModule: false,
    },
  },
)
})(config)


module.exports = config
