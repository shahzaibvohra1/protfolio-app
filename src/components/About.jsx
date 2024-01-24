import MyPic from "../assets/MyPic.jpg";
import MyResume from "../assets/MyResume.pdf";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function About() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src={MyPic} height={171} weight={180} roundedCircle />
          </Col>
        </Row>
      </Container>

      <h1>"Hello"</h1>
      <h1>
        <b>I'M SHAHZAIB</b>
      </h1>
      <h2>A Software Engineer</h2>
      <p>
        I am a passionate Software Enginner with diverse knowledge and work
        experience. I have Worked on more then 30 enterprise application across
        different industries Health, Transportaion, Telecom and Banking and many
        more.
        <br />
        <br /> I thrive on turning ideas into reality and creating meaningful
        experiences. With a deep love for Software Development, I have dedicated
        myself to mastering the art of coding. My mission is to be an enterpneur
        to make this world a better place to live.
        <br />
        <br />
        <a href={MyResume} download="Shahzaib Vohra">
          {" "}
          Click here
        </a>
        &nbsp;to download my resume
      </p>
    </>
  );
}

export default About;
