import alignmentClass from '../mappings/alignments';
import { WithClassName, WithText, WithTitle, WithPosition } from '../withs';

const textPositions = {
    left: 'border-l-4 p-4 blockquote',
    center: 'border-0',
    right: 'border-r-4 p-4 blockquote',
};
const titlePositions = {
    left: 'p-4 blockquote text-disabled',
    center: 'text-dark',
    right: 'p-4 blockquote text-disabled',
};

export function Quote({ className, position = 'left', text, title }: QuoteProps) {
    return (
        <blockquote className={className}>
            {text && <p className={alignmentClass(position, textPositions)}>{text}</p>}
            {title && <p className={alignmentClass(position, titlePositions)}>- {title}</p>}
        </blockquote>
    );
}

export interface QuoteProps extends WithClassName, WithText, WithTitle, WithPosition {}

// noinspection JSUnusedGlobalSymbols
export default Quote;
