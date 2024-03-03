import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildLoader } from './buildLoaders';
import { buildResolves } from './buildResolves';
import { buildPlugin } from './buildPlugins';
import { buildDevServer } from './buildDevServer';


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const { paths, mode, isDev } = options;
	
	return {
		mode: mode,
		entry: paths.entry,
		module: {
			rules: buildLoader(options),
		},
		resolve: buildResolves(),
		output: {
			filename: '[name].[contenthash].js',
			path: paths.build,
			clean: true
		},
		plugins: buildPlugin(options),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(options) : undefined
	}
}