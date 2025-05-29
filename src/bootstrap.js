import { Game } from "./game.js";

(function () {
  const game = new Game();
  // for debug
  window.game = game;
  window.welcome_scene = game.scenes["welcome"];
  window.stage_scene = game.scenes["stage"];
  window.battle_field_scene = game.scenes["battle_field"];
  window.report_scene = game.scenes["report"];
  return game.kick_off();
}());
