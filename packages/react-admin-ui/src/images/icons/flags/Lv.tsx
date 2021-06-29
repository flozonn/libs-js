import * as React from 'react';

function SvgLv(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <g fillRule="evenodd">
                <path fill="#fff" d="M0 0h640v480.003H0z" />
                <path fill="#ab231d" d="M0 0h640v192.001H0zm0 288.002h640v192.001H0z" />
            </g>
        </svg>
    );
}

export default SvgLv;
