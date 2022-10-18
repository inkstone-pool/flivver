import './style.css'
import App from './App.vue'
import {game} from './game';
import {renderer} from './runtime-pixi';
import {router} from './router'
import { createPinia } from 'pinia'

renderer.createApp(App).use(router).use(createPinia()).mount(game.stage)