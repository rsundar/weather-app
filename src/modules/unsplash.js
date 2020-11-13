const unsplash = async (query, name) => {
  try {
    const key = '2HnF8U8PB0wjU4Lz8mTGCz56qaOAsVi6FbTUbfeyT3U';
    const url = 'https://api.unsplash.com/search/photos/?client_id=';
    const response = await fetch(`${url}${key}&query=${query}-${name}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default unsplash;
