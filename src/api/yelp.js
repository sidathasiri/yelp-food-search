import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer urr1c3FBOMDZEUZK9dNgogkBDxWXxlz269r2xUh48X6oKhL21mv97XpPKzTw2J27ABOhc8tWScgHwbAkquKDw8FuEYTwapXtOXeJwMdeVZeYWDKuHUrDx6ohq-EVX3Yx'
    }
});