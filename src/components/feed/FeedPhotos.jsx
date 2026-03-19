import React from 'react';
import styles from './FeedPhotos.module.css';
import FeedPhotoItem from './FeedPhotoItem';
import useFetch from '../../hooks/useFetch';
import Error from '../helper/Error';
import { PHOTOS_GET } from '../../api';
import Loading from '../helper/Loading';

const FeedPhotos = ({ setPhoto, user, page, setInfinite }) => {
  const { data, loading, error, resquest } = useFetch();
  const total = 8;
  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { json, response } = await resquest(url, options);
      if (response.ok && json.length < total) {
        setInfinite(false);
      }
    }
    fetchPhotos();
  }, [resquest, user, page, setInfinite]);
  if (error) return <Error erro={error} />;
  if (loading) return <Loading />;

  if (data) {
    return (
      <ul className={`${styles.feed} animaLeft-Container`}>
        {data.map((photo) => {
          return (
            <FeedPhotoItem setPhoto={setPhoto} key={photo.id} photo={photo} />
          );
        })}
      </ul>
    );
  } else return null;
};

export default FeedPhotos;
