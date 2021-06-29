import * as React from 'react';

function SvgEr(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <g fillRule="evenodd">
                <path fill="#be0027" d="M-.002 0h640.008v480H-.002z" />
                <path d="M-.002 480l640.008-.3-.032-239.7L-.002 480z" fill="#b4d7f4" />
                <path d="M-.002 0l640.008.3-.032 239.7L-.002 0z" fill="#239e46" />
                <path
                    d="M186.23 360.4c-10.713 2.958-16.854 11.27-16.697 19.11l52.73-.21c.475-8.427-6.457-16.22-17.01-19.29 51.627-1.065 96.478-20.404 104.63-32.813-8.066-3.5-17.392 2.134-24.04.837 15.784-7.295 63.073-37.903 55.384-70.717-5.976 18.226-24.08 33.306-31.79 37.354 17.664-26.822 41.785-54.748 20.858-76.373 1.057 12.533-7.965 26.327-11.95 27.364 10.248-28.34 20.025-63.925-2.177-87.383 2.916 8.48 1.738 32.396-2.276 33.47-1.236-19.27-4.525-59.807-24.82-59.23 6.445 5.738 9.266 21.4 9.41 37.22-4.626-10.838-9.883-18.998-21.126-27-9.095-17.444-25.28-31.897-41.464-42.25 1.817 12.696 3.32 22.713 21.048 35.882-9.243-.576-18.484-18.098-28.362-18.583-7.857-.38-14.024 7.12-26.864 2.805 1.422 4.238 7.412 6.115 8.676 9.25-2.75 1.9-9.28-.296-14.707-3.123 7.467 10.17 19.036 16.15 28.858 14.13 11.682-2.245 24.205-1.057 36.15 5.74-3.05 1.567-14.925 1.556-22.545.603 6.927 7.013 11.572 11.66 23.615 11.584 10.757-.07 16.397-5.74 19.16-2.228 6.746 7.993 11.286 15.984 16.93 25.397-12.467 1.377-8.708-14.1-22.593-22.016-7.8 16.148 8.973 35.29 20.39 43.245.155 12.136 1.93 22.29 7.077 31.53 3.47 6.515 7.956 13.184 6.264 27.887-6.835-4.98-13.515-21.768-11.058-35.096-8.555 2.333-11.9 17.377-7.867 24.95 3.012 5.764 5.022 16.798 1.548 21.73-3.384 4.595-3.74 4.08-3.695 13.943.12 5.9-3.175 12.88-8.545 17.745 1.12-4.158 2.4-11.312 1.158-15.784-4.245 7.2-14.893 14.652-18.246 22.392-3.293 7.76-4.128 21.198-20.062 24.297-20.5 4.068-27.575 7.62-40.766 13.018-1.464-10.02 2.917-30.912 11.295-29.72 8.18 1.455 32.98-8.546 24.108-29.44-1.753 6.586-7.598 13.012-13.917 13.297 6.828-8.858 19.013-18.03 13.08-32.872-3.3 6.31-8.488 13.88-16.355 18.14 8.434-16.162.98-20.997-9.036-7.685-3.783 5.135-6.068 15.427-8.47 28.497-3.935-10.63-3.675-24.623-8.337-35.985-4.87-12.287 6.463-15.532 11.796-14.546 13.057 3.486 34.88 3.484 33.258-18.088-5.64 7.297-15.53 9.55-26.21 6.924 11.995-8.76 21.466-25.234 8.1-33.836-.446 9.12-7.505 19.35-16.93 24.06-2.205-7.698-2.205-15.865-.314-24.82-5.262 5.538-9.105 17.064-12.162 30.166-.23-12.95 2.22-22.282 4.037-29.25 2.753-10.175 9.6-3.554 20.078-2.804 10.092.572 23.986-5.005 21.33-18.69-3.445 5.415-10.518 7.522-17.745 6.95 8.7-5.272 23.86-14.638 15.546-29.044-3.493 5.456-4.624 10.124-14.732 11.798 2.647-6.09 3.087-14.7 10.933-18.11-13.994-2.787-22.007 6.397-26.08 20.78-1.65-9.972-3.617-13.643-4.008-20.94 7.565-8.4 8.357-24.838-8.02-28.514-.973 8.48-.685 10.5 1.178 17.403-7.688-4.568-18.524-7.088-25.738-.63 4.888 5.275 12.453 9.918 24.113 4.166-2.754 9.01-9.918 7.468-19.762 4.032 6.017 11.302 13.61 13.31 21.99 12.007 4.388 11.568 4.58 20.357-8.24 37.203.592-10.47-.152-18.268-8.47-26.732-7.127-6.98-12.92.3-1.78 15.818-6.758-4.976-14.406-15.076-16.708-25.174-2.228 12.475-.222 27.178 6.684 35.42-3.268 3.492-6.982-.37-12.476-8.91 2.078 27.328 13.737 32.6 29.406 26.51.445 15 .445 28.888 1.336 47.007-9.136-13.142-20.718-22.946-27.18-25.396-2.004 7.353 5.572 16.93 9.804 22.277-6.46-1.337-20.496-12.03-20.496-12.03-1.412 12.18 14.334 23.467 24.506 28.516-11.955-.52-17.23-5.05-24.952-12.475.15 33.788 36.608 27.92 43.442 22.722.89 16.635 2.16 35.864 3.053 52.5-10.307-1.8-9.497-4.898-18.316-5.715-24.478-.954-43.895-29.384-50.325-50.297-1.845 3.442-.382 7.043-2.07 11.27-3.973-10.264-9.05-23.52-15.86-29.69 1.735 5.983 1.918 12.065 1.315 23.25-2.337-7.248-4.51-9.47-4.667-17.977.15-6.53 6.3-11.35 5.96-20.535-.252-6.706-6.37-21.242-7.27-32.495-2.96 11.582-4.82 23.79-9.357 30.96 2.255-12.367 1.532-20.902 5.346-29.226 4.404-8.763 8.15-16.586 5.217-25.43-2.813 3.416-1.845 6.52-8.912 14.818-1.535-9.025 9.138-23.47 19.496-29.277 7.306-3.85 16.515-17.617 10.516-27.053-6.87 4.934-9.955 11.6-19.66 22.99 6.923-27.06 24.91-34.138 46.44-34.23 4.765-.023 14.37-1.743 17.067-8.048-6.07 2.343-13.245 2.64-19.63 1.363 4.646-6.823 14.434-5.936 23.554-5.977 7.154-.034 18.322-1.004 22.837-11.193-8.727 3.78-22.337 4.567-30.906 1.89 13.628-7.062 34.975-7.822 45.924-17.088-12.48-9.315-43.706 2.168-63.43 15.696 5.512-5.04 14.225-13.983 19.032-21.202-10.787-5.172-38.068 25.05-47.466 43.008-8.927 5.04-12.497 12.943-15.963 18.457 4.756-16.073 5.26-27.736 9.228-40.97-30.6 10.532-17.88 67.068-24.536 80.594.784-14.933.15-34.116-6-44.008-9.423 7.19-10.184 49.51-1.335 84.74-3.196-9.43-9.226-18.23-11.16-29.705-13.95 25.44 8.175 55.454 26.677 79.162-13.93-7.255-27.7-22.86-36.747-35.94 2.496 45.532 50.046 54.992 57.427 66.183-10.02-4.664-29.173-13.892-37.3-4.223 13.23 3.055 23.785 6.586 32.29 12.16 12.34 15.407 35.707 22.145 76.403 23.847z"
                    fill="#f3e295"
                />
            </g>
        </svg>
    );
}

export default SvgEr;
