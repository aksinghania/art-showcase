import React from "react";

const products = [
  {
    title: "Maxwell Alexandre: Pardo É Papel",
    subtitle: "The Glorious Victory and New Power",
    editor: "Edited by Alessandra Gomez",
    year: 2022,
    price: "$49",
    description: `This fully illustrated catalogue features essays by exhibition curator Alessandra Gómez and scholar Tina M. Campt, as well as an interview with the artist by Hans Ulrich Obrist and a newly expanded reflection by Maxwell Alexandre on his work. Designed by Normal. Co-published by The Shed and Verlag der Buchhandlung Walther und Franz König.`,
    details: "147 pages\nHardcover\n7.6 x 11 inches",
    imgSrc:
      "https://m.media-amazon.com/images/I/81WUx+0i+VL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Maxwell Alexandre: Pardo É Papel",
    subtitle: "The Glorious Victory and New Power",
    editor: "Edited by Alessandra Gomez",
    year: 2022,
    price: "$49",
    description: `This fully illustrated catalogue features essays by exhibition curator Alessandra Gómez and scholar Tina M. Campt, as well as an interview with the artist by Hans Ulrich Obrist and a newly expanded reflection by Maxwell Alexandre on his work. Designed by Normal. Co-published by The Shed and Verlag der Buchhandlung Walther und Franz König.`,
    details: "147 pages\nHardcover\n7.6 x 11 inches",
    imgSrc:
      "https://m.media-amazon.com/images/I/81WUx+0i+VL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Maxwell Alexandre: Pardo É Papel",
    subtitle: "The Glorious Victory and New Power",
    editor: "Edited by Alessandra Gomez",
    year: 2022,
    price: "$49",
    description: `This fully illustrated catalogue features essays by exhibition curator Alessandra Gómez and scholar Tina M. Campt, as well as an interview with the artist by Hans Ulrich Obrist and a newly expanded reflection by Maxwell Alexandre on his work. Designed by Normal. Co-published by The Shed and Verlag der Buchhandlung Walther und Franz König.`,
    details: "147 pages\nHardcover\n7.6 x 11 inches",
    imgSrc:
      "https://m.media-amazon.com/images/I/81WUx+0i+VL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Maxwell Alexandre: Pardo É Papel",
    subtitle: "The Glorious Victory and New Power",
    editor: "Edited by Alessandra Gomez",
    year: 2022,
    price: "$49",
    description: `This fully illustrated catalogue features essays by exhibition curator Alessandra Gómez and scholar Tina M. Campt, as well as an interview with the artist by Hans Ulrich Obrist and a newly expanded reflection by Maxwell Alexandre on his work. Designed by Normal. Co-published by The Shed and Verlag der Buchhandlung Walther und Franz König.`,
    details: "147 pages\nHardcover\n7.6 x 11 inches",
    imgSrc:
      "https://m.media-amazon.com/images/I/81WUx+0i+VL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Maxwell Alexandre: Pardo É Papel",
    subtitle: "The Glorious Victory and New Power",
    editor: "Edited by Alessandra Gomez",
    year: 2022,
    price: "$49",
    description: `This fully illustrated catalogue features essays by exhibition curator Alessandra Gómez and scholar Tina M. Campt, as well as an interview with the artist by Hans Ulrich Obrist and a newly expanded reflection by Maxwell Alexandre on his work. Designed by Normal. Co-published by The Shed and Verlag der Buchhandlung Walther und Franz König.`,
    details: "147 pages\nHardcover\n7.6 x 11 inches",
    imgSrc:
      "https://m.media-amazon.com/images/I/81WUx+0i+VL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Maxwell Alexandre: Pardo É Papel",
    subtitle: "The Glorious Victory and New Power",
    editor: "Edited by Alessandra Gomez",
    year: 2022,
    price: "$49",
    description: `This fully illustrated catalogue features essays by exhibition curator Alessandra Gómez and scholar Tina M. Campt, as well as an interview with the artist by Hans Ulrich Obrist and a newly expanded reflection by Maxwell Alexandre on his work. Designed by Normal. Co-published by The Shed and Verlag der Buchhandlung Walther und Franz König.`,
    details: "147 pages\nHardcover\n7.6 x 11 inches",
    imgSrc:
      "https://m.media-amazon.com/images/I/81WUx+0i+VL._AC_UF1000,1000_QL80_.jpg",
  },
];

const ProductCard = ({ product }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden font-store">
    <div className="p-4">
      <img src={product.imgSrc} alt="Book Cover" className="w-full h-auto" />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-bold">{product.title}</h3>
      <h4 className="text-sm text-gray-500">{product.subtitle}</h4>
      <p className="text-sm text-gray-500">{product.editor}</p>
      <p className="text-sm text-gray-500">{product.year}</p>
      <p className="text-lg font-bold mt-2">{product.price}</p>
      <p className="mt-2 text-gray-700">{product.description}</p>
      <p className="mt-2 text-gray-700 whitespace-pre-line">
        {product.details}
      </p>
      <button className="mt-4 bg-black text-white py-2 px-4 rounded">
        Order online
      </button>
    </div>
  </div>
);

const Store = () => (
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  </div>
);

export default Store;
