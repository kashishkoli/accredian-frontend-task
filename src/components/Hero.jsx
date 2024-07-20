import React, { useState } from "react";
import heroImg from "../assets/heroImg.png";
import Modal from "react-modal";
import InputField from "./InputField";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    friendName: "",
    refereeEmail: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/referrals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      setIsModalOpen(false); // Close the modal after submission
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center w-full bg-white py-12 ">
      <div className="flex bg-blue-100 w-[797px] h-[63px] justify-center rounded-full ">
        <ul className="flex font-medium items-center justify-center space-x-24">
          <li>
            <a href="#" className="text-blue-500">
              Refer
            </a>
          </li>
          <li>
            <a href="#">Benefits</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </div>

      <div className="w-[1360px] h-[600px] shadow-2xl absolute top-[269px] rounded-3xl bg-blue-50 flex justify-end overflow-hidden">
        <div className="mt-14 flex-1 flex flex-col gap-3 md:items-start items-center">
          <div className="ml-12 py-16 px-14 w-full flex justify-center md:justify-start">
            <h1 className="text-center cursor-context-menu md:text-start text-4xl lg:text-5xl xl:text-7xl 2xl:text-[5.2vw] 3xl:text-[5.5rem] font-bold max-w-lg xl:max-w-[700px]">
              Let’s Learn & Earn
            </h1>
          </div>
          <div className=" ml-12 mb-10 px-14 w-full max-w-[200px] lg:max-w-[280px] xl:max-w-[400px] 2xl:max-w-[490px] md:mt-0 -mt-3">
            <p className="text-4xl ">
              Get a chance to win up-to{" "}
              <span className="font-bold text-blue-600 ">Rs. 15,000</span>
            </p>
          </div>
          <div className=" ml-6 px-14 flex items-center gap-4 md:justify-start justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className=" refer shadow-xl ml-6 md:flex items-center gap-1 px-14 py-[12px] bg-blue-600 hover:bg-blue-700 rounded-md text-white  text-xl text-nowrap"
            >
              Refer Now
            </button>
          </div>
        </div>
        <div className="mt-[-180px] mr-[-50px] ">
          <img className="w-[900px] h-[750]" src={heroImg} alt="" />
        </div>
      </div>

      {/* pop modal */}
      <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      contentLabel="Referral Modal"
      className="mt-28 fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm p-6 m mx-auto"
    >
      <div className="p-10 w-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Refer a Friend
        </h2>
        <form className="mt-4 space-y-5" onSubmit={handleSubmit}>
          <InputField label="Your Name:" name="referrerName" type="text" onChange={handleChange} />
          <InputField label="Your Email:" name="referrerEmail" type="email" onChange={handleChange} />
          <InputField label="Your Friend's Name:" name="friendName" type="text" onChange={handleChange} />
          <InputField label="Friend's Email:" name="refereeEmail" type="email" onChange={handleChange} />
            <div className="flex items-center justify-end mt-4">
              <button
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm 
                text-sm font-medium rounded-md mr-4 bg-gray-400 hover:bg-none focus:outline-none focus:ring-2 focus:ring-offset-2"
                onClick={() => setIsModalOpen(false)}
              >
                CANCEL
              </button>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Hero;
