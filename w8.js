function w8(event, msg) {
  switch (msg) {
    case "誅仙攻略集":
      var allText = [
        {
          type: "text",
          text: `https://tutubot.net/archives/category/game_walkthrough/%e5%a4%a2%e5%b9%bb%e6%96%b0%e8%aa%85%e4%bb%99`,
        },
      ];
      event.reply(allText);
      break;
    default:
      break;
  }
}
module.exports = w8;
