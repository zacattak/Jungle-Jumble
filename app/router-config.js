import { Router } from "./utils/Router.js";
import { JungleController } from "./controllers/JungleController.js";


export const router = new Router([
  {
    path: '',
    controllers: [JungleController],
    view: 'app/views/main.html'

  },
])