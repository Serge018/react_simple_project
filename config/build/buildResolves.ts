import webpack from 'webpack';
import { BuildOptions } from './types/config';


export function buildResolves({ paths }: BuildOptions): webpack.ResolveOptions {
	return {
		modules: [ paths.src, 'node_modules' ],
		preferAbsolute: true,
		mainFiles: [ 'index' ],
		alias: {},
		extensions: ['.tsx', '.ts', '.js'],
	}
}