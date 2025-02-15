import { CiPhone } from "react-icons/ci";
import { SlEnvolope } from "react-icons/sl";

export default function Contact() {
  return (
    <>
      <section className="w-11/12 mx-auto my-8">
        <div className="flex lg:flex-row flex-col justify-between gap-4 text-gray-500">
          <div className="lg:w-[30%] w-full mx-auto shadow-xl p-10 rounded-xl">
            <div className="space-y-3">
              <h2 className="flex items-center gap-2">
                <span className="bg-[#DB4444] text-white p-1 rounded-full">
                  <CiPhone className="text-lg font-semibold"></CiPhone>
                </span>
                <span className="font-semibold">Call To Us</span>
              </h2>
              <p className="font-semibold text-sm">
                We are available 24/7, 7 days a week.
              </p>
              <p className="font-semibold text-sm">Phone : 01569118531</p>
            </div>
            <hr className="my-6" />
            <div className="space-y-2">
              <h2 className="flex items-center gap-2">
                <span className="bg-[#DB4444] text-white p-1 rounded-full">
                  <SlEnvolope className="text-lg font-semibold"></SlEnvolope>
                </span>
                <span className="font-semibold">Write To Us</span>
              </h2>
              <p className="font-semibold text-sm">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="font-semibold text-sm">
                Emails: customer@exclusive.com
              </p>
              <p className="font-semibold text-sm">
                Emails: support@exclusive.com
              </p>
            </div>
          </div>
          <div className="lg:w-[70%] w-full mx-auto shadow-xl lg:p-10 p-6 rounded-xl">
            <div className="flex lg:flex-row flex-col gap-3">
              <input className="bg-[#F5F5F5] border-none p-3" type="text" placeholder="Your Name" />
              <input className="bg-[#F5F5F5] border-none p-3" type="text" placeholder="Your Email" />
              <input className="bg-[#F5F5F5] border-none p-3" type="text" placeholder="Your phone" />
            </div>
            <textarea className="h-[200px] w-full mt-2 border-none bg-[#F5F5F5] resize-none p-4" placeholder="Your Message"></textarea>
            <div className="flex lg:justify-end justify-center">
              <button className="bg-[#DB4444] px-4 py-2 text-white">Send Message</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
