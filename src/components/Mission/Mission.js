import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

import styles from './Mission.module.scss';

const Mission = ({ title, details, image, id }) => {
  //Placeholder for missing pictures
  const imageSrc =
    image.length === 0
      ? 'https://live.staticflickr.com/65535/51686847614_28654cc008_m.jpg'
      : image[0];

  //Placeholder for missing details
  const description =
    details !== null
      ? details.substr(0, 210) + '...'
      : 'Lorem ipsum dolor sit amet consectetur adipiscing elit, iaculis morbi id neque condimentum lectus. Viverra dis imperdiet habitant erat fermentum molestie egestas, vivamus varius praesent eros mi convallis vehic...';

  return (
    <div className={styles.mission}>
      <Card>
        <Link to={`missions/${id}`}>
          <CardActionArea>
            <CardMedia
              component='img'
              height='140'
              image={imageSrc}
              alt='Rocket'
            />
            <CardContent style={{ backgroundColor: '#393a3e' }}>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
                noWrap
                style={{ color: 'white' }}
              >
                {title}
              </Typography>
              <Typography variant='body2' style={{ color: 'white' }}>
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </div>
  );
};

export default Mission;
