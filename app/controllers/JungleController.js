import { AppState } from "../AppState.js";
import { JungleService } from "../services/JungleService.js";
import { setHTML } from "../utils/Writer.js";


function _makeJumble() {
    const pulledJumble = AppState.activeJumble

    let HTMLString = ''

    HTMLString += pulledJumble.JungleHTMLString

    setHTML('currentJumble', HTMLString)

}



export class JungleController {
    constructor() {

        const pulledJungle = AppState.jungleJumbles

        JungleService.setActiveJungleFile(pulledJungle)


        console.log(AppState.jungleJumbles)


    }

    pullJumble() {
        JungleService
    }
}