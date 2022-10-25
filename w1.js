function w4 (event, msg) {
  let allText;

  switch (msg) {
    case "ROO攻略集":
      allText = [
        {
          type: "text",
          text: `https://tutubot.net/archives/category/game_walkthrough/roo_strage`,
        },
      ];
      event.reply(allText);
      break;
    case "ROO技能配點器":
      allText = [
        {
          type: "text",
          text: `By 巴哈 snowlike
https://www.republicofclown.com/roo/`,
        },
      ];
      event.reply(allText);
      break;
    default:
      break;
  }
}

module.exports = w4;
