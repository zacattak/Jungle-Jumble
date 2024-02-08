import { AppState } from "../AppState.js";
import { Jungle } from "../models/jungle.js";

class CallJungle {
  setActiveJungleFile(name) {

    const pulledJungle = AppState.jungleJumbles.find(jungleJumble => Jungle.name == name)
    console.log(AppState.activeJumble);

  }

  // startGame(params) {
  //   const startTime = Date()

  //   const endTime = Date()

  // let timePassed = startTime
  // }
}

export const JungleService = new CallJungle()