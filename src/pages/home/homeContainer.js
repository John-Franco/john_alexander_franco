import React, { useState, useEffect } from "react";

import HomeView from "./homeView";

const Home = () => {
	const [writeText, setWriteText] = useState("");
	const [showSpanAnimation, setShowSpanAnimation] = useState("");
	let timerWrittenText;
	let timerDeleteText;

	const handleDeleteText = (text, interval, index) => {
		setShowSpanAnimation("");
		timerDeleteText = setInterval(() => {
			if (index >= 0) {
				setWriteText(text.substr(0, index--));
			} else {
				clearInterval(timerDeleteText);
				setTimeout(() => {
					handleWriteText(text, 100, 0);
				}, 1000);
			}
		}, interval);
	};

	const handleWriteText = (text, interval, index) => {
		timerWrittenText = setInterval(() => {
			if (index <= text.length) {
				setWriteText(text.substr(0, index++));
			} else {
				clearInterval(timerWrittenText);
				setShowSpanAnimation("writing-text_cursor");
				setTimeout(() => {
					handleDeleteText(text, 60, index - 1);
				}, 5000);
			}
		}, interval);
	};

	useEffect(() => {
		handleWriteText("Soy Desarrollador Web.", 100, 0);
		return () => {
			clearInterval(timerWrittenText);
			clearInterval(timerDeleteText);
		};
	}, []);

	return <HomeView writeText={writeText} showSpanAnimation={showSpanAnimation} />;
};

export default Home;
