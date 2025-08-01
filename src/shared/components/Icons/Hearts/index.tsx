type HeartsProps = {
    fillColor?: string,
    className?: string,
}

function Hearts({ fillColor, className }: HeartsProps) {
    return (
        <svg className={className} width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5 25.3563L12.5063 23.5413C5.425 17.12 0.75 12.8713 0.75 7.6875C0.75 3.43875 4.0775 0.125 8.3125 0.125C10.705 0.125 13.0013 1.23875 14.5 2.985C15.9987 1.23875 18.295 0.125 20.6875 0.125C24.9225 0.125 28.25 3.43875 28.25 7.6875C28.25 12.8713 23.575 17.12 16.4937 23.5413L14.5 25.3563Z" fill={fillColor} />
        </svg>
    )
}

export default Hearts;