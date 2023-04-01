
/**
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async() => {
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes')
    const [quote, author] = await res.json();

    return quote;
}

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const BreakingBadApp = async(element) => {

    document.querySelector('#app-title').innerHTML = 'Breaking Bad App'
    element.innerHTML = 'Loading...'
    // const quote = await fetchQuote();

    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next quote';

    const renderQuote = (data) => {
        quoteLabel.innerHTML = data.quote;
        authorLabel.innerHTML = data.author;
        element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton)
    }

    nextQuoteButton.addEventListener('click', async() => {
        element.innerHTML = 'Loading...'
        const quote = await fetchQuote();
        renderQuote(quote);

    })

    fetchQuote()
        .then(renderQuote)
}