import MyPic from "../assets/MyPic.jpg";
import MyResume from "../assets/MyResume.pdf";
function About() {
  return (
    <>
      {" "}
      <img src={MyPic} height={100} width={100}></img>
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
