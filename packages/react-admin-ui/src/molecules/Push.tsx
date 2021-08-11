import clsx from 'clsx';
import Image from '../atoms/Image';
import Row from '../atoms/Row';
import { WithPush } from '../withs';
import { Buttons, HeadingText, Block } from '../atoms';
import { AsBox } from '../as';
import pushImagePositionClass from '../mappings/push-image-positions';
import useButtons from '../hooks/useButtons';
import useHeadingText from '../hooks/useHeadingText';

export function Push({
    className,
    color = 'primary',
    variant = 'filled',
    imagePosition = 'left',
    image,
    ...props
}: PushProps) {
    const [buttonsProps, rest2] = useButtons(props);
    const [htProps, rest] = useHeadingText(rest2);
    return (
        <Block color={color} variant={variant} className={className} {...rest}>
            <Row className={clsx('xs:flex-col', pushImagePositionClass(imagePosition), 'xs:flex-col-reverse')}>
                <div className={'flex-1 sm:flex-auto sm:p-5'}>
                    <HeadingText {...htProps} titleClassName={'mb-2'} descriptionClassName={'leading-loose py-3'} />
                    <Buttons className={clsx(imagePosition === 'bottom' && 'mb-2')} {...buttonsProps} />
                </div>
                {!!image && (
                    <div className={'flex-1 flex-1 mr-4'}>
                        <Image {...image} objectFit={'contain'} />
                    </div>
                )}
            </Row>
        </Block>
    );
}

export interface PushProps extends AsBox, WithPush {}

// noinspection JSUnusedGlobalSymbols
export default Push;
