# Web Scraping with Node.js

This project demonstrates how to scrape data from a website using Node.js. In this example, we will be scraping the top 250 movies from IMDB.

## Installation

1. Clone the repository: `git clone https://github.com/Saurav02022/Imdb-top250-movies-Scraping`
2. Install dependencies: `npm install`

## Usage

1. Run the script: `npm run start`
2. The script will output a list of the top 250 movies from IMDB in JSON format.

## How it Works

1. The script uses the [axios](https://www.npmjs.com/package/axios) library to make a GET request to the IMDB top 250 movies page.
2. The [cheerio](https://www.npmjs.com/package/cheerio) library is used to parse the HTML response and extract the movie titles, imageUrl and ratings.

## Acknowledgements

- [axios](https://www.npmjs.com/package/axios)
- [cheerio](https://www.npmjs.com/package/cheerio)
- IMDB for providing the top 250 movies list.
