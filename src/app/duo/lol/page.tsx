"use client";
import Image from "next/image";
import React from "react";
import lol from "@/app/styles/_LOL.module.css";
import { styled } from "styled-components";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const PositonBtn = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 1px 0px 1px 1px;
  border-style: solid;
  border-color: rgb(91, 91, 91);
  &:hover {
    background-color: rgb(79, 79, 79);
  }
`;

function _LOL() {
  return (
    <div className={lol.wrapper}>
      <div className={lol.position__container}>
        <PositonBtn>
          <Image src={"/all_icon.svg"} width={20} height={20} alt="adc"></Image>
        </PositonBtn>
        <PositonBtn>
          <Image src={"/top_icon.svg"} width={20} height={20} alt="adc"></Image>
        </PositonBtn>
        <PositonBtn>
          <Image src={"/jug_icon.svg"} width={20} height={20} alt="adc"></Image>
        </PositonBtn>
        <PositonBtn>
          <Image src={"/mid_icon.svg"} width={20} height={20} alt="adc"></Image>
        </PositonBtn>
        <PositonBtn>
          <Image src={"/adc_icon.svg"} width={20} height={20} alt="adc"></Image>
        </PositonBtn>
        <PositonBtn>
          <Image src={"/sup_icon.svg"} width={20} height={20} alt="adc"></Image>
        </PositonBtn>
      </div>
    </div>
  );
}

export default _LOL;