import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { PHOTO_GET } from '../../api';
import styles from './Photo.module.css';
import Loading from '../helper/Loading';
import LocationIcon from '../../assets/location.svg?react';
import PhotoComments from '../Photo/PhotoComments';
import Head from '../helper/Head';
const Photo = () => {
  const { id } = useParams();
  const { resquest, data, loading } = useFetch();

  React.useEffect(() => {
    async function fetchPhoto() {
      const { url, options } = PHOTO_GET(id);
      await resquest(url, options);
    }
    fetchPhoto();
  }, [resquest, id]);

  if (loading) return <Loading />;
  if (!data) return null;

  const {
    accesses,
    author,
    best_season,
    city,
    country,
    description,
    estimated_cost,
    src,
    state,
    title,
    total_comments,
    travel_date,
    travel_duration_days,
  } = data.photo;

  return (
    <section className={`container ${styles.page}`}>
      <Head title={title} />
      <div className={styles.layout}>
        <div className={styles.imageWrapper}>
          <img src={src} alt={title} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.location}>
            <LocationIcon />
            <span>
              {city}, {state} — {country}
            </span>
          </div>
          <div className={styles.meta}>
            <Link to={`/perfil/${author}`} className={styles.author}>
              @{author}
            </Link>
            <span> - 👁 {accesses}</span>
          </div>

          <div className={styles.description}>
            <p>{description}</p>
          </div>

          <div className={styles.infoList}>
            <div>
              <span>Custo estimado</span>
              <strong>R$ {estimated_cost}</strong>
            </div>

            <div>
              <span>Melhor época</span>
              <strong>{best_season}</strong>
            </div>

            <div>
              <span>Data da viagem</span>
              <strong>{travel_date}</strong>
            </div>

            <div>
              <span>Duração</span>
              <strong>{travel_duration_days} dias</strong>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.comments}>
        <h2>Comentários</h2>
        <PhotoComments id={id} comments={data.comments} />
      </div>
    </section>
  );
};

export default Photo;
