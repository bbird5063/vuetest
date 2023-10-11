import { createRouter, createWebHistory } from 'vue-router';

import Main from '@/pages/Main';
//import P5 from '@/pages/PageTest5';
//import P6 from '@/pages/PageTest6';
//import P7 from '@/pages/PageTest7';
//import P8 from '@/pages/PageTest8';
//import P9 from '@/pages/PageTest9';
//import RowIdPage from '@/pages/RowIdPage';

const routes = [
	{
		path: '/',
		name: 'Main',
		component: Main,
	},

];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
