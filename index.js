var linebot = require("linebot");
var botsdk = require("@line/bot-sdk");
var express = require("express");
var member = require("./member");
var storyinit = require("./storyinit");
var w1 = require("./w1");
var w2 = require("./w2");
var w4 = require("./w4");
var w6 = require("./w6");
var w8 = require("./w8");
var w9 = require("./w9");
var translate = require('translate-google');
let funJson = require("./function.json");
let pictureJson = require("./picture.json");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var CHANNEL_ACCESS_TOKEN =
  "RcZn7NPcFGBr9huArzndJAVP08yBlLQjcckiBRkmJ0a4aUZ008kqPLkyc92BREQVF+qzUFtlSYpaZ8xni0JoU6B1Agn67WS0j95aCPqjuh2dW56dm4NsNHSt54W6veWXuRZwZi+I1ZpIUAcpO75uYQdB04t89/1O/w1cDnyilFU=";
var bot = linebot({
  channelId: "1655668137",
  channelSecret: "007e0da6963b0add2e970e378f428942",
  channelAccessToken: CHANNEL_ACCESS_TOKEN,
});
var firebase = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
});
var db = firebase.firestore();
//這一段的程式是專門處理當有人傳送文字訊息給LineBot時，我們的處理回應
var TransMsg;
const client = new botsdk.Client({
  channelAccessToken: CHANNEL_ACCESS_TOKEN,
});

function randPassword() {
  var text = [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "1234567890",
  ];
  var rand = function (min, max) {
    return Math.floor(Math.max(min, Math.random() * (max + 1)));
  };
  var len = rand(8, 16); // 长度为8-16
  var pw = "";
  for (i = 0; i < len; ++i) {
    var strpos = rand(0, 2);
    pw += text[strpos].charAt(rand(0, text[strpos].length));
  }
  return pw;
}

function getWorkList(event) {
  var workset = "";
  var weg = db.collection("gameWork");
  weg.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      workset += "📗 " + doc.data()["name"] + " 👉 " + doc.id + "\n";
    });
    var replyText = [
      {
        type: "text",
        text: `請照以下格式輸入完成設定:
設定資料庫/遊戲代號
🔥支援遊戲代號如下🔥
${workset}
範例: 設定資料庫/w2`,
      },
    ];
    event.reply(replyText);
  });
}

function noUserIdInfo(event){
  var text = [
    {
      type: "text",
      text: "抱歉您的帳號屬於異常帳號，無法使用機器人的簽到相關功能，請洽詢LINE官方處理!造成不便請見諒\nLINE客服請點:\nhttps://contact-cc.line.me/zh-hant/",
    },
  ];
  event.reply(text);
}

function WorkSetting(event, TransMsg) {
  if (TransMsg.indexOf("設定資料庫") >= 0) {
    var reg = /^設定資料庫\/.*/;
    if (reg.test(TransMsg)) {
      var newMsg = TransMsg.replace("設定資料庫/", "");
      var workNum = newMsg.replace(/(^[\s]*)|([\s]*$)/g, "");
      // var workset = "";
      // var weg = db.collection('gameWork');
      // weg.get().then(querySnapshot => {
      //     querySnapshot.forEach(doc => {
      //         if()

      //     });

      // });
      var botWork = db.collection("gameWork").doc(workNum);
      botWork.get().then((doc) => {
        if (doc.data()) {
          var login = db.collection("loginGroup").doc(event.source.groupId);
          login
            .update({
              work: workNum,
            })
            .then(() => {
              var replyText = [
                {
                  type: "text",
                  text: `群組資料庫設定成功`,
                },
              ];
              event.reply(replyText);
            });
        } else {
          getWorkList(event);
        }
      });
    } else {
      getWorkList(event);
    }
  } else {
    var replyText = [
      {
        type: "text",
        text: `首次使用請先完成群組資料庫設定才可繼續使用
請輸入<<設定資料庫>>完成設定
P.s 設定完成後資料庫無法再做更改 如要更改請將機器人請離群組後再重新加入(舊的簽到資料、學習內容都會清空)`,
      },
    ];
    event.reply(replyText);
  }
}

bot.on("follow", function (event) {
  var replyText = [
    {
      type: "text",
      text: "可以輸入【功能】查詢我提供的功能喔,完整功能需先將我加入群組後才能使用",
    },
  ];
  event.reply(replyText);
});
bot.on("join", function (event) {
  client.getGroupSummary(event.source.groupId).then((Name) => {
    var replyText = [
      {
        type: "text",
        text:
          "感謝邀請加入" +
          Name.groupName +
          "請先輸入【設定資料庫】完成遊戲資料設定後輸入【功能】將可查詢我所提供的功能喔。",
      },
    ];
    event.reply(replyText);

    var login = db.collection("loginGroup").doc(event.source.groupId);
    login
      .set({
        groupPass: randPassword(),
        groupid: event.source.groupId,
        groupName: Name.groupName,
        allow: true,
        white: false,
        work: "",
      })
      .then(() => {
        var ref = db
          .collection("loginGroup")
          .doc(event.source.groupId)
          .collection("Learn")
          .doc("title");
        ref
          .set({
            content: "學習內容",
            learnKey: "學習關鍵字",
          })
          .then(() => { });
        var memberList = db
          .collection("loginGroup")
          .doc(event.source.groupId)
          .collection("memberList")
          .doc("title");
        memberList
          .set({
            gameUser: "遊戲ID",
            gameWork: "遊戲職業",
            groupid: "群組id",
            time: "簽到時間",
            userName: "Line名稱",
            userid: "userId",
            workTag: "職業代號"
          })
          .then(() => { });
      });
  });
});
bot.on("leave", function (event) {
  var groupid = event.source.groupId;
  var ref = db
    .collection("loginGroup")
    .doc(event.source.groupId)
    .collection("memberList");
  ref.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      var setDoc = ref.doc(doc.id);
      setDoc.get().then((doc) => {
        if (doc.data()) {
          setDoc.delete().then(() => {
            console.log("刪除簽到");
          });
        }
      });
    });
  });
  var lef = db
    .collection("loginGroup")
    .doc(event.source.groupId)
    .collection("memberLeave");
  lef.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      var setDoc = ref.doc(doc.id);
      setDoc.get().then((doc) => {
        if (doc.data()) {
          setDoc.delete().then(() => {
            console.log("刪除離群名單");
          });
        }
      });
    });
  });
  var reg = db.collection("loginGroup");
  reg.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.data()["groupid"] == groupid) {
        var deleteList = db.collection("loginGroup").doc(doc.id);
        deleteList.get().then((doc) => {
          if (doc.data()) {
            let learn = deleteList.collection("Learn");
            learn.get().then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                learn.doc(doc.id).delete();
              });
              console.log("刪除學習資訊");
            });
            deleteList.delete().then(() => {
              console.log("刪除群組資訊");
            });
          }
        });
      }
    });
  });
});

