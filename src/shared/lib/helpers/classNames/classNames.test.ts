import { classNames } from 'shared/lib/helpers/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('some')).toBe('some');
    });

    test('with additional class', () => {
        expect(classNames('some', {}, ['additional'])).toBe('some additional');
    });

    test('with mods', () => {
        expect(classNames('some', { disabled: true })).toBe('some disabled');
    });
    test('with undefined', () => {
        expect(classNames('some', undefined, [undefined])).toBe('some');
    });

    test('with mods and additional', () => {
        expect(classNames('some', { disabled: true }, ['additional'])).toBe('some additional disabled');
    });
});
