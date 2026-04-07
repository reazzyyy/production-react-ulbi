import { classNames } from 'shared/lib/helpers/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/';
import styles from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export function PageError({ className }: PageErrorProps) {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(styles.pageerror, {}, [className])}>
            <p>{t('Что то пошло не так')}</p>
            <Button className={styles.pageerror__button} onClick={reloadPage}>{t('Обновить страницу')}</Button>
        </div>
    );
}
