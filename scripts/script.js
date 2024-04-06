import { twitterBtn, tumblrBtn, newQuoteBtn, root, quoteText, authorText } from "./references.js";
import { generateRandomColor, generateRandomQuote } from "./utils.js";

addEventListener("DOMContentLoaded", async () => {
  const newPrimaryColor = generateRandomColor();
  root.style.setProperty("--primary-color", newPrimaryColor);
  const { randomQuote, randomAuthor } = await generateRandomQuote();
  quoteText.innerHTML = randomQuote;
  authorText.innerHTML = `- ${randomAuthor}`;
});

twitterBtn.addEventListener("click", () => {
  window.open("https://twitter.com", "_blank");
});

tumblrBtn.addEventListener("click", () => {    
  window.open("https://www.tumblr.com", "_blank");
});

newQuoteBtn.addEventListener("click", async () => {
  const newPrimaryColor = generateRandomColor();
  root.style.setProperty("--primary-color", newPrimaryColor);
  const { randomQuote, randomAuthor } = await generateRandomQuote();
  quoteText.innerHTML = randomQuote;
  authorText.innerHTML = `- ${randomAuthor}`;
});