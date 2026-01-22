import {type NavigateFunction, useNavigate, useLocation} from 'react-router';
import type {MediaItem} from 'hybrid-types/DBTypes';

const Single = () => {
  const {state} = useLocation();
  const item: MediaItem = state.item;
  const navigate: NavigateFunction = useNavigate();
  return (
    <dialog open>
      {item && (
        <>
          <h2>{item.title}</h2>
          {item.media_type.split('/')[0] === 'image' && (
            <img src={item.filename} alt={item.description || item.title} />
          )}
          {item.media_type.split('/')[0] === 'video' && (
            <video src={item.filename} controls />
          )}
          <p>{item.description}</p>
          <p>
            Uploaded at {new Date(item.created_at).toLocaleString('en-fi')} by
            user id {item.user_id}
          </p>
          <button onClick={() => navigate(-1)}>Go back</button>
        </>
      )}
    </dialog>
  );
};

export default Single;
