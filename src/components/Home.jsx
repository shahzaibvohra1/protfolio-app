import MyPic from "../assets/MyPic.jpg";
function HomePage() {
  return (
    <>
      <h1>"Hello"</h1>
      <h1>
        <b>I'M SHAHZAIB</b>
      </h1>
      <h2>Software Engineer</h2>
      <p>
        I am a passionate Software Enginner with diverse knowledge and work
        experience. I have Worked on more then 30 enterprise application across
        different industries (Health, Transportaion, Telecom and Banking) My
        mission is to be an enterpneur to make this world a better place to
        live.
      </p>
      <img src={MyPic} height={100} width={100}></img>
    </>
  );
}

export default HomePage;
