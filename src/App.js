import "./App.css"

import Header from "./components/header"
import { didYouknowList, fgwsList, opacList, mrrdList } from "../src/data/data"
import AccordionPanel from "./components/accordionPanel"
import ReadMoreLess from "./components/readMoreReadLess"

function App() {
	return (
		// container div
		<div>
			{/* 1 hero banner */}
			<div className="relative inline-block text-center">
				<img
					srcSet="./images/hnc_bci_new_shirts_collection1.jpg 640w,
          ./images/hnc_bci_new_shirts_collection2.jpg 916w, 
          ./images/hnc_bci_new_shirts_collection3.jpg 1034w"
					sizes="(min-width: 1366px( 916px, (min-width: 1536px) 1034px, 100vw"
					src="./images/hnc_bci_new_shirts_collection2.jpg"
					alt="sustainability"
				/>

				<div className="absolute my-0 mx-auto top-1/2 bottom-1/2 left-0 right-0">
					<h1 className="font-bold text-white capitalize text-xl md:text-3xl lg:text-6xl">
						let&apos;s talk sustainability
					</h1>
				</div>
			</div>
			{/* 2 read more */}
			<div className="px-6">
				<ReadMoreLess
					viewableSection={
						"We wholeheartedly believe in the importance of becoming more sustainable. We know that great changes need to take place in order to adapt to a more sustainable, circular fashion system that supports you, our workforce, the economy and the environment. Transparency is key. We are committed to sourcing 50% of our cotton as Better Cotton by 2022."
					}
					hiddenSection={
						"We have developed our sustainability agenda to ensure that it aligns with The Sustainable Development Goals set up by the United Nations General Assembly in 2015. The Sustainable Development Goals (SDGs) are a collection of 17 goals designed to be a blueprint to achieve a better and more sustainable future for all."
					}
				/>
			</div>

			{/* 3 did you know with image more */}
			<div className="flex flex-col md:flex-row items-center justify-between">
				<div className="text-center px-6">
					<Header title="Did you know" />
					<ul>
						{didYouknowList.map((item) => (
							<li key={item.id} className="py-2">
								{item.content}
							</li>
						))}
					</ul>
				</div>
				<div className="md:w-1/2">
					<img
						src="./images/hnc_bci_new_shirts_collection_aw21.jpg"
						alt="hnc new shirts collection"
						className="object-fill"
					/>
				</div>
			</div>

			{/* 4 feel good while shopping and accordion*/}
			<div className="px-6">
				<Header title="feel good while shopping" />
				<>
					{fgwsList.map((item) => (
						<AccordionPanel
							key={item.id}
							accordionTitle={item.title}
							accordionContent={item.content}
						/>
					))}
				</>
			</div>
			{/* 5 p image 1 */}
			<div className="parallax1"></div>

			{/* 6 opac and acc */}
			<div>
				<Header title="our product and care" />
				<>
					{opacList.map((item) => (
						<AccordionPanel
							key={item.id}
							accordionTitle={item.title}
							accordionContent={item.content}
						/>
					))}
				</>
			</div>
			{/* 7 p image 2 */}
			<div className="parallax2"></div>
			{/* 8 material and acc */}
			<div>
				<Header title="materials recycling, repurposing &amp; disposal " />
				<>
					{mrrdList.map((item) => (
						<AccordionPanel
							key={item.id}
							accordionTitle={item.title}
							accordionContent={item.content}
						/>
					))}
				</>
			</div>
		</div>
	)
}

export default App
