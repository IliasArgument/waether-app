import axios from 'axios'

class API {

    getWeather = async (lat, long, query) => {
        try {
            if (typeof lat === 'number' && typeof long === 'number') {
                const data = await axios({
                    method: 'get',
                    url: `${process.env.REACT_APP_API_URL}/weather?q=${query}&lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`,
                })
                return data?.data
            }
        } catch (err) {
            console.log('err with getting user data');
        }
    }
}

const api = new API()
export default api;
