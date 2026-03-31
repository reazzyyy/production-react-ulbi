import { classNames } from 'shared/lib/helpers/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '../Button/Button';

interface LangSwitcherProps {
    className?: string;
}

export function LangSwitcher({ className }: LangSwitcherProps) {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button theme={ButtonTheme.CLEAR} className={classNames('', {}, [className])} onClick={toggle}>{t('Язык')}</Button>
    );
}
