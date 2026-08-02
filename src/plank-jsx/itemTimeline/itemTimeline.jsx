import './itemtimeline.css'

export function ItemTimeline ({content}){

    return(
        <div className="div-timeline-item">
            <div className="header-timeline-item">
                <p>header</p>
            </div>
            <div className="content-timeline-item">
                {content}
            </div>
        </div>
    )
}