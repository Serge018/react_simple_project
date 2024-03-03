import {BuildOptions} from './types/config';
import type { Configuration as devServerConfigurations } from 'webpack-dev-server';


export function buildDevServer(options: BuildOptions): devServerConfigurations {
	return {
		port: options.port,
		open: true
	}
}