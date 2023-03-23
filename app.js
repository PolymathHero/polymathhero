document.addEventListener("DOMContentLoaded", () => {
  const quoteText = document.querySelector(".quote-text");
  const quoteAuthor = document.querySelector(".quote-author");
  const quoteButton = document.querySelector(".quote-button");
  const twitterShare = document.querySelector(".twitter-share");

  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quoteText.textContent = quote.text;
    quoteAuthor.textContent = `– ${quote.author}`;
  }

  function updateTwitterShare() {
    const quoteString = encodeURIComponent(`"${quoteText.textContent}" ${quoteAuthor.textContent}`);
    twitterShare.href = `https://twitter.com/intent/tweet?text=${quoteString}`;
  }

  quoteButton.addEventListener("click", () => {
    generateQuote();
    updateTwitterShare();
  });

  // Generate the initial quote
  generateQuote();
  updateTwitterShare();
});
