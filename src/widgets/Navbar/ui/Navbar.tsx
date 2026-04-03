import { AppLink, AppLinkTheme } from 'shared/ui/';
import { classNames } from 'shared/lib/helpers/classNames';

import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink to="/" theme={AppLinkTheme.SECONDARY}>{t('Главная страница')}</AppLink>
                <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>{t('О сайте')}</AppLink>
            </div>
        </div>
    );
}
