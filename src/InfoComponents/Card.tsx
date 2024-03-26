import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function ActionAreaCard() {
  return (
    <Card style={{ backgroundColor: "rgb(49 54 63)", boxShadow: "none" }}>
      <img
        src="https://media.licdn.com/dms/image/D4E03AQH2CJ3uMY3-AA/profile-displayphoto-shrink_800_800/0/1710767142792?e=1716422400&v=beta&t=FsRuoYblkchBBNdC-ng8r22kdinSAc5oJu-BEI03U1k"
        alt="Foto LinkedIn"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
          Ciao e Benvenuti!
        </Typography>
        <Typography
          variant="body2"
          color="white"
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            color: "#535bf2",
            textShadow: "0px 0px 2px",
          }}
        >
          Sono Lorenzo Di Meo, un appassionato di programmazione con una fervida
          passione per il mondo dello sviluppo web. Ho trascorso molte ore
          immergendomi nel magico mondo del coding, lavorando con tecnologie
          all'avanguardia come HTML, CSS, TypeScript, React, MUI e sperimentando
          con le ultime novità come React Hook Form, Zod e React Router DOM.
          Ogni riga di codice è un'opportunità per me di esprimere la mia
          creatività e risolvere sfide complesse con eleganza e precisione. Se
          volete saperne di più su di me o connettervi sul fronte professionale,
          non esitate a dare un'occhiata al mio profilo LinkedIn{" "}
          <a
            className="linkProfiloLinkedin"
            href="https://www.linkedin.com/in/lorenzo-di-meo-59211b295/"
          >
            Pagina: Lorenzo Di Meo
          </a>
          . Grazie per aver visitato il mio sito e per avermi concesso
          l'opportunità di condividere la mia passione per lo sviluppo web con
          voi.
        </Typography>
        <Typography gutterBottom variant="h5" component="div" color="white">
          Tools Utilizzati:
        </Typography>
        <img
          className="imgTools"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1280px-HTML5_logo_and_wordmark.svg.png"
          alt="Immagine html"
        />
        <img
          className="imgTools"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1024px-CSS3_logo_and_wordmark.svg.png"
          alt="Immagine html"
        />
        <img
          className="imgTools"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1280px-React_Logo_SVG.svg.png"
          alt="Immagine html"
        />
        <img
          className="imgTools"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1280px-Typescript_logo_2020.svg.png"
          alt="Immagine html"
        />
      </CardContent>
    </Card>
  );
}
