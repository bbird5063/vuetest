import { createApp } from 'vue'; // наше приложение создается функцией createApp, которую необходимо импортировать.
import App from './App.vue'; // для createApp(App)

createApp(App).mount('#app'); // <div id="app"></div> сюда будет встроен корневой компонент 'App'