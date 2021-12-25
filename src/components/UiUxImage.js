import { Col } from "reactstrap";
export default function UiUxImage({work}){
    if(work.drive === undefined)
    return(
            <Col key={work.id} xs="12" lg="4" className="mt-lg-4 mt-5" id={work.id}>
                <div className="image-container">
                    <img src={work.image} className="img-fluid uiux-image" alt={work.name} />
                    <div className="image-overlay">
                        <div className="image-title">{work.name}</div>
                        <div className="image-click">Case Study is being updated.</div>
                    </div>
                </div>
            </Col>
    )
    return(
        <Col key={work.id} xs="12" lg="4" className="mt-lg-4 mt-5" id={work.id}>
            <a href={work.drive} target="_blank" rel="noreferrer">
                <div className="image-container">
                    <img src={work.image} className="img-fluid uiux-image" alt={work.name} />
                    <div className="image-overlay">
                        <div className="image-title">{work.name}</div>
                        <div className="image-click">Click on this card to see this project.</div>
                    </div>
                </div>
            </a>
        </Col>
    )
}