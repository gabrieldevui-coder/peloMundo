import React from 'react';
import { dataUser } from '../../../UserContext';
import { Route, Routes } from 'react-router-dom';
import Feed from '../../feed/Feed';
import UserPOST from './UserPOST';
import UserDashboard from './UserDashboard';
import UserHeader from './UserHeader';
import NotFound from '../../NotFound';
import Head from '../../helper/Head';
const User = () => {
  const { data } = React.useContext(dataUser);

  return (
    data && (
      <section className="container">
        <Head title="Minha Galeria" />
        <UserHeader />
        <Routes>
          <Route path="/" element={<Feed user={data.id} />} />
          <Route path="/postar" element={<UserPOST />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/estatiscas" element={<UserDashboard />} />
        </Routes>
      </section>
    )
  );
};

export default User;
