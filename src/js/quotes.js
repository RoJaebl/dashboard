const quotes = [
  {
    quote: "상상할 수 없는 꿈을 꾸고 있다면,  상상할 수 없는 노력을 해라",
    author: "오늘부터열정맨",
  },
  {
    quote:
      "아무리 가까운 길이라도 가지 않으면 도달하지 못하고 아무리 쉬운 일이라도 하지 않으면 이루지 못한다.",
    author: "채근담",
  },
  {
    quote:
      "남의 조그만 허물을 꾸짖지 말고, 비밀을 드러내지 말며, 지난날 잘못을 생각하지 마라. 이것은 덕을 기르며 해로움을 멀리할 것이다.",
    author: "채근담",
  },
  {
    quote:
      "타고난 천성이 좋지 않아도 열심히 노력하면 뛰어난 인물이 될 수 있다.",
    author: "채근담",
  },
  { quote: "아무리 죽어다 깨어나도 인생은 공부가 답이다.", author: "Quote" },
  {
    quote: "Win Win은 이기적 이타주의자다",
    author: "Quote",
  },
  { quote: "인생은 사원의 구슬 조각", author: "이누야사" },
  { quote: "내 안의 용과 싸워라", author: "Quote" },
  { quote: "혼자면 기분전환이고 둘이면 깊은향수이다.", author: "Quote" },
  {
    quote: "매순간이 소중했었다. 기쁨도 슬픔도 화남도",
    author: "Quote",
  },
];

const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");
const quoteBox = document.querySelector("#quote");

function showQuote(){
  const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerHTML = todayQuote.quote;
  author.innerHTML = `- ${todayQuote.author} -`;
}

showQuote();
setInterval(showQuote, 5000);
