import axios from 'axios';
import cheerio from 'cheerio';
import { v4 as uuidv4 } from 'uuid';

// const corsProxy = 'https://cors-anywhere.herokuapp.com/';
const corsProxy = 'http://localhost:8080/';


const NewsScraper = async () => {
  const asResult = await axios.get(`${corsProxy}https://as.com/`);
  const as$ = cheerio.load(asResult.data);
  const asData = await Promise.all(
    as$("section.area div.row div.col-md-8 article")
      .slice(0, 5)
      .map(async (index, element) => {
        const id = uuidv4()
        const title = as$(element).find("h2.s__tl").text();
        const source = as$(element).find("a").attr("href");
        const articleResult = await axios.get(`${corsProxy}${source}`);
        const article$ = cheerio.load(articleResult.data);
        const image =
          as$(element).find("figure.mm.s__mm img.mm__img").attr("src") ||
          "https://via.placeholder.com/150";
        const publisher =
          article$("div.art__me a span.art__au__name")
            .text()
            .trim() ||
          as$(element).find("div.s__me .s__au").text() ||
          "Publisher desconocido";
        const body =
          article$("h2.art__hdl__opn").html() ||
          as$(element).find(".s__sum").text() ||
          "No se pudo obtener el cuerpo de la noticia";
        return { id, title, source, image, publisher, body };
      })
  );
  const elMundoResult = await axios.get(`${corsProxy}https://www.elmundo.es/`);
  const elMundo$ = cheerio.load(elMundoResult.data);
  const elMundoData = await Promise.all(
    elMundo$(
      'div.ue-l-cg__block[data-b-name="headlines_a"] h2.ue-c-cover-content__headline'
    )
      .slice(0, 5)
      .map(async (index, element) => {
        const id = uuidv4()
        const title = elMundo$(element).text();
        const source = elMundo$(element).parent().attr("href");
        const articleResult = await axios.get(`${corsProxy}${source}`);
        const article$ = cheerio.load(articleResult.data);
        const image =
          article$("figure.ue-c-article__media")
            .find("img")
            .attr("data-src") ||
          article$("figure.ue-c-article__media")
            .find("img")
            .attr("src") ||
          article$("article.ue-c-article.has-image figure .ue-c-article__media-img-container .ue-c-article__media-video-responsive").html() ||
          "https://via.placeholder.com/150";
        const publisher =
          article$(".ue-c-article__byline-name").text().trim() ||
          "Publisher desconocido";
        const body =
          article$("article.ue-c-article.has-image .ue-c-article__standfirst").text() ||
          "No se pudo obtener el cuerpo de la noticia";
        return { id, title, source, image, publisher, body };
      })
  );
  const data = [...asData, ...elMundoData];
  console.log(data);
  return data;
};


export default NewsScraper;
