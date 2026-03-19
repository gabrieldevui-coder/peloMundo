import React from 'react';
import styles from './FeedModal.module.css';
import useFetch from '../../hooks/useFetch';
import { PHOTO_GET } from '../../api';
import Error from '../helper/Error';
import Loading from '../helper/Loading';
import PhotoContent from '../Photo/PhotoContent';

const FeedModal = ({ photo, setPhoto }) => {
  const { resquest, error, data, loading } = useFetch();
  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    const { json } = resquest(url, options);
  }, [photo.id, resquest]);

  function handleOutside(event) {
    if (event.target === event.currentTarget) {
      setPhoto(() => null);
    }
  }

  return (
    <div onClick={handleOutside} className={`${styles.overlay}`}>
      <div className={styles.modalContainer}>
        {error && <Error erro={error} />}
        {loading && <Loading />}
        {data && <PhotoContent data={data} />}
      </div>
    </div>
  );
};

export default FeedModal;
