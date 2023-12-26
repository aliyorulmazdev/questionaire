"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import PropTypes from "prop-types";
import React, { useState } from "react";
import CongratulationsModal from "./CongratulationsModal";
import IncorrectAnswerModal from "./IncorrectAnswerModal";
import questionAnimation from "@/public/question.json";
import Lottie from "lottie-react";

export function TrueFalse({ question, imageSrc, category, answer }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showCongratulationsModal, setShowCongratulationsModal] =
    useState(false);
  const [showIncorrectAnswerModal, setShowIncorrectAnswerModal] =
    useState(false);

  const handleAnswerClick = (selected) => {
    setSelectedAnswer(selected);

    // Check if the selected answer is correct
    if (selected === answer) {
      // Show congratulatory popup
      setShowCongratulationsModal(true);
    } else {
      // Show incorrect answer popup
      setShowIncorrectAnswerModal(true);
    }
  };

  const closeModal = () => {
    setShowCongratulationsModal(false);
    setShowIncorrectAnswerModal(false);
    setSelectedAnswer(null);
  };

  return (
    <>
      <Card className="max-w-md mx-auto bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <div className="mx-auto mb-6 flex justify-center">
              <Lottie
                animationData={questionAnimation}
                loop
                autoplay
                style={{ height: 250, width: 250 }}
              />
            </div>
          </div>
          <div className="p-8">
            <div className="block mt-1 text-3xl leading-tight font-cherry text-white">
              {question}
            </div>
          </div>
        </div>
        <div className="p-4 border-t border-gray-200 flex justify-between items-center">
          <div>
            <Button
              className='font-cherry mr-4 bg-white text-black'
              variant="default"
              onClick={() => handleAnswerClick(true)}
              disabled={selectedAnswer !== null}
            >
              True
            </Button>
            <Button
              className={`font-cherry mr-4 ${
                selectedAnswer === false ? "bg-green-500" : ""
              }`}
              variant="default"
              onClick={() => handleAnswerClick(false)}
              disabled={selectedAnswer !== null}
            >
              False
            </Button>
          </div>
          <div className="relative hover:cursor-pointer group">
            <Badge className="bg-black text-white font-cherry">
              {category} Sorusu
            </Badge>
          </div>
          <Button className="ml-4" variant="default">
            <ShareIcon className="w-4 h-4" />
          </Button>
        </div>
      </Card>

      {showCongratulationsModal && (
        <CongratulationsModal closeModal={closeModal} />
      )}

      {showIncorrectAnswerModal && (
        <IncorrectAnswerModal
          correctAnswer={answer ? "Doğru" : "Yanlış"}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

TrueFalse.propTypes = {
  question: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  isRecommended: PropTypes.bool,
  category: PropTypes.string.isRequired,
  answer: PropTypes.bool.isRequired,
};

function ShareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}
