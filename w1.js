function w4(event, msg) {
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
    case "ROO社群推薦":
      allText = [
        {
          type: "text",
          text: `「阿萬的《仙境傳說 愛如初見》 玩家討論區」！請點選以下連結加入社群！
          https://line.me/ti/g2/5V2yhCMbXRp5KEe_SgiE-D0aKvtNOfhIjABTww?utm_source=invitation&utm_medium=link_copy&utm_campaign=default`,
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
