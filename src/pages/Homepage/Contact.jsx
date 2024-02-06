import { useState } from 'react';
import SectionHeader from '../../components/Typography/SectionHeader';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const bodyData = {
      email, name, message
    }
    console.log('Email:', bodyData)

  };

  return (
    <div id="6" className="bg-[#96CEB4] pb-20 z-10 relative">
      <SectionHeader>contact</SectionHeader>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex flex-col gap-5 max-w-[800px] mx-auto px-6"
      >
        <div className="flex flex-col">
          <input
            type="email"
            placeholder="Your Email"
            className="py-3 px-3 focus:outline-none w-full bg-[#B5DCCA] border-b-2 focus:border-green-600 placeholder:text-gray-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Your Name"
            className="py-3 px-3 focus:outline-none w-full bg-[#B5DCCA] border-b-2 focus:border-green-600 placeholder:text-gray-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <textarea
            type="text"
            placeholder="Your Message"
            className="py-3 px-3 focus:outline-none w-full bg-[#B5DCCA] border-b-2 focus:border-green-600 placeholder:text-gray-500 h-52"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button
          className="mt-12 py-2.5 px-32 bg-orange-600 w-fit mx-auto rounded-lg text-lg uppercase text-white hover:bg-orange-500 transition duration-300"
          onClick={handleSubmit}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Contact;
