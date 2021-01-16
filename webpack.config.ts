import { Configuration } from "webpack";
import * as path from "path"

import sass from "sass";
import fibers from "fibers";

const isProduction = process.env.NODE_ENV === "production";

const baseUrl = process.env.BASE_URL || "/";

const config: Configuration = {
  target: "web",
  mode: isProduction ? "production" : "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  entry: {
    index: path.join(__dirname, "src", "index.tsx")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        test: /\.(?:c|sa|sc)ss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
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
  }
}

export default config;
