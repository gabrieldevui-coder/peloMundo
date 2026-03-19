import React from 'react';
import styles from './PhotoComments.module.css';
import { dataUser } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';

const PhotoComments = (props) => {
  const commentRef = React.useRef(null);
  const [comments, setComments] = React.useState(() => props.comments);
  const { login } = React.useContext(dataUser);
  React.useEffect(() => {
    commentRef.current.scrollTop = commentRef.current.scrollHeight;
  }, [comments]);
  return (
    <>
      <ul ref={commentRef} className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <div className={styles.message}>
              <span className={styles.author}>{comment.comment_author}:</span>
              <span className={styles.text}>{comment.comment_content}</span>
            </div>
          </li>
        ))}
      </ul>

      {login && <PhotoCommentsForm setComments={setComments} id={props.id} />}
    </>
  );
};

export default PhotoComments;
