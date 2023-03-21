
import { Typography ,  Grid }  from '@mui/material';

import './CenteredText.css';


export function CenteredText() {
  
  return (
    <Grid 
    className= "container"
    container direction="column" justifyContent="space-around" alignItems="center"  >
      <Grid  xs > 
        <Typography variant="body1" align= "center" gutterBottom > Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </Typography>
      </Grid>
      <Grid  xs>
        <Typography variant="body1" align= "center" gutterBottom > <b>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  </b> </Typography>
      </Grid>
      <Grid  xs>
        <Typography variant="body1" align= "center" gutterBottom > It was popularised in the 1960s with the release dof Letrdaset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </Typography>
      </Grid>
    </Grid>
  );
}
