import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "./Card";

export default function Info() {
  return (
    <div>
      <Accordion style={{ backgroundColor: "rgb(49 54 63)", color: "white" }}>
        <AccordionSummary
          color="white"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Vuoi sapere di più su di me e sul sito?
        </AccordionSummary>
        <AccordionDetails>
          <Card />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
