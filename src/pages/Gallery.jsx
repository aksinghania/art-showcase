import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";

import Typer from "../components/Home/Typer";

function Gallery() {
  return (
    <>
      <Typer title="Gallery" text={["Check the super Cool Arts"]} />

      <div className="text-5xl mt-10 text-center">
        <h3>Art Gallery</h3>
      </div>
      <div class="grid grid-cols-3 gap-x-4 gap-y-2 p-[3.7%] md:grid-cols-2 sm:grid-cols-1">
        {Array(4)
          .fill(10)
          .map(() => (
            <div class="text-center m-1.25">
              <img
                class="w-full"
                src="https://cdn.britannica.com/87/2087-004-264616BB/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg"
                alt="Description"
              />

              <ReactReadMoreReadLess
                readMoreClassName="readMoreClassName"
                readLessClassName="readLessClassName"
                charLimit={175}
                readMoreText="Read More⬇️"
                readLessText="Read Less⬆️"
                class="text-black text-left"
              >
                Your paragraph text Your paragraph text Your paragraph text Your
                paragraph text Your paragraph text Your paragraph text Your
                paragraph text Your paragraph text Your paragraph text Your
                paragraph text Your paragraph text Your paragraph text Your
                paragraph text Your paragraph text
              </ReactReadMoreReadLess>
            </div>
          ))}
      </div>
    </>
  );
}
export default Gallery;
