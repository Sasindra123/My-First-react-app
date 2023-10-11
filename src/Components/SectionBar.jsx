import * as React from "react";
import "./SectionBar.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard() {
  return (
    <div className="whole-container">
      <h1 className="services">Our Services</h1>
      <div className="Cards">
        <Card sx={{ maxWidth: 345 }} className="sec-img">
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image="https://images.pexels.com/photos/5752281/pexels-photo-5752281.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                CARDIO VASCULAR
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="sec-img">
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image="https://images.pexels.com/photos/4173249/pexels-photo-4173249.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                CARDIO VASCULAR
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="sec-img">
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                CARDIO VASCULAR
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="sec-img">
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                CARDIO VASCULAR
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="sec-img">
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image="https://images.pexels.com/photos/5752306/pexels-photo-5752306.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                CARDIO VASCULAR
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="sec-img">
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image="https://images.pexels.com/photos/4754656/pexels-photo-4754656.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                CARDIO VASCULAR
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
