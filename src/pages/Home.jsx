import { useEffect, useState } from "react";
import welcomeImg from "../assets/welcome.png";
import Carousel from "../components/Home/Carousel";
import Gallery from "../components/Home/Gallery";
import Typer from "../components/Home/Typer";

const introImgURL =
  "https://pyxis.nymag.com/v1/imgs/2cb/2e1/47a72da70b3f7a301273b06cac9ea615c8-06-bob-ross-painting.rsquare.w400.jpg";

const Home = () => {
  return (
    <>
      <div class="fixed top-1/2 left-0 transform -translate-y-1/2 ">
        <a href="https://wa.me/00000000" target="_blank" class="">
          <div class="transform -rotate-90 origin-top-left bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-b-lg">
            Contact me!!
          </div>
        </a>
      </div>
      <div className="imageHead">
        <img src={welcomeImg} />
      </div>
      <Typer text={["Awesome new news that we need to tell everyone!!!"]} />
      <AboutSection />
      <Carousel />
      <Gallery />
      <Testimonials />
    </>
  );
};

const Testimonials = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5").then((res) =>
      res.json().then((val) => {
        setData(val.results);
      })
    );
  }, []);
  return (
    <div>
      <h2 className="text-3xl text-center">Testimonials</h2>
      {data.map((v) => {
        return (
          <div class="flex items-center space-x-4 p-4">
            <img
              class="w-24 h-24 rounded-full object-cover"
              src={v.picture.large}
            />
            <div>
              <h3 class="text-lg font-bold">
                {v.name.title + " " + v.name.first + " " + v.name.last}
              </h3>
              <p class="text-sm text-gray-500">Oil Painting</p>
              <p class="mt-2 text-base">
                The artist author has helped me a lot, thank you!!
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const AboutSection = () => {
  return (
    <div className="gridContainer1">
      <div className="gridContainer1img">
        <img src={introImgURL} />
      </div>

      <div className="gridContainer1Text">
        <h2>About Art Studio</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac viverra
          lacus. Sed eros sapien, vulputate consequat leo et, mattis aliquet
          arcu. Curabitur commodo congue lacus in bibendum. Aliquam pulvinar mi
          nec quam dapibus porta. Pellentesque vulputate eleifend sem, in
          efficitur mi dapibus non. Morbi sit amet arcu id nulla placerat
          consectetur ac nec lectus. Ut lorem mi, mollis in lectus non,
          venenatis ullamcorper nisi. Donec convallis iaculis blandit. Nulla
          vitae felis et purus tincidunt posuere id sollicitudin felis.
          Vestibulum lectus magna, sollicitudin eget vulputate sit amet,
          molestie sit amet nibh. Nam porta tellus sit amet hendrerit volutpat.
          Curabitur ante sem, aliquet id mi sit amet, porta lacinia nulla.
          Curabitur aliquam tempus mi, tincidunt euismod nisl tempus ut.
          Praesent vel interdum erat, non rhoncus justo. In ac ex non ex
          scelerisque porttitor sit amet vel lacus. Proin nunc sapien, semper
          sit amet semper sed, pretium vitae erat. Sed vehicula fringilla
          viverra. Vivamus eleifend tempus nisl ac congue. Nulla lobortis
          pretium laoreet. Vivamus non ullamcorper turpis, id gravida nunc.
        </p>
      </div>
    </div>
  );
};

export default Home;
