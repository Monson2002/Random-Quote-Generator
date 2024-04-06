export const generateRandomColor = () => {
  return `
        rgb(${Math.ceil(Math.random() * 256)},${Math.ceil(Math.random() * 256)},${Math.ceil(Math.random() * 256)})
        `
}

export const generateRandomQuote = async () => {
  const response = await fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");
  const data = await response.json();
  const randomIndex = Math.floor(Math.random() * data.quotes.length);
  const randomQuote = data.quotes[randomIndex].quote
  const randomAuthor = data.quotes[randomIndex].author
  return {
    randomQuote, 
    randomAuthor
  };
}