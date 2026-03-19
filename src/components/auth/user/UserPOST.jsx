import React from 'react';
import styles from './UserPOST.module.css';
import Input from '../../forms/Input';
import useForm from '../../../hooks/useForm';
import Select from '../../forms/Select';
import TextArea from '../../forms/TextArea';
import Button from '../../../components/forms/Button';
import useFetch from '../../../hooks/useFetch';
import Error from '../../helper/Error';
import { POST_PHOTO } from '../../../api';
import { useNavigate } from 'react-router-dom';
import Head from '../../helper/Head';

const UserPOST = () => {
  const title = useForm('');
  const city = useForm('');
  const state = useForm('');
  const country = useForm('');
  const estimated_cost = useForm('number');
  const travel_date = useForm('date');
  const travel_duration_days = useForm('number');
  const description = useForm('');
  const best_season = useForm('');
  const [img, setImg] = React.useState({});
  const { data, resquest, error, loading } = useFetch();

  const navigate = useNavigate();
  React.useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate]);
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title.value);
    formData.append('state', state.value);
    formData.append('city', city.value);
    formData.append('country', country.value);
    formData.append('travel_date', travel_date.value);
    formData.append('estimated_cost', estimated_cost.value);
    formData.append('travel_duration_days', travel_duration_days.value);
    formData.append('description', description.value);
    formData.append('best_season', best_season.value);
    formData.append('img', img.raw);
    const token = window.localStorage.getItem('token');

    const titleIsValid = title.validate();
    const cityIsValid = city.validate();
    const stateIsValid = state.validate();
    const countryIsValid = country.validate();
    const estimatedCostIsValid = estimated_cost.validate();
    const travelDateIsValid = travel_date.validate();
    const travelDurationIsValid = travel_duration_days.validate();
    const descriptionIsValid = description.validate();
    const bestSeasonIsValid = best_season.validate();

    if (
      titleIsValid &&
      cityIsValid &&
      stateIsValid &&
      countryIsValid &&
      estimatedCostIsValid &&
      travelDateIsValid &&
      travelDurationIsValid &&
      descriptionIsValid &&
      bestSeasonIsValid
    ) {
      const { url, options } = POST_PHOTO(formData, token);
      const { json, response } = resquest(url, options);
    }
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }
  return (
    <div className={styles.PhotoPost}>
      <Head title="Poste sua viagem" />
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        <Input type="text" label="titulo" id="title" {...title} />
        <TextArea label="Descrição" id="description" {...description} />
        <Input
          type="text"
          label="Data da viagem"
          placeholder="ex: 24/03/2026"
          id="travel_date"
          {...travel_date}
        />
        <Input
          type="number"
          label="Quantos dias de viagem ?"
          id="travel_duration_days"
          {...travel_duration_days}
        />
        <Input type="text" label="País" id="country" {...country} />
        <Input type="text" label="cidade" id="city" {...city} />
        <Input type="text" label="Estado" id="state" {...state} />
        <Input
          type="number"
          label="Estimativa de valor gasto"
          id="estimated_cost"
          {...estimated_cost}
        />
        <Select
          {...best_season}
          options={['Primavera', 'Verão', 'Outono', 'Inverno']}
          label="Estação da viagem"
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button style={{ marginTop: '36px' }}>Enviar</Button>
        )}
      </form>
      {error && <Error erro={error} />}
    </div>
  );
};

export default UserPOST;
