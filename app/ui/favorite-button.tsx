"use client";

import { useState } from "react";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      className="favorite-btn"
      onClick={() => setIsFavorite(!isFavorite)}
    >
      {isFavorite ? "♥ Remove from Favorite" : "♡ Add to Favorite"}
    </button>
  );
}