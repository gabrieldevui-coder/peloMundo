import React from 'react';
import { PHOTO_DELETE } from '../../api';
import styles from './PhotoDelete.module.css';
import useFetch from '../../hooks/useFetch';

const PhotoDelete = ({ id }) => {
  const { resquest, loading } = useFetch();

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar ?');
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await resquest(url, options);
      window.location.reload();
    }
  }
  return (
    <>
      {loading ? (
        <button className={styles.btnDelete} disabled>
          deletando...
        </button>
      ) : (
        <button className={styles.btnDelete} onClick={handleClick}>
          deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
