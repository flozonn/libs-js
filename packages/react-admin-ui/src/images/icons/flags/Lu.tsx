import * as React from 'react';

function SvgLu(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fill="#00a1de" d="M0 240h640v240H0z" />
            <path fill="#ed2939" d="M0 0h640v240H0z" />
            <path fill="#fff" d="M0 160h640v160H0z" />
        </svg>
    );
}

export default SvgLu;
