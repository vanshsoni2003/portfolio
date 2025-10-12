import { useState } from "react";

const base = import.meta.env.BASE_URL;

// ✅ Update this to your live backend URL
const BACKEND_URL = "https://portfolio-r6bb.onrender.com";

const Contactus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch(`${BACKEND_URL}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, subject, message }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
      } else {
        setStatus("Failed to send message");
      }
      console.log(data);
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong");
    }
  };

  return (
    <>
      <div className="bg-[#112C3F] min-h-[1000px] lg:h-[1400px]">
        <div className="relative">
          {/* Left Image */}
          <div className="absolute hidden md:block h-[500px] w-[300px] lg:h-[800px] lg:w-[500px] left-4 lg:left-32">
            <img
              src={`${base}images/telephtwo.png`}
              alt=""
              className="h-full w-full"
            />
          </div>

          {/* Right Image */}
          <div className="absolute hidden md:block h-[350px] w-[250px] lg:h-[550px] lg:w-[450px] right-4 lg:right-20 top-8 lg:top-18">
            <img
              src={`${base}images/telephonetwo.png`}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          {/* Profile */}
          <div className="absolute top-9 left-1/2 -translate-x-1/2 md:left-64 lg:left-96">
            <div className="flex justify-center items-center h-[200px] lg:h-[300px]">
              <div className="relative w-[120px] h-[120px] lg:w-[160px] lg:h-[160px] rounded-full border-4 border-blue-500 shadow-[0_0_30px_#00bfff] overflow-hidden">
                <img
                  src={`${base}images/profile.png`}
                  alt="pic"
                  className="w-[140px] h-[160px] lg:w-[180px] lg:h-[200px] object-cover rounded-full"
                />
                <div className="absolute inset-0 rounded-full border-2 border-blue-500 animate-ping"></div>
              </div>
            </div>
          </div>

          {/* Heading */}
          <div className="text-white w-full lg:w-[800px] text-center absolute top-[250px] md:top-[400px] lg:top-125 left-1/2 -translate-x-1/2 gap-7 px-4">
            <h1
              className="font-bold text-3xl lg:text-[40px] tracking-[.15em]"
              style={{ fontFamily: "Monoton", fontWeight: 10 }}
            >
              <b>
                Contact <span className="ml-3 lg:ml-7">Us</span>
              </b>
            </h1>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="border mt-[-700px] md:mt-[-500px] lg:mt-[-620px] justify-self-center border-blue-500 shadow-[inset_0_0_10px_#00bfff]">
        <form
          onSubmit={handleSubmit}
          className="fieldset border-base-300 rounded-box w-full max-w-[900px] p-4 text-white mx-auto"
        >
          <div className="gap-4 w-full">
            <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
              <div style={{ fontFamily: "Fredericka the Great", fontWeight: "100" }}>
                <p className="label font-bold text-[18px] lg:text-[20px] text-green-200">
                  Your Name
                </p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input w-full text-white bg-[#112C3F] placeholder-green-100 mt-2"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <p className="label font-bold text-[18px] lg:text-[20px] text-green-200">
                  Your Email
                </p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input w-full text-white bg-[#112C3F]"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <p className="label font-bold text-[18px] lg:text-[20px] text-green-200">
                  Phone
                </p>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input w-full text-white bg-[#112C3F]"
                  placeholder="Enter your phone"
                />
              </div>
              <div>
                <p className="label font-bold text-[18px] lg:text-[20px] text-green-200">
                  Subject
                </p>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="input w-full text-white bg-[#112C3F]"
                  placeholder="Enter subject"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mt-4">
              <h1 className="font-bold text-[18px] lg:text-[20px] label text-green-200">
                Message
              </h1>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="textarea w-full text-white h-[150px] lg:h-[190px] bg-[#112C3F]"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
          </div>

          {/* Button */}
          <div className="mt-4 w-full flex justify-center">
            <button
              type="submit"
              className="font-bold hover:bg-blue-500 shadow:bg-[blue] text-white shadow-[0_0_5px_#00bfff] hover:cursor-pointer w-[130px] lg:w-[150px] h-[40px] rounded-3xl bg-blue-700"
            >
              Send
            </button>
          </div>

          {/* Status message */}
          {status && (
            <p className="text-center mt-2 text-green-400 font-semibold">{status}</p>
          )}
        </form>
      </div>
    </>
  );
};

export default Contactus;
