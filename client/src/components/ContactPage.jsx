import React, { useState } from 'react'
import { useEffect } from 'react'
import checkBtn from '../assets/checkBtn.png'
import { useFormik } from 'formik';
import { formValidationSchema } from '../Schemas/validation'
import axios from 'axios'
import RatingAndFeedback from '../components/RatingAndFeedback.jsx'


const initialValues = {
  username: "",
  useremail: "",
  usermessage: ""
}

function Contact() {
  const [showModal, setShowModal] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false) // New state for tracking submission

  const API_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

  // Remove global axios default and use instance instead
  const apiClient = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  // Formik configuration
  const { values, errors, touched, handleSubmit, handleBlur, handleChange, resetForm } = useFormik({
    initialValues: initialValues,
    validationSchema: formValidationSchema,

    onSubmit: async (values, action) => {
      try {
        setSubmitError(null);
        setIsSubmitting(true); // Set submitting state to true when form is submitted

        // Use apiClient instance with relative URL
        const response = await apiClient.post('/contact', values);

        // Reset form and show modal on successful submission
        action.resetForm();
        setShowModal(true);

      } catch (error) {
        console.error('Error submitting form:', error.response ? error.response.data : error.message);

        // Set specific error message
        setSubmitError(error.response?.data?.message || 'Failed to submit form. Please try again.');
      } finally {
        setIsSubmitting(false); // Reset submitting state regardless of success or failure
      }
    }
  });

  // Popup Modal Component
  const PopupModal = () => {
    const closeModal = () => setShowModal(false);

    useEffect(() => {
      document.body.style.overflowY = "hidden";

      return () => {
        document.body.style.overflowY = "scroll";
      };
    }, []);

    return (
      <div className="fixed inset-0 z-[50] flex items-center justify-center
                    bg-black/40 backdrop-blur-sm px-4">

        {/* Modal Card */}
        <div className="relative w-full max-w-md rounded-2xl
                      bg-white dark:bg-gray-900
                      shadow-2xl
                      animate-in fade-in zoom-in duration-300">

          {/* Success Icon */}
          <div className="flex justify-center -mt-12">
            <div className="w-20 h-20 rounded-full bg-green-500
                          flex items-center justify-center shadow-lg">
              <img
                src={checkBtn}
                alt="Success"
                className="w-10 h-10"
              />
            </div>
          </div>

          {/* Content */}
          <div className="px-6 pt-6 pb-8 text-center">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              Thank You!
            </h1>

            <p className="mt-3 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              Thank you for reaching out. I truly appreciate your message and
              will get back to you soon.
            </p>

            {/* Action */}
            <button
              onClick={closeModal}
              className="mt-6 w-full rounded-lg bg-green-500
                       py-3 font-semibold text-white
                       hover:bg-green-600
                       focus:outline-none focus:ring-2 focus:ring-green-400
                       transition"
            >
              Okay
            </button>
          </div>
        </div>
      </div>
    );
  };


  return (
    <>

      <section id="contact" className="min-h-screen flex items-center justify-center">
        <div className="py-8 lg:py-10 px-4 mx-auto max-w-screen-md md:w-[50%] ">
          <h2 className="mb-3 text-3xl md:text-5xl text-center py-3 tracking-tight font-bold">Contact me</h2>
          <p className='mb-3 italic '>Feel free to contact me with any questions.</p>
          {submitError && (
            <div className="p-3 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
              {submitError}
            </div>
          )}
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="text" className="block mb-2 text-sm font-medium">Your Name</label>
              <input
                type="text"
                name='username'
                id="text"
                autoFocus
                placeholder="Your name"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                className="shadow-sm border text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full md:p-3 p-[14px] bg-gray-400 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              />
              {errors.username && touched.username ? (
                <p className='text-red-500 text-[14px] ml-1'>{errors.username}</p>
              ) : null}
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium ">Your Email</label>
              <input
                type="email"
                name='useremail'
                id="email"
                placeholder="e.g. akashpawar@gmail.com"
                value={values.useremail}
                onChange={handleChange}
                onBlur={handleBlur}
                className="block md:p-3 p-[14px] w-full text-sm text-gray-900 bg-gray-400 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 bor dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-700 dark:focus:border-primary-500 dark:shadow-sm-light"
              />
              {errors.useremail && touched.useremail ? (
                <p className='text-red-500 text-[14px] ml-1'>{errors.useremail}</p>
              ) : null}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium ">Your message</label>
              <textarea
                id="message"
                name='usermessage'
                rows="6"
                placeholder="Leave a comment..."
                value={values.usermessage}
                onChange={handleChange}
                onBlur={handleBlur}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-400 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 placeholder-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
              {errors.usermessage && touched.usermessage ? (
                <p className='text-red-500 text-[14px] ml-1'>{errors.usermessage}</p>
              ) : null}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`py-3 px-5 text-sm font-medium text-center rounded-lg sm:w-fit w-[99%] bg-blue-700 text-neutral-100 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'}`}
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>
          </form>
        </div>

        {showModal && <PopupModal />}
      </section>

      {/* <div className='w-full md:ml-5' >
        <RatingAndFeedback/>
      </div> */}

    </>
  )
}

export default Contact