"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import PropTypes from "prop-types";
import MathCongratulationsModal from "./MathCongratulationsModal";
import MathIncorrectAnswerModal from "./MathIncorrectAnswerModal";

const MathProblem = ({ question, answer, additionalText, tip }) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const handleAnswerCheck = () => {
    const userEnteredAnswer = parseInt(userAnswer, 10);

    if (!isNaN(userEnteredAnswer) && userEnteredAnswer === answer) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
  };

  const closeModal = () => {
    setIsAnswerCorrect(null);
  };

  return (
    <>
      <Card className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <div className="h-48 w-full md:w-48 flex items-center justify-center text-5xl">
              {question}
            </div>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              MATEMATİK PROBLEMİ
            </div>
            <a
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              href="#"
            >
              {additionalText}
            </a>
            <p className="mt-2 text-gray-500">{tip}</p>
          </div>
        </div>
        <div className="p-4 border-t border-gray-200 flex justify-between items-center">
          <div className="flex items-center gap-4">
          <input
  aria-label="Answer"
  className={`border-2 bg-white h-10 px-3 rounded-lg text-sm focus:outline-none`}
  style={{ width: '80px' }} // Genişlik değerini burada belirleyebilirsiniz
  placeholder="Cevabını gir."
  type="text"
  value={userAnswer}
  onChange={(e) => setUserAnswer(e.target.value)}
  disabled={isAnswerCorrect !== null}
/>

            <Button
              variant="default"
              onClick={handleAnswerCheck}
              disabled={isAnswerCorrect !== null}
            >
              Check
            </Button>
          </div>
          <div className="relative hover:cursor-pointer group">
            <Badge className="bg-indigo-600 text-white">New</Badge>
          </div>
          <Button className="ml-4" variant="default">
            <ShareIcon className="w-4 h-4" />
          </Button>
        </div>
      </Card>

      {isAnswerCorrect !== null && isAnswerCorrect ? (
        <MathCongratulationsModal closeModal={closeModal} />
      ) : isAnswerCorrect !== null && !isAnswerCorrect ? (
        <MathIncorrectAnswerModal
          correctAnswer={answer}
          closeModal={closeModal}
        />
      ) : null}
    </>
  );
};

MathProblem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.number.isRequired,
  additionalText: PropTypes.string.isRequired,
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

export default MathProblem;
