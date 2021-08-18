const path = require('path')

const WorkboxPlugin = require('workbox-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { CleanPlugin, HotModuleReplacementPlugin } = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { ESBuildMinifyPlugin } = require('esbuild-loader')

const config = (env) => {
  const isDevelopment = env.NODE_ENV !== 'production'

  return {
    entry: ['./src/index.js'],
    mode: isDevelopment ? 'development' : 'production',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.[contenthash].js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: {
            loader: 'swc-loader'
          },
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
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          type: 'asset/resource'
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devServer: {
      contentBase: './build',
      historyApiFallback: true,
      open: true,
      hot: true,
      port: 3000
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      },
      minimizer: [
        new ESBuildMinifyPlugin({
          target: 'es2016',
          css: true
        })
      ]
    },
    plugins: [
      !isDevelopment &&
        new WorkboxPlugin.GenerateSW({
          runtimeCaching: [
            {
              urlPattern: /.(jpg|png|svg)/,
              handler: 'CacheFirst',
              options: {
                cacheName: 'images'
              }
            },
            {
              urlPattern: /.(woff|woff2|ttf)/,
              handler: 'CacheFirst',
              options: {
                cacheName: 'fonts'
              }
            },
            {
              urlPattern: /.(css|html|js)/,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'assets'
              }
            },
            {
              urlPattern: /https:$/i,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'external'
              }
            }
          ]
        }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'public/index.html',
        inject: true
      }),
      new MiniCssExtractPlugin({
        filename: 'styles/[name].css'
      }),
      new CleanPlugin(),
      new CopyPlugin({
        patterns: [
          { from: 'public/robots.txt', to: 'robots.txt' },
          { from: 'public/manifest.json', to: 'manifest.json' },
          { from: 'public/icons', to: 'icons' },
          { from: 'public/favicon.png', to: 'favicon.png' }
        ]
      }),
      isDevelopment && new HotModuleReplacementPlugin(),
      isDevelopment && new ReactRefreshWebpackPlugin(),
      new BundleAnalyzerPlugin()
    ].filter(Boolean)
  }
}

module.exports = config
