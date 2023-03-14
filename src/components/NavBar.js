import { Button , AppBar , Toolbar , Typography } from "@mui/material";



export default function NavBar() {
    return (
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Chechu
              </Typography>
              <Button color="inherit">About me</Button>
              <Button color="inherit">Skills</Button>
              <Button color="inherit">Projects</Button>
              <Button color="inherit">Contact me</Button>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </div>
      );
}

