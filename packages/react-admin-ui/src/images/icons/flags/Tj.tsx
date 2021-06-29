import * as React from 'react';

function SvgTj(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
            <path fill="#060" d="M0 0h640v480H0z" />
            <path fill="#fff" d="M0 0h640v342.857H0z" />
            <path fill="#c00" d="M0 0h640v137.143H0z" />
            <path
                d="M300.8 233.623a8.571 8.571 0 0115.977 4.046v34.285h6.446V237.67a8.571 8.571 0 0115.977-4.046 20.229 20.229 0 10-38.4 0"
                fill="#f8c300"
            />
            <path
                d="M305.394 224.674A13.714 13.714 0 01320 231.223a13.714 13.714 0 0114.606-6.549 14.743 14.743 0 00-29.212 0"
                fill="#fff"
            />
            <path
                d="M316.777 258.259a26.057 26.057 0 01-43.78 16.673 27.086 27.086 0 01-40.96 11.978c2.503 24.978 39.944 19.878 42.734-4.409 11.763 20.65 37.627 14.736 45.195-10.56z"
                id="tj_svg__a"
                fill="#f8c300"
            />
            <use transform="matrix(-1 0 0 1 640 0)" xlinkHref="#tj_svg__a" width="100%" height="100%" fill="#f8c300" />
            <path
                d="M291.776 302.613c-5.224 11.277-15.665 13.214-24.798 4.11 0 0 3.671-2.593 7.602-3.309-.737-3.136.774-7.475 2.904-9.822 2.234 1.527 5.351 4.587 6.144 8.142 5.505-.712 8.148.88 8.148.88z"
                id="tj_svg__b"
                fill="#f8c300"
            />
            <use
                transform="rotate(9.37 320 551.314)"
                xlinkHref="#tj_svg__b"
                width="100%"
                height="100%"
                fill="#f8c300"
            />
            <use
                transform="rotate(18.74 320 551.314)"
                xlinkHref="#tj_svg__b"
                width="100%"
                height="100%"
                fill="#f8c300"
            />
            <path
                d="M253.486 327.771a233.143 233.143 0 01133.028 0"
                fill="none"
                stroke="#f8c300"
                strokeWidth={10.971}
            />
            <g transform="translate(320 164.571) scale(.68571)" fill="#f8c300">
                <path
                    id="tj_svg__c"
                    transform="scale(.00005)"
                    d="M301930 415571l-790463-574305h977066l-790463 574305L0-513674z"
                />
            </g>
            <g id="tj_svg__d" transform="translate(320 260.571) scale(.68571)" fill="#f8c300">
                <use height="100%" width="100%" xlinkHref="#tj_svg__c" transform="translate(-70 -121.244)" />
                <use height="100%" width="100%" xlinkHref="#tj_svg__c" transform="translate(-121.244 -70)" />
                <use height="100%" width="100%" xlinkHref="#tj_svg__c" transform="translate(-140)" />
            </g>
            <use height="100%" width="100%" xlinkHref="#tj_svg__d" transform="matrix(-1 0 0 1 640 0)" fill="#f8c300" />
        </svg>
    );
}

export default SvgTj;
