const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { CleanPlugin, HotModuleReplacementPlugin } = require('webpack')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

const config = (env) => {
  const isDevelopment = env.NODE_ENV !== 'production'

  return {
    entry: ['./src/index.js'],
    mode: isDevelopment ? 'development' : 'production',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.[contenthash].js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: ['babel-loader'],
          exclude: /node_modules/,
          include: /src/
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
          test: /\.(png|jpg|jpeg)$/,
          type: 'asset/resource',
          generator: {
            filename: 'images/[hash][ext][query]'
          }
        },
        {
          test: /\.svg$/,
          type: 'asset/inline'
        },
        {
          test: /\.txt$/,
          type: 'asset/source'
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@components': path.resolve(__dirname, 'src', 'components'),
        '@hooks': path.resolve(__dirname, 'src', 'hooks'),
        '@pages': path.resolve(__dirname, 'src', 'pages'),
        '@images': path.resolve(__dirname, 'src', 'images')
      }
    },
    devServer: {
      contentBase: './build',
      historyApiFallback: true,
      open: true,
      hot: true
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    plugins: [
      new NodePolyfillPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'public/index.html',
        inject: true
      }),
      new MiniCssExtractPlugin({
        filename: 'styles/[name].css'
      }),
      new CleanPlugin(),
      isDevelopment ? new HotModuleReplacementPlugin() : false,
      isDevelopment ? new ReactRefreshWebpackPlugin() : false
    ]
  }
}

module.exports = config
