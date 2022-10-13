function w2(event, msg) {
  switch (msg) {
    case "天諭職業":
      var text = {
        type: "flex",
        altText: "天諭職業攻略",
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
                    text: "玉虛",
                    size: "sm",
                    weight: "bold",
                    color: "#AAAAAA",
                  },
                ],
              },
              hero: {
                type: "image",
                url: "https://www.steamxo.com/wp-content/uploads/2021/01/7oz1Nv111207_1655066-696x369.jpg",
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
                        text: "火系：天火降世神通殘，冰系：冰襲萬里江山凝。\n擁有最出色的輸出，以及相對出色的控制，讓玉虛成為了游戲中極為火爆的職業，以至於裝備價格都遠高其他職業，入坑需謹慎。",
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
                      text: "玉虛技能",
                    },
                  },
                  {
                    type: "button",
                    style: "primary",
                    height: "sm",
                    action: {
                      type: "uri",
                      label: "詳細介紹",
                      uri: "https://tywarm.shela-pro.net/2021/06/10/work_4/",
                    },
                  },
                  {
                    type: "spacer",
                    size: "sm",
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
                    text: "聖堂",
                    size: "sm",
                    weight: "bold",
                    color: "#AAAAAA",
                  },
                ],
              },
              hero: {
                type: "image",
                url: "https://www.steamxo.com/wp-content/uploads/2021/01/ZAfjBW111240_1655066-696x385.jpg",
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
                        text: "聖堂是團隊的核心，聖堂的兩種戰鬥狀態在不同情況隨意切換，既可以作為團隊的坦克，也可以轉為輸出，成為讓無數奶媽直呼頭疼的輸出聖堂。\n副本需求高,課金程度一般,平民可以玩",
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
                      text: "聖堂技能",
                    },
                  },
                  {
                    type: "button",
                    style: "primary",
                    height: "sm",
                    action: {
                      type: "uri",
                      label: "詳細介紹",
                      uri: "https://tywarm.shela-pro.net/2021/06/10/work_2/",
                    },
                  },
                  {
                    type: "spacer",
                    size: "sm",
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
                    text: "靈瓏",
                    size: "sm",
                    weight: "bold",
                    color: "#AAAAAA",
                  },
                ],
              },
              hero: {
                type: "image",
                url: "https://www.steamxo.com/wp-content/uploads/2021/01/QyMjFK111242_1655066-696x371.jpg",
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
                        text: "靈瓏是每個隊伍都必不可少的治療職業，操作簡單 ，自保能力強，上手容易。\n課金程度低,平民玩家首選",
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
                      text: "靈瓏技能",
                    },
                  },
                  {
                    type: "button",
                    style: "primary",
                    height: "sm",
                    action: {
                      type: "uri",
                      label: "詳細介紹",
                      uri: "https://tywarm.shela-pro.net/2021/06/15/work_1/",
                    },
                  },
                  {
                    type: "spacer",
                    size: "sm",
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
                    text: "光刃",
                    size: "sm",
                    weight: "bold",
                    color: "#AAAAAA",
                  },
                ],
              },
              hero: {
                type: "image",
                url: "https://www.steamxo.com/wp-content/uploads/2021/01/CJ5fic111244_1655066-696x349.jpg",
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
                        text: "雙手劍職業,近戰能力出色,並且瞬間爆發高,在游戲中是充擔副T輸出位,並且適合在小規模的PVP里面.在游戲中定位是迅捷的戰士,具有很強的爆發傷害,\n課金程度一般,平民可以玩",
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
                      text: "光刃技能",
                    },
                  },
                  {
                    type: "button",
                    style: "primary",
                    height: "sm",
                    action: {
                      type: "uri",
                      label: "詳細介紹",
                      uri: "https://tywarm.shela-pro.net/2021/06/10/work_3/",
                    },
                  },
                  {
                    type: "spacer",
                    size: "sm",
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
                    text: "流光",
                    size: "sm",
                    weight: "bold",
                    color: "#AAAAAA",
                  },
                ],
              },
              hero: {
                type: "image",
                url: "https://www.steamxo.com/wp-content/uploads/2021/01/XcWY06111205_1655066-696x341.jpg",
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
                        text: "武器是鉤子,擅長1V1單挑,團戰的先手發起人.當然這個職業是真了苦逼,雖然能抗能打,單刷總是淪為工具人的存在.你勾過來人頭很快就被隊友搶走,因此也玩了不是很爽.\n課金程度一般,工具人職業.",
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
                      text: "流光技能",
                    },
                  },
                  {
                    type: "button",
                    style: "primary",
                    height: "sm",
                    action: {
                      type: "uri",
                      label: "詳細介紹",
                      uri: "https://tywarm.shela-pro.net/2021/06/10/work_5/",
                    },
                  },
                  {
                    type: "spacer",
                    size: "sm",
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
                    text: "天昭",
                    size: "sm",
                    weight: "bold",
                    color: "#AAAAAA",
                  },
                ],
              },
              hero: {
                type: "image",
                url: "https://i.imgur.com/A7zYzfn.png",
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
                        text: "有著劍魂和龍魂兩個形態，體型可以選擇成男或者少女，是一個物理和法術雙修的新職業，有著比普通職業更強悍的攻擊，法術攻擊能夠在一定範圍內控制敵人，並使用物理攻擊進行中程攻擊，具有一定的操作難度。",
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
                      text: "天昭技能",
                    },
                  },
                  {
                    type: "button",
                    style: "primary",
                    height: "sm",
                    action: {
                      type: "uri",
                      label: "詳細介紹",
                      uri: "https://tywarm.shela-pro.net/2021/06/15/work_6/",
                    },
                  },
                  {
                    type: "spacer",
                    size: "sm",
                  },
                ],
              },
            },
          ],
        },
      };
      event.reply(text);
      break;
    case "玉虛技能":
      var allText = [
        {
          type: "text",
          text: `🔥pve開荒：基礎技能：【穿雲】【驟雷】【電脈】【離火】【星劍】【星落】防禦二選一：自信帶【流星】保守帶【星盾】無雙：【天雷驚世劫】二選一【離火劍影】【天火玄冰墜】
分析：全套連招【驟雷】【離火】【星落】【星劍】【電脈】，如果攜帶的是【流星】穿插在星落前後即可，打boss情況下【離火】【星劍】不單單是輸出技能同樣也是buff技能，多和【電脈】還有無雙一起使用會有較好的效果。
🔥pve輸出：基礎技能：【穿雲】【驟雷】【電脈】【離火】【星劍】【星落】【劍罰】無雙：【天火玄冰墜】【天雷驚世劫】
分析：這套只是把防禦技能換掉了，也可以根據自己的思想去掉星落從而達到另一種不一樣的操作感覺。（因為多了一個小技能會導致無雙積攢增加，所以換成雙兩星無雙）
🔥pvp戰場：技能攜帶：【穿雲】【驟雷】【電脈】【星劍】【星落】【流星】【星盾】無雙：【離火劍影】【天火玄冰墜】
分析：雙保命增加存活幾率，活下來才有輸出，輸出手法：選手【驟雷】然後普通攻擊找機會，鎖定好要打的人找好站位，距離控制在一個【星落】就能【星劍】的范圍，然後插【星劍】然後就等技能，等無雙，【星盾】保命【流星】追人，攢好無雙等待斬殺線，或者攢【天火玄冰墜】扔人群基本就會有人頭
🔥pvp插旗：技能攜帶：【穿雲】【劍罰】【離火】【星劍】【星落】【流星】【星盾】無雙：【離火劍影】【天火玄冰墜】
分析：1v1插旗上來說，容錯率很低，所以【流星】和【星盾】的運用極為重要，先手【劍罰】，確定可以打出下面一套的情況可以放【流星】不然就別放然後【星落】接普通攻擊，再放【離火】，再接秒放【星劍】，這種情況一般是沒技能然後開【星盾】，星盾注意時間，結束的時候，按前面的循環，要注意的是躲技能和一些小技巧，現在說下小技巧。`,
        },
      ];
      event.reply(allText);
      break;
    case "靈瓏技能":
      var allText = [
        {
          type: "text",
          text: `🔥pve開荒：【春風】【青蔓】【芊心】【白露】【飛螢】【千機】/【魚躍】+【萬靈共生】【靈猿·嘯空山】
分析：【春風】【青蔓】【白露】為基本治療技能，【芊心】【萬靈共生】為緊急抬血技能，另外因為一般開荒本會缺輸出，需要大量壓榨輸出，所以我一般會選擇在奶量足夠的情況下多帶輸出技能，【飛螢】【千機】【靈猿·嘯空山】是輸出中單體輸出比較高的技能所以一般選擇帶這幾個，【千機】也可以替換為【魚躍】，【魚躍】的多段輸出很高極限情況下會帶3個輸出普通技能，不推薦帶【戲鳥】，該技能主要是打控制眩暈。
🔥pve輸出：【靈鳥】【飛螢】【魚躍】【戲鳥】【春風】【青蔓】+【萬靈共生】【靈猿·嘯空山】
分析：副本輸出一般半奶半輸出，用於日常本比較多，不需要奶量太高，但是需要帶幾個奶技能，所以群療【青蔓】肯定是需要帶的，性價比很高，一般如果本太簡單我還會把【春風】換成【千機】，追求最大輸出。
🔥pvp戰場：【靈鳥】【飛螢】【魚躍】【戲鳥】【靈化】【青蔓】+【靈猿·嘯空山】【纖手化靈】
分析：我打戰場一般選擇控制輸出+群遼，在快死的時候會【靈化】出人群換【春風】【白露】等治療技能到角落把自己奶滿，控制技能【戲鳥】【纖手化靈】【靈猿·嘯空山】是需要帶的，【靈化】是唯一解控技能，是一個保命技能，【青蔓】是群療技能，雖然戰場里沒有小隊但是也可以給周圍友軍奶到。
🔥pvp插旗：【靈鳥】【飛螢】【魚躍】【戲鳥】【靈化】【春風】/【青蔓】+【靈猿·嘯空山】【纖手化靈】
分析：1v1中控制技能【纖手化靈】【靈猿·嘯空山】是需要帶的，唯一保命技能【靈化】一定要注意，不要隨便施放，【春風】是考慮到可以邊風箏邊治療自己，【春風】可替換到【青蔓】是因為青蔓有強化效果，強化後可以加移速方便風箏，【戲鳥】可帶可不帶，可以帶是考慮到【戲鳥】同樣可以彈到英靈，但是如果雙方不帶英靈，僅角色1v1的話，【戲鳥】略低，可以考慮換成【千機】。
🔥pvp活動（生死場霧隱蘇瀾）：【靈化】【飛螢】【靈甲】【戲鳥】【春風】【青蔓】+【萬靈共生】【靈猿·嘯空山】
分析：團體混戰pvp需要注意保命，所以保命技能【靈化】很有必要，同時做到控制【戲鳥】【靈猿·嘯空山】，【戲鳥】加上【飛螢】的【飛螢之痛】會高性價比，所以一般會帶上【飛螢】，【靈甲】的群體盾和驅散效果在混戰中有很高價值，在混戰中【萬靈共生】這種團體保命技能也是非常重要的。`,
        },
      ];
      event.reply(allText);
      break;
    case "光刃技能":
      var allText = [
        {
          type: "text",
          text: `🔥PVE殺意輸出
【斬風雷】【狂殺】【戰意決】【獵光】【定風波】【破影】【血綻決】【滅魄·封神斬】【千刃·散浮華】
【天賦】點出20點光元素強化，和5點破影流血額外傷害，中間的第2天賦不加傷害所以不點（第4天賦未覺醒）。選這個天賦是因為傷害穩定、全程覆蓋、收益高。狂殺持續3秒加攻擊力的技能，持續時間過短，在一套技能的最高爆發期間，buff無法全程覆蓋，所以舍棄。
【手法分享】：起手【斬風雷】，風雷出手瞬間開【戰意決】buff，然後接【獵光】——【定風波】一段——【破影】——【定風波】二段——【狂殺】、【狂殺】、【斬風雷】——【戰意決】——【獵光】——【定風波】…….如此循環下去，千刃散浮華務必要在使用了戰意決之後再使用，否則傷害會低很多（還有一套輸出手法，等開測後在實際場景應用之後，覺得行之有效再公布）。
🔥PVE道義副T
其它方面不變，唯一的區別就是把【千刃·散浮華】換成了【斷情·月輪斬】。因為【月輪斬】有40%減傷效果，而且問道狀態扣除30%怪物傷害，【散浮華】也打不了多少傷害，不如帶個減傷技能，減輕奶媽的治療壓力。利用好【月輪斬】的持續減傷時間，【破影】的1秒無敵，還有【血綻】的無敵時間，只要奶媽保持持續回復，問道光刃就能抗住BOSS，同時無限掛【滅魄】當半個工具人。就算出失誤了，BOSS仇恨目標轉換了，也可以用獵光拉回來。
【天賦】：因為要抗boss普攻，所以第3個【壯健憨厚】加雙防的點滿，中間第2個天賦【決戰鬥志】點出4點+傷害減免，留1點天賦給【凌波微步】，加的移速正好和【壯健憨厚】扣除的移速相抵消，正常移速狀態下，躲boss技能也會容易些。
🔥PVP插旗+5V5
問情、問道均可。【月輪斬】和【飛羽】根據對戰職業進行靈活變換，利用【追命】先手，【真氣刃】重置【追命】，【定風波】擊倒這3個控制技能實現連環控。被對方反控後就用【影返】一段進行反擊，【影返】二段看情況使用。【破影】盡量躲掉關鍵控制和高傷害技能。
在5V5中，想「混」傷害數據就帶問情的【斬風雷】【破影】流血那一套
想打多重控制，為隊友提供輸出環境的，就帶問道的【真氣刃】重置【追命】CD這套，舍棄【斬風雷】。
（5V5中，兩套技能都是帶【月輪斬】，在群戰中6秒免控+減傷優於飛羽的單體傷害+沉默）
🔥PVP戰場
打戰場，必然是搶傷害，搶人頭，直接問情殺意不解釋！
【天賦】：第三個天賦【置死後生】點滿，【血綻】期間增加對玩家XX%傷害，存夠無雙後，直接【斬風雷】【定風波】二段（手拖技能指示器），選定范圍進人群，然後【血綻】【散浮華】打出爆炸傷害，效果絕佳！
【定風波】一段擊倒，二段大跳過去接【獵光】的還原端游操作，也可以用來收殘血人頭，非常NICE。`,
        },
      ];
      event.reply(allText);
      break;
    case "流光技能":
      var allText = [
        {
          type: "text",
          text: `🔥PVP單挑：
💥打近戰放風箏
【魂珠】【靈魂之禁】【引魂離殤】【魂鏡】【虛空流轉】【沐光之念】+【涅槃】【幽夜暗握】
【沐光之念】減少技能讀條時間快速打出血量差距及無雙技能，利用多段控制逼迫對手交出解控，【魂鏡】拉開位置，對手霸體時間過後連環控制折磨。
💥打遠程沖臉剛
【魂珠】【靈魂之禁】【引魂離殤】【魂鏡】【虛空流轉】【靈魂收割】+【涅槃】【幽夜暗握】
【魂鏡】用來接觸控制規避對方高傷害技能，【引魂離殤】一旦釋放對方無法逃脫，可快速疊加DEBUFF，【虛空流轉】+【靈魂收割】最強爆發一套帶走。
🔥PVP群毆：
【魂珠】【靈魂之禁】【引魂離殤】【魂鏡】【輪回之圍】【沐光之念】+【涅槃】【萬魂俱寂】
【輪回之圍】提供大范圍減傷以及霸體，【魂鏡】放在安全位置【沐光之念】打開交技能去攢無雙值，【涅槃】用來保命【萬魂俱寂】用來大范圍收割。
🔥PVE：
【魂珠】【魂域】【引魂離殤】【靈魂收割】【追魂之魄】【沐光之念】+【萬靈歸一】【萬魂俱寂】
起手【沐光之念】最大攻擊距離施放【魂域】【魂珠】【追魂之魄】【引魂離殤】【靈魂收割】，打完一套後【追魂之魄】慢悠悠地剛好到BOSS，直接引爆，第一個無雙放【萬靈歸一】。這一套沒有任何一個聖堂可以拉住仇恨，必定OT，打完第一套之後流光就會萎靡，進入「哪個亮了按哪個」的階段。但是切記【魂珠】必須用在所有技能之前。`,
        },
      ];
      event.reply(allText);
      break;
    case "聖堂技能":
      var allText = [
        {
          type: "text",
          text: `🔥pve開荒：【旋刺】【雷霆】【雷池】【光盾】【掃盪】【飛雷】—無雙技能【雷神千裂破】【雷神絕對守護】—-【地剛形態】
分析：開荒過程【雷霆】鋪腳下【飛雷】【旋刺】【掃盪】進行輸出boss回頭進行平a開啟【光盾】如自身裝備較差，扛不住的話，可以把【雷池】換【嘯天】【光盾】結束後開啟【嘯天】繼續減傷，非常適合開荒。
🔥pve輸出：【旋刺】【雷霆】【龍握】【雷池】【掃盪】【飛雷】—無雙技能【鎖擒魔】【雷神千裂破】—【雷剛形態】
分析：適用於掛機碾壓副本、尋靈、跑任務等。沒什麼注意的，暴力就行了，也適用於青麟之野。
🔥pvp戰場：【旋刺】【雷霆】【龍握】【降世】【掃盪】【飛雷】—無雙技能【鎖擒魔】【雷神千裂破】—【雷剛形態】
分析：因戰場有死亡三次第四次反攻的機制記住自己的死亡次數，三次死亡後沖進人堆，死後反攻【鎖擒魔】【雷霆】【千烈破】封內勁加秒殺，瞬間核彈。
🔥pvp插旗：【雷霆】【降世】【龍握】【嘯天】【掃盪】【飛雷】—無雙技能【鎖擒魔】【雷神千裂破】—【雷剛姿態】
分析：比較常規的切磋攜帶連招以著名的龍嘯天小學生三連就能打出不俗的傷害（抓准對面空檔期【龍握】【嘯天】取消後搖【雷霆】接【掃盪】之後aaaa【飛雷】）
🔥pvp活動（生死場霧隱蘇瀾）：【雷霆】【降世】【龍握】【嘯天】【飛雷】【掃盪】—無雙技能【鎖擒魔】【雷神千裂破】
分析：這類活動帶個【嘯天】進行保命防止一套被秒【龍握】方便抓人回來輔助隊友擊殺【雷霆】是個好技能大機率封內勁（無法閃避）【龍握】拉過來【雷霆】然後進行【掃盪】輸出`,
        },
      ];
      event.reply(allText);
      break;
    case "天昭技能":
      var allText = [
        {
          type: "text",
          text: `🔥pve：鱗追、驚鱗、遊世、龍旋、英域、風裂、月碎 —無雙技能: 劍曲月華、劍嘯天絕 -- 龍魂型態
🔥pvp團戰：驚鱗、龍旋、風裂、殺合、天返、如龍、月碎—無雙技能:劍指湍流怒、劍嘯天絕--劍魂型態
🔥pvp神耀：天返、殺合、凌突、龍旋、如龍、風裂、月碎—無雙技能:劍嘯天絕、龍吟潮湧—劍魂型態`,
        },
      ];
      event.reply(allText);
      break;
    case "英靈推薦":
      var allText = [
        {
          type: "text",
          text: `https://tywarm.shela-pro.net/2021/06/10/pets/`,
        },
      ];
      event.reply(allText);
      break;
    case "公會貢獻":
      var allText = [
        {
          type: "text",
          text: `公會貢獻獲取方法如下:
🔥每日公會共建
🔥每日商會任務
🔥每日泳池派對(19:30)
🔥商城每周購買20次
------------------------------------
🔥週二、五貪婪島(19:45)
🔥週日深空餘燼(公會設定)
🔥週五雲垂少女星(公會設定)
🔥週二、四、日飛天怪盜
🔥每周六領地戰(20:00)`,
        },
        {
          type: "text",
          text: `詳細介紹: https://tywarm.shela-pro.net/2021/06/11/guild/`,
        },
      ];
      event.reply(allText);
      break;
    case "美食家食譜":
      var allText = [
        {
          type: "image",
          originalContentUrl:
            "https://ok.166.net/reunionpub/ds/kol/20210115/144525-ts6hsez5n2.png",
          previewImageUrl:
            "https://ok.166.net/reunionpub/ds/kol/20210115/144525-ts6hsez5n2.png",
        },
      ];
      event.reply(allText);
      break;
    case "人格系統":
      var allText = [
        {
          type: "text",
          text: `https://tywarm.shela-pro.net/2021/06/10/peop/`,
        },
      ];
      event.reply(allText);
      break;
    case "神格系統":
      var allText = [
        {
          type: "text",
          text: `https://tywarm.shela-pro.net/2021/06/10/ghost/`,
        },
      ];
      event.reply(allText);
      break;
    case "樂師樂譜":
      var allText = [
        {
          type: "text",
          text: `https://shouji.newyx.net/gl/716274.html`,
        },
      ];
      event.reply(allText);
      break;
    case "機緣任務":
      var allText = [
        {
          type: "text",
          text: `https://tywarm.shela-pro.net/2021/06/11/fate/`,
        },
      ];
      event.reply(allText);
      break;
    case "心魔攻略":
      var allText = [
        {
          type: "text",
          text: `https://tywarm.shela-pro.net/2021/06/10/heart/`,
        },
      ];
      event.reply(allText);
      break;
    case "領地戰":
      var allText = [
        {
          type: "text",
          text: `https://tywarm.shela-pro.net/2021/06/12/war/`,
        },
      ];
      event.reply(allText);
      break;
    case "隱藏結局":
      var allText = [
        {
          type: "text",
          text: `https://tywarm.shela-pro.net/2021/06/10/story/`,
        },
      ];
      event.reply(allText);
      break;
    case "寶箱位置":
      var allText = [
        {
          type: "text",
          text: `https://tywarm.shela-pro.net/2021/06/10/boxSearch/`,
        },
      ];
      event.reply(allText);
      break;
    case "青麟鎮妖":
      var allText = [
        {
          type: "text",
          text: `https://tywarm.shela-pro.net/2021/06/11/boss/`,
        },
      ];
      event.reply(allText);
      break;
    case "寶石攻略":
      var allText = [
        {
          type: "text",
          text: `https://tywarm.shela-pro.net/2021/06/15/diamond/`,
        },
      ];
      event.reply(allText);
      break;
    case "裝備提升":
      var allText = [
        {
          type: "text",
          text: `https://tywarm.shela-pro.net/2021/06/15/cloth/`,
        },
      ];
      event.reply(allText);
      break;
    case "日常任務":
      var allText = [
        {
          type: "text",
          text: `https://tywarm.shela-pro.net/2021/06/28/taskall/`,
        },
      ];
      event.reply(allText);
      break;
    case "地球保衛戰":
      var allText = [
        {
          type: "image",
          originalContentUrl: "https://i.imgur.com/hUWuJ0I.jpg",
          previewImageUrl: "https://i.imgur.com/hUWuJ0I.jpg",
        },
      ];
      event.reply(allText);
      break;
    default:
      break;
  }
}
module.exports = w2;
