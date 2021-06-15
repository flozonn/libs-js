import clsx from "clsx";
import {spinner_variant} from '../types';

const variants = {
    'dots': 'h-3 w-3 bg-danger rounded-full',
    'dotted-circle': 'border-4 border-primary border-dotted',
    'full-circle': 'border border-t-4 border-warning',
    'half-circle': 'border-t-2 border-r-2 border-secondary',
    'separate-circle': 'border-t-2 border-b-2 border-dark',
    'squares': 'h-4 w-1 bg-info',
}

export function Spinner({variant = 'half-circle'}: SpinnerProps) {
    let isSpin = ('dots' !== variant) && ('squares' !== variant);
    return (
        <div>
            {isSpin && <div className={clsx(variants[variant], 'h-20 w-20 rounded-full animate-spin')} />}
            {!isSpin && (
                <div className={'flex space-x-1'}>
                    <div className={clsx(variants[variant], 'animate-bounce')} />
                    <div className={clsx(variants[variant], 'animate-bounce200')} />
                    <div className={clsx(variants[variant], 'animate-bounce400')} />
                </div>
            )}
        </div>
    );
}

export interface SpinnerProps {
    variant?: spinner_variant,
}

export default Spinner