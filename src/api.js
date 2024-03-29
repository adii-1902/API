import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID qM558_WxEJhG9In1bsQeekGi-uWZ39ny4bbVoQlybB8'
        },
        params: {
            query: term,
        }
    });
    return response.data.results;
};


export default searchImages;