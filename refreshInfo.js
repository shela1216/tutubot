var botsdk = require("@line/bot-sdk");
var CHANNEL_ACCESS_TOKEN = "RcZn7NPcFGBr9huArzndJAVP08yBlLQjcckiBRkmJ0a4aUZ008kqPLkyc92BREQVF+qzUFtlSYpaZ8xni0JoU6B1Agn67WS0j95aCPqjuh2dW56dm4NsNHSt54W6veWXuRZwZi+I1ZpIUAcpO75uYQdB04t89/1O/w1cDnyilFU=";
const client = new botsdk.Client({
  channelAccessToken: CHANNEL_ACCESS_TOKEN,
});
var firebase = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
});

var db = firebase.firestore();

function randPassword() {
  var text = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "1234567890"];
  var rand = function (min, max) {
    return Math.floor(Math.max(min, Math.random() * (max + 1)));
  };
  var len = rand(8, 16); // 长度为8-16
  var pw = "";

  for (let i = 0; i < len; ++i) {
    var strpos = rand(0, 2);

    pw += text[strpos].charAt(rand(0, text[strpos].length));
  }

  return pw;
}

function refreshMember() {
  var reg = db.collection("loginGroup");

  reg.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id != "title" && doc.data()["work"] != "") {
        if (!doc.data()["groupid"]) return;

        console.log(doc.data()["groupid"]);
        client.getGroupSummary(doc.data()["groupid"]).then((Name) => {
          var setDoc = reg.doc(doc.data()["groupid"]);

          if (setDoc) {
            setDoc
              .update({
                groupName: Name.groupName,
                groupPass: randPassword(),
              })
              .then(() => {});
          }
        });

        var botWork = db.collection("gameWork").doc(doc.data()["work"]).collection("workList");
        var groupId = doc.data()["groupid"];
        var ref = db.collection("loginGroup").doc(doc.data()["groupid"]).collection("memberList");

        if (ref) {
          ref.get().then((querySnapshot) => {
            querySnapshot.forEach((doc2) => {
              if (doc2.id != "title") {
                client.getProfile(doc2.data()["userid"]).then((profile) => {
                  botWork.get().then((querySnapshot) => {
                    querySnapshot.forEach((workdoc) => {
                      if (workdoc.data()["tag"] == doc.data()["workTag"]) {
                        var setDoc = ref.doc(doc2.data()["userid"] + groupId);

                        setDoc
                          .update({
                            userName: profile.displayName,
                            gameWork: workdoc.data()["name"],
                          })
                          .then(() => {
                            console.log("名單更新成功: " + profile.displayName);
                          });
                      }
                    });
                  });
                });
              }
            });
          });
        }
        // var ref = db.collection('loginGroup').doc(doc.data()['groupid']).collection('memberList');
        // ref.get().then(querySnapshot => {
        //     querySnapshot.forEach(doc2 => {
        //         if (doc2.id != 'title') {
        //             client.getGroupMemberProfile(doc2.data()['groupid'], doc2.data()['userid'])
        //                 .then((profile) => {
        //                     var setDoc = ref.doc(doc2.data()['userid'] + doc2.data()['groupid']);
        //                     if (setDoc) {
        //                         setDoc.update({
        //                             userName: profile.displayName,

        //                         }).then(() => {
        //                             console.log(profile.displayName);

        //                         });
        //                     }
        //                 })
        //                 .catch((error) => {
        //                     var setDoc = ref.doc(doc2.data()['userid'] + doc2.data()['groupid']);
        //                     if (setDoc) {
        //                         setDoc.delete().then(() => {
        //                             console.log("刪除錯誤簽到");
        //                         });
        //                     }
        //                 })
        //         }
        //     })
        // });
      }
    });
  });
}

refreshMember();
