import { Configuration } from "webpack";
import * as path from "path"

import sass from "sass";
import fibers from "fibers";

import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import webpack from "webpack";
import dotenv from "dotenv";

const isProduction = process.env.NODE_ENV === "production";

const baseUrl = process.env.BASE_URL || "/";

const config: Configuration = {
  target: "web",
  mode: isProduction ? "production" : "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss"],
    alias: {
      "@api": path.resolve(__dirname, "src/api"),
      "@comp": path.resolve(__dirname, "src/comps"),
      "@style": path.resolve(__dirname, "src/style"),
      "@root": path.resolve(__dirname, "src")
    }
  },
  entry: {
    index: path.join(__dirname, "src", "index.tsx")
  },
  plugins: [
      new HtmlWebpackPlugin({
        inject: "head",
        minify: isProduction,
        template: path.join(__dirname, "src", "index.html"),
        scriptLoading: "defer"
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.join(__dirname, "assets")
          }
        ]
      }),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(dotenv.config().parsed)
      })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader" },
          { loader: "ts-loader" }
        ]
      },
      {
        test: /\.s?css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader?modules",
            options: {
              sourceMap: !isProduction,
              importLoaders: 1,
              modules: {
                auto: true,
                localIdentName: isProduction ? "[hash:base64:8]" : "[path][name]__[local]",
                exportLocalsConvention: "dashesOnly"
              }
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: !isProduction,
              implementation: sass,
              sassOptions: {
                fiber: fibers
              }
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: baseUrl,
    filename: "assets/scripts/[name].[contenthash:8].js",
    chunkFilename: "assets/scripts/[name].[contenthash:8].js",
  },
  devServer: {
    historyApiFallback: true
  }
}

export default config;
