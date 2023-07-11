import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Typography, useTheme } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Header from '../../components/Header';
import { tokens } from '../../theme';

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions" />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5" color={colors.greenAccent[200]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit illo
            distinctio harum, obcaecati accusamus quia laudantium, dolore ipsam
            reiciendis repudiandae ut suscipit numquam cumque tenetur ipsa
            debitis optio aliquid praesentium.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5" color={colors.greenAccent[200]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit illo
            distinctio harum, obcaecati accusamus quia laudantium, dolore ipsam
            reiciendis repudiandae ut suscipit numquam cumque tenetur ipsa
            debitis optio aliquid praesentium.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5" color={colors.greenAccent[200]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit illo
            distinctio harum, obcaecati accusamus quia laudantium, dolore ipsam
            reiciendis repudiandae ut suscipit numquam cumque tenetur ipsa
            debitis optio aliquid praesentium.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5" color={colors.greenAccent[200]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit illo
            distinctio harum, obcaecati accusamus quia laudantium, dolore ipsam
            reiciendis repudiandae ut suscipit numquam cumque tenetur ipsa
            debitis optio aliquid praesentium.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5" color={colors.greenAccent[200]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit illo
            distinctio harum, obcaecati accusamus quia laudantium, dolore ipsam
            reiciendis repudiandae ut suscipit numquam cumque tenetur ipsa
            debitis optio aliquid praesentium.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
