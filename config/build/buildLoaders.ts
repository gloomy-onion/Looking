import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ModuleOptions } from 'webpack';

import { BuildOptions } from './types/types';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development';

  const svgrLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: 'convertColours',
                params: {
                  currentColor: true,
                },
              },
            ],
          },
        },
      },
    ],
  };
  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };
  const scssLoader = {
    test: /.(css|s[ac]ss)$/i,
    use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
  };
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  const fontLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
      outputPath: 'fonts',
    },
  };

  return [fontLoader, scssLoader, tsLoader, assetLoader, svgrLoader];
}