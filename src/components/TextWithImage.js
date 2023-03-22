import { Grid, Typography } from "@mui/material";
import astronaut from "./astronaut.jpg";
import "./TextWithImage.css";



export function TextWithImage(props) {
  return (
    <Grid className="container" container direction="row" justifyContent="space-around" alignItems="center" spacing={3}>
      <Grid  xs><img src={astronaut} alt="astronaut"></img></Grid>
      <Grid  xs><Grid  xs > 
        <Typography variant="body1" align= "center" gutterBottom > Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </Typography>
      </Grid>
      <Grid  xs>
        <Typography variant="body1" align= "center" gutterBottom > <b>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  </b> </Typography>
      </Grid>
      <Grid  xs>
        <Typography variant="body1" align= "center" gutterBottom > It was popularised in the 1960s with the release dof Letrdaset sheets containing Lorem Ipsum passages. </Typography>
      </Grid></Grid>
    </Grid>
  );
}
