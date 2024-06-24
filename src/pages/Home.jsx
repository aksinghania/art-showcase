import welcomeImg from "../assets/welcome.png";
import Typer from "../components/Home/Typer";
const Home = () => {
  return (
    <>
      <div className="imageHead">
        <img src={welcomeImg} />
      </div>
      <Typer text={["Awesome new news that we need to tell everyone!!!"]} />
    </>
  );
};
export default Home;
