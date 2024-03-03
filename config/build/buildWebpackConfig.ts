import path from 'path';
import webpack from 'webpack';

import { BuildOptions } from './types/config';
import { buildLoader } from './buildLoaders';
import { buildResolves } from './buildResolves';
import { buildPlugin } from './buildPlugins';
import { buildDevServer } from './buildDevServer';


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const { paths, mode } = options;
	
	return {
		mode: mode,
		entry: paths.entry,
		module: {
			rules: buildLoader(),
		},
		resolve: buildResolves(),
		output: {
			filename: '[name].[contenthash].js',
			path: paths.build,
			clean: true
		},
		plugins: buildPlugin(options),
		devtool: 'inline-source-map',
		devServer: buildDevServer(options)
	}
}