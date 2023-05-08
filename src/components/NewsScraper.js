import axios from 'axios';
import cheerio from 'cheerio';
import { v4 as uuidv4 } from 'uuid';

// Establecemos el proxy que nos permitirá hacer peticiones a sitios que no tengan habilitado CORS
// const corsProxy = 'http://localhost:8080/';
const corsProxy = 'https://corsproxy.io/?';
// const corsProxy = 'https://cors-anywhere.herokuapp.com/';

// Creamos una función asíncrona llamada NewsScraper que se encargará de extraer los datos de noticias de dos sitios web
const NewsScraper = async () => {

  // Realizamos una petición a la página web de AS y cargamos los datos en la variable as$
  const asResult = await axios.get(`${corsProxy}https://as.com/`);
  const as$ = cheerio.load(asResult.data);
  const asDataPromises = as$("section.area div.row div.col-md-8 article")
    .slice(0, 5)
    .map(async (index, element) => {
      try {
        // Generamos un identificador único para cada noticia usando la librería uuidv4
        const id = uuidv4()

        // Extraemos los datos de título y fuente de la noticia
        const title = as$(element).find("h2.s__tl").text();
        const source = as$(element).find("a").attr("href");

        // Realizamos una petición a la fuente de la noticia y cargamos los datos en la variable article$
        const articleResult = await axios.get(`${corsProxy}${source}`);
        const article$ = cheerio.load(articleResult.data);

        // Extraemos la fecha de la noticia
        const date = article$("time").attr("datetime");

        // Extraemos los datos de imagen, autor y cuerpo de la noticia
        const image =
          as$(element).find("figure.mm.s__mm img.mm__img").attr("src") ||
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Diario_AS.svg/1200px-Diario_AS.svg.png";
        const publisher =
          article$("div.art__me a span.art__au__name")
            .text()
            .trim() ||
          as$(element).find("div.s__me .s__au").text() ||
          "AS.com";
        const body =
          article$("h2.art__hdl__opn").html() ||
          as$(element).find(".s__sum").text() ||
          "";

        // Retornamos un objeto con los datos de la noticia
        return { id, title, source, date, image, publisher, body };
        
      } catch (error) {
        console.log(`Error obteniendo datos de noticia: ${error}`);
        return null;
      }
    });

  // Realizamos una petición a la página web de El Mundo y cargamos los datos en la variable elMundo$
  const elMundoResult = await axios.get(`${corsProxy}https://www.elmundo.es/`);
  const elMundo$ = cheerio.load(elMundoResult.data);
  const elMundoDataPromises = elMundo$('div.ue-l-cg__block[data-b-name="headlines_a"] h2.ue-c-cover-content__headline')
  .slice(0, 5)
  .map(async (index, element) => {
    try {

      // Generamos un identificador único para cada noticia usando la librería uuidv4
      const id = uuidv4();

      // Extraemos los datos de título y fuente de la noticia
      const title = elMundo$(element).text();
      const source = elMundo$(element).parent().attr("href");

      // Realizamos una petición a la fuente de la noticia y cargamos los datos en la variable article$
      const articleResult = await axios.get(`${corsProxy}${source}`);
      const article$ = cheerio.load(articleResult.data);

      // Extraemos la fecha de la noticia
      const date = article$("time").attr("datetime");

      // Extraemos los datos de imagen, autor y cuerpo de la noticia
      const image =
        article$("figure.ue-c-article__media")
          .find("img")
          .attr("data-src") ||
        article$("figure.ue-c-article__media")
          .find("img")
          .attr("src") ||
        "https://e00-elmundo.uecdn.es/assets/v23/img/destacadas/elmundo__logo-generica.jpg";
      const publisher =
        article$(".ue-c-article__byline-name").text().trim() ||
        "ElMundo.es";
      const body =
        article$("article.ue-c-article.has-image .ue-c-article__standfirst").text() ||
        "";

      // Retornamos un objeto con los datos de la noticia
      return { id, title, source, date, image, publisher, body };

    } catch (error) {
      // En caso de que de error que devuelva null
      console.log(`Error obteniendo datos de noticia: ${error}`);
      return null;
    }
  });


  // Realizamos una petición a elMundoDataPromises y luego filtramos los datos para eliminar los null
  const elMundoDataResolved = await Promise.all(elMundoDataPromises);
  const asDataResolved = await Promise.all(asDataPromises);
  const elMundoData = elMundoDataResolved.filter(data => data !== null);
  const asData = asDataResolved.filter(data => data !== null);

  const data = [...asData, ...elMundoData];
  // console.log(data);
  return data;
};


export default NewsScraper;
