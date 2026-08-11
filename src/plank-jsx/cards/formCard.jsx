

export function FormCard({title,children,footer}){

    return(
        <div>
            <div>
                {title}
            </div>
            <div>
                {children}
            </div>
            <div>
                {footer}
            </div>
        </div>
    )
}