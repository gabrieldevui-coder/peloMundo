import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';
const Feed = ({ user, page }) => {
  const [photo, setPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);
  const wait = React.useRef(false);

  React.useEffect(() => {
    if (!infinite) return;

    function infiniteScroll() {
      const scrollY = window.scrollY;
      const heightTotal = document.body.offsetHeight - window.innerHeight;

      if (scrollY > heightTotal * 0.75 && !wait.current) {
        setPages((prev) => [...prev, prev.length + 1]);

        wait.current = true;
        setTimeout(() => {
          wait.current = false;
        }, 1000);
      }
    }

    window.addEventListener('scroll', infiniteScroll);

    return () => {
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [infinite]);
  return (
    <div>
      {photo && <FeedModal photo={photo} setPhoto={setPhoto} />}
      {pages.map((page, index) => (
        <FeedPhotos
          key={index}
          page={page}
          user={user}
          setPhoto={setPhoto}
          setInfinite={setInfinite}
        />
      ))}
    </div>
  );
};

export default Feed;
