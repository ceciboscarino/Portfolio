import { Grid, Typography } from "@mui/material";
import astronaut from "./astronaut.jpg";
import "./TextWithImage.css";

export function TextWithImage(props) {
  return (
    <Grid
      className="containerNumber2"
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      spacing={3}
    >
      <Grid xs={7}>
        <img src={astronaut} alt="astronaut"></img>
      </Grid>
      <Grid xs>
        <Grid container direction="column" alignItems="center" spacing={3}>
          <Grid xs={5}>
            <Grid xs>
              <Typography variant="h6" align="center" gutterBottom>
                HOLA
              </Typography>
            </Grid>
            <Grid xs>
              <Typography variant="body1" align="center" gutterBottom>
                <b>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.{" "}
                </b>
              </Typography>
            </Grid>
            <Grid xs>
              <Typography variant="body1" align="center" gutterBottom>
                {" "}<i>

                It was popularised in the 1960s with the release dof Letrdaset
                sheets containing Lorem Ipsum passages.{" "}
                </i>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
