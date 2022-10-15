function w4(event, msg) {
  let allText;

  switch (msg) {
    case "二國職業":
      var text = {
        type: "flex",
        altText: "二國職業攻略",
        contents: {
          type: "carousel",
          contents: [
            {
              type: "bubble",
              header: {
                type: "box",
                layout: "horizontal",
                contents: [
                  {
                    type: "text",
                    text: "技師",
                    size: "sm",
                    weight: "bold",
                    color: "#AAAAAA",
                  },
                ],
              },
              hero: {
                type: "image",
                url: "https://truth.bahamut.com.tw/s01/202104/c832ae71d6057c8274f89d9cc4f77b46.JPG",
                size: "full",
                aspectRatio: "20:13",
                aspectMode: "cover",
              },
              body: {
                type: "box",
                layout: "horizontal",
                spacing: "md",
                contents: [
                  {
                    type: "box",
                    layout: "vertical",
                    flex: 2,
                    spacing: "sm",
                    contents: [
                      {
                        type: "text",
                        text: `定位:遠距離攻撃的槍手和補師
擁有可以輸出 又可以補血的職業
輸出技能方面偏向輔助-有減速,有眩暈
而輔助技能方面除了補血
還可以幫隊友 加保護盾,提升防禦力,提升攻擊力,減少CD時間`,
                        flex: 1,
                        wrap: true,
                        size: "xs",
                        gravity: "top",
                      },
                    ],
                  },
                ],
              },
              footer: {
                type: "box",
                layout: "vertical",
                spacing: "sm",
                contents: [
                  {
                    type: "button",
                    style: "secondary",
                    height: "sm",
                    action: {
                      label: "技能",
                      type: "message",
                      text: "技師技能",
                    },
                  },
                ],
              },
            },
            {
              type: "bubble",
              header: {
                type: "box",
                layout: "horizontal",
                contents: [
                  {
                    type: "text",
                    text: "破壞者",
                    size: "sm",
                    weight: "bold",
                    color: "#AAAAAA",
                  },
                ],
              },
              hero: {
                type: "image",
                url: "https://truth.bahamut.com.tw/s01/202104/0a4aed87346865a8f83fc5c7ebb8bc6c.JPG",
                size: "full",
                aspectRatio: "20:13",
                aspectMode: "cover",
              },
              body: {
                type: "box",
                layout: "horizontal",
                spacing: "md",
                contents: [
                  {
                    type: "box",
                    layout: "vertical",
                    flex: 2,
                    spacing: "sm",
                    contents: [
                      {
                        type: "text",
                        text: `定位為-坦克
擁有各種防禦技能和保護隊友的前線
輸出技能方面-有控制,群體輸出,減速
而防禦技能-有挑釁,吸仇恨,減傷,提升防禦力`,
                        flex: 1,
                        wrap: true,
                        size: "xs",
                        gravity: "top",
                      },
                    ],
                  },
                ],
              },
              footer: {
                type: "box",
                layout: "vertical",
                spacing: "sm",
                contents: [
                  {
                    type: "button",
                    style: "secondary",
                    height: "sm",
                    action: {
                      label: "技能",
                      type: "message",
                      text: "破壞者技能",
                    },
                  },
                ],
              },
            },
            {
              type: "bubble",
              header: {
                type: "box",
                layout: "horizontal",
                contents: [
                  {
                    type: "text",
                    text: "劍士",
                    size: "sm",
                    weight: "bold",
                    color: "#AAAAAA",
                  },
                ],
              },
              hero: {
                type: "image",
                url: "https://truth.bahamut.com.tw/s01/202104/65fbf18cdadc349a722255cdf6125398.JPG?w=1000",
                size: "full",
                aspectRatio: "20:13",
                aspectMode: "cover",
              },
              body: {
                type: "box",
                layout: "horizontal",
                spacing: "md",
                contents: [
                  {
                    type: "box",
                    layout: "vertical",
                    flex: 2,
                    spacing: "sm",
                    contents: [
                      {
                        type: "text",
                        text: `定位為-近戰輸出
擁有爆發輸出及快速連擊的職業
同時又可以為自己及隊友補小量的血 比較全面的職業
輸出技能方面-有突進及擊退技能 快速進入戰場支援
輔助技能方面-可增加自身攻速,戰鬥能力提升,補血,減傷,增加HP量`,
                        flex: 1,
                        wrap: true,
                        size: "xs",
                        gravity: "top",
                      },
                    ],
                  },
                ],
              },
              footer: {
                type: "box",
                layout: "vertical",
                spacing: "sm",
                contents: [
                  {
                    type: "button",
                    style: "secondary",
                    height: "sm",
                    action: {
                      label: "技能",
                      type: "message",
                      text: "劍士技能",
                    },
                  },
                ],
              },
            },
            {
              type: "bubble",
              header: {
                type: "box",
                layout: "horizontal",
                contents: [
                  {
                    type: "text",
                    text: "巫師",
                    size: "sm",
                    weight: "bold",
                    color: "#AAAAAA",
                  },
                ],
              },
              hero: {
                type: "image",
                url: "https://truth.bahamut.com.tw/s01/202104/e4deedf1f05998f3d813dc4146d1b24b.JPG?w=1000",
                size: "full",
                aspectRatio: "20:13",
                aspectMode: "cover",
              },
              body: {
                type: "box",
                layout: "horizontal",
                spacing: "md",
                contents: [
                  {
                    type: "box",
                    layout: "vertical",
                    flex: 2,
                    spacing: "sm",
                    contents: [
                      {
                        type: "text",
                        text: `定位為-遠距離魔法師
擁有非常高的輸出,群體輸出技能比較多
打多人戰時非常強勢,但防禦力比較底 需要走位配合
輸出技能方面-有持續性傷害,範圍眩暈,群體輸出技能
還有一招瞬間移動技能,移動後會有一秒無敵
                                        `,
                        flex: 1,
                        wrap: true,
                        size: "xs",
                        gravity: "top",
                      },
                    ],
                  },
                ],
              },
              footer: {
                type: "box",
                layout: "vertical",
                spacing: "sm",
                contents: [
                  {
                    type: "button",
                    style: "secondary",
                    height: "sm",
                    action: {
                      label: "技能",
                      type: "message",
                      text: "巫師技能",
                    },
                  },
                ],
              },
            },
            {
              type: "bubble",
              header: {
                type: "box",
                layout: "horizontal",
                contents: [
                  {
                    type: "text",
                    text: "流氓",
                    size: "sm",
                    weight: "bold",
                    color: "#AAAAAA",
                  },
                ],
              },
              hero: {
                type: "image",
                url: "https://truth.bahamut.com.tw/s01/202104/8d456169301cdc3acddbad182f4a006c.JPG",
                size: "full",
                aspectRatio: "20:13",
                aspectMode: "cover",
              },
              body: {
                type: "box",
                layout: "horizontal",
                spacing: "md",
                contents: [
                  {
                    type: "box",
                    layout: "vertical",
                    flex: 2,
                    spacing: "sm",
                    contents: [
                      {
                        type: "text",
                        text: `定位為-遠程輸出+支援
擁有可為隊友增加buff的職業
輸出技能方面-群體輸出技能,有減速及眩暈效果
輔助技能方面-為隊加增加攻擊力,移速,能量`,
                        flex: 1,
                        wrap: true,
                        size: "xs",
                        gravity: "top",
                      },
                    ],
                  },
                ],
              },
              footer: {
                type: "box",
                layout: "vertical",
                spacing: "sm",
                contents: [
                  {
                    type: "button",
                    style: "secondary",
                    height: "sm",
                    action: {
                      label: "技能",
                      type: "message",
                      text: "流氓技能",
                    },
                  },
                ],
              },
            },
          ],
        },
      };

      event.reply(text);
      break;
    case "技師技能":
      allText = [
        {
          type: "image",
          originalContentUrl: "https://truth.bahamut.com.tw/s01/202105/33888ef88bbf60265f7702b553912ad1.JPG?w=1000",
          previewImageUrl: "https://truth.bahamut.com.tw/s01/202105/33888ef88bbf60265f7702b553912ad1.JPG?w=1000",
        },
      ];

      event.reply(allText);
      break;
    case "劍士技能":
      allText = [
        {
          type: "image",
          originalContentUrl: "https://truth.bahamut.com.tw/s01/202105/8d1452df8349bb5884428cf5820318d5.JPG?w=1000",
          previewImageUrl: "https://truth.bahamut.com.tw/s01/202105/8d1452df8349bb5884428cf5820318d5.JPG?w=1000",
        },
      ];

      event.reply(allText);
      break;
    case "巫師技能":
      allText = [
        {
          type: "image",
          originalContentUrl: "https://truth.bahamut.com.tw/s01/202105/07c6c25d1057cc577ebbcdb342d09818.JPG",
          previewImageUrl: "https://truth.bahamut.com.tw/s01/202105/07c6c25d1057cc577ebbcdb342d09818.JPG",
        },
      ];

      event.reply(allText);
      break;
    case "流氓技能":
      allText = [
        {
          type: "image",
          originalContentUrl: "https://truth.bahamut.com.tw/s01/202105/dc32c42da641db95532f322d775dd383.JPG?w=1000",
          previewImageUrl: "https://truth.bahamut.com.tw/s01/202105/dc32c42da641db95532f322d775dd383.JPG?w=1000",
        },
      ];

      event.reply(allText);
      break;
    case "破壞者技能":
      allText = [
        {
          type: "image",
          originalContentUrl: "https://truth.bahamut.com.tw/s01/202105/df4e2f973b1774c7ac1dc558bd339c6b.JPG?w=1000",
          previewImageUrl: "https://truth.bahamut.com.tw/s01/202105/df4e2f973b1774c7ac1dc558bd339c6b.JPG?w=1000",
        },
      ];

      event.reply(allText);
      break;

    default:
      break;
  }
}

module.exports = w4;
