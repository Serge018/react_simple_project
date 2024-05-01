import { classNames } from "shared/lib/classNames/classNames";
import cls from './Spinner.module.scss'


interface SpinnerProps {
	className?: string
}

export const Spinner = ({ className }: SpinnerProps) => {
	return (
		<div className={ classNames(cls[ 'lds-spinner' ] , {}, [ className ]) }>
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
		</div>
	)
}