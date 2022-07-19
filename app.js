const puppeteer = require('puppeteer');

async function webScraper() {
	const browser = await puppeteer.launch({})
	const page = await browser.newPage()

	await page.goto('https://www.geeksforgeeks.org/explain-the-mechanism-of-event-loop-in-node-js')
	var element = await page.waitFor("h1")
	var text = await page.evaluate(element => element.textContent, element)
	console.log(text)
	browser.close()
};

webScraper();