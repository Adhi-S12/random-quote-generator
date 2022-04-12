import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
	const [ quote, setQuote ] = useState('');
	const [ author, setAuthor ] = useState('');
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		fetchQuote();
	}, []);

	const fetchQuote = async () => {
		setLoading(true);
		setAuthor('');
		const res = await fetch('https://api.quotable.io/random');
		const data = await res.json();
		setQuote(data.content);
		setAuthor(data.author);
		setLoading(false);
	};

	return (
		<div className="container">
			<div id="quote-box">
				{!loading ? (
					<h1 id="text">&quot;{quote}&quot;</h1>
				) : (
					<h3 style={{ fontSize: '24px', textAlign: 'center' }}>Loading...</h3>
				)}
				{/* {!loading && <p id="author">{author}</p>} */}
				<p id="author">{author}</p>
				<button id="new-quote" onClick={fetchQuote}>
					New Quote
				</button>
				<a href="https://twitter.com/intent/tweet" id="tweet-quote" target="_blank">
					Tweet It
				</a>
			</div>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
