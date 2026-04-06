import { classNames } from 'shared/lib/helpers/classNames';
import styles from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

export function Loader({ className }: LoaderProps) {
    return (
        <div className={classNames(styles['lds-ring'], {}, [className])}>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
}
