interface LogoProps extends React.SVGAttributes<HTMLOrSVGElement> { }

function Logo(props: LogoProps) {
    return (
        <svg
            width={122}
            height={139}
            viewBox="0 0 122 139"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M122 69.512c0-8.08-10.121-15.739-25.638-20.488 3.58-15.814 1.989-28.396-5.024-32.424-1.616-.945-3.506-1.392-5.57-1.392v5.545c1.144 0 2.064.224 2.835.646 3.382 1.94 4.85 9.324 3.705 18.823-.273 2.337-.721 4.799-1.268 7.31-4.874-1.193-10.196-2.113-15.79-2.71-3.358-4.6-6.84-8.778-10.346-12.433 8.107-7.534 15.717-11.661 20.889-11.661v-5.545c-6.839 0-15.791 4.873-24.843 13.328-9.052-8.405-18.004-13.229-24.842-13.229v5.545c5.147 0 12.782 4.103 20.888 11.587a117.455 117.455 0 00-10.27 12.408c-5.62.596-10.942 1.517-15.816 2.735a75.022 75.022 0 01-1.293-7.21c-1.169-9.5.274-16.884 3.63-18.848.747-.448 1.717-.647 2.86-.647v-5.545c-2.088 0-3.978.448-5.62 1.393-6.987 4.028-8.554 16.585-4.948 32.349C10.07 53.823 0 61.456 0 69.512c0 8.082 10.121 15.74 25.638 20.489-3.58 15.814-1.989 28.396 5.024 32.424 1.616.944 3.506 1.392 5.595 1.392 6.838 0 15.79-4.873 24.843-13.327 9.051 8.404 18.003 13.228 24.842 13.228 2.089 0 3.979-.448 5.62-1.393 6.988-4.028 8.555-16.585 4.949-32.349C111.929 85.226 122 77.57 122 69.512zM89.623 52.928c-.92 3.207-2.065 6.514-3.358 9.821a117.673 117.673 0 00-3.257-5.967c-1.144-1.99-2.363-3.929-3.581-5.819 3.531.523 6.938 1.169 10.195 1.965zm-11.39 26.48c-1.94 3.357-3.929 6.54-5.993 9.499-3.705.323-7.46.497-11.24.497-3.755 0-7.51-.174-11.19-.472a137.07 137.07 0 01-6.018-9.449 129.54 129.54 0 01-5.173-9.896 129.683 129.683 0 015.148-9.921c1.94-3.357 3.929-6.54 5.993-9.498A129.38 129.38 0 0161 49.67c3.755 0 7.51.174 11.19.473a137.033 137.033 0 016.018 9.448 129.505 129.505 0 015.173 9.897 139.279 139.279 0 01-5.148 9.92zm8.032-3.232a106.579 106.579 0 013.432 9.896c-3.258.796-6.69 1.467-10.245 1.99 1.218-1.915 2.437-3.88 3.58-5.893a141.275 141.275 0 003.233-5.993zM61.05 102.707c-2.313-2.387-4.626-5.048-6.913-7.957 2.238.1 4.526.174 6.838.174 2.338 0 4.65-.05 6.913-.174a97.041 97.041 0 01-6.838 7.957zM42.548 88.062c-3.53-.523-6.938-1.17-10.195-1.965.92-3.207 2.064-6.514 3.357-9.821 1.02 1.989 2.089 3.978 3.257 5.967a164.69 164.69 0 003.581 5.819zm18.377-51.744c2.313 2.387 4.626 5.048 6.914 7.957A154.05 154.05 0 0061 44.1c-2.337 0-4.65.05-6.913.174a97.073 97.073 0 016.838-7.957zM42.523 50.963c-1.218 1.915-2.437 3.88-3.58 5.893a140.5 140.5 0 00-3.233 5.968 106.579 106.579 0 01-3.432-9.896c3.258-.771 6.69-1.442 10.245-1.965zM20.018 82.094c-8.803-3.755-14.497-8.678-14.497-12.582 0-3.903 5.694-8.851 14.497-12.581 2.139-.92 4.476-1.74 6.889-2.511 1.417 4.873 3.282 9.945 5.595 15.142-2.288 5.172-4.128 10.22-5.52 15.068a75.548 75.548 0 01-6.964-2.536zm13.38 35.532c-3.383-1.94-4.85-9.325-3.706-18.823.273-2.337.721-4.799 1.268-7.31 4.874 1.193 10.196 2.113 15.79 2.71 3.358 4.6 6.84 8.777 10.346 12.432-8.107 7.534-15.716 11.662-20.889 11.662-1.119-.025-2.064-.249-2.81-.671zm58.985-18.947c1.169 9.498-.274 16.883-3.63 18.847-.747.448-1.717.647-2.86.647-5.148 0-12.782-4.103-20.89-11.587a117.45 117.45 0 0010.271-12.408c5.62-.596 10.942-1.516 15.816-2.735.572 2.511 1.02 4.923 1.293 7.236zm9.574-16.585c-2.139.92-4.476 1.74-6.888 2.511-1.418-4.873-3.283-9.946-5.596-15.142 2.288-5.172 4.128-10.22 5.52-15.068a78.92 78.92 0 016.989 2.536c8.803 3.754 14.497 8.678 14.497 12.581-.024 3.904-5.719 8.852-14.522 12.582z"
                fill="#81D8F7"
            />
            <path
                d="M60.975 80.876c6.276 0 11.365-5.088 11.365-11.364 0-6.275-5.089-11.363-11.365-11.363s-11.364 5.088-11.364 11.363c0 6.276 5.088 11.364 11.364 11.364z"
                fill="#81D8F7"
            />
        </svg>
    )
}

export default Logo