import { Configuration } from "webpack";
import * as path from "path";

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
        test: /.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "ts-loader"
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
