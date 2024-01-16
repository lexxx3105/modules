import Game from './game';

const myGame = new Game();
myGame.start();
import { Game, GameSavingData, readGameSaving, writeGameSaving as saveGame, readGameSaving as loadGame } from './game';