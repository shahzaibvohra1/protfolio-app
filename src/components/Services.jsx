function Services() {
  var services = [
    "Web Development",
    "Social Media Marketing",
    "Solution Architect",
    "Database Administrator",
    "Dynamics 365 Consultation",
    "Mobile Apps development",
  ];
  return (
    <>
      <ul>
        {services.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    </>
  );
}

export default Services;
