import { classNames } from './classNames';

describe('Тестовый набор для хелпера classNames()', () => {

	test('Тест с передачей только первого аргумента', () => {
		const expected = 'someClass';
		const result = classNames('someClass');

		expect(result).toBe(expected);
	});

	test('Тест с передачей массива дополнительных css классов', () => {
		const expected = 'someClass class_01 class_02';
		const result = classNames('someClass', {}, ['class_01', 'class_02' ]);

		expect(result).toBe(expected);
	});

	test('Тест с передачей объекта mods', () => {
		const expected = 'someClass hovered scrollable class_01 class_02';
		const result = classNames(
			'someClass',
			{ hovered : true, scrollable : true },
			['class_01', 'class_02' ]);

		expect(result).toBe(expected);
	});

	test('Тест с передачей объекта mods, в котором одно из полей в значении false', () => {
		const expected = 'someClass hovered class_01 class_02';
		const result = classNames(
			'someClass',
			{ hovered : true, scrollable : false },
			['class_01', 'class_02' ]);

		expect(result).toBe(expected);
	});

	test('Тест с передачей объекта mods, в котором одно из полей в значении undefined', () => {
		const expected = 'someClass scrollable class_01 class_02';
		const result = classNames(
			'someClass',
			{ hovered : undefined, scrollable : true },
			['class_01', 'class_02' ]);

		expect(result).toBe(expected);
	});
});