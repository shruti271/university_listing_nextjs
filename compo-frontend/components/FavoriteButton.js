import Image from 'next/image';
import { useState } from 'react';
import heartIcon from '../assets/heart.svg';

const FavoriteButton = () => {
  const [liked, setLiked] = useState(false);

  const backgroundColor = liked ? 'bg-colorPrimary' : 'bg-colorStone';
  const handleFavoriteClick = () => setLiked(!liked);

  return (
    <button
      className={`w-7 h-7 rounded-md transition-colors duration-300 hover:opacity-80 ${backgroundColor}`}
      onClick={handleFavoriteClick}
    >
      <Image src={heartIcon} alt="heart" width="12" height="12" />
    </button>
  );
};

export default FavoriteButton;
