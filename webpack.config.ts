import webpack from 'webpack';
import 'webpack-dev-server';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {buildWebpack} from './config/build/buildWebpack';

type Mode = 'production' | 'development';

interface EnvVariables {
  mode?: Mode;
  port: number;
}

export default (env: EnvVariables) => {
  const isDev = env.mode === 'development';
  const isProd = env.mode === 'production';

  const config: webpack.Configuration= buildWebpack();
  return config;
};