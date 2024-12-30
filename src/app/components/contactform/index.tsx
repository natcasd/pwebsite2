"use client";

import { useForm } from "react-hook-form";
import { sendEmail } from "../../utils/send-email";
import { useState } from "react";

import { GrSend } from "react-icons/gr";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [emailStatus, setEmailStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (data: FormData) => {
    setLoading(true);
    sendEmail(data)
      .then(() => {
        setLoading(false);
        setEmailStatus("success");
      })
      .catch(() => {
        setLoading(false);
        setEmailStatus("error");
      });
  };

  return (
    <>
      {!emailStatus && !loading && (
        <>
          <div className="flex items-center justify-between max-w-2xl">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              Contact Me
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-black"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-gray-700 focus:shadow-md"
                {...register("name", { required: true })}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-black"
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="example@domain.com"
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-gray-700 focus:shadow-md"
                {...register("email", { required: true })}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-3 block text-base font-medium text-black"
              >
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Type your message"
                className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-gray-700 focus:shadow-md"
                {...register("message", { required: true })}
              ></textarea>
            </div>
            <div className="text-center">
              <button className="hover:shadow-form rounded-md bg-black py-3 px-8 text-base font-semibold text-white outline-none">
                <GrSend />
              </button>
            </div>
          </form>
        </>
      )}
      <div className="text-center">
        {loading && (
          <h1 className="text-center font-mono text-gray-500">Sending...</h1>
        )}
        {emailStatus === "success" && (
          <p className="text-center font-mono text-green-500">
            email was sent!
          </p>
        )}
        {emailStatus === "error" && (
          <h1 className="font-mono text-red-500">
            email wasn&apos;t able to be sent. working on fixing it!
          </h1>
        )}
      </div>
      
    </>
  );
};

export default Contact;
