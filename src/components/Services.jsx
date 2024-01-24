import WebDevelopment from "../assets/services/WebDevelopment.jpg";
import SocialMedia from "../assets/Services/SocialMediaMarketing.jpg";
import SolitioArchtect from "../assets/Services/SolutionArchitect.jpg";
import Database from "../assets/Services/Database.jpg";
import DynamicsCRM from "../assets/Services/DynamicsCRM.jpg";
import MobileApps from "../assets/Services/mobiledevelopment.jpg";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Services() {
  const servicesArray = [
    { serviceName: "Web Development", iconUrl: WebDevelopment },
    { serviceName: "Social Media Marketing", iconUrl: SocialMedia },
    { serviceName: "Solution Architect", iconUrl: SolitioArchtect },
    { serviceName: "Database Administrator", iconUrl: Database },
    { serviceName: "Dynamics 365 Consultation", iconUrl: DynamicsCRM },
    { serviceName: "Mobile Apps development", iconUrl: MobileApps },
  ];

  const styleSize = {
    fontSize: 100 + "px",
  };
  return (
    <>
      <div style={styleSize}>All i can offer</div>
      <Container>
        <Row>
          {servicesArray.map((service, index) => (
            <Col xs={6} md={4}>
              <div key={index}>
                <div>
                  <img src={service.iconUrl} height={60} width={60}></img>
                </div>
                <div>
                  <h1>{service.serviceName}</h1>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Services;
