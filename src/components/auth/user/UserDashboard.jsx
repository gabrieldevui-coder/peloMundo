import React from 'react';
import Head from '../../helper/Head';
import userFetch from '../../../hooks/useFetch';
import Loading from '../../helper/Loading';
import Error from '../../helper/Error';
import { GET_STATS } from '../../../api';
const UserGraphic = React.lazy(() => import('./UserGraphic'));

const UserDashboard = () => {
  const { data, error, loading, resquest } = userFetch();
  React.useEffect(() => {
    const { url, options } = GET_STATS();
    async function fetchData() {
      const { json } = await resquest(url, options);
    }
    fetchData();
  }, [resquest]);
  if (loading) return <Loading />;
  if (error) return <Error erro={error} />;
  if (!data) return null;
  return (
    <React.Suspense fallback={<div></div>}>
      <Head title="Estatísticas" />
      <UserGraphic data={data} />
    </React.Suspense>
  );
};

export default UserDashboard;
