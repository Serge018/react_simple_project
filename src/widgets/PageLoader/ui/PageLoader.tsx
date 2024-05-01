import { classNames } from "shared/lib/classNames/classNames";
import cls from './PageLoader.module.scss'


interface PageLoaderProps {
	className?: string
}

console.log('cls', cls)

export const PageLoader = ({ className }: PageLoaderProps) => {
	return (
		<div className={ classNames(cls.PageLoader , {}, [ className ]) }>
			<div className={ cls[ 'lds-spinner' ] }>
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
		</div>
	)
}