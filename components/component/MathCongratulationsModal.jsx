import React from "react";
import PropTypes from "prop-types";
import happyAnimation from "@/public/happy.json";
import Lottie from "lottie-react";
import { Button } from "@/components/ui/button";
import Confetti from "react-confetti";

const MathCongratulationsModal = ({ closeModal }) => {
  return (
    <>
      <div style={{ position: "fixed", top: 0, left: 0, zIndex: 1000 }}>
        <Confetti />
      </div>
      <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="relative bg-white rounded-lg p-8 max-w-md w-full text-center">
          <h3 className="text-3xl leading-6 font-bold text-gray-900 mb-4 uppercase text-gradient-dark">
            Tebrikler!
          </h3>
          <div className="mx-auto mb-6 flex justify-center">
            <Lottie
              animationData={happyAnimation}
              loop
              autoplay
              style={{ height: 250, width: 250 }}
            />
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Harikasın, cevabın doğru!👍
          </p>
          <Button onClick={closeModal}>Kapat</Button>
        </div>
      </div>
    </>
  );
};

MathCongratulationsModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default MathCongratulationsModal;
