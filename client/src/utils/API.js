import axios from 'axios';

const URL = '/api/tacos';

export default {
	search: function () {
		console.log('in API.js');
		return axios.get(URL);
	},
};
