// components/TopOfferCard.jsx
import offerImage from "../src/assests/images/heart";

export default function TopOfferCard() {
  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
      {/* صورة المنتجات */}
      <div className="md:w-1/2 p-4 flex justify-center items-center">
        <img
          src={offerImage}
          alt="Fresh Vegetables Offer"
          className="object-contain"
          width={300}
          height={300}
        />
      </div>

      {/* نص العرض */}
      <div className="md:w-1/2 bg-teal-500 text-white p-6 flex flex-col justify-center">
        <span className="uppercase text-sm font-semibold tracking-wide">
          Sale
        </span>
        <h2 className="text-2xl font-bold mt-2 mb-4">
          Enjoy up to <span className="text-orange-400">20% off</span>!
        </h2>
        <p className="mb-6">
          Grab your limited-time discount and enjoy 20% off on all our products
        </p>
        <button className="bg-orange-400 text-white font-semibold py-2 px-4 rounded hover:bg-orange-500 transition-colors">
          Shop Now
        </button>
      </div>
    </div>
  );
}
