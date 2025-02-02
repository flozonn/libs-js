import Icon from './Icon';
import Text from './Text';
import Div from './Div';
import useBox from '../hooks/useBox';
import { AsBox } from '../as';
import { WithIcon, WithText, WithSizeOfText } from '../withs';
import useAmbiance from "@genstackio/react-contexts/lib/hooks/useAmbiance";

export function Tag({ className, icon, text, ...props }: TagProps) {
    const {tagCorner = 'rounded-xsmall'} = useAmbiance();
    const [box, rest] = useBox(props, { color: 'primary', variant: 'contained' });

    return (
        <Div box={box} corner={tagCorner as any} flex inline p={'xs'} spaced={1} className={className} {...rest}>
            <Text bold text={text} upper />
            <Icon bold icon={icon} size={box.size} />
        </Div>
    );
}

export interface TagProps extends AsBox, WithIcon, WithText, WithSizeOfText {}

// noinspection JSUnusedGlobalSymbols
export default Tag;
