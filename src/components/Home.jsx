import React from 'react';
import styles from './Home.module.css';
import Feed from './feed/Feed';
import Loading from './helper/Loading';
import Head from './helper/Head';
const Home = () => {
  return (
    <section style={{ marginTop: '2rem' }} className="container">
      <Head title="Home" description="Home do site pelo Mundo" />
      <Feed />
    </section>
  );
};

export default Home;
