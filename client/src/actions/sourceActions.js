import axios from 'axios';

export const getSources = () => dispatch => {
    axios.get(`http://localhost:8000`)
      .then(res => res.data.sources)
      .then(channels =>
        dispatch({
          type: "ADD",
          payload: channels
        })
      );
  };

  