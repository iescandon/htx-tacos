import axios from 'axios';

const URL = '/';

export default {
	search: function () {
		return axios.get(URL);
	},
};
