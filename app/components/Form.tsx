'use client'
import React, {useState ,FormEvent } from 'react';


const Form = () => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
  
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();
  
      const formData = new FormData(e.currentTarget);
  
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "re_GWwbtTH8_CJA3KdEZt6PJryHP6XkPgnsD",
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
          }),
        });
  
        const result = await response.json();
  
        if (result.success) {
          setModalMessage("I'll contact you soon!");
        } else {
          setModalMessage('Failed to submit the form. Please try again.');
        }
      } catch (error) {
        setModalMessage('An error occurred. Please try again later.');
      }
  
      // Open the modal after form submission
      setIsModalOpen(true);
    }
  
    // Function to close the modal
    const closeModal = () => {
      setIsModalOpen(false);
    };

  return (
    <div className='mx-10'>
      <form onSubmit={handleSubmit}>
        <div className="space-y-5">
          <p className="mt-5 text-xl font-extrabold leading-6 text-black text-center">
            If there are any projects you have in mind, let me know!
          </p>
          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
            <div className="sm:col-span-3">
              <label
                htmlFor="name"
                className="block text-lg font-semibold leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="given-name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-4">
            <label
              htmlFor="email"
              className="block text-lg font-semibold leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="message"
              className="block text-lg font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2">
              <textarea
                id="message"
                name="message"
                rows={3}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-blue-500 px-4 py-2 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send
            </button>
          </div>
        </div>
      </form>
        {isModalOpen && (
            <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-mblue rounded-lg shadow-lg p-6 w-80">
              <h2 className="text-2xl font-semibold  mb-4 text-antwhite">Awesome!</h2>
              <p className="text-xl text-white mb-2">{modalMessage}</p>
              <button
                onClick={closeModal}
                className="mt-4 bg-rblue text-white px-4 py-2 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        )}

    </div>
  );
};

export default Form;
