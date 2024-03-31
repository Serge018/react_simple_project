import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';


export function buildLoader(options: BuildOptions): webpack.RuleSetRule[] {

	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack']
	};
 
	// Помимо картинок позволяет импортировать шрифты? для этого нужно в регулярное выражение добавить соответсвующие расширения
	const fileLoader = {
		test : /\.(png|jpe?g|gif)$/i,
		use : [
			{
				loader: 'file-loader'
			},
		],
	};

	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			// Creates `style` nodes from JS strings
			options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			// Translates CSS into C ommonJS
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resPath: string) => Boolean(resPath.includes('.module.')),
						localIdentName: options.isDev ? '[path][name]__[local]--[hash:base64:4]' : '[hash:base64:8]'
					}
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
		svgLoader,
		fileLoader,
		typeScriptLoader,
		cssLoader
	]
}