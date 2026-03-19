import React from 'react';
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
} from 'recharts';
import styles from './UserDashboard.module.css';

const ORANGE_SCALE = ['#FB9E1D', '#FDBA57', '#FFD28A', '#FFE6C2'];

const UserDashboard = ({ data }) => {
  const total = React.useMemo(
    () => data.reduce((acc, item) => acc + Number(item.accesses), 0),
    [data],
  );

  const average = data.length ? (total / data.length).toFixed(1) : 0;

  const topItem = data.length
    ? data.reduce((a, b) => (a.accesses > b.accesses ? a : b))
    : null;

  const formattedData = data.map((item) => ({
    name: item.title,
    value: Number(item.accesses),
  }));

  const ranking = [...data].sort((a, b) => b.accesses - a.accesses);

  return (
    <section className={styles.container}>
      {/* KPI */}
      <div className={styles.kpiGrid}>
        <div className={styles.kpiCard}>
          <span className={styles.kpiLabel}>Total</span>
          <strong className={styles.kpiValue}>{total}</strong>
        </div>

        <div className={styles.kpiCard}>
          <span className={styles.kpiLabel}>Média</span>
          <strong className={styles.kpiValue}>{average}</strong>
        </div>

        <div className={styles.kpiCard}>
          <span className={styles.kpiLabel}>Mais acessado</span>
          <strong className={styles.kpiValueSmall}>
            {topItem?.title || '-'}
          </strong>
        </div>
      </div>

      {/* Charts */}
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Distribuição</h3>
          <div className={styles.chartWrapper}>
            <ResponsiveContainer>
              <PieChart>
                <Pie data={formattedData} dataKey="value" outerRadius={90}>
                  {formattedData.map((_, index) => (
                    <Cell
                      key={index}
                      fill={ORANGE_SCALE[index % ORANGE_SCALE.length]}
                    />
                  ))}
                </Pie>

                <Tooltip formatter={(value) => [value, 'Acessos']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Acessos por item</h3>
          <div className={styles.chartWrapper}>
            <ResponsiveContainer>
              <BarChart data={formattedData}>
                <CartesianGrid stroke="#f0f0f0" />
                <XAxis dataKey="name" hide />
                <YAxis />
                <Tooltip formatter={(value) => [value, 'Acessos']} />
                <Bar dataKey="value" fill="#FB9E1D" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      {/* Ranking */}
      <div className={styles.rankCard}>
        <h3 className={styles.cardTitle}>Ranking</h3>
        <ul className={styles.rankList}>
          {ranking.map((item, index) => (
            <li key={item.id}>
              <span className={styles.position}>{index + 1}</span>
              <span className={styles.rankTitle}>{item.title}</span>
              <span className={styles.rankValue}>{item.accesses}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default UserDashboard;
