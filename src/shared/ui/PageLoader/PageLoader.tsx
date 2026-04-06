import { classNames } from 'shared/lib/helpers/classNames';
import styles from './PageLoader.module.scss';
import { Loader } from '../Loader/Loader';

interface PageLoaderProps {
    className?: string;
}

export function PageLoader({ className }: PageLoaderProps) {
    return (
        <div className={classNames(styles.loader, {}, [className])}>
            <Loader />
        </div>
    );
}
