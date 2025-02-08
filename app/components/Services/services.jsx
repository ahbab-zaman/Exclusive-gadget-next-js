import Utils from "@/app/ReuseFuncs/utils";
import Image from "next/image";

export default function services() {
  return (
    <>
      <Utils title="our services"></Utils>
      <section className="w-11/12 mx-auto my-8">
        <div className="flex lg:flex-row flex-col justify-around items-center">
          <div
            className="flex flex-col justify-center items-center gap-3
        "
          >
            <Image
              src="/assets/service-1.png"
              width={80}
              height={80}
              alt="Services"
            />
            <h3 className="text-xl font-semibold text-center">
              24/7 CUSTOMER SERVICE
            </h3>
            <p className="text-sm font-light">Friendly 24/7 customer support</p>
          </div>
          <div
            className="flex flex-col justify-center items-center gap-3
        "
          >
            <Image
              src="/assets/service-2.png"
              width={80}
              height={80}
              alt="Services"
            />
            <h3 className="text-xl font-semibold text-center">
              MONEY BACK GUARANTEE
            </h3>
            <p className="text-sm font-light">We return money within 30 days</p>
          </div>
          <div
            className="flex flex-col justify-center items-center gap-3
        "
          >
            <Image
              src="/assets/service-3.png"
              width={80}
              height={80}
              alt="Services"
            />
            <h3 className="text-xl font-semibold text-center">
              FREE AND FAST DELIVERY
            </h3>
            <p className="text-sm font-light">
              Free delivery for all orders over $140
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
