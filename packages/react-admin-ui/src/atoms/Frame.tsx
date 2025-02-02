import Div from './Div';
import Icon from './Icon';
import useBox from '../hooks/useBox';
import { AsBoxWrapper } from '../as';
import { WithSize, WithIcon } from '../withs';
import useAmbiance from "@genstackio/react-contexts/lib/hooks/useAmbiance";

export function Frame({ children, className, icon, iconSize, ...props }: FrameProps) {
    const {frameCorner = 'rounded-xsmall'} = useAmbiance();
    const [box, rest] = useBox(props, { color: 'clear', variant: 'outlined' });

    return (
        <Div b={'xs'} box={box} col corner={frameCorner as any} full mt={'md'} relative className={className} {...rest}>
            <Div flex mb={'xs'} ml={'md'} vcenter>
                <Icon
                    icon={icon}
                    size={iconSize}
                    className={'bg-clear flex items-center justify-center rounded-full border absolute p-2'}
                />
            </Div>
            <Div p={'xl'}>{children}</Div>
        </Div>
    );
}

export interface FrameProps extends AsBoxWrapper, WithIcon, WithSize {}

// noinspection JSUnusedGlobalSymbols
export default Frame;
