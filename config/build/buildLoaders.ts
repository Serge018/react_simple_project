import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { buildBabelLoader } from './loaders/buildBabelLoader';


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

	const cssLoader = buildCssLoaders(options.isDev);

	const babelLoader = buildBabelLoader();

	// Если не используем TS, то нужно подключать babel-loader для работы с tsx
	const typeScriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	return [
		svgLoader,
		fileLoader,
		babelLoader,
		typeScriptLoader,
		cssLoader
	]
}