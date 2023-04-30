import { useState } from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Item from "./item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faCheck } from "@fortawesome/free-solid-svg-icons";
const Cont = styled.div`
  form {
    background-color: ${(props) => props.colors.tan2};
    padding: 32px;
  }
`;

const Items = ({ items }) => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const submitForm = handleSubmit(async (formData) => {});
  const itemElems = items.map((item) => {
    return (
      <Item
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
      <form onSubmit={submitForm}>
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
