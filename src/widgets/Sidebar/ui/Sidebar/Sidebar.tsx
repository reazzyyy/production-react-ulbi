import { classNames } from 'shared/lib/helpers/classNames';
import { useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
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
        <div className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}>
            <Button onClick={onToggle}>
                toggle
            </Button>
            <div className={styles.switchers}>
                <ThemeSwitcher className={styles.themeSwitcher} />
                <LangSwitcher className={styles.langSwitcher} />
            </div>
        </div>
    );
}
