import path from 'path';
import webpack from 'webpack';
import { BuildPaths } from '../build/types/config';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
import { buildBabelLoader } from '../build/loaders/buildBabelLoader';

export default ({ config }: { config: webpack.Configuration }) => {
	const paths: BuildPaths = {
		build: '',
		entry: '',
		html: '',
		src: path.resolve(__dirname, '..', '..', 'src'),
	}

	config.resolve.modules.push(paths.src);
	config.resolve.extensions.push('.ts', '.tsx');
	config.module.rules.push(buildBabelLoader());
	config.module.rules.push(buildCssLoaders(true));

	return config;
}