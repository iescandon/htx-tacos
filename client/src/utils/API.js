import axios from 'axios';

const URL = '/api/tacos';

export default {
	search: function () {
		return axios.get(URL);
	},
};
