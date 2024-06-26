import { useEffect, useState } from "react";

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
export default Testimonials;
