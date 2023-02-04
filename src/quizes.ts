import { Quiz } from "./types/Quiz";

export const quizes: Array<Quiz> = [
  {
    id: 1,
    question: 'Tên gọi chính của "Lai Viễn Kiều", "Chùa Nhật Bản" là gì?',
    keyword: "CHUACAU",
    keyIdx: 2,
    answers: [
      { answer: "A. Chùa Cầu", correct: true },
      { answer: "B. Chùa Pháp Hoa" },
      { answer: "C. Chùa Keo" },
      { answer: "D. Chùa Một Cột" },
    ],
  },
  {
    id: 2,
    question:
      "Món ăn nổi tiếng ở ???, sợi mì được làm từ bột gạo xay trộn với nước giếng Bá Lễ là món gì?",
    keyword: "CAOLAU",
    keyIdx: 3,
    answers: [
      { answer: "A. Mì Quảng" },
      { answer: "B. Mì vịt tiềm" },
      { answer: "C. Mì xá xíu" },
      { answer: "D. Cao Lầu", correct: true },
    ],
  },
  {
    id: 3,
    question: "Tên gọi khác của sông Thu Bồn là gì?",
    keyword: "CHOCUI",
    keyIdx: 6,
    answers: [
      { answer: "A. Sông Đồng Nai :)" },
      { answer: "B. Sông Chợ Củi", correct: true },
      { answer: "C. Sông Trường Giang" },
      { answer: "D. Sông Hồng" },
    ],
  },
  {
    id: 4,
    question:
      "Một món ăn nổi tiếng của Quảng Nam ăn kèm với thịt và tôm là món gì?",
    keyword: "MIQUANG",
    keyIdx: 5,
    answers: [
      { answer: "A. Bánh bèo" },
      { answer: "B. Mì vịt tiềm" },
      { answer: "C. Mì Quảng", correct: true },
      { answer: "D. Mì xào hải sản" },
    ],
  },
  {
    id: 5,
    question:
      "Món quà lưu niệm nổi tiếng ở ???, loại cao cấp làm từ gỗ quý và kính, phát sáng vào ban đêm là gì?",
    keyword: "DENLONG",
    keyIdx: 3,
    answers: [
      { answer: "A. Đèn pha lê" },
      { answer: "B. Hoa đăng" },
      { answer: "C. Đèn dầu" },
      { answer: "D. Đèn lồng", correct: true },
    ],
  },
];
