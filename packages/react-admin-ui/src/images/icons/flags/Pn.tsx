import * as React from 'react';

function SvgPn(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <defs>
                <clipPath id="pn_svg__a">
                    <path d="M-15-7.5h30v15h-30z" />
                </clipPath>
            </defs>
            <path d="M0 0h640v480H0z" fill="#00247d" />
            <g clipPath="url(#pn_svg__a)" transform="translate(320 160) scale(21.33333)">
                <circle r={20} fill="#00247d" />
                <path d="M-20-10l40 20m-40 0l40-20" stroke="#fff" strokeWidth={3} />
                <path d="M-20-10l40 20m-40 0l40-20" stroke="#cf142b" strokeWidth={2} />
                <path d="M0 0l20 10h-3L-3 0m3 0l20-10h3L3 0M0 0l-20 10h-3L-3 0m3 0l-20-10h3L3 0" fill="#fff" />
                <path d="M-20 0h40M0-10v20" stroke="#fff" strokeWidth={5} />
                <path d="M-20 0h40M0-10v20" stroke="#cf142b" strokeWidth={3} />
            </g>
            <path
                d="M409.941 310.379c-9.173 7.765-17.92 19.114-20.053 29.354-6.037 28.843-14.059 35.264-26.453 29.056 0 15.488 13.589 16.683 19.541 7.638 0 14.506 5.27 27.114 17.152 37.866 5.013 4.523 5.973 1.43 3.584-3.562-2.39-5.014-2.39-21.206-7.147-30.507 7.616 5.483 18.816 2.39 17.856-12.63-9.77 5.718-19.477 5.505-20.48-8.106-1.194-15.957 5.035-39.104 16-49.11zm-11.584-114.752c.64-5.718-.576-11.606-4.757-15.275-8.085-7.125-16-4.757-21.888.96-8.81-4.757-13.504 12.139-23.51 9.28 1.665 5.483 4.289 7.85 9.302 5.952-5.248 4.757 0 10.475-6.187 16.213 11.179 3.563 17.152-2.624 16.662-13.354 4.288 3.818 10.965 3.584 14.528-.704-5.952-1.92-5.974-7.104-3.563-11.926 3.563-7.146 20.352-6.869 19.413 8.854z"
                fill="#f7e017"
                stroke="#000"
                strokeWidth={0.63}
            />
            <path
                d="M424.213 278.507c-12.629 6.656-35.754 3.797-37.888-12.63-2.133-16.426 13.824-23.829 18.112-25.962 6.678-3.35 11.904 2.602 9.771 9.514a10.816 10.816 0 005.461-16.213c9.771.725 18.838-6.656 22.635-17.13-3.413 3.263-12.757 1.066-20.459.554 2.39-2.624 2.347-7.701 1.643-10.325-8.107 8.32-19.776 4.523-35.264 28.587 2.39-8.32 6.912-25.024 9.536-35.968a27.093 27.093 0 00.597-3.307c.939-15.723-15.829-16-19.413-8.853 3.925 4.416 1.877 9.578.47 17.386-1.665 9.302-5.249 30.742-8.32 37.888-.96-11.2-8.363-11.904-9.793-17.386-2.133 1.429-3.328 5.248-2.858 7.85-2.624-2.858-11.67.725-14.998-3.562-3.584 7.146 2.134 14.293 8.107 17.386-3.477.235-4.31 4.416-8.107 4.416 5.12 5.952 10.347 8.32 16.427 8.811 6.08.491 10.603 2.73 14.293 10.133 5.974 11.904 28.65 19.627 50.048 8.811z"
                fill="#337321"
                stroke="#000"
                strokeWidth={0.63}
            />
            <path
                d="M455.659 263.957c-7.147 19.776-26.688 33.856-35.52 35.99-14.998 3.626-45.59 18.496-53.803 26.133"
                fill="#f7e017"
                stroke="#000"
                strokeWidth={0.63}
            />
            <path
                d="M409.941 310.379c-11.306 9.6-17.194 33.152-16 49.13.32 4.438 1.579 7.446 3.456 9.28.854-9.045 7.147-32.426 23.232-42.88 13.568-8.81 34.774-28.586 42.646-51.221-1.43-4.053-3.819-6.912-8.342-9.77-7.786 21.375-28.693 31.615-45.013 45.44z"
                fill="#337321"
                stroke="#000"
                strokeWidth={0.63}
            />
            <path
                d="M448.405 254.805c-4.053 6.059-13.226 14.4-22.037 17.75 1.899-2.155 2.496-4.907 2.603-7.168-11.2 4.309-33.579 3.84-42.646.49a58.176 58.176 0 0057.664-17.151c1.92 2.133 3.563 4.053 4.416 6.08z"
                fill="#316d3a"
                stroke="#000"
                strokeWidth={0.63}
            />
            <path
                d="M362.73 304.704c-18.197 17.067-6.186 31.936.96 35.264-1.92 11.904 9.302 10.475 9.046 20.48 4.544-2.624 5.739-9.515 5.013-14.997 5.718 6.186 20.267-.725 23.339 10.709 1.92-12.63-7.85-25.259-20.01-24.064 5.013-4.523 2.133-11.904-2.603-13.803-.96 9.28-11.435 9.28-15.488 6.422-4.054-2.859-7.403-12.16-.256-20.011z"
                fill="#337321"
                stroke="#000"
                strokeWidth={0.63}
            />
            <path
                d="M402.176 413.099c-1.984 1.13-1.835 3.69-.597 5.354 2.496 3.328-1.75 10.88 6.314 12.502 2.39.49 4.224-.981 5.12-3.691 2.518-7.51-5.482-8.32-6.186-11.904-.726-3.584-2.987-3.221-4.651-2.261z"
                fill="#f7e017"
                stroke="#000"
                strokeWidth={0.63}
            />
            <path
                d="M408.96 427.157c-2.667 1.238-5.013 2.987-3.925 11.542.426 3.562.213 12.16-2.859 12.288 1.899.939 5.952 1.962 7.616-.256 1.6 2.688 5.248 1.92 6.677-1.43 1.899 1.558 4.523-1.066 4.523-3.328 1.664 1.067 4.992-.469 4.16-5.589 2.027.704 4.65-.725 5.61-2.027-2.986-.597-10.495-4.65-12.287-7.872-1.771-3.2-6.422-4.757-9.515-3.328z"
                fill="#f7e017"
                stroke="#000"
                strokeWidth={0.63}
            />
            <path
                d="M367.68 186.219c1.216-1.792 2.56-3.456 4.053-4.907m41.28 36.437c2.134-1.194 5.312-1.344 8.854-1.109m-12.054 234.09c-.853-1.173-1.13-6.186-.554-9.215m7.21 7.808"
                strokeWidth={0.64}
                fill="none"
                stroke="#000"
            />
            <path
                d="M534.997 304.939c29.312 24.533 31.211 44.074 26.688 55.509-2.389-10.71-14.528-27.392-27.157-31.68l.47-23.83z"
                fill="#f7e017"
                stroke="#000"
                strokeWidth={0.63}
            />
            <path
                d="M482.581 291.136h54.336v64.32c0 54.784-30.506 87.19-61.482 104.341-30.976-17.13-61.462-49.557-61.462-104.341v-64.32h38.123c.064 3.328.363 8.32 4.267 13.333 9.002-.896 19.2-7.616 26.24-13.333z"
                fill="#337321"
                stroke="#000"
                strokeWidth={0.63}
            />
            <path
                d="M536.896 291.136v64.32c0 16.533-2.773 31.04-7.51 43.69l-53.93-98.986-53.952 98.987"
                fill="#006ec7"
                stroke="#000"
                strokeWidth={0.63}
            />
            <g fill="#f7e017" stroke="#000" strokeWidth={0.64}>
                <path d="M499.968 429.653c1.43.726 4.053 2.048 5.248 2.518 2.859-5.718 3.35-13.803 2.39-20.971-3.094 7.893-13.59 7.637-16.427 12.395 1.749.874 3.37 2.026 4.778 3.05-3.562 3.563-11.946 9.6-16.704 11.008V386.56c0-3.584-1.194-6.55-1.194-9.536v-10.56c0-2.39-.47-5.845-2.624-5.845-2.155 0-2.603 3.456-2.603 5.845v10.56c0 2.987-1.195 6.421-1.195 9.536v51.093c-2.624-7.616-12.885-5.013-17.642-12.629a13.525 13.525 0 015.717-.235c-3.563-12.16-13.333-13.098-15.232-16.682 0 5.013-2.133 16.682 1.173 21.696a13.27 13.27 0 013.243-2.646c4.053 8.811 22.25 8.832 26.539 23.36 3.456-5.333 15.85-11.52 24.533-20.864z" />
                <path d="M475.435 387.136c4.053 0 16.917-1.323 21.546-1.323 1.216 0 2.219-1.792 2.219-4.032s-1.003-4.053-2.197-4.053c-4.651 0-17.515-1.301-21.547-1.301s-16.939 1.301-21.59 1.301c-1.194 0-2.175 1.813-2.175 4.053s.981 4.054 2.176 4.054c4.65 0 17.514 1.301 21.568 1.301zm-2.603-20.928" />
                <path d="M453.888 385.813c1.216 0 2.197-1.792 2.197-4.032s-.981-4.053-2.197-4.053" />
                <path d="M455.68 385.813c1.216 0 2.197-1.792 2.197-4.032s-.981-4.053-2.197-4.053m11.755 8.917c1.472 0 2.645-2.176 2.645-4.864 0-2.688-1.173-4.885-2.645-4.885m2.752 9.984c1.514 0 2.773-2.283 2.773-5.12 0-2.795-1.259-5.077-2.773-5.077m9.152 10.24c1.536 0 2.773-2.304 2.773-5.142 0-2.858-1.237-5.162-2.773-5.162m2.88 10.154c1.514 0 2.773-2.24 2.773-4.992 0-2.773-1.259-4.992-2.773-4.992m12.778 9.131c1.216 0 2.219-1.856 2.219-4.139 0-2.282-1.003-4.117-2.219-4.117m-46.144 49.493a18.133 18.133 0 015.12-2.133m43.392 2.603l-1.408-1.003m4.011 3.03c3.328-3.563 6.123-7.617 7.637-12.246" />
            </g>
            <g stroke="#000" strokeWidth={0.64}>
                <path
                    d="M464.533 336.597c0-1.152.939-1.664 2.07-2.496 1.322-1.002 1.877-1.493 3.093-1.493h15.637c1.152 0 1.43.299 1.43 1.365v21.27c0 1.066-.278 1.365-1.43 1.365h-20.8v-20.181"
                    fill="#fff"
                />
                <path
                    d="M481.472 358.464c2.048 0 1.685-.043 3.115-1.493 1.493-1.494 1.365-1.366 1.365-2.752v-19.435c0-1.003-.235-1.28-1.323-1.28h-14.442c-1.131 0-1.622.427-2.859 1.387-1.045.789-1.92 1.258-1.92 2.346v21.227h16.085z"
                    fill="#e5e5e5"
                />
                <path
                    d="M482.987 358.016c0 1.067-.256 1.365-1.43 1.365H465.92c-1.152 0-1.408-.298-1.408-1.365v-21.27c0-1.066.256-1.365 1.408-1.365h15.637c1.174 0 1.43.299 1.43 1.366v21.269z"
                    fill="#fff"
                />
            </g>
            <path
                d="M513.323 278.677c3.05 3.392 4.053 7.958 2.389 12.438h-4.523c1.899-5.718.704-11.179-7.402-11.904-12.096-1.067-26.198 22.4-47.403 25.258-6.187-7.381-5.867-21.461 2.005-28.117-4.053-11.733-12.65-24.619-18.602-30.187"
                fill="#96877d"
                stroke="#000"
                strokeWidth={0.63}
            />
            <path d="M460.459 284.928c-1.046-15.915-7.467-28.97-16.47-37.888 4.267 1.173 13.099 1.173 19.051-3.115 7.872-5.226 28.352-14.4 35.84-10.474a11.69 11.69 0 01.49 6.186c-1.791-4.757-21.546 2.624-27.157 4.907-5.354 2.496-7.744 5.824-5.845 13.333-3.093-2.624-2.027-5.12-5.227-7.04 1.302 3.094 2.368 8.704 2.731 13.227-1.195-3.157-3.328-10.112-7.979-14.144 4.054 7.85 7.574 26.73 5.91 36.736 3.2 0 10.304-3.157 13.141-5.419-2.496 3.584-9.707 6.08-14.336 7.04-2.09 2.496-3.52 8.918-3.413 12.502-.342-4.416 1.045-15.147 3.264-15.851zm52.864-6.25c-3.947-4.395-11.307-6.785-20.736-4.225 1.429-.725 4.544-1.92 7.274-2.389-.362-2.496-2.624-13.227-2.986-15.83l2.624-1.066c1.322 6.4 2.986 13.803 4.053 16.79.853.212 2.752.596 4.416 1.429-.725-2.518-4.779-20.48-4.65-22.4l3.583-1.92c1.43 9.77 3.691 23.957 6.4 29.61z" />
            <path
                d="M511.19 291.115c1.898-5.718.703-11.179-7.382-11.904-6.293-.555-13.099 5.546-21.163 11.904h28.544zm-52.651-51.328"
                strokeWidth={0.64}
                fill="#96877d"
                stroke="#000"
            />
            <path
                d="M458.39 276.352c1.322 3.797 2.175 7.467 2.303 10.73m-13.12-58.24c-2.133 3.137-4.032 6.529-4.65 9.387 4.053 1.323 12.032 2.027 15.616 1.558"
                fill="none"
                stroke="#000"
                strokeWidth={0.63}
            />
            <path
                d="M439.787 246.165c1.536.256 2.986.555 4.202.875 4.288 1.195 13.099 1.195 19.072-3.093 5.974-4.288 22.144-17.6 40.491-19.05"
                fill="none"
                stroke="#000"
                strokeWidth={0.63}
            />
            <path
                d="M435.05 242.048c5.718 1.195 17.515 1.792 23.467-2.261 13.824-9.408 27.158-14.891 40.491-15.616"
                fill="none"
                stroke="#000"
                strokeWidth={0.63}
            />
            <path
                d="M534.997 304.939c20.011 13.824 34.774 27.157 39.083 48.618 4.267 21.44 12.373 27.158 22.4 21.44-2.39 12.374-14.784 13.803-25.259 4.267.96 14.293-4.778 31.467-19.541 37.653-.96-8.576 4.715-15.36 3.093-22.4-.704-3.093-.938-10.24 3.094-13.568-7.851 2.624-20.246-2.389-21.44-14.058 9.066 4.288 20.736 5.013 25.258-6.422 4.523-11.434 2.624-30.976-26.666-55.53zm25.259-111.488c6.187-16.214 22.4-14.528 27.861-7.616 15.979-9.067 18.134 11.434 31.702 7.381-.256 3.797-4.779 7.381-9.771 7.147 5.227 4.757-2.133 11.904 9.045 16.213-9.536 4.757-22.869-.256-26.453-13.355-3.093 6.187-14.293 6.187-18.816 1.195 9.77-2.624 9.067-11.69 3.584-15.253-5.525-3.606-15.253-2.134-17.152 4.266zm-48.32 35.669c4.437 14.336 13.653 27.67 23.552 36.757 11.435 10.475 28.693 7.851 38.357-2.133.214 19.947-20.437 21.483-31.936 15.232-5.056-2.773-9.173-1.301-4.266 3.093 7.36 6.678 23.53 11.627 42.624 15.723 33.365 7.147 21.44 33.6 11.669 33.365 2.816-.06 5.12-2.986 1.067-6.613-28.928-26.027-87.787-15.787-86.827-73.92-6.187 15.253-31.68 9.301-19.776-8.81 3.819 3.093 10.496 3.327 12.373-1.43 1.494-3.712.534-10.155-6.144-15.701 1.088-.09 3.456 0 3.2-2.731.32 1.6 1.771 3.99 5.526 3.2 1.066 1.685 2.197 2.795 3.712 2.197.298-.128 1.194-.576.853-2.282.277 3.157 4.053 4.288 6.016 4.053z"
                fill="#337321"
                stroke="#000"
                strokeWidth={0.63}
            />
            <path
                d="M541.91 278.976c13.823 9.045 29.44 9.045 43.84-7.616 4.522-5.248 11.669-9.77 16.682-10.24 4.992-.491 4.757-5.248 8.576-6.187-2.39-.725-3.328-3.584-6.912-3.242 8.939-3.094 6.315-10.24 10.73-13.696-3.583 1.322-9.173-4.054-14.293 2.752 1.302-3.115-.49-6.806-1.792-8.235.47 3.584-7.04 4.288-8.469 13.355-.79 5.077-3.563 4.757-4.053-3.094-.342-5.76-3.094-21.696-6.4-29.781-3.35-8.107-4.118-19.221.426-20.907m-33.557 234.283c2.944 1.493 5.461 3.541 3.883 13.077-.64 3.947-.79 13.547 2.666 13.824-2.176.981-6.741 1.92-8.49-.597-1.92 2.923-5.952 1.899-7.403-1.898-2.197 1.642-4.992-1.387-4.907-3.926-1.898 1.131-5.546-.747-4.394-6.421-2.304.704-5.163-1.003-6.187-2.496 3.37-.533 11.925-4.736 14.059-8.256 2.133-3.499 7.381-5.035 10.773-3.307z"
                fill="#f7e017"
                stroke="#000"
                strokeWidth={0.63}
            />
            <path
                d="M544.725 452.672c.982-1.28 1.536-6.87 1.003-10.283m-8.384 8.427a15.744 15.744 0 005.056-8.192m-9.963 4.245c1.878-.789 6.635-6.464 7.787-10.218m-12.203 3.776c2.219-.363 9.11-4.48 12.075-9.046"
                strokeWidth={0.64}
                fill="none"
                stroke="#000"
            />
            <path
                d="M506.176 250.624c-.405 24.427 9.75 36.779 23.808 44.821-5.227-3.136-2.965-13.866-10.005-17.301 1.685-.128 4.288 2.261 8.469 1.301-2.027-4.522-5.355-11.434-13.099-12.373 2.027-.235 6.422.469 9.28-.597-4.053-6.187-14.762-3.222-18.453-15.851zm-2.539-23.21c-.853-.3-1.6-1.153-2.304-2.283-3.754.81-5.205-1.579-5.504-3.2.214 2.773-2.133 2.645-3.242 2.73 6.72 5.547 7.68 12.011 6.186 15.723-1.92 4.757-8.576 4.523-12.373 1.43-.49 10.111 12.608 13.44 17.365.703 0 2.134 2.752 1.92 3.456 4.779 3.414-5.483.854-13.355-3.584-19.883z"
                fill="#f7e017"
                stroke="#000"
                strokeWidth={0.63}
            />
            <path
                d="M486.997 150.677c-.085-2.133 3.627-4.928 8.64-4.885 6.016.064 10.667 5.547 15.467 5.013 4.8-.533 2.453 2.134 1.43 2.859-1.003.704-1.6 1.792-1.238 3.093.363 1.302-.256 2.176-2.197.96-4.288-2.688-8.598 1.067-14.251-1.024-4.907-1.792-7.744-2.773-7.85-6.016z"
                fill="#cf142b"
                stroke="#000"
                strokeWidth={0.64}
            />
            <path
                d="M462.464 206.912c-2.39-7.51-11.435-15.723-15.85-17.643l-.235-4.053c2.389-.939 8.106-5.461 10.73-7.979 17.856 8.576 42.155-3.562 53.355-16.192l4.288 2.624-2.133 2.859-2.262-1.195c-2.752 3.328-12.97 12.971-16.085 14.976 4.181 1.067 9.856 1.792 11.435 1.707 10.005-7.147 17.856-13.59 21.674-14.08l3.2 4.31-2.837 2.026-2.261-1.323c-10.731 8.832-22.87 28.118-27.648 40.982-6.656-1.43-30.507-.47-35.371-7.04z"
                fill="#96877d"
                stroke="#000"
                strokeWidth={0.64}
            />
            <path
                d="M463.403 204.288c-1.6-8.875.96-18.71 5.482-21.675 9.899 6.55 26.816 6.55 36.822-.597"
                fill="none"
                stroke="#000"
                strokeWidth={0.64}
            />
            <path
                d="M463.403 199.637c7.637-.213 24.192 1.067 28.245 1.664 4.053.598 10.837 2.262 9.877 4.288m-34.602-7.21l2.197-2.198-2.197-2.176-2.176 2.176 2.176 2.198z"
                fill="none"
                stroke="#000"
                strokeWidth={0.64}
            />
            <path
                d="M472.107 154.027c-2.731-3.84-10.283-5.035-11.904.106-.726 2.262-1.792 4.651-3.584 5.718-1.771 1.066-1.366 4.33-.576 5.717 1.898 3.456.213 6.784 3.925 9.067 0-2.752 4.053-5.611 7.51-6.315 3.455-.725 8.682-3.819 9.386-7.253.725-3.478 1.92-6.336-4.757-7.04z"
                fill="#337321"
                stroke="#000"
                strokeWidth={0.64}
            />
            <path
                d="M454.933 188.33h.96v6.507c.214.064.427.171.576.299l5.611-3.243.49.854-5.631 3.242a1.707 1.707 0 010 .64l5.632 3.264-.491.811-5.632-3.243"
                fill="#96877d"
                stroke="#000"
                strokeWidth={0.64}
            />
            <path
                d="M450.667 215.019c-.704-.854-2.027-3.115-1.92-4.779a6.187 6.187 0 014.053 1.557c-.107-1.194-.576-3.818-.341-5.013 1.301.49 4.053 2.027 4.992 3.819"
                fill="#337321"
                stroke="#000"
                strokeWidth={0.64}
            />
            <path
                d="M490.539 151.893c-.043-.853 1.92-2.858 5.418-2.837 4.203.021 8.107 3.115 11.478 2.901 3.37-.213 1.706.854 1.002 1.152-.704.299-1.13.747-.874 1.28.256.534-.192.875-1.536.384-3.008-1.088-6.016.427-9.984-.426-3.414-.726-5.419-1.131-5.504-2.454z"
                fill="#f7e017"
            />
            <g stroke="#000" strokeWidth={0.64}>
                <path
                    d="M454.357 222.165c-3.562 4.267-7.146 3.563-7.85.832-.726-2.752 1.92-4.053.938-6.442-.938-2.39 1.558-3.456 2.752-2.39 1.195 1.067 4.992-2.368 6.678 1.195 1.664 3.584 2.986 6.08 2.005 7.51-.939 1.429-3.797.725-4.523-.705zm15.36-6.442c-.682-1.558 3.03-4.587 4.928-2.432 1.92 2.133 4.907-2.347 6.571 1.066 1.664 3.392 2.197 5.184 3.03 7.083.853 1.92-4.523 2.923-6.187 1.259.213 1.13-4.63 2.005-5.974-1.195l-2.368-5.781zm24.79 1.962c-.896-1.664 3.456-4.053 5.717-1.002.597-1.259 4.907-1.494 5.184 2.133.299 3.627.427 5.781.533 7.21.107 1.43-2.602 2.731-4.586-.895-3.499.725-5.12-1.238-5.547-3.328-.427-2.091-.81-3.094-1.28-4.118z"
                    fill="#f7e017"
                />
                <path
                    d="M456.661 215.317c-.533-1.194 3.051-3.584 5.483-1.792 2.453 1.792 5.824-1.557 7.253 1.664 2.923 6.486 3.115 6.976 2.219 8.214-.896 1.258-4.693.768-5.653-.939-.192 1.173-3.478.981-5.184.043-1.963-1.067-3.35-5.056-4.118-7.19zm25.088.278c-.853-1.835 4.758-3.435 7.19-.214 1.258-1.152 3.989-1.216 5.546 2.304 1.558 3.52 1.792 5.483.64 6.379-.789.64-3.669 1.13-4.629-.47-1.323.833-5.355.107-6.25-2.133-.897-2.282-1.665-4.266-2.497-5.866zm23.702 3.52c-.107-1.664 2.922-2.432 4.053 0 1.13 2.432 4.757.256 5.077 4.288.043.768-.426 3.754-1.557 5.184-1.13 1.429-6.677 0-7.04-3.03"
                    fill="#337321"
                />
                <path d="M454.357 222.165c-1.301-1.792-3.093-4.65-5.354-1.557m16.981 1.835" fill="none" />
            </g>
        </svg>
    );
}

export default SvgPn;
