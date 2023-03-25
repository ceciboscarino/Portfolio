import { Button , AppBar , Toolbar , Typography } from "@mui/material";



export default function NavBar() {
    return (
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="secondary" component="div" sx={{ flexGrow: 1 }}>
                Chechu
              </Typography>
              <Button color="secondary">Skills</Button>
              <Button color="secondary">Projects</Button>
              <Button color="secondary">About me</Button>
              <Button color="secondary">Contact me</Button>
              <Button color="secondary">Login</Button>
            </Toolbar>
          </AppBar>
        </div>
      );
}

