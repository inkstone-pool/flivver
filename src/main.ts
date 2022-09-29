
import App from './App.vue'
import {renderer} from './runtime-pixi';
import {game} from './game';

renderer.createApp(App).mount(game.stage)