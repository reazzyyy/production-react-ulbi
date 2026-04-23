import { classNames } from 'shared/lib/helpers/classNames';
import React, { FC } from 'react';
import styles from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, children, theme = ButtonTheme.CLEAR, ...otherProps
    } = props;
    return (
        <button
            type="button"
            className={classNames(
                styles.button,
                {},
                [styles[theme],
                    className],
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
};
