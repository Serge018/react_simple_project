import React, { ErrorInfo, ReactNode } from 'react';
import { PageError } from 'widgets/PageError';

interface ErrorBoundaryProps {
	children: ReactNode
}

interface ErrorBoundaryState {
	hasError: boolean;
	error: ErrorInfo
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false, error: null };
	}
	
	static getDerivedStateFromError(error: ErrorBoundaryState) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true, error: error };
	}
	
	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		// You can also log the error to an error reporting service
		console.error(error, errorInfo);
	}
	
	render() {
		
		const { hasError, error } = this.state;
		const { children } = this.props;

		if (hasError) {
			// You can render any custom fallback UI
			return <PageError error={error}/>;
		}
		
		return children;
	}
}

export default ErrorBoundary;