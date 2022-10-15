function w9(event, msg) {
  switch (msg) {
    case "劍3攻略集":
      var allText = [
        {
          type: "text",
          text: `https://tutubot.net/archives/category/game_walkthrough/world_strage`,
        },
      ];

      event.reply(allText);
      break;
    default:
      break;
  }
}

module.exports = w9;
