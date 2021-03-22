const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const NodePolyfillWebpackPlugin = require('node-polyfill-webpack-plugin')

const config = {
  entry: ['react-hot-loader/patch', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.[contenthash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
      {
        test: /\.svg$/,
        type: 'asset/inline',
      },
      {
        test: /\.txt$/,
        type: 'asset/source',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@hooks': path.resolve(__dirname, 'src', 'hooks'),
      '@pages': path.resolve(__dirname, 'src', 'pages'),
      '@images': path.resolve(__dirname, 'src', 'images'),
    },
  },
  devServer: {
    contentBase: './build',
    historyApiFallback: true,
    open: true,
  },
  plugins: [
    new NodePolyfillWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Rick Morty and React',
      filename: 'index.html',
      template: 'public/index.html',
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
    }),
  ],
}

module.exports = config
