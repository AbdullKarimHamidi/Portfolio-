import React, { useState } from "react";
import Shaking from "../../assets/shaking.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiWhatsappLine } from "react-icons/ri";
function Contact() {

  const whatsappNumber = "+93798534752";
  const messageme = "Hello! I'm interested in your services.";
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
 const emailvalidation=()=>{
  return String(email).toLowerCase().match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
 }
 const phonevalidation=()=>{
  return String(phone).toLowerCase().match(/^[0-9]{10}$/)
 }
  const handlebutton = (e) => {
    e.preventDefault();
    if (name === "") {
      setError("Username is required");
    } else if (!phonevalidation()) {
      setError("Phone is required");
    } else if (!emailvalidation()) {
      setError("Email is required");
    } else if (subject === "") {
      setError("Subject is required");
    } else {
      setSuccess(`Thank you ${name} your message has been sent successfully`);
      setName("");
      setPhone("");
      setEmail("");
      setSubject("");
      setMessage("");
      setError('')
    }
   
  };


  console.log(error)
  


  return (
    <div id="Contact" className="w-full  py-20 overflow-hidden md:pr-0 pr-3 md:pl-0 pl-3 ">
      <div className="title flex justify-center items-center flex-col md:pl-0 ">
        <p className="uppercase text-xs text-designcolor">Contact</p>
        <h1 className="text-4xl font-bold capitalize mt-2">Contact with me</h1>
      </div>
      <div className="w-full md:h-[700px] flex md:justify-between py-14 md:flex-row flex-col">
        <div className="h-full md:w-[30%]  rounded-lg bg-gradient-to-r from-[#132024] to-[#23272b] shadow-myshadow flex flex-col pt-5 md:pl-0 pl-3 md:pr-0 pr-3">
          <img
            src={Shaking}
            alt=""
            className="w-[350px] h-[220px] bg-cover mx-auto rounded-lg"
          />
          <div className="informations md:ml-14 ">
            <h1 className="font-bold text-2xl mt-5 ">Karim hamidi</h1>
            <p className="text-xs mt-2">MERN Stack developer</p>
            <p className="text-xs mt-3 tracking-wide mr-3 ">
              Whether you have a project idea, a question, or just want to say
              hello, feel free to reach out. I'm always open to new
              opportunities and collaborations. Looking forward to hearing from
              you!
            </p>
            <p className="text-xs capitalize mt-4 tracking-wide">
              Phone :+93798534752
            </p>
            <p className="mt-3 text-xs">Email : karimjanhamidi@gmail.com</p>
          </div>
          <div className="find md:ml-14   mt-3 pb-3">
            <p className="uppercase">find me in</p>
            <div className="buttons flex gap-3 mt-5">
              <button className="w-10 h-10 rounded-md bg-black/20 inline-flex justify-center items-center text-white cursor-pointer hover:text-designcolor duration-500 hover:translate-y-1">
                <a href="https://www.facebook.com/profile.php?id=100043866711375" target="_blank" rel="noopener noreferrer"> 
                  <FaFacebookF className="" />
                </a>
              </button>
              <button className="w-10 h-10 rounded-md bg-black/20 inline-flex justify-center items-center text-white cursor-pointer hover:text-designcolor duration-500 hover:translate-y-1">
                <a
                  href="https://www.linkedin.com/in/karim-hamidi-647883211/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </button>
              <button className="w-10 h-10 rounded-md bg-black/20 inline-flex justify-center items-center text-white cursor-pointer hover:text-designcolor duration-500 hover:translate-y-1">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    messageme
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <RiWhatsappLine />
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="h-full md:w-[60%] rounded-lg  bg-gradient-to-r from-[#132024] to-[#23272b] shadow-myshadow py-10 flex flex-col gap-8 p-8 md:mt-0 mt-1">
          {error && (
            <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] text-center text-base shadow-myshadow rounded-lg tracking-wide animate-bounce text-orange-500">
              {error}
            </p>
          )}
          {success && (
            <p className=" mt-3 w-full text-center text-base tracking-wide bg-gradient-to-r from-[#1e2024] to-[#23272b] py-3 text-green-500 animate-bounce shadow-lg rounded-lg shadow-black/20  duration-200">
              {success}
            </p>
          )}
          <form className=" ">
            <div className="flex gap-5 mb-6 font-bodyFont md:flex-row flex-col">
              <div className="md:w-1/2 ">
                <p className="text-sm uppercase text-gray-400">Your name</p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full h-12 px-4 border-b-[1px] border-b-gray-600 bg-[#191b1e] rounded-lg focus:outline-none focus:ring-2 focus:ring-designcolor focus-visible:border-b-none duration-300 mt-2 ${
                    error === "Username is required" &&
                    "outline-none ring-2 ring-red-500"
                  }`}
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-sm uppercase text-gray-400">phone number</p>
                <input
                  type="text"
                  name=""
                  id=""
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`w-full h-12 px-4 border-b-[1px] border-b-gray-600 bg-[#191b1e] rounded-lg focus:outline-none focus:ring-2 focus:ring-designcolor focus-visible:border-b-none duration-300 mt-2 ${
                    error === "Phone is required" &&
                    "outline-none ring-2 ring-red-500"
                  }`}
                />
              </div>
            </div>
            <div className="font-bodyFont">
              <p className="text-sm uppercase text-gray-400">email</p>
              <input
                type="text"
                name=""
                value={email}
                id=""
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full h-12 px-4 border-b-[1px] border-b-gray-600 bg-[#191b1e] rounded-lg focus:outline-none focus:ring-2 focus:ring-designcolor focus-visible:border-b-none duration-300 mt-4 ${
                  error === "Email is required" &&
                  "outline-none ring-2 ring-designcolor"
                }`}
              />
            </div>

            <div className="mt-5 w-full">
              <p className="text-sm uppercase text-gray-400">Your message</p>
              <textarea
                cols={30}
                rows={10}
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                onPaste={(e) => e.preventDefault()}
                autoComplete="new-email"
                className={`w-full rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] focus:outline-none focus:ring-2 focus:ring-designcolor focus-visible:border-b-none duration-300 mt-2 px-4 ${
                  error === "Subject is required" &&
                  "outline-none ring-2 ring-designcolor"
                }`}
              ></textarea>
            </div>
            <button
              type="button"
              className="text-sm text-gray-400 w-full text-center uppercase bg-black/20 py-3 rounded-lg hover:ring-2 hover:ring-designcolor  duration-300 mt-5 font-semibold hover:outline-none cursor-pointer"
              onClick={handlebutton}
            >
              send message
            </button>
            {success && (
              <p className=" mt-3 w-full text-center text-base tracking-wide bg-gradient-to-r from-[#1e2024] to-[#23272b] py-3 text-green-500 animate-bounce shadow-lg rounded-lg shadow-black/20  duration-200">
                {success}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
