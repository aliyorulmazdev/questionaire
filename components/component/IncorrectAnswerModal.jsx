"use client";
import sadAnimation from "@/public/sad.json";
import Lottie from "lottie-react";
import React from "react";
import PropTypes from "prop-types";
import { Button } from "../ui/button";

const IncorrectAnswerModal = ({ correctAnswer, closeModal }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>
      <div className="relative bg-white rounded-lg p-8 max-w-md w-full text-center">
        <div className="mx-auto mb-6 flex justify-center">
          <Lottie
            animationData={sadAnimation}
            loop
            autoplay
            style={{ height: 250, width: 250 }}
          />
        </div>
        <p className="text-sm text-gray-500 mb-4">
          Cevabınız yanlış. {correctAnswer} olması gerekiyordu.
        </p>
        <Button onClick={closeModal}>Kapat</Button>
      </div>
    </div>
  );
};

IncorrectAnswerModal.propTypes = {
  correctAnswer: PropTypes.number.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default IncorrectAnswerModal;
