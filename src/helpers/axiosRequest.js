import axios from 'axios';
import objectToFormData from 'object-to-formdata';

const axiosRequest = ({
    url,
    method = 'get',
    data,
    params = {},
    headers = { 'Content-Type': 'multipart/form-data' },
    cb = () => { },
    failCb = () => { },
}) => {
    data = objectToFormData(data)
    return axios({
        url,
        method,
        data,
        headers,
        params
    })
        .then(res => cb(res))
        .catch(error => failCb(error))
}

export default axiosRequest