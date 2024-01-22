import WebDevelopment from "../assets/services/WebDevelopment.jpg";
import SocialMedia from "../assets/Services/SocialMediaMarketing.jpg";
import SolitioArchtect from "../assets/Services/SolutionArchitect.jpg";
import Database from "../assets/Services/Database.jpg";
import DynamicsCRM from "../assets/Services/DynamicsCRM.jpg";
import MobileApps from "../assets/Services/mobiledevelopment.jpg";

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
      <div style={styleSize}>All in one place</div>
      {servicesArray.map((service, index) => (
        <div key={index}>
          <div>
            <img src={service.iconUrl} height={100} width={100}></img>
          </div>
          <div>
            <h1>{service.serviceName}</h1>
          </div>
        </div>
      ))}
    </>
  );
}

export default Services;
