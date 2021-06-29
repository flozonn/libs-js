import * as React from 'react';

function SvgNf(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <g fillRule="evenodd">
                <path fill="#fff" d="M194.79 0h250.45v480H194.79z" />
                <path fill="#198200" d="M0 0h194.79v480H0zm445.23 0H640v480H445.23z" />
                <path
                    strokeLinejoin="round"
                    d="M313.5 351.29v52.63l21.271.22s-6.798-45.833-3.07-51.973c3.728-6.14 7.236-5.263 7.236-5.263s13.815 4.167 15.35 3.51c1.536-.659-.219-5.264 7.237-4.606 2.412-.877 1.097-5.044 3.29-5.263 2.193-.22 44.516 11.842 53.726.439-2.412-6.36-10.745-.44-12.938-.22-1.974 0-10.306-3.947-15.132 0-4.386-3.289-24.341-5.482-24.341-5.482-2.632-2.632 47.586 1.316 50.437-.658 5.92-5.921-10.964-5.263-13.596-3.29-4.678-2.85-10.545-2.63-14.127-.657-1.718-4.108-18.036-2.339-27.1-3.509-2.901-1.701-2.405-2.669-.439-3.727 18.932.804 37.772 3.26 56.796 2.412 5.142-6.704-6.478-9.218-13.596-3.51-4.179-6.871-12.719-.219-18.42-.876-5.701-.658-3.07-7.675 4.166-6.58 7.237 1.097 20.175-.437 22.588-3.727 2.412-3.289-1.44-6.63-13.377-3.508-4.04-3.949-12.938 0-17.104 1.315-5.543-3.092-18.42-.439-22.806.658-4.293-2.669 22.587-7.017 22.587-7.017 10.376-.184 16.228-1.974 19.516-2.851 15.686-8.408-.224-9.303-8.456-3.192-5.11-3.99-9.963.34-14.569 1.876-4.605 1.535-13.377 2.632-13.377 1.974 0-.658 12.5-8.334 12.5-8.334s15.35-1.096 18.42-1.534c3.07-.44 18.782-8.503-2.631-3.07-7.456.657-11.842.219-14.693.438-16.532-1.71 1.535-3.289 1.535-3.289s23.407-2.152 23.683-3.29c.46-9.126-19.078-4.824-19.297-4.824.057-6.52-18.2.22-18.2 0-3.49-2.056 1.973-4.166 1.973-4.166 4.824-1.17 12.036-1.513 13.923-3.05 0 0 13.626-.131 15.243-3.748-3.342-9.22-28.824 1.636-32.236 3.29-4.605 0 3.07-7.457 3.29-7.676.219-.22 21.051-1.096 30.92-14.473.685-8.143-11.623 4.605-11.623 4.605-.918-10.56-13.377.658-20.613 1.536-7.235.876-7.455-3.29-2.411-3.948 5.043-.658 10.745-.219 13.596-7.894 2.85-7.676 11.403.438 12.938-2.412 1.535-2.851-3.07-5.264-3.07-5.264s6.359-6.578-3.947-6.359c-10.307.22-23.684-1.315-23.684-1.315s10.746-4.167 20.833-3.948c10.088.22 4.605-7.236-5.044-7.236-9.648 0-14.692-3.29-14.692-3.29l16.447-6.14-1.097-4.605s9.649-7.675-3.947-5.921c-13.596 1.755-15.13 1.974-15.13 1.974s-27.193 4.167-27.412 4.167c-.22 0-7.456-2.193-.439-3.948 7.018-1.754 31.797-6.798 35.525-5.482 3.729 1.315-.438-9.21-13.596-10.526-13.157-1.315-21.27 3.29-21.27 3.29s-8.553-3.07-.658-5.702c7.894-2.631 20.394.877 20.394.877s14.035-4.166 2.412-5.92c-11.622-1.755-15.288 1.57-20.613 1.754-2.126-2.654 18.245-3.288 19.516-5.483-2.148-3.948-14.765 0-22.148 0-3.14-1.332-3.343-3.492.22-4.824 7.529-.293 14.598.15 22.128-.143-.22-4.02.02-8.775-.2-12.795-9.55-1.745-20.754 1.26-26.115 1.005 1.434-4.387 22.067-5.512 24.362-6.706 4.775-5.968-20.175 0-20.394 0-4.352-.643-4.07-3.39-1.316-5.044 6.36-.73 20.616.926 19.537-3.386-.826-4.04-9.889-1.877-13.617-1-3.727.877-9.21.22-9.21.22-2.387-3.214 21.49-1.907 21.271-4.386-.311-2.847-15.132-.877-20.175-.658-3.94-2.719 18.931-4.513 19.298-4.824.827-7.29-15.35 0-18.42 0-3.07 0-1.535-4.605-1.535-4.605s6.36-2.851 6.14-3.29c-.22-.438-4.824-1.973-5.263-1.973-.438 0 0-5.044 0-5.044s5.263-3.947 4.825-5.044c-.44-1.096-6.14.877-6.14.877v-4.385s4.166-.439 4.605-2.413c.439-1.973-5.044-2.192-5.044-2.192l-2.193-23.025-1.973 21.49-7.237 1.096s5.044 2.85 5.921 5.701c.877 2.851-6.14 1.974-6.14 1.974s5.701 4.824 6.14 6.579c.438 1.754-7.895 2.193-7.895 2.193s7.018 5.043 7.456 7.894c.44 2.851 0 4.386 0 4.386s-11.622-10.087-19.079-7.237c-3.874 2.025 8.877 2.961 17.324 10.307-.02 1.636-20.517-4.992-21.27-.877.475 1.145 21.886 4.22 23.463 7.018-7.821.292-23.999-1.712-23.464.876-1.634 2.988 15.28 1.292 22.367 3.729 2.078 2.36 1.861 4.356-1.754 4.605-6.832-3.267-22.112-5.707-22.148-1.536.093 1.114 15.796.391 21.49 4.167-7.6 1.73-33.383-3.519-33.546-.963.735 1.193 4.82 6.445 11.836 6.226 7.018-.22 23.244 2.85 24.341 5.044 1.096 2.193-21.052-4.605-29.385-.658-8.332 3.947 23.902 1.535 29.165 6.36 5.264 4.824-10.526-.44-10.526-.44s-21.929-3.07-25.218-1.535c-3.29 1.536-7.017 5.044-7.017 5.044s2.193 4.386 4.386 3.51c2.193-.878-.658 2.63-.658 2.63s30.7 7.456 37.499 14.035c6.798 6.58-39.034-10.306-39.034-10.306s-18.42 6.798 1.096 7.237c-2.246 3.285 1.097 5.262 1.097 5.262s32.455 6.798 35.744 12.06c3.29 5.264-22.148-5.043-27.85-7.893-5.702-2.851-21.93 1.754-21.71 2.85.22 1.097 7.895 2.632 8.114 4.605.22 1.974-9.429 2.632-9.429 4.386 0 1.755 41.007 10.307 51.972 19.517 10.964 9.21-32.236-10.964-32.236-10.964s2.412 3.289 0 4.166c-2.412.877-10.964-12.28-24.999-4.166-2.556 3.338 12.243 5.992 16.008 6.36-1.286 3.305-2.412 4.385 2.851 7.674 5.263 3.29-10.307-4.824-10.307-4.386 0 .439 1.097 5.702 1.097 5.702-4.859-3.947-10.726-5.139-16.228-1.097 0 0-.22 3.948 5.482 6.36-3.113 6.361 3.509 4.386 14.035 10.306-15.644-4.088-16.885 3.51-5.701 5.263s41.884 2.851 49.12 12.28c7.237 9.43-10.28-3.615-12.28-3.947-.438.22-.877 4.825-.877 4.825-4.678-2.708-8.99-5.14-14.585-6.288-.439.877-.326 2.122-.765 2.998-5.078-3.662-9.511-6.222-16.886-6.578l-.877 3.509s-6.14-7.676-18.201 0c-6.735 4.828 25.438 1.754 30.701 7.456 5.263 5.701 1.096 6.578 1.096 6.578-4.386-1.607-8.771-3.216-13.157-4.824 0 0-15.569-2.851-19.955.657-4.386 3.51 64.033 12.061 66.006 21.491 1.33 5.114-16.08-5.369-31.139-9.868l-1.755 5.044s-5.98-6.008-12.719-7.018c-.22 0 1.316 5.922 1.316 5.922s-16.885-7.895-25.437-3.729c-8.553 4.167 29.824 6.36 33.332 10.307 3.508 3.947-11.622-2.631-12.938 0-1.317 2.632-19.956-4.824-19.737-1.316.219 3.51 2.631 5.483 2.631 5.483s38.814 3.727 40.131 8.333c1.316 4.605-21.49-2.632-21.49-2.632s-2.194 3.29-.44 4.824c1.755 1.536-13.157-8.771-11.842-1.973-4.835-1.926-17.324-7.894-15.569-3.289 1.755 4.605 35.306 11.184 35.306 11.184s-14.693 1.096-14.035 4.825c-18.9-11.515-18.42-4.168-17.982-3.948.44.22-24.34-6.14-5.701 3.948 18.64 10.087 10.088 8.332 10.307 8.552.219.219 1.973 5.043 1.534 5.043-.438 0-12.719-6.579-16.885-7.017-4.167-.439-23.903 5.482-2.85 14.692s33.99-2.193 45.611-.877c11.622 1.316 17.104 3.29 16.008 7.018-1.096 3.727-11.873-12.217-23.215 1.576-12.902-2.554-21.658-4.035-14.998 5.446-21.07-7.874-33.934 2.407-7.399 6.574 26.075.768 42.103-6.36 42.103-6.36s4.386 8.114 10.746 2.412c6.36-5.701 6.579 2.193 6.798 2.193.219 0 6.14-2.632 6.14-2.632h1.535z"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeWidth={0.742}
                    fill="#198200"
                />
                <path
                    strokeLinejoin="round"
                    d="M316.07 320.16v-3.673s-8.283-1.47-12.322-.643c-2.392-1.37-4.653-3.176-7.512-1.652-.551 1.193 5.234 4.315 7.162 4.315 2.259 1.43 12.672 1.837 12.672 1.653zm-.1 5.97s-8.283-3.028-11.589.46c.54 3.71 9.753 5.509 11.681 4.499 1.929-1.01 0-4.775-.092-4.959zm13.96 1.47v2.571s9.917 1.928 11.662-.183c1.744-2.112-7.897-3.49-11.662-2.388zm-.45-10.25l.366 2.901s8.539 1.928 11.845-2.755c3.305-4.683-7.504.038-12.21-.146zm.45-9.95v1.928s6.428 1.01 7.897-1.744c1.47-2.755-7.713 0-7.897-.184zm-13.42-5.94c-.989-1.41-4.48-4.904-13.846-5.914-6.51-.022 11.758 9.578 13.846 5.914zm13.24-9.77s-.367 2.663-.276 2.663c.092 0 22.038-6.52 27.18-6.06 4.593-1.3 5.51-4.5 5.326-4.5-3.92-2.857-22.864 2.296-32.23 7.897zm.46-7.8c-.092.46-.276 2.571-.276 2.571s15.518-3.03 19.651-5.968c4.132-2.939-19.19 3.49-19.375 3.397zm-.64-7.62l.001 2.589s10.358-.316 12.487-2.405c1.359-2.09-9.129-.297-12.488-.184zm21.61 21.74s5.38.752 6.39-.809c-.198-2.77-6.39.9-6.39.809zm-21.16-31.38c-.092.459.091 5.693.091 5.693s24.885-7.897 26.446-9.367c1.561-1.469 5.025-5.891-26.538 3.674zm-.73-7.9v4.132s10.009-.735 14.601-4.5c4.591-3.764-14.601.46-14.601.368zm-12.03-9.37l.643 3.765s-32.965-10.652-32.873-10.652c.091 0-1.66-5.426 32.23 6.887zm.55-13.22c-.092.367-.092 3.58-.184 3.49-.092-.093-22.864-9.55-23.69-8.724-3.024-7.086 23.875 5.417 23.875 5.234zm11.11 5.88c0 .092.367 3.214.367 3.214s13.958-2.938 14.784-4.315c.827-1.378-15.15 1.193-15.15 1.101zm.33 7.43c.13.79.404 3.306.404 3.306s5.602-.459 6.428-1.745c.827-1.285-6.832-1.469-6.832-1.561zm-.88-16.98c0 .276.091 3.122.091 3.122s15.335-3.03 16.988-4.5c1.653-1.468-17.355 1.378-17.079 1.378zm.09-8.45c0 .184-.55 3.122-.184 3.122s18.641-3.122 21.487-5.693c2.848-2.571-21.028 2.847-21.303 2.571zm-.27-14.88v3.214s11.846-2.479 14.05-4.959c2.204-2.48-14.05 1.929-14.05 1.745zm-2.02-21.67l.276 4.866s15.886-2.203 18.18-4.866c2.296-2.663-18.547 0-18.456 0zm-7.35-36.45v3.03s-7.53-.367-5.694-1.653 5.694-1.102 5.694-1.377zm6.98 4.04l.184 4.132s9.733-.918 10.468-2.48c.734-1.56-10.468-1.652-10.652-1.652zm-.55 5.97s.184 2.571.367 2.571c.184 0 3.857-.275 4.683-1.285.826-1.01-4.683-1.102-5.05-1.286zm-8.26 11.75c0 .275.275 3.949.091 3.856s-21.303-6.152-23.232-6.06c-1.927.092-2.479-4.867 23.141 2.204zm1.74 6.89c0 .735.46 4.591-.276 4.408-.734-.184-14.324-4.5-12.947-5.785 1.377-1.286 13.223 1.653 13.223 1.377zm-1.19 29.01l.091 3.49s-23.69-7.163-24.517-8.356c-.826-1.194-3.122-6.795 24.426 4.866zm.91 8.54c0 .092.184 3.306.092 3.306s-32.23-11.294-32.23-11.294-2.571-8.449 32.138 7.988z"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeWidth={0.792}
                    fill="#fff"
                />
                <path
                    strokeLinejoin="round"
                    d="M280.26 328.68c0 .11-.11 3.517-.11 3.517s-6.264-1.759-8.242-5.275c3.627-.989 8.462 1.868 8.352 1.758z"
                    stroke="#000"
                    strokeWidth={0.792}
                    fill="#fff"
                />
            </g>
        </svg>
    );
}

export default SvgNf;
