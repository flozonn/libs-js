import * as React from 'react';

function SvgMu(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <g fillRule="evenodd">
                <path d="M0 360h640v120H0z" fill="#00a04d" />
                <path d="M0 120h640v120H0z" fill="#151f6d" />
                <path d="M0 0h640v120H0z" fill="#ee2737" />
                <path d="M0 240h640v120H0z" fill="#ffcd00" />
            </g>
        </svg>
    );
}

export default SvgMu;
