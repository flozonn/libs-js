import * as React from 'react';

function SvgCl(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <defs>
                <clipPath id="cl_svg__a">
                    <path fillOpacity={0.67} d="M0 0h682.67v512H0z" />
                </clipPath>
            </defs>
            <g fillRule="evenodd" clipPath="url(#cl_svg__a)" transform="scale(.9375)" fillOpacity={0.996}>
                <path fill="#fff" d="M255.99 0H768v256H255.99z" />
                <path fill="#0039a6" d="M0 0h256v256H0z" />
                <path
                    d="M167.82 191.71l-39.653-29.737-39.458 30.03 14.674-48.8-39.386-30.133 48.728-.42L127.84 64l15.437 48.537 48.728.064-39.184 30.418 15 48.69z"
                    fill="#fff"
                />
                <path fill="#d52b1e" d="M0 256h768v256H0z" />
            </g>
        </svg>
    );
}

export default SvgCl;
