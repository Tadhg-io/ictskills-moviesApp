import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

const AddToListIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    console.log("addToList");
  };
  return (
    <IconButton aria-label="add to my list" onClick={handleAddToFavorites}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToListIcon;