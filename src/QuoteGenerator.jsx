import { useState } from "react";




const quotes = [
  {
    id: 1,
    quote: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    id: 2,
    quote: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers"
  },
  {
    id: 3,
    quote: "It’s not whether you get knocked down, it’s whether you get up.",
    author: "Vince Lombardi"
  },
  {
    id: 4,
    quote: "If you are working on something exciting, it will keep you motivated.",
    author: "Steve Jobs"
  },
  {
    id: 5,
    quote: "Success is not in what you have, but who you are.",
    author: "Bo Bennett"
  },
  {
    id: 6,
    quote: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama"
  },
  {
    id: 7,
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    id: 8,
    quote: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt"
  },
  {
    id: 9,
    quote: "Believe you can and you’re halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    id: 10,
    quote: "Act as if what you do makes a difference. It does.",
    author: "William James"
  }
];






export default function QuoteGenerator() {

    const[quoteIndex,setQuoteIndex] = useState(0);

    const generateRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuoteIndex(randomIndex);
    };


    






  return (
     <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl space-y-8">
        {/* Quote Card */}
        <div className="bg-white p-8 rounded-3xl shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 w-full max-w-2xl">
          <div className="quote-text font-inter text-2xl md:text-3xl text-gray-900 font-medium leading-tight text-center relative mb-6">
            <p>
              <svg className="absolute top-0 left-0 -ml-4 -mt-2 md:-ml-8 md:-mt-4 w-8 h-8 md:w-12 md:h-12 text-indigo-200 opacity-70 transform -scale-x-100" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 14.725c0-1.05-.333-2.075-.999-3.075-.666-1-1.571-1.858-2.716-2.575l-2.043 1.05c1.071.583 1.96 1.408 2.667 2.475.707 1.067 1.058 2.292 1.058 3.675v.2c0 .414.336.75.75.75h3.25c.414 0 .75-.336.75-.75v-1.75zM22 14.725c0-1.05-.333-2.075-.999-3.075-.666-1-1.571-1.858-2.716-2.575l-2.043 1.05c1.071.583 1.96 1.408 2.667 2.475.707 1.067 1.058 2.292 1.058 3.675v.2c0 .414.336.75.75.75h3.25c.414 0 .75-.336.75-.75v-1.75z"/>
              </svg>
              {quotes[quoteIndex].quote}
            </p>
          </div>
          <div className="text-right mt-4 text-gray-500 text-sm md:text-base font-medium">
            - {quotes[quoteIndex].author}
          </div>
          
          {/* Action buttons */}
          <div className="mt-8 flex justify-center space-x-4">
            <button className="p-3 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all duration-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2zm0-2V5H5v14h14zM17 7H7v2h10V7zm0 4H7v2h10v-2zm-3 4H7v2h7v-2z"/>
              </svg>
            </button>
            <button onClick={generateRandomQuote} className="px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-indigo-500 to-purple-600">
              Get a New Quote
            </button>
            <button className="p-3 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all duration-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 18c0 1.657-1.343 3-3 3H8c-1.657 0-3-1.343-3-3V6c0-1.657 1.343-3 3-3h8c1.657 0 3 1.343 3 3v12zM8 5c-.552 0-1 .448-1 1v12c0 .552.448 1 1 1h8c.552 0 1-.448 1-1V6c0-.552-.448-1-1-1H8zM15 11h-2V9h-2v2H9v2h2v2h2v-2h2v-2z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}