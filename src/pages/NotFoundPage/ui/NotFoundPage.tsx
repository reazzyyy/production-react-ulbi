import { classNames } from 'shared/lib/helpers/classNames';
import { useTranslation } from 'react-i18next';
import styles from './NotFound.module.scss';

interface NotFoundProps {
    className?: string;
}

export function NotFound({ className }: NotFoundProps) {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.notfound, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
}
