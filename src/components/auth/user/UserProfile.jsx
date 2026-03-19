import React from 'react';
import styles from './UserProfile.module.css';
import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import Feed from '../../feed/Feed';
import Head from '../../helper/Head';
const UserProfile = () => {
  const { user } = useParams();
  return (
    <section className="container">
      <Head title={user} />
      <h1 className={styles.title}>{user}</h1>
      <Feed className={styles.Feed} user={user} />
    </section>
  );
};

export default UserProfile;
