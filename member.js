function member() {
  this.randomCount = function (event, num, list) {
    if (num > 10 || num <= 0) {
      var msg = [
        {
          type: "text",
          text: "抽籤人數範圍為1~10 請重新填寫",
        },
      ];

      event.reply(msg);
      return;
    }

    function f1(n, max) {
      var arr = new Array();

      function getRandom(min, max) {
        //开始取数
        //随机数
        var random = Math.random() * (max - min) + min;

        //向下取整
        random = Math.floor(random);

        if (arr.length < n) {
          //判断数组长度
          for (
            let i = 0;
            i <= arr.length;
            i++ //遍历数组。
          ) {
            if (random == arr[i]) {
              //比较随机数
              break;
            } else {
              if (i == arr.length) {
                arr.push(random);
                break;
              }
            }
          }

          getRandom(0, max);
        }
      }

      getRandom(0, max); //随机取0-9

      return arr;
    }

    var data = list;
    var Groupid = event.source.groupId;
    var oldData = [];
    var ListData = [];

    data.get().then((querySnapshot) => {
      var newAllStr = [];

      newAllStr.push({
        type: "box",
        layout: "horizontal",
        contents: [
          {
            type: "text",
            text: "LineID",
            flex: 5,
            size: "sm",
            align: "start",
            color: "#ffffff",
            offsetStart: "sm",
          },
          {
            type: "text",
            text: "遊戲暱稱",
            flex: 5,
            size: "sm",
            align: "start",
            color: "#ffffff",
            offsetStart: "sm",
          },
        ],
        paddingTop: "md",
        paddingBottom: "md",
        backgroundColor: "#70b1f0",
      });
      querySnapshot.forEach((doc) => {
        if (doc.id != "title") {
          if (doc.data()["groupid"] == Groupid) {
            oldData.push(doc.data());
          }
        }
      });

      if (oldData.length >= num) {
        let status = f1(num, oldData.length);

        for (var i = 0; i < status.length; i++) {
          if (oldData[status[i]]) {
            ListData.push(oldData[status[i]]);

            if (ListData[i]["userName"]) {
              newAllStr.push(
                {
                  type: "box",
                  layout: "horizontal",
                  contents: [
                    {
                      type: "text",
                      text: ListData[i]["userName"],
                      flex: 5,
                      size: "sm",
                      align: "start",
                      color: "#187bdc",
                      offsetStart: "sm",
                    },
                    {
                      type: "text",
                      text: ListData[i]["gameUser"],
                      flex: 5,
                      size: "sm",
                      align: "start",
                      color: "#187bdc",
                      wrap: true,
                      offsetStart: "sm",
                    },
                  ],
                  paddingTop: "md",
                  paddingBottom: "md",
                },
                {
                  type: "separator",
                  color: "#70b1f0",
                }
              );
            }
          }
        }

        var allText = {
          type: "flex",
          altText: "中獎名單",
          contents: {
            type: "bubble",
            header: {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "text",
                  text: "中獎名單",
                  align: "center",
                  color: "#ffffff",
                },
              ],
              backgroundColor: "#187bdc",
              paddingBottom: "md",
              paddingTop: "md",
            },
            body: {
              type: "box",
              layout: "vertical",
              spacing: "md",
              contents: newAllStr,
              paddingTop: "none",
              paddingStart: "none",
              paddingEnd: "none",
            },
            footer: {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "text",
                  text: "恭喜以上中獎人",
                  align: "center",
                  color: "#70b1f0",
                },
              ],
              paddingTop: "xs",
            },
          },
        };

        event.reply(allText);
      } else {
        var text = `抱歉!
簽到人數不足無法使用`;

        event.reply(text);
        return;
      }
    });
  };

  this.setMemberCount = function (event, list, work) {
    var collectionRepeat = function (box, key) {
      var counter = {};

      box.forEach(function (x) {
        counter[x] = (counter[x] || 0) + 1;
      });

      var val = counter[key];

      if (key === undefined) {
        return counter;
      }

      return val === undefined ? 0 : val;
    };
    var data = list;
    var ListData = [];
    var Groupid = event.source.groupId;

    data.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.id != "title") {
          if (doc.data()["groupid"] == Groupid) {
            ListData.push(doc.data());
          }
        }
      });

      var str = [];

      ListData.map((item) => {
        str.push(item["gameWork"]);
      });

      var total = str.length;

      var newAllStr = [];

      for (var i = 0; i < work.length; i++) {
        var workTotal = collectionRepeat(str, work[i]["name"]);
        var percent = workTotal > 0 ? Math.round((workTotal / total) * 10000) / 100.0 + "%" : "0%";

        newAllStr.push({
          type: "box",
          layout: "vertical",
          margin: "lg",
          spacing: "sm",
          contents: [
            {
              type: "box",
              layout: "baseline",
              spacing: "sm",
              contents: [
                {
                  type: "text",
                  text: "🔸 " + work[i]["name"] + ":",
                  flex: 0,
                  margin: "sm",
                  color: "#187bdc",
                  weight: "bold",
                },
                {
                  type: "text",
                  text: workTotal + "",
                  size: "sm",
                  align: "end",
                  color: "#AAAAAA",
                },
              ],
            },
            {
              type: "box",
              layout: "horizontal",
              contents: [
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
                          backgroundColor: "#187bdc",
                          height: "5px",
                          width: percent,
                        },
                      ],
                      width: "100%",
                      height: "5px",
                      backgroundColor: "#bcd9f6",
                      cornerRadius: "sm",
                    },
                  ],
                  margin: "md",
                  paddingTop: "md",
                  flex: 7,
                },
                {
                  type: "text",
                  text: percent,
                  align: "end",
                  size: "xs",
                  color: "#bcd9f6",
                  flex: 3,
                },
              ],
            },
          ],
        });
      }

      newAllStr.push({
        type: "box",
        layout: "baseline",
        contents: [
          {
            type: "text",
            text: "🔸 總計:",
            flex: 0,
            margin: "md",
            weight: "bold",
            color: "#187bdc",
          },
          {
            type: "text",
            text: total + "",
            size: "sm",
            align: "end",
            color: "#000000",
            weight: "bold",
          },
        ],
      });

      var allText = {
        type: "flex",
        altText: "職業統計",
        contents: {
          type: "bubble",
          header: {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "separator",
                color: "#187bdc",
              },
              {
                type: "text",
                text: "職業統計",
                margin: "md",
                color: "#187bdc",
                weight: "bold",
                align: "center",
              },
              {
                type: "separator",
                margin: "md",
                color: "#187bdc",
              },
            ],
            paddingBottom: "none",
          },
          body: {
            type: "box",
            layout: "vertical",
            spacing: "md",
            contents: newAllStr,
          },
        },
      };

      event.reply(allText);
    });
  };
}

module.exports = member;
