import clsxmp from '../utils/clsxmp';
import { box_color } from './box-colors';

export const textColors = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    success: 'text-success',
    info: 'text-info',
    warning: 'text-warning',
    danger: 'text-danger',
    dark: 'text-dark',
    disabled: 'text-disabled',
    light: 'text-light',
    none: '',
    default: '',
    inherit: 'text-current',
};

export const textColorValues = Object.keys(textColors);

export type text_color = box_color | 'inherit';

export const defaultTextColor = 'inherit';

export const textColorClass = (v: text_color | undefined, e: any = {}) => clsxmp(v, defaultTextColor, textColors, e);

export default textColorClass;
