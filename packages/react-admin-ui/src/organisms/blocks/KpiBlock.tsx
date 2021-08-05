import { useCallback, useState } from 'react';
import clsx from 'clsx';
import Block, { BaseBlockProps } from '../../atoms/Block';
import Icon from '../../atoms/Icon';
import Kpi from '../../molecules/Kpi';
import { icon } from '../../types';
import { WithIcon, WithName, WithQuantity } from '../../withs';

export function KpiBlock({ icon, name, quantity, bgIcon, ...props }: KpiBlockProps) {
    const [isHover, setIsHover] = useState(false);
    const onHover = useCallback(() => {
        setIsHover(true);
    }, [setIsHover]);
    const onLeave = useCallback(() => {
        setIsHover(false);
    }, [setIsHover]);

    return (
        <Block {...props}>
            <div className={'flex justify-between items-center'} onMouseOver={onHover} onMouseLeave={onLeave}>
                <Kpi icon={icon} name={name} quantity={quantity} color={props.color} />
                {bgIcon && (
                    <div className={clsx('absolute -right-5', isHover && 'transform -rotate-12 scale-110')}>
                        <Icon icon={bgIcon} />
                    </div>
                )}
            </div>
        </Block>
    );
}

export interface KpiBlockProps extends BaseBlockProps, WithIcon, WithQuantity, WithName {
    bgIcon?: icon;
}

// noinspection JSUnusedGlobalSymbols
export default KpiBlock;
