import { Jungle } from './models/jungle.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  jungleJumbles = [
    new Jungle({
      // limit: 0,
      content: 'lorem10',
      duration: 0,
      name: 'easypeasy'
    }),
    new Jungle({
      // limit: 0,
      content: 'lorem20',
      duration: 0,
      name: 'mid'
    }),
    new Jungle({
      // limit: 0,
      content: 'lorem35',
      duration: 0,
      name: 'crazy'
    }),
  ]
  activeJumble = null
}

export const AppState = createObservableProxy(new ObservableAppState())