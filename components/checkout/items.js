import { useState, useRef } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import COLORS from "@/data/colors";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Item from "./item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faCheck } from "@fortawesome/free-solid-svg-icons";
import { clearLocalStorage } from "@/lib/utils";
import toast from "react-hot-toast";
const Cont = styled.div`
  form {
    background-color: ${(props) => props.colors.tan2};
    padding: 32px;
  }
`;

const Items = ({ items, context, setContext }) => {
  const router = useRouter();
  const formRef = useRef(null);
  const orderString = items
    .map(
      (item) =>
        `|${item.title} (x${item.quantity}), $${item.price * item.quantity}, [${
          item.description
        }]|`
    )
    .join(", ");

  const sum = context.items.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);

  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const clearForm = () => {
    setValue("name", "");
    setValue("email", "");
    setValue("phone", "");
    formRef.current.classList.add("bg-anim");
    setTimeout(() => {
      formRef.current.classList.remove("bg-anim");
    }, 1000);
  };

  const submitForm = handleSubmit(async (formData) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_ORDER_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          order: orderString,
          total: sum,
        },
        process.env.NEXT_PUBLIC_EMAILJS_KEY
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );

    toast("Order submitted!", {
      duration: 4000,
      position: "top-center",

      // Styling
      style: { border: "1px solid #FF4D00" },
      className: "",

      // Custom Icon
      icon: "📦",

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

    clearForm();
    clearLocalStorage();
    setContext({
      items: [],
      total: 0,
      shipping: 0,
      showSidebar: false,
    });
    setTimeout(() => {
      router.push("/thankyou");
    }, 1000);
  });
  const itemElems = items.map((item, index) => {
    return (
      <Item
        key={index}
        title={item.title}
        description={item.description}
        dimensions={item.dimensions}
        price={item.price}
        quantity={item.quantity}
        url={item.url}
        type={item.type}
      />
    );
  });
  return (
    <Cont colors={COLORS}>
      <h1 className="mar-bottom-8">Items</h1>
      <div className="black-line mar-bottom-16"></div>
      <div className="mar-bottom-64">{itemElems}</div>
      <div className="black-line mar-bottom-32"></div>
      <form onSubmit={submitForm} ref={formRef}>
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
          <label htmlFor="phone">
            <h4>Phone Number</h4>
            <input
              {...register("phone", {
                required: false,
              })}
              type="text"
              name="phone"
              placeholder="(613) - 690 -3031"
            />
          </label>
        </div>

        <button
          type="submit"
          className="orange-btn-lt flex-100 align-center justify-center"
        >
          <h4 className="mar-right-8">Place Order</h4>
          <FontAwesomeIcon icon={faCheck} className="icon-sm white" />
        </button>
      </form>
    </Cont>
  );
};

export default Items;
