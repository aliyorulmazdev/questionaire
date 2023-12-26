"use client";
import MathProblem from "@/components/component/MathProblem";
import { TrueFalse } from "@/components/component/true-false";

export default function Home() {
  return (
    <div className="flex justify-center items-center ">
      <div>
        <TrueFalse
          question="Pi sayısı ondalık kesirle ifade edilebilir mi?"
          imageSrc="/placeholder.svg"
          category="Doğru Yanlış"
          answer={false}
        />
        <TrueFalse
          question="√16 sayısı bir tam sayı mıdır?"
          imageSrc="/placeholder.svg"
          category="Doğru Yanlış"
          answer={false}
        />

        <MathProblem
          question="54+92"
          answer={146}
          additionalText="Lütfen soldaki işlemi gerçekleştir."
          tip="Merak etme, senin için çantada keklik."
        />
        <MathProblem
          question="5+10"
          answer={15}
          additionalText="Lütfen soldaki işlemi gerçekleştir."
          tip="Bence üstesinden gelebilirsin!"
        />
        <MathProblem
          question="22+10"
          answer={32}
          additionalText="Lütfen soldaki işlemi gerçekleştir."
          tip="Bence üstesinden gelebilirsin!"
        />
      </div>
    </div>
  );
}
