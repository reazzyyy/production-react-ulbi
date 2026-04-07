import { classNames } from 'shared/lib/helpers/classNames';
import { Button } from 'shared/ui/';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import styles from './BugButton.module.scss';

interface BugButtonProps {
    className?: string;
}

export function BugButton({ className }: BugButtonProps) {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const throwError = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button className={classNames(styles.bugbutton, {}, [className])} onClick={throwError}>
            {t('Вызвать ошибку')}
        </Button>
    );
}
