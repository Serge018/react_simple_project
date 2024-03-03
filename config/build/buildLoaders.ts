import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';


export function buildLoader(options: BuildOptions): webpack.RuleSetRule[] {

	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			// Creates `style` nodes from JS strings
			options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			// Translates CSS into C ommonJS
			{
				loader: 'css-loader',
				options: {
					modules: true
				}
			},
			// Compiles Sass to CSS
			'sass-loader',
		]
	};

	// Если не используем TS, то нужно подключать babel-loader для работы с tsx
	const typeScriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	return [
		typeScriptLoader,
		cssLoader
	]
}