import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { fileURLToPath } from 'url';

// If you need __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  stats: 'errors-only',
  mode: 'development',
  entry: [
    "./src/index.js"
  ],
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, 'dist')
  },
  devServer: {
    // inline: true,
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new MonacoWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/images", to: "./images" }
      ]
    })
  ],
  resolve: {
    fallback: {
      dgram: false,
      fs: false,
      net: false,
      tls: false,
      child_process: false
    },
    modules: ['node_modules'],
    extensions: ['.js', '.scss', '.html', '.css']
  }
};