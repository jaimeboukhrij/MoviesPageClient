import { Row, Col } from "react-bootstrap"


const Providers = ({ filmProvider }) => {
    console.log(".....", filmProvider)

    return (
        <div className="platamors">
            <h5>Watch Now</h5>
            <Row className="eachPlatform">



                {
                    filmProvider
                        ? filmProvider?.flatrate?.map((elem) => {

                            return (
                                <Col md={{ span: 2, offset: 0 }}>
                                    <p>STREAM</p>
                                    <img src={`https://image.tmdb.org/t/p/w500/${elem.logo_path}`} alt="" />
                                    <p style={{ textAlign: "left", marginLeft: "6px" }}>Fijo <span style={{ color: "#FBC500" }}>4K</span></p>

                                </Col>
                            )
                        })

                        : <h6 style={{ color: "white", marginTop: "5%" }}>NOT AVILABLE STREAM YET...</h6>
                }
            </Row>
        </div>
    )

}


export default Providers