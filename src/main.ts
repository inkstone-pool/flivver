import './style.css'
import App from './App.vue'
import {game} from './game';
import {renderer} from './runtime-pixi';



renderer.createApp(App).mount(game.stage)