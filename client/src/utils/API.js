import axios from 'axios';

const URL = '/api/users';

export default {
	search: function () {
		console.log('in API.js');
		return axios.get(URL);
	},
};