bot.on("memberJoined", function (event) {
  client.getGroupSummary(event.source.groupId).then((profile) => {
    var postText = [];
    postText.push({
      type: "text",
      text:`歡迎加入<${profile.groupName} >!
本群已使用【兔管家TUTUBOT-LINE群管理系統】
請直接輸入【簽到】可開啟簽到引導
輸入【功能】可了解機器人所提供的功能
💥以上指令請輸入【】內文字💥 `
    });

    event.reply(postText);
  });
});
bot.on("memberLeft", function (event) {
  var ref = db
    .collection("loginGroup")
    .doc(event.source.groupId)
    .collection("memberList");
  var hasList = false;
  ref.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      for (var i = 0; i < event.left.members.length; i++) {
        if (
          doc.data()["userid"] == event.left.members[i].userId &&
          doc.data()["groupid"] == event.source.groupId
        ) {
          var deleteList = db
            .collection("loginGroup")
            .doc(event.source.groupId)
            .collection("memberList")
            .doc(doc.data()["userid"] + doc.data()["groupid"]);
          deleteList.delete().then(() => {
            var allObj = {};
            allObj = {
              gameUser: doc.data()["gameUser"],
              userName: doc.data()["userName"],
              userid: doc.data()["userid"],
            };
            var setDoc = db
              .collection("loginGroup")
              .doc(event.source.groupId)
              .collection("memberLeave")
              .doc(doc.data()["userid"] + doc.data()["groupid"]);
            setDoc.set(allObj).then(() => {
              console.log("加入退群名單");
            });
          });
        }
      }
    });
  });
});
function notAlow(event) {
  var replyText = [
    {
      type: "text",
      text: `此群未經過許可使用，請盡快找管理員申請使用`,
    },
  ];
  event.reply(replyText);
}
bot.on("message", function (event) {
  if ((event.message.type = "text")) {
    console.log(event.message.text);
    console.log(process.env.CHANNEL_ACCESS_TOKEN,process.env.CHANNEL_SECRET)
    if (event.message.text != undefined && event.message.text != "") {
      translate(event.message.text, { from: 'zh-cn', to: 'zh-tw' }).then(res => {
        TransMsg = res;
        console.log(TransMsg)
        if (event.source.groupId) {
          //收到文字訊息時，直接把收到的訊息傳回去
          if (TransMsg != "") {
            if (TransMsg.indexOf("設定資料庫") >= 0) {
              var ref = db.collection("loginGroup").doc(event.source.groupId);
              ref.get().then((doc) => {
                var allow = doc.data()["allow"];
                if (allow == false) {
                  notAlow(event);
                  return;
                }
                if (doc.data()["work"] == "") {
                  WorkSetting(event, TransMsg);
                  return;
                }
              });
            }

            if (TransMsg.length < 7 && TransMsg.indexOf("兔兔抽") >= 0) {
              var ref = db.collection("loginGroup").doc(event.source.groupId);
              ref.get().then((doc) => {
                var allow = doc.data()["allow"];
                if (allow == false) {
                  notAlow(event);
                  return;
                }
                if (doc.data()["work"] == "") {
                  WorkSetting(event, TransMsg);
                  return;
                }
                var re = /^[0-9]+$/;
                var num = parseInt(
                  res.replace(/\s+/g, "").replace("兔兔抽", "")
                );
                if (re.test(num)) {
                  var setMember = new member();
                  var list = db
                    .collection("loginGroup")
                    .doc(event.source.groupId)
                    .collection("memberList");
                  if (list) {
                    setMember.randomCount(event, num, list);
                  }
                } else {
                  var replyText = [
                    {
                      type: "text",
                      text: `請輸入 『兔兔抽+數字1~10』
範例 兔兔抽5`,
                    },
                  ];
                  event.reply(replyText);
                }
              });
            }
            if (TransMsg.indexOf("$學習") >= 0) {
              var ref = db.collection("loginGroup").doc(event.source.groupId);
              ref.get().then((doc) => {
                var allow = doc.data()["allow"];
                if (allow == false) {
                  notAlow(event);
                  return;
                }
                if (doc.data()["work"] == "") {
                  WorkSetting(event, TransMsg);
                  return;
                }
                var reg = /^\$學習;.+;./;
                console.log("學習", TransMsg)
                if (reg.test(TransMsg)) {
                  var newMsg = TransMsg.replace("$學習;", "");
                  var ar = newMsg.split(";");
                  console.log("學習", ar)
                  var keyword = ar[0].replace(/(^[\s]*)|([\s]*$)/g, "");
                  if ((keyword != "") & (keyword.length <= 10)) {
                    if (keyword == "學習" || keyword == "忘記") {
                      var text = [
                        {
                          type: "text",
                          text: `指令不可使用請重新設定`,
                        },
                      ];
                      event.reply(text);
                      return;
                    }
                    var content = ar[1].replace(/(^[\s]*)|([\s]*$)/g, "");
                    if (content != "") {
                      var ref = db.collection("loginGroup").doc(event.source.groupId).collection("Learn");
                      var learnNum = 0;
                      ref.get().then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                          if (doc.id != "title") {
                            learnNum++;
                          }
                        });
                        if (learnNum >= 25) {
                          var text = [
                            {
                              type: "text",
                              text: `一個群組只可設定最多20組自訂指令，請先刪除舊的指令後再重新設定!!
  目前此群有<<${learnNum}>>個自訂指令                                                    
                                                  `,
                            },
                          ];
                          event.reply(text);
                        } else {
                          var refLearn = db.collection("loginGroup").doc(event.source.groupId).collection("Learn").doc(keyword);
                          refLearn
                            .set({
                              content: content,
                              groupId: event.source.groupId,
                              learnKey: keyword,
                            })
                            .then(() => {
                              var text = [
                                {
                                  type: "text",
                                  text: `指令設定成功，自訂指令請使用 $+設定指令`,
                                },
                              ];
                              event.reply(text);
                            });
                        }
                      });
                    } else {
                      var text = [
                        {
                          type: "text",
                          text: `指令內容不可空白請重新設定`,
                        },
                      ];
                      event.reply(text);
                    }
                  } else {
                    var text = [
                      {
                        type: "text",
                        text: `指令不可空白或超過10字請重新設定`,
                      },
                    ];
                    event.reply(text);
                  }
                } else {
                  var text = [
                    {
                      type: "text",
                      text: `請依照以下格式輸入(指令請勿與預設指令使用相同文字，長度低於10字 )
  $學習;關鍵字指令;學習內容
  例如 $學習;公告;公告內容`,
                    },
                  ];
                  event.reply(text);
                }
              });
            } else if (TransMsg.indexOf("$忘記") >= 0) {
              var ref = db.collection("loginGroup").doc(event.source.groupId);
              ref.get().then((doc) => {
                var allow = doc.data()["allow"];
                if (allow == false) {
                  notAlow(event);
                  return;
                }

                if (doc.data()["work"] == "") {
                  WorkSetting(event, TransMsg);
                  return;
                }
                var reg = /^\$忘記;.+$/;
                if (reg.test(TransMsg)) {
                  var newMsg = TransMsg.replace("$忘記;", "");
                  var keyword = newMsg.replace(/(^[\s]*)|([\s]*$)/g, "");
                  var ref = db
                    .collection("loginGroup")
                    .doc(event.source.groupId)
                    .collection("Learn");
                  ref.get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                      if (doc.id == keyword) {
                        var deleteList = db
                          .collection("loginGroup")
                          .doc(event.source.groupId)
                          .collection("Learn")
                          .doc(keyword);
                        deleteList.delete().then(() => {
                          var allText = [
                            {
                              type: "text",
                              text: "刪除自訂指令<" + keyword + ">成功",
                            },
                          ];
                          event.reply(allText);
                        });
                      }
                    });
                  });
                } else {
                  var text = [
                    {
                      type: "text",
                      text: `請依照以下格式輸入
  $忘記;關鍵字
  例如 $忘記;公告`,
                    },
                  ];
                  event.reply(text);
                }
              });
            } else if (TransMsg.indexOf("$") >= 0) {
              var ref = db.collection("loginGroup").doc(event.source.groupId);
              ref.get().then((doc) => {
                var allow = doc.data()["allow"];
                if (allow == false) {
                  notAlow(event);
                  return;
                }

                if (doc.data()["work"] == "") {
                  WorkSetting(event, TransMsg);
                  return;
                }
                var regTxt = /^\$.+$/;
                if (regTxt.test(TransMsg)) {
                  var searchTxt = TransMsg.replace("$", "");
                  var ref = db
                    .collection("loginGroup")
                    .doc(event.source.groupId)
                    .collection("Learn");
                  ref.get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                      if (
                        doc.id == searchTxt &&
                        doc.data()["learnKey"] == searchTxt
                      ) {
                        var content = doc.data()["content"];
                        var reg =
                          /(https:[^:<>"]*\/)([^:<>"]*)(\.((png!thumbnail)|(png)|(jpg)|(webp)))/g;
                        if (reg.test(content)) {
                          var text = [
                            {
                              type: "image",
                              originalContentUrl: content,
                              previewImageUrl: content,
                            },
                          ];
                        } else {
                          var text = [
                            {
                              type: "text",
                              text: content,
                            },
                          ];
                        }

                        event.reply(text);
                      }
                    });
                  });
                }
              });
            }
            if (TransMsg.indexOf("簽到/") >= 0) {
              var ref = db.collection("loginGroup").doc(event.source.groupId);
              ref.get().then((doc) => {
                var allow = doc.data()["allow"];
                if (allow == false) {
                  notAlow(event);
                  return;
                }

                if (doc.data()["work"] == "") {
                  WorkSetting(event, TransMsg);
                  return;
                }

                var reg = /^簽到\/.*\/.*/;
                var workNum = doc.data()["work"];
                var botWork = db
                  .collection("gameWork")
                  .doc(workNum)
                  .collection("workList");
                var work = [];
                var tag = [];
                var workList = "";
                var otherST = "";
                if (doc.data()["custom"] && doc.data()["custom"].length > 0) {
                  for (var i = 0; i < doc.data()["custom"].length; i++) {
                    otherST += "/" + doc.data()["custom"][i];
                  }
                }
                botWork.get().then((querySnapshot) => {
                  var index = 0;
                  querySnapshot.forEach((doc) => {
                    work.push(doc.data()["name"]);
                    tag.push(doc.data()["tag"]);
                    workList += doc.data()["name"];

                    if (index < querySnapshot._size - 1) {
                      workList += " , ";
                    }
                    index++;
                  });
                  if (reg.test(TransMsg)) {
                    var newMsg = TransMsg.replace("簽到/", "");
                    var ar = newMsg.split("/");
                    var name = ar[0].replace(/(^[\s]*)|([\s]*$)/g, "");
                    var workName = ar[1].replace(/(^[\s]*)|([\s]*$)/g, "");
                    var otherlogin = [];
                    if (
                      doc.data()["custom"] &&
                      doc.data()["custom"].length > 0
                    ) {
                      for (var i = 0; i < doc.data()["custom"].length; i++) {
                        if (ar[2 + i]) {
                          otherlogin.push({
                            name: ar[2 + i].replace(/(^[\s]*)|([\s]*$)/g, ""),
                            key: "custom" + i,
                          });
                        }
                      }
                    }
                    var today = new Date();
                    var userId = event.source.userId;
                    var groupId = event.source.groupId;
                    var currentDateTime =
                      today.getFullYear() +
                      "/" +
                      (today.getMonth() + 1) +
                      "/" +
                      today.getDate() +
                      " " +
                      today.getHours() +
                      ":" +
                      today.getMinutes();
                    if (work.indexOf(workName) >= 0) {
                      var workTag = tag[work.indexOf(workName)];
                      if (!userId || userId == undefined) {
                        noUserIdInfo(event);
                        return
                      };
                      client
                        .getGroupMemberProfile(groupId, userId)
                        .then((profile) => {
                          var allObj = {};
                          allObj = {
                            gameUser: name,
                            gameWork: workName,
                            groupid: groupId,
                            time: currentDateTime,
                            userName: profile.displayName,
                            userid: userId,
                            workTag: workTag,
                            oldID: []
                          };
                          for (var i = 0; i < otherlogin.length; i++) {
                            allObj[otherlogin[i].key] = otherlogin[i].name;
                          }
                          var memberlist = db.collection('loginGroup').doc(groupId).collection('memberList').doc(userId + groupId);
                          var str = '簽到完成';
                          var oldIdLength = 0;
                          memberlist.get().then((doc) => {
                            if (doc.exists) {
                              if (doc.data()['oldID']) allObj.oldID = doc.data()['oldID'];
                              if (doc.data()['userid'] == userId && name != doc.data()['gameUser']) {
                                allObj.oldID.push(doc.data()['gameUser'])
                              }
                              if (allObj.oldID.length > 0) {
                                oldIdLength = allObj.oldID.length;
                              }
                              str = '修改簽到完成';
                            }
                            memberlist.set(allObj).then(() => {
                              var allText = {
                                "type": "flex",
                                "altText": str,
                                "contents": {
                                  "type": "bubble",
                                  "header": {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                      {
                                        "type": "text",
                                        "text": str,
                                        "color": "#ffffff",
                                        "align": "center"
                                      }
                                    ],
                                    "backgroundColor": "#187bdc",
                                    "paddingTop": "md",
                                    "paddingBottom": "md"
                                  },
                                  "hero": {
                                    "type": "image",
                                    "url": profile.pictureUrl,
                                    "size": "full",
                                    "aspectRatio": "16:13",
                                    "aspectMode": "cover"
                                  },
                                  "body": {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                      {
                                        "type": "box",
                                        "layout": "vertical",
                                        "margin": "none",
                                        "spacing": "sm",
                                        "contents": [
                                          {
                                            "type": "box",
                                            "layout": "baseline",
                                            "spacing": "sm",
                                            "contents": [
                                              {
                                                "type": "text",
                                                "text": "🔸 LINE ID",
                                                "color": "#187bdc",
                                                "size": "md",
                                                "flex": 3
                                              },
                                              {
                                                "type": "text",
                                                "text": profile.displayName,
                                                "wrap": true,
                                                "color": "#082645",
                                                "size": "md",
                                                "flex": 5
                                              }
                                            ]
                                          },
                                          {
                                            "type": "box",
                                            "layout": "baseline",
                                            "spacing": "sm",
                                            "contents": [
                                              {
                                                "type": "text",
                                                "text": "🔸 遊戲ID",
                                                "color": "#187bdc",
                                                "size": "md",
                                                "flex": 3
                                              },
                                              {
                                                "type": "text",
                                                "text": name,
                                                "wrap": true,
                                                "color": "#082645",
                                                "size": "md",
                                                "flex": 5
                                              }
                                            ]
                                          },
                                          {
                                            "type": "box",
                                            "layout": "baseline",
                                            "spacing": "sm",
                                            "contents": [
                                              {
                                                "type": "text",
                                                "text": "🔸 遊戲職業",
                                                "color": "#187bdc",
                                                "size": "md",
                                                "flex": 3
                                              },
                                              {
                                                "type": "text",
                                                "text": workName,
                                                "wrap": true,
                                                "color": "#082645",
                                                "size": "md",
                                                "flex": 5
                                              }
                                            ]
                                          },
                                          {
                                            "type": "box",
                                            "layout": "baseline",
                                            "spacing": "sm",
                                            "contents": [
                                              {
                                                "type": "text",
                                                "text": "🔸 已修改",
                                                "color": "#187bdc",
                                                "size": "md",
                                                "flex": 3
                                              },
                                              {
                                                "type": "text",
                                                "text": oldIdLength + " 次",
                                                "wrap": true,
                                                "color": "#082645",
                                                "size": "md",
                                                "flex": 5
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  "footer": {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [
                                      {
                                        "type": "text",
                                        "color": "#acd6ff",
                                        "text": "輸入<<名單>>可觀看簽到完成名單，",
                                        "size": "xs",
                                        "style": "italic",
                                        "wrap": true,
                                        "align": "center"
                                      },
                                      {
                                        "type": "text",
                                        "color": "#acd6ff",
                                        "text": "需要修改請重新輸入<<簽到>>",
                                        "size": "xs",
                                        "style": "italic",
                                        "wrap": true,
                                        "align": "center"
                                      }
                                    ],
                                    "borderWidth": "normal",
                                    "borderColor": "#acd6ff"
                                  }
                                }
                              };
                              event.reply(allText);
                              var deleteList = db
                                .collection("loginGroup")
                                .doc(groupId)
                                .collection("memberLeave")
                                .doc(userId + groupId);
                              deleteList.delete().then(() => {
                              });
                            });

                          });

                        });

                    } else {
                      var text = [
                        {
                          type: "text",
                          text:
                            "請照以下格式輸入\n簽到/遊戲暱稱/職業(限輸入: " +
                            workList +
                            ")" +
                            otherST+"\n如無法簽到",
                        },
                        {
                          type: "image",
                          originalContentUrl: "https://i.imgur.com/xvyphs2.jpg",
                          previewImageUrl: "https://i.imgur.com/xvyphs2.jpg",
                        },
                      ];
                      event.reply(text);
                    }
                  } else {
                    var text = [
                      {
                        type: "text",
                        text:
                          "請照以下格式輸入\n簽到/遊戲暱稱/職業(限輸入: " +
                          workList +
                          ")" +
                          otherST,
                      },
                      {
                        type: "image",
                        originalContentUrl: "https://i.imgur.com/xvyphs2.jpg",
                        previewImageUrl: "https://i.imgur.com/xvyphs2.jpg",
                      },
                    ];
                    event.reply(text);
                  }
                });
              });
            }
            switch (TransMsg) {
              case "我的":
                var ref = db.collection("loginGroup").doc(event.source.groupId);
                ref.get().then((doc) => {
                  var allow = doc.data()["allow"];
                  if (allow == false) {
                    notAlow(event);
                    return;
                  }

                  if (doc.data()["work"] == "") {
                    WorkSetting(event, TransMsg);
                    return;
                  }
                  var text = [
                    {
                      type: "text",
                      text:
                        "我所在的group為:" +
                        event.source.groupId +
                        "\nuserID為:" +
                        event.source.userId,
                    },
                  ];
                  event.reply(text);
                });

                break;
              case "簽到":
              case "簽到修改":
                var ref = db.collection("loginGroup").doc(event.source.groupId);
                ref.get().then((doc) => {
                  var allow = doc.data()["allow"];
                  if (allow == false) {
                    notAlow(event);
                    return;
                  }

                  if (doc.data()["work"] == "") {
                    WorkSetting(event, TransMsg);
                    return;
                  }
                  var otherST = "";
                  if (doc.data()["custom"] && doc.data()["custom"].length > 0) {
                    for (var i = 0; i < doc.data()["custom"].length; i++) {
                      otherST += "/" + doc.data()["custom"][i];
                    }
                  }
                  var workNum = doc.data()["work"];
                  var botWork = db
                    .collection("gameWork")
                    .doc(workNum)
                    .collection("workList");
                  var workList = "";
                  botWork.get().then((querySnapshot) => {
                    var index = 0;
                    querySnapshot.forEach((doc) => {
                      workList += doc.data()["name"];

                      if (index < querySnapshot._size - 1) {
                        workList += " , ";
                      }
                      index++;
                    });
                    var text = [
                      {
                        type: "text",
                        text:
                          "請照以下格式輸入\n簽到/遊戲暱稱/職業(限輸入: " +
                          workList +
                          ")" +
                          otherST,
                      },
                      {
                        type: "image",
                        originalContentUrl: "https://i.imgur.com/xvyphs2.jpg",
                        previewImageUrl: "https://i.imgur.com/xvyphs2.jpg",
                      },
                    ];
                    event.reply(text);
                  });
                });

                break;
              case "更新名單":
                var ref = db.collection("loginGroup").doc(event.source.groupId);
                ref.get().then((doc) => {
                  var allow = doc.data()["allow"];
                  if (allow == false) {
                    notAlow(event);
                    return;
                  }

                  if (doc.data()["work"] == "") {
                    WorkSetting(event, TransMsg);
                    return;
                  }
                  client.getGroupSummary(doc.data()["groupid"]).then((Name) => {
                    var setDoc = db
                      .collection("loginGroup")
                      .doc(event.source.groupId);
                    if (setDoc) {
                      setDoc
                        .update({
                          groupName: Name.groupName,
                          groupPass: randPassword(),
                        })
                        .then(() => {
                          var text = [
                            {
                              type: "text",
                              text: `更新名單成功`,
                            },
                          ];
                          event.reply(text);
                        });
                    }
                  });
                  var ref = db
                    .collection("loginGroup")
                    .doc(event.source.groupId)
                    .collection("memberList");
                  var workNum = doc.data()["work"];
                  var botWork = db
                    .collection("gameWork")
                    .doc(workNum)
                    .collection("workList");
                  var groupId = event.source.groupId;
                  var num = 0;
                  ref.get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                      if (
                        doc.id != "title" &&
                        doc.data()["groupid"] == groupId
                      ) {
                        client
                          .getGroupMemberProfile(groupId, doc.data()["userid"])
                          .then((profile) => {
                            botWork.get().then((querySnapshot) => {
                              querySnapshot.forEach((workdoc) => {
                                if (
                                  workdoc.data()["tag"] == doc.data()["workTag"]
                                ) {
                                  var setDoc = ref.doc(
                                    doc.data()["userid"] + groupId
                                  );
                                  setDoc
                                    .update({
                                      userName: profile.displayName,
                                      gameWork: workdoc.data()["name"],
                                    })
                                    .then(() => {
                                      num++;
                                      if (num >= querySnapshot.length) {
                                        var text = [
                                          {
                                            type: "text",
                                            text: `更新名單成功`,
                                          },
                                        ];
                                        event.reply(text);
                                      }
                                    });
                                }
                              });
                            });
                          });
                      }
                    });
                  });
                });

                break;
              case "刪除簽到":
              case "退坑":
                var ref = db.collection("loginGroup").doc(event.source.groupId);
                ref.get().then((doc) => {
                  var allow = doc.data()["allow"];
                  if (allow == false) {
                    notAlow(event);
                    return;
                  }

                  if (doc.data()["work"] == "") {
                    WorkSetting(event, TransMsg);
                    return;
                  }
                  var userId = event.source.userId;
                  var groupId = event.source.groupId;
                  if(!userId|| userId==undefined){
                    noUserIdInfo(event);
                    return
                  }
                  var ref = db
                    .collection("loginGroup")
                    .doc(event.source.groupId)
                    .collection("memberList");
                  var hasList = false;
                  ref.get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                      if (
                        doc.data()["userid"] == userId &&
                        doc.data()["groupid"] == groupId
                      ) {
                        hasList = true;
                      }
                    });
                    if (hasList) {
                      var deleteList = db
                        .collection("loginGroup")
                        .doc(event.source.groupId)
                        .collection("memberList")
                        .doc(userId + groupId);

                      deleteList.delete().then(() => {
                        var allText = [
                          {
                            type: "text",
                            text: "刪除簽到成功",
                          },
                          {
                            type: "image",
                            originalContentUrl:
                              "https://i.imgur.com/zmZI8WF.png",
                            previewImageUrl: "https://i.imgur.com/zmZI8WF.png",
                          },
                        ];
                        event.reply(allText);
                      });
                    } else {
                      var allText = [
                        {
                          type: "text",
                          text: "查無簽到資料無法刪除",
                        },
                      ];
                      event.reply(allText);
                    }
                  });
                });

                break;
              case "刪除退群名單":
                var lef = db
                  .collection("loginGroup")
                  .doc(event.source.groupId)
                  .collection("memberLeave");
                lef.get().then((querySnapshot) => {
                  querySnapshot.forEach((doc) => {
                    if (doc.id != "title") {
                      var setDoc = lef.doc(
                        doc.data()["userid"] + event.source.groupId
                      );
                      setDoc.get().then((doc) => {
                        if (doc.data()) {
                          setDoc.delete().then(() => {
                            console.log("刪除離群名單");
                          });
                        }
                      });
                    }
                  });
                });
                var allText = [
                  {
                    type: "text",
                    text: "刪除退群資料成功",
                  },
                ];
                event.reply(allText);
              case "退群名單":
                var list = db
                  .collection("loginGroup")
                  .doc(event.source.groupId)
                  .collection("memberLeave");
                if (list) {
                  var massg = [];
                  list.get().then((querySnapshot) => {
                    var listArray = [];
                    querySnapshot.forEach((doc) => {
                      massg.push({
                        "type": "text",
                        "text": "🔸" +
                          doc.data()["userName"] +
                          "(" +
                          doc.data()["gameUser"] +
                          ")",
                        "weight": "bold",
                        "size": "sm"
                      })
                      listArray.push(doc.data()["userName"]);
                    });
                    if (listArray.length > 0) {
                      var allText = {
                        "type": "flex",
                        "altText": "退群名單如下",
                        "contents": {
                          "type": "bubble",
                          "header": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                              {
                                "type": "text",
                                "text": "退群名單",
                                "weight": "bold",
                                "size": "lg",
                                "color": "#ffffff"
                              }
                            ],
                            "backgroundColor": "#187bdc",
                            "paddingBottom": "md",
                            "paddingTop": "md"
                          },
                          "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": massg
                          },
                          "footer": {
                            "type": "box",
                            "layout": "vertical",
                            "spacing": "sm",
                            "contents": [
                              {
                                "type": "button",
                                "style": "primary",
                                "height": "sm",
                                "action": {
                                  "type": "message",
                                  "label": "刪除退群名單",
                                  "text": "確認刪除退群"
                                },
                                "color": "#FF2D2D"
                              }
                            ],
                            "flex": 0
                          }
                        }
                      }
                      event.reply(allText);
                    } else {

                      var allText = [
                        {
                          type: "text",
                          text: "無退群名單",
                        },
                      ];
                      event.reply(allText);
                    }
                  });
                } else {
                }
                break;
              case "確認刪除退群":
                var allText = {
                  "type": "flex",
                  "altText": "退群名單",
                  "contents": {
                    "type": "bubble",
                    "size": "mega",
                    "body": {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
                        {
                          "type": "text",
                          "text": "確定刪除退群名單?",
                          "color": "#FF2D2D",
                          "size": "lg"
                        },
                        {
                          "type": "text",
                          "text": "(刪除後無法還原)",
                          "color": "#b7b7b7",
                          "size": "md"
                        }
                      ]
                    },
                    "footer": {
                      "type": "box",
                      "layout": "horizontal",
                      "contents": [
                        {
                          "type": "button",
                          "action": {
                            "type": "message",
                            "label": "確認刪除",
                            "text": "刪除退群名單"
                          },
                          "style": "primary",
                          "color": "#FF2D2D",
                          "offsetEnd": "sm"
                        },
                        {
                          "type": "button",
                          "action": {
                            "type": "message",
                            "label": "取消",
                            "text": "手癢按錯"
                          },
                          "style": "primary",
                          "color": "#cccccc",
                          "offsetStart": "sm"
                        }
                      ],
                      "alignItems": "center"
                    }
                  }
                }
                event.reply(allText);
                break;
              case "名單":
              case "會員名單":
                var ref = db.collection("loginGroup").doc(event.source.groupId);
                ref.get().then((doc) => {
                  var allow = doc.data()["allow"];
                  if (allow == false) {
                    notAlow(event);
                    return;
                  }

                  if (doc.data()["work"] == "") {
                    WorkSetting(event, TransMsg);
                    return;
                  }
                  if (event.source.userId == undefined) {
                    noUserIdInfo(event);
                    return;
                  }
                  client
                    .getGroupMemberProfile(
                      event.source.groupId,
                      event.source.userId
                    )
                    .then((profile) => {
                      var userName = profile.displayName;
                      client
                        .getGroupSummary(event.source.groupId)
                        .then((Name) => {
                          client
                            .getGroupMembersCount(event.source.groupId)
                            .then((id) => {
                              var list = db
                                .collection("loginGroup")
                                .doc(event.source.groupId)
                                .collection("memberList");
                              list.get().then((querySnapshot) => {
                                var ListData = [];
                                querySnapshot.forEach((docc) => {
                                  if (docc.id != "title") {
                                    ListData.push(docc.data());
                                  }
                                });
                                var total = ListData.length;
                                var groupTotal = id.count;
                                var percent =
                                  Math.floor((total / groupTotal) * 100) + "%";
                                var alltext = {
                                  type: "flex",
                                  altText:
                                    "【" + Name.groupName + "】 會員名單",
                                  contents: {
                                    type: "carousel",
                                    contents: [
                                      {
                                        type: "bubble",
                                        header: {
                                          type: "box",
                                          layout: "vertical",
                                          contents: [
                                            {
                                              type: "text",
                                              text:
                                                Name.groupName + " 簽到名單",
                                              color: "#ffffff",
                                              size: "md",
                                              weight: "bold",
                                              align: "center",
                                              wrap: false,
                                            },
                                          ],
                                          paddingAll: "lg",
                                          paddingStart: "lg",
                                          paddingEnd: "lg",
                                        },
                                        hero: {
                                          type: "image",
                                          url: Name.pictureUrl,
                                          size: "full",
                                          aspectRatio: "16:13",
                                          aspectMode: "cover",
                                          action: {
                                            type: "uri",
                                            uri:
                                              "https://member.majitoo.net/index.html?groupid=" +
                                              event.source.groupId +
                                              "&groupPass=" +
                                              doc.data()["groupPass"],
                                          },
                                        },
                                        body: {
                                          type: "box",
                                          layout: "vertical",
                                          contents: [
                                            {
                                              type: "box",
                                              layout: "horizontal",
                                              contents: [
                                                {
                                                  type: "text",
                                                  text: "完成簽到",
                                                  color: "#70b1f0",
                                                  size: "xs",
                                                  flex: 5,
                                                },
                                                {
                                                  type: "text",
                                                  text: percent + "",
                                                  color: "#187bdc",
                                                  size: "md",
                                                  flex: 5,
                                                  align: "end",
                                                  weight: "bold",
                                                },
                                              ],
                                            },
                                            {
                                              type: "box",
                                              layout: "vertical",
                                              contents: [
                                                {
                                                  type: "box",
                                                  layout: "vertical",
                                                  contents: [
                                                    {
                                                      type: "box",
                                                      layout: "vertical",
                                                      contents: [],
                                                      height: "5px",
                                                      width: percent,
                                                      backgroundColor:
                                                        "#187bdc",
                                                    },
                                                  ],
                                                  width: "100%",
                                                  backgroundColor: "#bcd9f6",
                                                  height: "5px",
                                                  cornerRadius: "sm",
                                                },
                                              ],
                                              margin: "sm",
                                            },
                                            {
                                              type: "text",
                                              text: "檢視完輸入<更新名單>可刷新驗證碼",
                                              color: "#187bdc",
                                              size: "sm",
                                              margin: "lg",
                                              align: "start",
                                            },
                                            {
                                              type: "separator",
                                              margin: "lg",
                                              color: "#bcd9f6",
                                            },
                                            {
                                              type: "box",
                                              layout: "vertical",
                                              contents: [
                                                {
                                                  type: "box",
                                                  layout: "horizontal",
                                                  contents: [
                                                    {
                                                      type: "text",
                                                      text: "🔸 群組人數：",
                                                      color: "#187bdc",
                                                      weight: "regular",
                                                      flex: 5,
                                                    },
                                                    {
                                                      type: "text",
                                                      text: groupTotal + "",
                                                      flex: 5,
                                                      align: "start",
                                                      color: "#082645",
                                                      size: "sm",
                                                      weight: "bold",
                                                    },
                                                  ],
                                                },
                                                {
                                                  type: "box",
                                                  layout: "horizontal",
                                                  contents: [
                                                    {
                                                      type: "text",
                                                      text: "🔸 簽到人數：",
                                                      color: "#187bdc",
                                                      weight: "regular",
                                                      flex: 5,
                                                    },
                                                    {
                                                      type: "text",
                                                      text: total + "",
                                                      flex: 5,
                                                      align: "start",
                                                      color: "#082645",
                                                      size: "sm",
                                                      weight: "bold",
                                                    },
                                                  ],
                                                  margin: "lg",
                                                },
                                                {
                                                  type: "box",
                                                  layout: "horizontal",
                                                  contents: [
                                                    {
                                                      type: "text",
                                                      text: "🔸 群驗證碼：",
                                                      color: "#187bdc",
                                                      weight: "regular",
                                                      flex: 5,
                                                    },
                                                    {
                                                      type: "text",
                                                      text: doc.data()[
                                                        "groupPass"
                                                      ],
                                                      flex: 5,
                                                      align: "start",
                                                      color: "#082645",
                                                      size: "sm",
                                                      weight: "bold",
                                                    },
                                                  ],
                                                  margin: "lg",
                                                },
                                                {
                                                  type: "box",
                                                  layout: "horizontal",
                                                  contents: [
                                                    {
                                                      type: "text",
                                                      text: "🔸 名單開啟：",
                                                      color: "#187bdc",
                                                      weight: "regular",
                                                      flex: 5,
                                                    },
                                                    {
                                                      type: "text",
                                                      text: userName,
                                                      flex: 5,
                                                      align: "start",
                                                      color: "#082645",
                                                      size: "sm",
                                                      weight: "bold",
                                                    },
                                                  ],
                                                  margin: "lg",
                                                },
                                              ],
                                              offsetTop: "lg",
                                              offsetBottom: "xl",
                                              offsetStart: "none",
                                              offsetEnd: "md",
                                              paddingAll: "lg",
                                            },
                                          ],
                                          paddingAll: "xl",
                                          paddingBottom: "xxl",
                                        },
                                        footer: {
                                          type: "box",
                                          layout: "horizontal",
                                          spacing: "sm",
                                          contents: [
                                            // {
                                            //     "type": "box",
                                            //     "layout": "vertical",
                                            //     "contents": [
                                            //         {
                                            //             "type": "button",
                                            //             "height": "md",
                                            //             "action": {
                                            //                 "type": "message",
                                            //                 "label": "更新名單",
                                            //                 "text": "更新名單"
                                            //             },
                                            //             "flex": 5,
                                            //             "style": "link",
                                            //             "color": "#000000"
                                            //         }
                                            //     ],
                                            //     "backgroundColor": "#dcdfe5",
                                            //     "flex": 5,
                                            //     "margin": "none"
                                            // },
                                            {
                                              type: "box",
                                              layout: "vertical",
                                              contents: [
                                                {
                                                  type: "button",
                                                  style: "link",
                                                  height: "md",
                                                  action: {
                                                    type: "uri",
                                                    label: "開啟名單",
                                                    uri:
                                                      "https://shela1216.github.io/botMemberList/index.html?groupid=" +
                                                      event.source.groupId +
                                                      "&groupPass=" +
                                                      doc.data()["groupPass"],
                                                  },
                                                  flex: 5,
                                                  margin: "none",
                                                  color: "#ffffff",
                                                },
                                              ],
                                              backgroundColor: "#187bdc",
                                              flex: 5,
                                              margin: "none",
                                            },
                                          ],
                                          flex: 0,
                                          paddingAll: "none",
                                        },
                                        styles: {
                                          header: {
                                            backgroundColor: "#187bdc",
                                          },
                                          footer: {},
                                        },
                                      },
                                    ],
                                  },
                                };

                                event.reply(alltext).then(function (data) { });
                              });
                            });
                        });
                    })
                    .catch((err) => {
                      // error handling
                    });
                });

                break;
              case "職業統計":
              case "簽到統計":
                var ref = db.collection("loginGroup").doc(event.source.groupId);
                ref.get().then((doc) => {
                  var allow = doc.data()["allow"];
                  if (allow == false) {
                    notAlow(event);
                    return;
                  }

                  if (doc.data()["work"] == "") {
                    WorkSetting(event, TransMsg);
                    return;
                  }
                  var setMember = new member();
                  var list = db
                    .collection("loginGroup")
                    .doc(event.source.groupId)
                    .collection("memberList");
                  var workNum = doc.data()["work"];
                  var botWork = db
                    .collection("gameWork")
                    .doc(workNum)
                    .collection("workList");
                  var work = [];
                  botWork.get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                      work.push(doc.data());
                    });
                    setMember.setMemberCount(event, list, work);
                  });
                });

                break;
              case "自訂指令":
                var ref = db.collection("loginGroup").doc(event.source.groupId);
                ref.get().then((doc) => {
                  var allow = doc.data()["allow"];
                  if (allow == false) {
                    notAlow(event);
                    return;
                  }

                  if (doc.data()["work"] == "") {
                    WorkSetting(event, TransMsg);
                    return;
                  }
                  var ref = db
                    .collection("loginGroup")
                    .doc(event.source.groupId)
                    .collection("Learn");
                  var content = "";
                  ref.get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                      if (doc.id != "title") {
                        content += "『$" + doc.data()["learnKey"] + "』 ";
                      }
                    });

                    if (content) {
                      var text = [
                        {
                          type: "text",
                          text: "自訂指令有:" + content,
                        },
                      ];
                      event.reply(text);
                    } else {
                      var text = [
                        {
                          type: "text",
                          text: "尚未有自訂指令請輸入 $學習 開始新增自訂指令",
                        },
                      ];
                      event.reply(text);
                    }
                  });
                });

                break;
              default:
                break;
            }
          }
        }
        if (TransMsg != "") {
          w1(event, TransMsg);
          w2(event, TransMsg);
          w4(event, TransMsg);
          w6(event, TransMsg);
          w8(event, TransMsg);
          w9(event, TransMsg);
        }

        if (TransMsg.indexOf("離開群組") >= 0) {
          var reg = /^離開群組\/.*/;
          var loginGroup = db.collection("loginGroup");
          if (reg.test(TransMsg)) {
            var newMsg = TransMsg.replace("離開群組/", "");
            var groupid = newMsg.replace(/(^[\s]*)|([\s]*$)/g, "");
            loginGroup.get().then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                if (doc.id == groupid) {
                  client.leaveGroup(groupid);
                  var ref = db
                    .collection("loginGroup")
                    .doc(groupid)
                    .collection("memberList");
                  ref.get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                      if (doc.id != "title") {
                        var setDoc = ref.doc(
                          doc.data()["userid"] + groupid
                        );
                        setDoc.get().then((doc) => {
                          if (doc.data()) {
                            setDoc.delete().then(() => {
                              console.log("刪除簽到");
                            });
                          }
                        });
                      }
                    });
                  });
                  if (doc.data()["groupid"] == groupid) {
                    var deleteList = db
                      .collection("loginGroup")
                      .doc(doc.data()["groupid"]);
                    deleteList.get().then((doc) => {
                      if (doc.data()) {
                        let learn = deleteList.collection("Learn");
                        learn.get().then((querySnapshot) => {
                          querySnapshot.forEach((doc) => {
                            learn.doc(doc.id).delete();
                          });
                          console.log("刪除學習資訊");
                        });
                        deleteList.delete().then(() => {
                          console.log("刪除群組資訊");
                          var allText = [
                            {
                              type: "text",
                              text: "已成功離開群群<" + groupid + ">",
                            },
                          ];
                          event.reply(allText);
                        });
                      }
                    });
                  }
                }
              });
            });
          }
        }
        if (TransMsg.indexOf("群發公告/") >= 0) {
          var reg = /^群發公告\/.*/;
          var loginGroup = db.collection("loginGroup");
          if (reg.test(TransMsg)) {
            var newMsg = TransMsg.replace("群發公告/", "");
            var groupid = newMsg.replace(/(^[\s]*)|([\s]*$)/g, "");
            loginGroup.get().then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                if (doc.id != "title" && doc.data()['white'] != true) {
                  var allText = [
                    {
                      type: "text",
                      text: newMsg,
                    },
                  ];
                  client.pushMessage(doc.data()['groupid'], allText).then(() => {
                    console.log(allText, doc.data()['groupid'])
                  })
                }
              });
            });
            var allText = [
              {
                type: "text",
                text: "群發公告成功",
              },
            ];
            event.reply(allText)
          }
        }
        if (TransMsg.indexOf("翻譯") >= 0) {
          var reg = /^翻譯;.+$/;
          if (reg.test(TransMsg)) {
            var newMsg = TransMsg.replace("翻譯;", "");
            translate(newMsg, { to: 'zh-tw' }).then(res => {
              var text = [
                {
                  type: "text",
                  text: res,
                },
              ];
              event.reply(text);
            }).catch(err => {
              console.error(err)
            })

          } else {
            var text = [
              {
                type: "text",
                text: `請依照以下格式輸入
翻譯;欲翻譯的內容
例如 翻譯;hello`,
              },
            ];
            event.reply(text);
          }
        }
        //個人模式專屬指令
        switch (TransMsg) {
          case "功能":
            var story = new storyinit();
            var workList = "";
            if (event.source.groupId) {
              var ref = db
                .collection("loginGroup")
                .doc(event.source.groupId)
                .collection("Learn");
              var loginGrp = db
                .collection("loginGroup")
                .doc(event.source.groupId);
              var workNum = "";
              var NormalList = "";
              if (loginGrp) {
                loginGrp.get().then((doc) => {
                  if (doc.data()["work"] == "") {
                    WorkSetting(event, TransMsg);
                    return;
                  }
                  if (doc.exists) {
                    workNum = doc.data()["work"];
                  } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                  }
                  if (workNum) {
                    var learnContent = [];
                    ref.get().then((querySnapshot) => {
                      querySnapshot.forEach((doc) => {
                        if (doc.id != "title") {
                          learnContent.push({
                            type: "text",
                            text: "$" + doc.data()["learnKey"],
                            wrap: true,
                            size: "xs",
                            weight: "bold",
                            color: "#187bdc",
                            align: "start",
                            margin: "xs",
                            action: {
                              type: "message",
                              text: "$" + doc.data()["learnKey"],
                            },
                            contents: [],
                          });
                        }
                      });
                      if (learnContent.length > 0) {
                        story.postOption(
                          event,
                          learnContent,
                          true,
                          workNum,
                          funJson,
                          true
                        );
                      } else {
                        story.postOption(
                          event,
                          null,
                          true,
                          workNum,
                          funJson,
                          true
                        );
                      }
                    });
                  }
                });
              } else {
                story.postOption(event, null, false, null, funJson, true);
              }
            } else {
              story.postOption(event, null, false, null, funJson, true);
            }

            break;
          case "吉娃娃":
            var data = pictureJson.dog;
            var urlData = [];
            for (var i = 0; i < data.length; i++) {
              urlData.push(data[i]);
            }
            var length = urlData.length - 1;
            //随机数
            var random = Math.floor(Math.random() * length);
            //向下取整
            if (length > 0) {
              var imgURL = urlData[random];

              var text = [
                {
                  type: "image",
                  originalContentUrl: imgURL,
                  previewImageUrl: imgURL,
                },
              ];
              event.reply(text);
            }

            break;
          case "可愛":
            var data = pictureJson.cute;
            var urlData = [];
            for (var i = 0; i < data.length; i++) {
              urlData.push(data[i]);
            }
            var length = urlData.length - 1;
            //随机数
            var random = Math.floor(Math.random() * length);
            //向下取整
            if (length > 0) {
              var imgURL = urlData[random];

              var text = [
                {
                  type: "image",
                  originalContentUrl: imgURL,
                  previewImageUrl: imgURL,
                },
              ];
              event.reply(text);
            }
            break;
          case "妹子":
            var data = pictureJson.girl;
            var urlData = [];
            for (var i = 0; i < data.length; i++) {
              urlData.push(data[i]);
            }
            var length = urlData.length - 1;
            //随机数
            var random = Math.floor(Math.random() * length);
            //向下取整
            if (length > 0) {
              var imgURL = urlData[random];

              var text = [
                {
                  type: "image",
                  originalContentUrl: imgURL,
                  previewImageUrl: imgURL,
                },
              ];
              event.reply(text);
            }
            break;
          case "girl":
            var data = pictureJson.girl;
            var urlData = [];
            for (var i = 0; i < data.length; i++) {
              urlData.push(data[i]);
            }
            var length = urlData.length - 1;
            //随机数
            var random = Math.floor(Math.random() * length);
            //向下取整
            if (length > 0) {
              var imgURL = urlData[random];

              var text = [
                {
                  type: "image",
                  originalContentUrl: imgURL,
                  previewImageUrl: imgURL,
                },
              ];
              event.reply(text);
            }
            break;
          case "帥哥":
          case "鮮肉":
            var data = pictureJson.boy;
            var urlData = [];
            for (var i = 0; i < data.length; i++) {
              urlData.push(data[i]);
            }
            var length = urlData.length - 1;
            //随机数
            var random = Math.floor(Math.random() * length);
            //向下取整
            if (length > 0) {
              var imgURL = urlData[random];

              var text = [
                {
                  type: "image",
                  originalContentUrl: imgURL,
                  previewImageUrl: imgURL,
                },
              ];
              event.reply(text);
            }
            break;
          case "二次元":
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "https://www.rrll.cc/tuceng/ecy.php?return=json");
            xhr.send();
            xhr.onreadystatechange = function () {
              if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                  var data = JSON.parse(xhr.responseText);
                  var url = data.acgurl;
                  var text = [
                    {
                      type: "image",
                      originalContentUrl: url,
                      previewImageUrl: url,
                    },
                  ];
                  event.reply(text);
                }
              }
            };
            break;
          case "使用須知":
            var allText = [
              {
                type: "text",
                text: `請開啟底下連結觀看使用需知及申請群組功能說明:\n
https://tutubot.net/archives/576`,
              },
            ];
            event.reply(allText);
            break;

          case "ROO攻略":
            var story = new storyinit();
            story.postOption(event, null, false, "w1", funJson, false);
            break;
          case "天諭攻略":
            var story = new storyinit();
            story.postOption(event, null, false, "w2", funJson, false);
            break;
          case "二之國攻略":
            var story = new storyinit();
            story.postOption(event, null, false, "w4", funJson, false);
            break;
          case "新世代攻略":
            var story = new storyinit();
            story.postOption(event, null, false, "w6", funJson, false);
            break;
          case "夢幻新誅仙攻略":
            var story = new storyinit();
            story.postOption(event, null, false, "w8", funJson, false);
            break;
          case "劍3攻略":
            var story = new storyinit();
            story.postOption(event, null, false, "w9", funJson, false);
            break;
        }
      }).catch(err => {
        console.error(err)
      })
    }
  }
});

const app = express();
const linebotParser = bot.parser();
app.post("/", linebotParser);

var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("目前的port是", port);
});
