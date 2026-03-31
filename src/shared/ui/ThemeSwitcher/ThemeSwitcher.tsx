import { Button, ButtonTheme } from 'shared/ui';
import { useTheme, Theme } from 'app/providers/ThemeProvider';
import IconLight from 'shared/assets/icons/theme-light.svg';
import IconDark from 'shared/assets/icons/theme-dark.svg';
import { classNames } from 'shared/lib/helpers/classNames';

interface ThemeSwitcherProps {
    className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <IconLight /> : <IconDark />}
        </Button>
    );
}
