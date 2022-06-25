import React from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_4vw8p8u', 'template_i1whtgm', e.target,'-DOpS8toWPWZ0l9tn'
        ).then(res => {
          console.log(res);
          if (res) {
            toast('Message Send Successfully!!')
          }
        }).catch(err=> console.log(err));
    }

    return (
        <div className='mt-5'>
        <div>
        <h2 className='text-center text-3xl font-bold'>Contact <span className='text-secondary'>Me</span></h2>
        <div className='bg-secondary w-40 h-0.5 mx-auto' data-aos="fade-right" data-aos-duration="3000"></div>
        </div>
<div class="flex items-center justify-center p-5 mt-3 border bg-gray-200">
  <div class="mx-auto w-full max-w-[550px]">
    <form action="https://formbold.com/s/FORM_ID"
    onSubmit={sendEmail}
    >
      <div class="mb-5">
        <label
          for="name"
          class="mb-3 block text-base font-medium text-[#07074D]">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
      </div>
      <div class="mb-5">
        <label
          for="email"
          class="mb-3 block text-base font-medium text-[#07074D]">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
      </div>
      <div class="mb-5">
        <label
          for="subject"
          class="mb-3 block text-base font-medium text-[#07074D]">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Enter your subject"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
      </div>
      <div class="mb-5">
        <label
          for="message"
          class="mb-3 block text-base font-medium text-[#07074D]">
          Message
        </label>
        <textarea
          rows="4"
          name="message"
          id="message"
          placeholder="Type your message"
          class="w-full resize rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></textarea>
      </div>
      <div>
        <button
          class="hover:shadow-form rounded-md bg-secondary hover:bg-primary py-3 px-8 text-base font-semibold text-white outline-none w-full">
          Submit
        </button>
      </div>
    </form>
  </div>
</div>
        </div>
    );
};

export default Contact;