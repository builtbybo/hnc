const handleReadMore = () => {
	let dots = document.getElementById("dots")
	let moreText = document.getElementById("read-more-text")
	let btnText = document.getElementById("read-more-btn")

	if (dots.style.display === "none") {
		dots.style.display = "inline"
		btnText.innerHTML = "Read more"
		moreText.style.display = "none"
	} else {
		dots.style.display = "none"
		btnText.innerHTML = "Read less"
		moreText.style.display = "inline"
	}
}

const ReadMoreLess = ({ viewableSection, hiddenSection }) => {
	return (
		<>
			<p>
				{viewableSection}
				<span id="dots">...</span>
				<span id="read-more-text">{hiddenSection}</span>
			</p>
			{/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
			<a className=" font-bold " id="read-more-btn" onClick={handleReadMore}>
				Read more
			</a>
		</>
	)
}

export default ReadMoreLess
