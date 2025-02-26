"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";

const CheckoutForm = ({ data }) => {
  const { data: session } = useSession();
  console.log(session);
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const handleBookService = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const email = form.email.value;
    const bookingPayload = {
      // Session
      customerName: session?.user?.name,
      email: session?.user?.email,
      // User Inputs
      date,
      phone,
      address,
      // Extra information
      gadget_id: data._id,
      gadget_name: data.item_name,
      gadget_img: data.item_image,
      gadget_category: data.category_image,
      gadget_price: data.price,
    };
    const res = await fetch("http://localhost:3000/api/gadget", {
      method: "POST",
      body: JSON.stringify(bookingPayload),
    });
    const postedResponse = await res.json();
    if (postedResponse.insertedId) {
      toast.success("Order Successfully Done");
      setLoading(false);
      formRef.current.reset();
    }
  };

  return (
    <div className="my-10">
      <div className="w-11/12 mx-auto">
        <section className="flex lg:flex-row flex-col items-center">
          <form
            ref={formRef}
            onSubmit={handleBookService}
            className="w-full flex lg:flex-row flex-col gap-4"
          >
            <div className="lg:w-1/2 w-full">
              <div className="flex flex-col gap-1 w-full mb-4">
                <label>Name</label>
                <input
                  name="name"
                  defaultValue={session?.user?.name}
                  readOnly
                  className="p-2 px-4 border-none bg-[#f1f1f1] focus:outline-none rounded-md"
                  type="text"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div className="flex flex-col gap-1 w-full mb-4">
                <label>Email</label>
                <input
                  name="email"
                  defaultValue={session?.user?.email}
                  readOnly
                  className="p-2 px-4 border-none bg-[#f1f1f1] focus:outline-none rounded-md"
                  type="email"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div className="flex flex-col gap-1 w-full mb-4">
                <label>Phone</label>
                <input
                  name="phone"
                  className="p-2 px-4 border-none bg-[#f1f1f1] focus:outline-none rounded-md"
                  type="text"
                  placeholder="Enter Your Contact No."
                  required
                />
              </div>
              <div className="flex flex-col gap-1 w-full mb-4">
                <label>Date</label>
                <input
                  name="date"
                  className="p-2 px-4 border-none bg-[#f1f1f1] focus:outline-none rounded-md"
                  type="date"
                  placeholder=""
                  required
                />
              </div>
              <div className="flex flex-col gap-1 w-full mb-4">
                <label>Due Amount</label>
                <input
                  name="price"
                  defaultValue={data?.price}
                  readOnly
                  className="p-2 px-4 border-none bg-[#f1f1f1] focus:outline-none rounded-md"
                  type="text"
                  placeholder=""
                  required
                />
              </div>
              <div className="flex flex-col gap-1 w-full mb-4">
                <label>Address</label>
                <input
                  name="address"
                  className="p-2 px-4 border-none bg-[#f1f1f1] focus:outline-none rounded-md"
                  type="text"
                  placeholder="Enter your address"
                  required
                />
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <figure>
                    <Image
                      src={data?.item_image}
                      width={100}
                      height={100}
                      alt="Gadget price"
                    />
                  </figure>
                  <h4 className="text-lg font-semibold">{data?.item_name}</h4>
                </div>
                <div>
                  <p className="text-lg font-semibold">${data?.price}</p>
                </div>
              </div>

              <div className="flex items-center justify-between border-b-2 mt-8 p-4">
                <div className="flex items-center gap-5">
                  <h2 className="text-lg font-semibold">SUBTOTAL</h2>
                </div>
                <div>
                  <p className="text-lg font-semibold">${data?.price}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-8 border-b-2 p-4">
                <div className="flex items-center gap-5">
                  <h2 className="text-lg font-semibold">SHIPPING</h2>
                </div>
                <div>
                  <p className="text-lg font-semibold">FREE</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#DB4444] text-white font-semibold w-full flex items-center justify-center gap-2 hover:bg-[#f1f1f1] hover:text-[#DB4444] duration-300 transition-all"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                      Please wait...
                    </>
                  ) : (
                    "Place Order"
                  )}
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default CheckoutForm;
