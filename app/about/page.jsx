import Image from "next/image";
import aboutImg from "../../public/assets/about.png";
import about1 from "../../public/assets/about-1.png";
import about2 from "../../public/assets/about-2.png";
import about3 from "../../public/assets/about-3.png";
import about4 from "../../public/assets/about-4.png";
import man1 from "../../public/assets/man1.png";
export default function About() {
  return (
    <>
      <section className="w-11/12 mx-auto my-8">
        <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
          <div className="lg:w-1/2 w-full">
            <h3 className="text-5xl font-semibold mb-4">Our Stroy</h3>
            <p className="mb-4 text-gray-500">
              Launched in 2015, Exclusive is South Asia’s premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by wide range of tailored marketing, data and service
              solutions, Exclusive has 10,500 sellers and 300 brands and serves
              3 millions customers across the region.
            </p>
            <p className="mb-4 text-gray-500">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assignment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            <Image
              src={aboutImg}
              width={600}
              height={500}
              alt="about-image"
            ></Image>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-between items-center gap-6 my-8">
          <div className="flex flex-col justify-center items-center border gap-2 border-gray-400 p-4 rounded-lg">
            <Image
              src={about1}
              width={60}
              height={60}
              alt="service image"
            ></Image>
            <h3 className="font-bold">10.5K</h3>
            <p className="font-semibold text-sm">Sellers active outside</p>
          </div>

          <div className="flex flex-col justify-center items-center border gap-2 border-gray-400 p-4 rounded-lg">
            <Image
              src={about2}
              width={60}
              height={60}
              alt="service image"
            ></Image>
            <h3 className="font-bold">33K</h3>
            <p className="font-semibold text-sm">Monthly product sale</p>
          </div>

          <div className="flex flex-col justify-center items-center border gap-2 border-gray-400 p-4 rounded-lg">
            <Image
              src={about3}
              width={60}
              height={60}
              alt="service image"
            ></Image>
            <h3 className="font-bold">45.5K</h3>
            <p className="font-semibold text-sm">Customer active in our site</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 border border-gray-400 p-4 rounded-lg">
            <Image
              src={about4}
              width={60}
              height={60}
              alt="service image"
            ></Image>
            <h3 className="font-bold">18K</h3>
            <p className="font-semibold text-sm">
              Annual gross sale in our site
            </p>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between my-12">
          <div>
            <figure className="bg-[#f5f5f5] w-[300px] h-[280px] px-8 mb-2">
              <Image
                className="mx-auto"
                src={man1}
                width={170}
                height={220}
                alt="employee"
              ></Image>
            </figure>
            <h1 className="text-xl font-semibold mb-2">Ahbab Zaman</h1>
            <p className="text-xs font-semibold">CEO & Chairman</p>
          </div>

          <div>
            <figure className="bg-[#f5f5f5] w-[300px] h-[280px] px-8 mb-2">
              <Image
                className="mx-auto object-fit"
                src={man1}
                width={170}
                height={220}
                alt="employee"
              ></Image>
            </figure>
            <h1 className="text-xl font-semibold mb-2">John Wick</h1>
            <p className="text-xs font-semibold">Managing Director</p>
          </div>

          <div>
            <figure className="bg-[#f5f5f5] w-[300px] h-[280px] px-8 mb-2">
              <Image
                className="mx-auto"
                src={man1}
                width={170}
                height={220}
                alt="employee"
              ></Image>
            </figure>
            <h1 className="text-xl font-semibold mb-2">James Bond</h1>
            <p className="text-xs font-semibold">CEO & Chairman</p>
          </div>
        </div>
      </section>
    </>
  );
}
