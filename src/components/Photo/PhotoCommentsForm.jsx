import React from 'react';
import TextArea from '../forms/TextArea';
import Button from '../forms/Button';
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import { POST_COMMENT } from '../../api';
import Error from '../helper/Error';
const PhotoCommentsForm = ({ id, setComments }) => {
  const comment = useForm();
  const { resquest, error, loading } = useFetch();
  async function handleSubmit(event) {
    event.preventDefault();
    if (comment.validate()) {
      const { url, options } = POST_COMMENT(id, { comment: comment.value });
      const { json, response } = await resquest(url, options);
      if (response.ok) {
        setComments((comments) => [...comments, json]);
        comment.setValue(() => '');
      }
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextArea
          id="comment"
          placeholder="Adicione um comentario"
          {...comment}
        />
        {loading ? (
          <Button disabled>Comentando...</Button>
        ) : (
          <Button>Comentar</Button>
        )}
        {error && <Error erro={error} />}
      </form>
    </>
  );
};

export default PhotoCommentsForm;
