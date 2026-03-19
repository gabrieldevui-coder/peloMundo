import React from 'react';
import styles from './FeedPhotoItem.module.css';
const FeedPhotoItem = ({ photo, setPhoto }) => {
  const [view, setView] = React.useState(photo.accesses);

  function handleClick() {
    setView((value) => value + 1);
    setPhoto(photo);
  }
  return (
    <li onClick={handleClick} className={styles.photo}>
      <img src={photo.src} alt={photo.title}></img>
      <span>{view}</span>
    </li>
  );
};

export default FeedPhotoItem;
