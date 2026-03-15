import { AppLink, AppLinkTheme } from 'shared/ui/';
import { ThemeSwitcher } from 'shared/ui/';
import { classNames } from 'shared/lib/helpers/classNames';

import styles from './Navbar.module.scss';


interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <ThemeSwitcher className={styles.themeSwitcher} />
      <div className={styles.links}>
        <AppLink to="/" theme={AppLinkTheme.SECONDARY}>Главная</AppLink>
        <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>О сайте</AppLink>
      </div>
    </div>
  );
}
