import { useCallback, useMemo } from 'react';
import clsx from 'clsx';
import { useForm as useRhfForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Div from '../atoms/Div';
import Button from '../atoms/Button';
import BaseForm from '../molecules/forms/BaseForm';
import { box_color } from '../mappings/box-colors';
import { class_name } from '../types';

const defaultDefaultValues = {};
const defaultErrors = {};

export function useForm(
    { defaultValues = defaultDefaultValues, submitting = false, errors = defaultErrors, color = 'primary', ...props },
    name: string | undefined = undefined,
) {
    const rhf = useRhfForm({ defaultValues });
    const { t } = useTranslation();
    const {
        register,
        control,
        formState: { errors: rhfErrors },
    } = rhf;
    const field = useMemo(
        () => ({ register, control, errors: { ...rhfErrors, ...errors }, defaultValues, disabled: submitting }),
        [register, control, rhfErrors, errors, defaultValues, submitting],
    );

    const form = useMemo(
        () => ({ rhf, ...props, errors: field.errors, color: color as box_color }),
        [rhf, props, field.errors, color],
    );

    const tf = useCallback(
        (k: string | string[], ...args) => {
            const xx = Array.isArray(k) ? k : [k];
            return t([`form_${name}_${xx[0]}`, ...xx.slice(1)], ...args);
        },
        [t, name],
    );

    const SubmitButton = useCallback(
        ({ className = undefined }: { className?: class_name }) => {
            return (
                <Div center flex mt={'lg'}>
                    <Button
                        loading={submitting}
                        className={clsx('w-full items-center justify-center', className)}
                        variant={'contained'}
                        color={color as box_color}
                    >
                        {tf(['submit_label', 'form_generic_submit_label'])}
                    </Button>
                </Div>
            );
        },
        [color, tf],
    );

    const vars = useMemo(
        () => ({ form, field, t, tf, color: color as box_color, SubmitButton }),
        [form, field, t, tf, color, SubmitButton],
    );

    const Form = useCallback(
        ({ customChildren = undefined, ...props }) => {
            const computedChildren = customChildren
                ? 'function' === typeof customChildren
                    ? customChildren(vars)
                    : customChildren
                : props.children;
            /* eslint react/no-children-prop: 0 */
            return <BaseForm {...form} {...props} children={computedChildren} />;
        },
        [form],
    );

    if (name) {
        form['title'] = t([`form_${name}_title`, '']) || undefined;
        form['subtitle'] = t([`form_${name}_subtitle`, '']) || undefined;
    }

    return { ...vars, Form };
}

export default useForm;
