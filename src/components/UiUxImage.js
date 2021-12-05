import { Col } from "reactstrap";
export default function UiUxImage({work}){
    return(
            <Col key={work.id} xs="12" lg="6" xl="4" className="mt-lg-4 mt-5" id={work.id}>
                <div className="image-container">
                    <img src={work.image} className="img-fluid uiux-image" alt={work.name} />
                    <div className="image-overlay">
                        <div className="image-title">{work.name}</div>
                        <div className="image-click">Click on this card for more details.</div>
                    </div>
                </div>
            </Col>
    )
}