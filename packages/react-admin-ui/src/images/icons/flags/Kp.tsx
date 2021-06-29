import * as React from 'react';

function SvgKp(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <defs>
                <clipPath id="kp_svg__a">
                    <path fillOpacity={0.67} d="M5.077.1h682.53V512H5.077z" />
                </clipPath>
            </defs>
            <g fillRule="evenodd" clipPath="url(#kp_svg__a)" transform="translate(-4.761 -.094) scale(.93768)">
                <path stroke="#000" strokeWidth={1.014} fill="#fff" d="M775.94 511.52H-75.92V.57h851.86z" />
                <path fill="#3e5698" d="M775.94 419.07H-75.92v92.457h851.86z" />
                <path fill="#c60000" d="M775.94 397.65H-75.92V114.44h851.86z" />
                <path fill="#3e5698" d="M775.94.576H-75.92v92.457h851.86z" />
                <path
                    d="M328.518 256.07c0 63.45-53.108 114.886-118.619 114.886-65.512 0-118.618-51.437-118.618-114.886 0-63.45 53.108-114.885 118.618-114.885 65.512 0 118.619 51.436 118.619 114.885z"
                    fill="#fff"
                />
                <path
                    fill="#c40000"
                    d="M175.83 270.567l-57.06-40.618 71.056-.289 22.636-66.367 21.164 66.147 71.057-.407-57.978 41.177 21.275 66.117-56.998-40.696-57.908 41.264z"
                />
            </g>
        </svg>
    );
}

export default SvgKp;
