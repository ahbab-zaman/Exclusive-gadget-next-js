import { Eye, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Slide({ item }) {
  const { item_name, item_image, price, _id } = item;
  return (
    <div className="space-y-3">
      <figure className="bg-[#F5F5F5] p-4 relative group ">
        <Image
          src={item_image}
          width={172}
          height={152}
          alt="Gadgets"
          className="w-32 h-32 mx-auto"
        ></Image>
        <span className="absolute top-2 right-4 bg-[#DB4444] text-sm font-semibold p-2 rounded-xl text-white">
          12%
        </span>
        <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 top-2 left-3 z-10">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
            <Heart className="w-5 h-5 text-black" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
            <ShoppingCart className="w-5 h-5 text-blue-500" />
          </button>
          <Link
            href={`/details/${_id}`}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
          >
            <Eye className="w-5 h-5 text-green-500" />
          </Link>
        </div>
      </figure>
      <h3 className="text-xl font-semibold">{item_name}</h3>
      <span>
        <p>$ {price}</p>
      </span>
    </div>
  );
}
