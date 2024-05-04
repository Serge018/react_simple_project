import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';

describe('Тесты компонента Button', () => {
	test('Простая отрисовка', () => {
		render(<Button>Test</Button>);
		expect(screen.getByText('Test')).toBeInTheDocument();
	})
})
