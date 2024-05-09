export function buildBabelLoader() {
	return {
		test: /\.(?:js|jsx|tsx|ts)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: [
					['@babel/preset-env', { targets: 'defaults' }],
					['@babel/preset-react', { runtime: 'automatic' }]
				]
			}
		}
	};
}