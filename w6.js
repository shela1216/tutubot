function w6(event, msg) {
  const roxFun = require("./roxFun");
  if (msg.indexOf("怪物經驗/") >= 0) {
    var reg = /^怪物經驗\/.*/;
    if (reg.test(msg)) {
      var newMsg = msg.replace("怪物經驗/", "");
      var sortby = newMsg.replace(/(^[\s]*)|([\s]*$)/g, "").toLowerCase();
      if (sortby == "base" || sortby == "job") {
        var storyinit = new roxFun();
        storyinit.getMonsterInfo(event, sortby);
      }
    }
  } else if (msg == "怪物經驗") {
    var story = new roxFun();
    story.getMonsterInfo(event, null);
  }

  if (msg.indexOf("怪物卡片/") >= 0) {
    var reg = /^怪物卡片\/.*/;
    if (reg.test(msg)) {
      var newMsg = msg.replace("怪物卡片/", "");
      var sortby = newMsg.replace(/(^[\s]*)|([\s]*$)/g, "").toLowerCase();
      var storyinit = new roxFun();
      if (sortby == "小") {
        storyinit.getMonsterCard(event, "small");
      } else if (sortby == "小小") {
        storyinit.getMonsterCard(event, "xsmall");
      } else if (sortby == "中") {
        storyinit.getMonsterCard(event, "center");
      } else if (sortby == "大") {
        storyinit.getMonsterCard(event, "L");
      } else if (sortby == "大大") {
        storyinit.getMonsterCard(event, "LL");
      }
    }
  } else if (msg == "怪物卡片") {
    var storyinit = new roxFun();
    storyinit.getMonsterCard(event, "L");
  }

  switch (msg) {
    case "ROX生活技能":
      var text = [
        {
          type: "text",
          text: `生活技能取得資訊整理(轉巴哈)
https://forum.gamer.com.tw/C.php?bsn=37030&snA=132&tnum=3&fbclid=IwAR0Sj3oJp1dS2aZSM2XIJivlQqwD71VdSqL0w2wM8rv94xYhtPuvzLCMRF4
    `,
        },
      ];
      event.reply(text);
      break;
    case "ROX新手攻略":
      var text = [
        {
          type: "text",
          text: `開服一天要做的事
https://forum.gamer.com.tw/C.php?bsn=37030&snA=324&tnum=11`,
        },
        {
          type: "text",
          text: `https://www.youtube.com/watch?v=tFBTtfNe-K0&feature=youtu.be&ab_channel=%E9%80%86%E5%8D%81%E5%AD%97%E6%9E%B6`,
        },
      ];
      event.reply(text);
      break;
    case "ROX附魔":
      // var text = [{
      //     type: 'image',
      //     originalContentUrl: 'https://i.imgur.com/wHJzIeq.png',
      //     previewImageUrl: 'https://i.imgur.com/wHJzIeq.png'
      // }, {
      //     type: 'image',
      //     originalContentUrl: 'https://i.imgur.com/2faNEie.png',
      //     previewImageUrl: 'https://i.imgur.com/2faNEie.png'
      // }, {
      //     type: 'image',
      //     originalContentUrl: 'https://i.imgur.com/NQ9qeV3.png',
      //     previewImageUrl: 'https://i.imgur.com/NQ9qeV3.png'
      // }];
      // event.reply(text);
      var storyinit = new roxFun();
      storyinit.getMagicInfo(event);
      break;
    case "ROX天氣":
      var text = [
        {
          type: "image",
          originalContentUrl: "https://i.imgur.com/lZlvu1w.jpg",
          previewImageUrl: "https://i.imgur.com/lZlvu1w.jpg",
        },
      ];
      event.reply(text);
      break;
    case "新世代職業攻略":
      var storyinit = new roxFun();
      storyinit.getWorkInfo(event);
      break;
    default:
      break;
  }
}
module.exports = w6;