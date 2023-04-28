import { useState, useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import COLORS from "@/data/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const Cont = styled.form`
  background-color: ${(props) => props.colors.tan2};
  padding: 32px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    padding: 16px;
  }
`;

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const form = useRef();

  const clearForm = () => {
    setValue("name", "");
    setValue("email", "");
    setValue("message", "");
    form.current.classList.add("bg-anim");
    setTimeout(() => {
      form.current.classList.remove("bg-anim");
    }, 1000);
    toast("Message sent!", {
      duration: 4000,
      position: "top-center",

      // Styling
      style: { border: "1px solid black" },
      className: "",

      // Custom Icon
      icon: "📧",

      // Change colors of success/error/loading icon
      iconTheme: {
        primary: "#000",
        secondary: "#fff",
      },

      // Aria
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });
  };
  const sendEmail = handleSubmit(async (formData) => {
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_KEY
      )
      .then(
        (result) => {},
        (error) => {}
      );
    clearForm();
  });

  return (
    <Cont colors={COLORS} ref={form} onSubmit={sendEmail}>
      <div className="input-line">
        <label htmlFor="name">
          <h4>Name *</h4>
          <input
            {...register("name", {
              required: true,
            })}
            type="text"
            name="name"
            placeholder="name"
          />
        </label>
        {errors.name?.type === "required" && (
          <p className="red mar-top-8">*Name is required</p>
        )}
      </div>
      <div className="input-line">
        <label htmlFor="email">
          <h4>Email *</h4>
          <input
            {...register("email", {
              required: true,
            })}
            type="text"
            name="email"
            placeholder="example@gmail.com"
          />
        </label>
        {errors.email?.type === "required" && (
          <p className="red mar-top-8">*Email is required</p>
        )}
      </div>
      <div className="input-line">
        <label htmlFor="message">
          <h4>Message *</h4>
          <textarea
            {...register("message", {
              required: true,
            })}
            type="text"
            name="message"
            placeholder="Message"
          ></textarea>
        </label>
        {errors.message?.type === "required" && (
          <p className="red mar-top-8">*Message is required</p>
        )}
      </div>
      <div className="flex justify-end">
        <button type="submit" className="orange-btn flex align-center">
          <h4 className="mar-right-8">Send</h4>
          <FontAwesomeIcon icon={faPaperPlane} className="white icon-sm" />
        </button>
      </div>
    </Cont>
  );
};

export default ContactForm;
