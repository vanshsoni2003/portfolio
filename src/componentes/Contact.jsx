const Contact = () => {
  return (
    <>
      <div className="bg-[#051423] h-[100vh]">
        <div className="py-8">
          <h1
            className="text-center text-white font-bold text-2xl sm:text-3xl"
            style={{
              fontFamily: "Berkshire Swash",
              fontWeight: "400",
              fontStyle: "normal",
            }}
          >
            <b>
              Contact <span className="text-blue-500"> Me </span>
            </b>
          </h1>
        </div>

        <div className="place-content-center justify-self-center px-4 sm:px-6 lg:px-0">
          <fieldset className="fieldset border-base-300 rounded-box w-full max-w-4xl p-4 text-white mx-auto">
            <div className="gap-4 w-full md:w-[700px] justify-self-center">
              <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                <div>
                  <p className="label font-bold text-[16px] sm:text-[18px] lg:text-[20px]">
                    Your Name
                  </p>
                  <input
                    type="text"
                    className="input text-black w-full"
                    placeholder="My awesome page"
                  />
                </div>
                <div>
                  <p className="label font-bold text-[16px] sm:text-[18px] lg:text-[20px]">
                    Your Name
                  </p>
                  <input
                    type="text"
                    className="input text-black w-full"
                    placeholder="My awesome page"
                  />
                </div>
                <div>
                  <p className="label font-bold text-[16px] sm:text-[18px] lg:text-[20px]">
                    Your Name
                  </p>
                  <input
                    type="text"
                    className="input text-black w-full"
                    placeholder="My awesome page"
                  />
                </div>
                <div>
                  <p className="label font-bold text-[16px] sm:text-[18px] lg:text-[20px]">
                    Your Name
                  </p>
                  <input
                    type="text"
                    className="input text-black w-full"
                    placeholder="My awesome page"
                  />
                </div>
              </div>

              <div className="mt-4">
                <h1 className="font-bold text-[16px] sm:text-[18px] lg:text-[20px] label">
                  Message
                </h1>
                <textarea
                  className="input text-black w-full h-[150px] sm:h-[180px] lg:h-[190px] resize-none"
                  placeholder="Enter your message"
                />
              </div>
            </div>

            <div className="mt-6 w-full flex justify-center">
              <button className="font-bold hover:bg-blue-500 shadow:bg-[blue] text-white shadow-[0_0_5px_#00bfff] hover:cursor-pointer w-[120px] sm:w-[140px] lg:w-[150px] h-[40px] rounded-3xl bg-blue-700">
                Send more
              </button>
            </div>
          </fieldset>
        </div>
      </div>
    </>
  );
};

export default Contact;
