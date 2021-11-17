import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

import './Launch.css';

export default function Launch({ title, details, image, id }) {
  //console.log(title, details, image);

  const description =
    details !== null
      ? details.substr(0, 210) + '...'
      : 'Lorem ipsum dolor sit amet consectetur adipiscing elit, iaculis morbi id neque condimentum lectus. Viverra dis imperdiet habitant erat fermentum molestie egestas, vivamus varius praesent eros mi convallis vehic...';

  return (
    <Card /*sx={{ maxWidth: 345 }} lg={{ minWidth: 545 }}*/>
      <Link to={`missions/${id}`}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='140'
            image={image[0]}
            alt='Rocket'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div' noWrap>
              {title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
