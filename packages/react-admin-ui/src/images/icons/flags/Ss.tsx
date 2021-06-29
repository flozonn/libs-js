import * as React from 'react';

function SvgSs(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M0 336h640v144H0z" fill="#078930" />
            <path d="M0 144h640v192H0z" fill="#fff" />
            <path d="M0 0h640v144H0z" />
            <path d="M0 168h640v144H0z" fill="#da121a" />
            <path d="M0 0l415.7 240L0 480z" fill="#0f47af" />
            <path d="M200.7 194.85L61.75 240l138.95 45.15-85.85-118.2v146.1z" fill="#fcdd09" />
        </svg>
    );
}

export default SvgSs;
