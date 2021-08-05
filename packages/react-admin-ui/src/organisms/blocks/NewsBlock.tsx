import Block, { BaseBlockProps } from '../../atoms/Block';
import Button from '../../atoms/Button';
import { news_item } from '../../types';
import { WithButtonLabel } from '../../withs';

export function NewsBlock({ items = [], btnLabel, ...props }: NewsBlockProps) {
    return (
        <Block padding={'none'} {...props}>
            {items.map(({ title, content }, index) => (
                <div key={index} className={'px-8 py-6 border-b-1 xs:px-4 xs:py-3'}>
                    {title && <div className={'font-semibold text-lg'}>{title}</div>}
                    {content && <div className={'font-normal text-sm'}>{content}</div>}
                </div>
            ))}
            {btnLabel && (
                <div className={'flex justify-center mt-4 xs:mt-2'}>
                    <Button color={props.color}>{btnLabel}</Button>
                </div>
            )}
        </Block>
    );
}

export interface NewsBlockProps extends BaseBlockProps, WithButtonLabel {
    dropdownItems?: {
        name?: string;
    }[];
    items?: news_item[];
}

// noinspection JSUnusedGlobalSymbols
export default NewsBlock;
