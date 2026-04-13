import { classNames } from 'shared/lib/helpers/classNames';
import { useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { ThemeSwitcher, LangSwitcher } from 'shared/ui';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}
        >
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button data-testid="sidebar-toggle" onClick={onToggle}>
                toggle
            </Button>
            <div className={styles.switchers}>
                <ThemeSwitcher className={styles.themeSwitcher} />
                <LangSwitcher className={styles.langSwitcher} />
            </div>
        </div>
    );
}
