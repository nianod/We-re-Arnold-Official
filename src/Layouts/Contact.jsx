import React, { useState } from 'react'

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [namePlaceholder, setNamePlaceholder] = useState("Full Name");
  const [phoneNoPlaceholder, setPhoneNoPlaceholder] = useState("+25412345678");
  const [messagePlaceholder, setMessagePlaceholder] = useState("Your message...");
  const [timestamp, setTimestamp] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault();
    const now = new Date()
    setTimestamp(now)
    setSent(true);

    setNamePlaceholder("Full Name");
    setPhoneNoPlaceholder("+25412345678");
    setMessagePlaceholder("Your message...");

  };
 
   
  if (sent) {
    return (
        <div className="pb-10 m-auto">
          <form
            className="bg-black gap-2 mt-30 max-w-[30rem] mx-auto p-6 flex flex-col text-white rounded-xl bodaree"
          >
            <div data-aos="zoom-in" className="text-center mt-5 text-white">
              <h2 className="text-3xl font-bold text-green-400">
                🎉 Thank You!
              </h2>
              <p className="mt-4 text-lg">
                Your message has been sent successfully. We'll get back to you
                soonest Possible.
              </p>
              <p className='bg-blue-600 rounded p-2 font-semibold mt-4'>
                {timestamp && (
                  <span>
                     Deliverly time: {new Date(timestamp).toLocaleString()}
                  </span>
                )}
              </p>
            </div>
          </form>
        </div>
    );
  }

  return (
      <div className="pb-25 mt-20">
        <form
          onSubmit={handleSubmit}
          className="bg-black gap-2 mt-5 max-w-[30rem] mx-auto p-6 flex flex-col text-white rounded-xl bodaree"
        >
          <h2 className="text-center text-2xl font-bold">Messenger Channel</h2>

          <label>Name* </label>
          <input
            className="p-3 rounded bg-blue-800 text-white focus:outline-transparent"
            type="text"
            placeholder={namePlaceholder}
            required
          />

          <label>Phone Number* </label>
          <input
            className="p-3 rounded bg-blue-800 text-white focus:outline-transparent"
            type="number"
            placeholder={phoneNoPlaceholder}
            required
          />

          <label>Message* </label>
          <textarea
            className="rounded p-3 bg-blue-800 text-white h-32 resize-none focus:outline-transparent"
            placeholder={messagePlaceholder}
            required
          ></textarea>

          <button
            className="p-2 w-50 text-white rounded-xl bg-blue-500 cursor-pointer m-auto mt-5 hover:bg-blue-400"
            type="submit"
          >
            {sent ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
  );
}

export default Contact
