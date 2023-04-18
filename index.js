const axios = require("axios");
const cherrio = require("cheerio");

const url = "https://www.imdb.com/chart/top/?ref_=nv_mv_250";

function movieItemBluePrint(No, title, rating, imgUrl) {
  (this.No = No),
    (this.title = title),
    (this.rating = rating),
    (this.imgUrl = imgUrl);
}

let Data = [];

async function getDataRequest() {
  try {
    await axios.get(url).then((response) => {
      const htmlPage = cherrio.load(response.data);

      const Movies = htmlPage(".lister-list tr");

      Movies.each((index, element) => {
        const imgUrl = htmlPage(element).find("td.titleColumn a").attr("href");
        const tittle = htmlPage(element).find("td.titleColumn a").text();
        const rating = htmlPage(element).find("td.imdbRating strong").text();

        const movieItem = new movieItemBluePrint(
          index + 1,
          tittle,
          rating,
          imgUrl
        );

        Data.push(JSON.stringify(movieItem));
      });
      console.log(Data);
    });
  } catch (error) {
    console.log(error);
  }
}

getDataRequest();
