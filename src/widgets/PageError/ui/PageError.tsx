import { classNames } from "shared/lib/classNames/classNames";
import cls from './PageError.module.scss'
import { useTranslation } from 'react-i18next';
import { ErrorInfo } from 'react';


interface PageErrorProps {
	className?: string,
	error: ErrorInfo | null
}

export const PageError = ({ className, error }: PageErrorProps) => {
	
	const { t } = useTranslation();
	
	return (
		<div className={ classNames(cls.PageError , {}, [ className ]) }>
			<h1>{ t('Произоша непредвиденная ошибка') }</h1>
			<p>
				{ error && error.toString() }
				<br />
			</p>
		</div>
	)
}