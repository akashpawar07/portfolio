import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useFormik } from 'formik';
import { formValidationSchema } from '../Schemas/validation'
import MessagePopup from './MessagePopup';


const initialValues = {
  username: "",
  useremail: "",
  usermessage: ""
}

function Contact() {
  const [showModal, setShowModal] = useState(false)
  const [senderName, setSenderName] = React.useState("");
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
        setIsSubmitting(true);

        // Using the relative path because baseURL is already set in apiClient
        const response = await apiClient.post('/contact', values);

        if (response.data?.success) {
          setSenderName(response.data.data?.userName || values.username);
          setShowModal(true);
          action.resetForm();
        } else {
          setSubmitError(response.data?.message || "Failed to save message");
        }
      } catch (error) {
        // Axios puts the server response in error.response
        setSubmitError(error.response?.data?.message || "Connection error occurred");
      } finally {
        setIsSubmitting(false);
      }
    }

  });

  // Popup Modal Component inside ContactPage
  const PopupModal = () => {
    const handleClose = () => setShowModal(false);

    useEffect(() => {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = "unset"; };
    }, []);

    return <MessagePopup closeModal={handleClose} userName={showModal?.userName} />;

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