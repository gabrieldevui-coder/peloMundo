import React from 'react';
import styles from './PhotoContent.module.css';
import LocationIcon from '../../assets/location.svg?react';
import { Link } from 'react-router-dom';
import { dataUser } from '../../UserContext';
import PhotoComments from './PhotoComments';
import PhotoDelete from './PhotoDelete';

const PhotoContent = ({ data }) => {
  const user = React.useContext(dataUser);
  const { photo, comments } = data;
  const {
    src,
    title,
    accesses,
    author,
    best_season,
    city,
    country,
    date,
    description,
    estimated_cost,
    id,
    state,
    total_comments,
    travel_date,
    travel_duration_days,
  } = photo;
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Link className={styles.imageLink} to={`/foto/${id}`}>
          <img src={src} alt={title} />
        </Link>
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          {user.data && user.data.username === author ? (
            <PhotoDelete id={id} />
          ) : (
            <Link to={`/perfil/${author}`} className={styles.author}>
              @{author}
            </Link>
          )}

          <span className={styles.views}>👁 {accesses}</span>
        </div>

        <Link to={`/foto/${id}`}>
          <h1 className={styles.title}>{title}</h1>
        </Link>

        <div className={styles.location}>
          <LocationIcon />
          <p>
            {' '}
            {city}, {state} - {country}
          </p>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <span>Melhor época</span>
            <strong>{best_season}</strong>
          </div>

          <div className={styles.infoCard}>
            <span> Data da viagem</span>
            <strong>{travel_date}</strong>
          </div>

          <div className={styles.infoCard}>
            <span> Duração </span>
            <strong>{travel_duration_days} dias</strong>
          </div>

          <div className={styles.infoCard}>
            <span> Custo estimado</span>
            <strong>R$ {estimated_cost}</strong>
          </div>
        </div>
        <div className={styles.comments}>
          <h3> Comentários</h3>
          <PhotoComments
            className="commentsContent"
            id={id}
            comments={comments}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoContent;
