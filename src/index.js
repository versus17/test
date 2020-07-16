// import lodash from 'lodash';
import './style.css';

let countEverySecond(n) => {
	for (let i = 0; i <= n; ++i) {
		setTimeout((i) => {
			console.log(i)
		},1000)
	}
}