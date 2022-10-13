
function roxFun() {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

    this.getWorkInfo = function (event) {
        var text = {
            "type": "flex",
            "altText": "ROX職業攻略",
            "contents": {
                "type": "carousel",
                "contents": [{
                    "type": "bubble",
                    "header": {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [{
                            "type": "text",
                            "text": "劍士",
                            "size": "sm",
                            "weight": "bold",
                            "color": "#AAAAAA"
                        }]
                    },
                    "hero": {
                        "type": "image",
                        "url": "https://scontent.ftpe3-2.fna.fbcdn.net/v/t1.6435-9/119005865_151582306601001_7701085891691595305_n.png?_nc_cat=101&ccb=1-5&_nc_sid=abc084&_nc_ohc=0tmlQlHw4PsAX9f9EoE&_nc_oc=AQmDSP-g_WL5_LeujeVcA2m_ox2tFS72ffLSahGzcrFs_1p7g6xCYX_0Ubgs5VDuMgU&_nc_ht=scontent.ftpe3-2.fna&oh=1cb73f4bff8605e98b403c2d1103c3c8&oe=6149FAD5",
                        "size": "full",
                        "aspectRatio": "20:13",
                        "aspectMode": "cover",
                        "action": {
                            "type": "uri",
                            "label": "Action",
                            "uri": "https://www.facebook.com/notes/ro%E4%BB%99%E5%A2%83%E5%82%B3%E8%AA%AA%E6%96%B0%E4%B8%96%E4%BB%A3%E7%9A%84%E8%AA%95%E7%94%9F/%E5%8D%A1%E6%99%AE%E6%8B%89%E5%B0%8F%E8%AA%B2%E5%A0%82%E5%8A%8D%E5%A3%AB%E3%81%AE%E6%94%BB%E7%95%A5/3283986004999858/"
                        }
                    },
                    "body": {
                        "type": "box",
                        "layout": "horizontal",
                        "spacing": "md",
                        "contents": [{
                            "type": "box",
                            "layout": "vertical",
                            "flex": 2,
                            "spacing": "sm",
                            "contents": [{
                                "type": "text",
                                "text": "🔹敏劍型：敏捷AGI>力量STR>體質VIT\n🔸槍騎型：力量STR>體質VIT>靈巧ˋDEX\n🔹體騎型：體質VIT>力量STR>靈巧DEX",
                                "flex": 1,
                                "wrap": true,
                                "size": "xs",
                                "gravity": "top"
                            }
                            ]
                        }]
                    },
                    "footer": {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [{
                            "type": "button",
                            "action": {
                                "type": "uri",
                                "label": "詳細介紹",
                                "uri": "https://www.facebook.com/notes/ro%E4%BB%99%E5%A2%83%E5%82%B3%E8%AA%AA%E6%96%B0%E4%B8%96%E4%BB%A3%E7%9A%84%E8%AA%95%E7%94%9F/%E5%8D%A1%E6%99%AE%E6%8B%89%E5%B0%8F%E8%AA%B2%E5%A0%82%E5%8A%8D%E5%A3%AB%E3%81%AE%E6%94%BB%E7%95%A5/3283986004999858/"
                            }
                        }]
                    }
                },
                {
                    "type": "bubble",
                    "header": {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [{
                            "type": "text",
                            "text": "盜賊",
                            "size": "sm",
                            "weight": "bold",
                            "color": "#AAAAAA"
                        }]
                    },
                    "hero": {
                        "type": "image",
                        "url": "https://scontent.ftpe3-1.fna.fbcdn.net/v/t1.6435-9/118806574_151354429957122_8056378523227310425_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=abc084&_nc_ohc=BOI69tcVJPIAX-OZ8YW&_nc_ht=scontent.ftpe3-1.fna&oh=9bdf5210646ce2892ced48c97e8212ad&oe=614CDBB0",
                        "size": "full",
                        "aspectRatio": "20:13",
                        "aspectMode": "cover",
                        "action": {
                            "type": "uri",
                            "label": "Action",
                            "uri": "https://www.facebook.com/notes/ro%E4%BB%99%E5%A2%83%E5%82%B3%E8%AA%AA%E6%96%B0%E4%B8%96%E4%BB%A3%E7%9A%84%E8%AA%95%E7%94%9F/%E5%8D%A1%E6%99%AE%E6%8B%89%E5%B0%8F%E8%AA%B2%E5%A0%82%E7%9B%9C%E8%B3%8A%E3%81%AE%E6%94%BB%E7%95%A5/3281661555232303"
                        }
                    },
                    "body": {
                        "type": "box",
                        "layout": "horizontal",
                        "spacing": "md",
                        "contents": [{
                            "type": "box",
                            "layout": "vertical",
                            "flex": 2,
                            "spacing": "sm",
                            "contents": [{
                                "type": "text",
                                "text": "🔹暴刺型：敏捷AGI>力量STR>幸運LUK\n🔸毒刺型：力量STR>靈巧DEX>敏捷AGI\n🔹隱刺型：力量STR>靈巧DEX>體質VIT",
                                "flex": 1,
                                "wrap": true,
                                "size": "xs",
                                "gravity": "top"
                            }
                            ]
                        }]
                    },
                    "footer": {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [{
                            "type": "button",
                            "action": {
                                "type": "uri",
                                "label": "詳細介紹",
                                "uri": "https://www.facebook.com/notes/ro%E4%BB%99%E5%A2%83%E5%82%B3%E8%AA%AA%E6%96%B0%E4%B8%96%E4%BB%A3%E7%9A%84%E8%AA%95%E7%94%9F/%E5%8D%A1%E6%99%AE%E6%8B%89%E5%B0%8F%E8%AA%B2%E5%A0%82%E7%9B%9C%E8%B3%8A%E3%81%AE%E6%94%BB%E7%95%A5/3281661555232303"
                            }
                        }]
                    }
                }, {
                    "type": "bubble",
                    "header": {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [{
                            "type": "text",
                            "text": "商人",
                            "size": "sm",
                            "weight": "bold",
                            "color": "#AAAAAA"
                        }]
                    },
                    "hero": {
                        "type": "image",
                        "url": "https://scontent.ftpe3-2.fna.fbcdn.net/v/t1.6435-9/118697916_150292603396638_3379934900906416866_n.png?_nc_cat=101&ccb=1-5&_nc_sid=abc084&_nc_ohc=lT7R3WwU1qgAX-oFJYn&_nc_ht=scontent.ftpe3-2.fna&oh=4ff3b45b79238aeafaa5b3ee38674579&oe=614A46D7",
                        "size": "full",
                        "aspectRatio": "20:13",
                        "aspectMode": "cover",
                        "action": {
                            "type": "uri",
                            "label": "Action",
                            "uri": "https://www.facebook.com/notes/ro%E4%BB%99%E5%A2%83%E5%82%B3%E8%AA%AA%E6%96%B0%E4%B8%96%E4%BB%A3%E7%9A%84%E8%AA%95%E7%94%9F/%E5%8D%A1%E6%99%AE%E6%8B%89%E5%B0%8F%E8%AA%B2%E5%A0%82%E5%95%86%E4%BA%BA%E3%81%AE%E6%94%BB%E7%95%A5/3272674672797658"
                        }
                    },
                    "body": {
                        "type": "box",
                        "layout": "horizontal",
                        "spacing": "md",
                        "contents": [{
                            "type": "box",
                            "layout": "vertical",
                            "flex": 2,
                            "spacing": "sm",
                            "contents": [{
                                "type": "text",
                                "text": "🔹狂戰型：敏捷AGI>力量STR>幸運LUK\n🔸機動型：力量STR>靈巧DEX>體質VIT\n🔹金錢型：力量STR>體質VIT>靈巧DEX",
                                "flex": 1,
                                "wrap": true,
                                "size": "xs",
                                "gravity": "top"
                            }
                            ]
                        }]
                    },
                    "footer": {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [{
                            "type": "button",
                            "action": {
                                "type": "uri",
                                "label": "詳細介紹",
                                "uri": "https://www.facebook.com/notes/ro%E4%BB%99%E5%A2%83%E5%82%B3%E8%AA%AA%E6%96%B0%E4%B8%96%E4%BB%A3%E7%9A%84%E8%AA%95%E7%94%9F/%E5%8D%A1%E6%99%AE%E6%8B%89%E5%B0%8F%E8%AA%B2%E5%A0%82%E5%95%86%E4%BA%BA%E3%81%AE%E6%94%BB%E7%95%A5/3272674672797658"
                            }
                        }]
                    }
                }, {
                    "type": "bubble",
                    "header": {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [{
                            "type": "text",
                            "text": "法師",
                            "size": "sm",
                            "weight": "bold",
                            "color": "#AAAAAA"
                        }]
                    },
                    "hero": {
                        "type": "image",
                        "url": "https://scontent.ftpe3-1.fna.fbcdn.net/v/t1.6435-9/118617098_149951323430766_3956630669293684661_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=abc084&_nc_ohc=0I0ddSAy63kAX9pFOI7&_nc_ht=scontent.ftpe3-1.fna&oh=72c76e6cfd1816f5c056c30c6df9bfc5&oe=614D5322",
                        "size": "full",
                        "aspectRatio": "20:13",
                        "aspectMode": "cover",
                        "action": {
                            "type": "uri",
                            "label": "Action",
                            "uri": "https://www.facebook.com/notes/ro%E4%BB%99%E5%A2%83%E5%82%B3%E8%AA%AA%E6%96%B0%E4%B8%96%E4%BB%A3%E7%9A%84%E8%AA%95%E7%94%9F/%E5%8D%A1%E6%99%AE%E6%8B%89%E5%B0%8F%E8%AA%B2%E5%A0%82%E6%B3%95%E5%B8%AB%E3%81%AE%E6%94%BB%E7%95%A5/3269828393082286"
                        }
                    },
                    "body": {
                        "type": "box",
                        "layout": "horizontal",
                        "spacing": "md",
                        "contents": [{
                            "type": "box",
                            "layout": "vertical",
                            "flex": 2,
                            "spacing": "sm",
                            "contents": [{
                                "type": "text",
                                "text": "🔹冰雷型：智力INT=靈巧DEX\n🔸火念型：智力INT>靈巧DEX>體質VIT\n🔹地火型：智力INT=靈巧DEX",
                                "flex": 1,
                                "wrap": true,
                                "size": "xs",
                                "gravity": "top"
                            }
                            ]
                        }]
                    },
                    "footer": {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [{
                            "type": "button",
                            "action": {
                                "type": "uri",
                                "label": "詳細介紹",
                                "uri": "https://www.facebook.com/notes/ro%E4%BB%99%E5%A2%83%E5%82%B3%E8%AA%AA%E6%96%B0%E4%B8%96%E4%BB%A3%E7%9A%84%E8%AA%95%E7%94%9F/%E5%8D%A1%E6%99%AE%E6%8B%89%E5%B0%8F%E8%AA%B2%E5%A0%82%E6%B3%95%E5%B8%AB%E3%81%AE%E6%94%BB%E7%95%A5/3269828393082286"
                            }
                        }]
                    }
                }, {
                    "type": "bubble",
                    "header": {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [{
                            "type": "text",
                            "text": "服事",
                            "size": "sm",
                            "weight": "bold",
                            "color": "#AAAAAA"
                        }]
                    },
                    "hero": {
                        "type": "image",
                        "url": "https://scontent.ftpe3-1.fna.fbcdn.net/v/t1.6435-9/118588427_149687283457170_3371987453634678006_n.png?_nc_cat=106&ccb=1-5&_nc_sid=abc084&_nc_ohc=_den8GBsuZ4AX_HbcFM&_nc_ht=scontent.ftpe3-1.fna&oh=5fa79cea6b5935e5fba3631d15c87376&oe=614D1C7C",
                        "size": "full",
                        "aspectRatio": "20:13",
                        "aspectMode": "cover",
                        "action": {
                            "type": "uri",
                            "label": "Action",
                            "uri": "https://www.facebook.com/notes/ro%E4%BB%99%E5%A2%83%E5%82%B3%E8%AA%AA%E6%96%B0%E4%B8%96%E4%BB%A3%E7%9A%84%E8%AA%95%E7%94%9F/%E5%8D%A1%E6%99%AE%E6%8B%89%E5%B0%8F%E8%AA%B2%E5%A0%82%E6%9C%8D%E4%BA%8B%E3%81%AE%E6%94%BB%E7%95%A5/3267181363346989"
                        }
                    },
                    "body": {
                        "type": "box",
                        "layout": "horizontal",
                        "spacing": "md",
                        "contents": [{
                            "type": "box",
                            "layout": "vertical",
                            "flex": 2,
                            "spacing": "sm",
                            "contents": [{
                                "type": "text",
                                "text": "🔹暴力型：敏捷AGI>力量STR>體質VIT\n🔸驅魔型：智力INT>靈巧DEX>體質VIT\n🔹讚美型：智力INT=靈巧DEX",
                                "flex": 1,
                                "wrap": true,
                                "size": "xs",
                                "gravity": "top"
                            }
                            ]
                        }]
                    },
                    "footer": {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [{
                            "type": "button",
                            "action": {
                                "type": "uri",
                                "label": "詳細介紹",
                                "uri": "https://www.facebook.com/notes/ro%E4%BB%99%E5%A2%83%E5%82%B3%E8%AA%AA%E6%96%B0%E4%B8%96%E4%BB%A3%E7%9A%84%E8%AA%95%E7%94%9F/%E5%8D%A1%E6%99%AE%E6%8B%89%E5%B0%8F%E8%AA%B2%E5%A0%82%E6%9C%8D%E4%BA%8B%E3%81%AE%E6%94%BB%E7%95%A5/3267181363346989"
                            }
                        }]
                    }
                }, {
                    "type": "bubble",
                    "header": {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [{
                            "type": "text",
                            "text": "弓箭手",
                            "size": "sm",
                            "weight": "bold",
                            "color": "#AAAAAA"
                        }]
                    },
                    "hero": {
                        "type": "image",
                        "url": "https://scontent.ftpe8-3.fna.fbcdn.net/v/t1.0-9/118458784_149246663501232_2728769083709125703_n.jpg?_nc_cat=111&_nc_sid=384ca0&_nc_ohc=-ODUaGYFbdgAX8hTBPT&_nc_ht=scontent.ftpe8-3.fna&oh=0f3f519473618bf9dd87b0957be2b34a&oe=5FA9F5AC",
                        "size": "full",
                        "aspectRatio": "20:13",
                        "aspectMode": "cover",
                        "action": {
                            "type": "uri",
                            "label": "Action",
                            "uri": "https://www.facebook.com/notes/ro%E4%BB%99%E5%A2%83%E5%82%B3%E8%AA%AA%E6%96%B0%E4%B8%96%E4%BB%A3%E7%9A%84%E8%AA%95%E7%94%9F/%E5%8D%A1%E6%99%AE%E6%8B%89%E5%B0%8F%E8%AA%B2%E5%A0%82%E5%BC%93%E7%AE%AD%E6%89%8B%E3%81%AE%E6%94%BB%E7%95%A5/3263173773747748"
                        }
                    },
                    "body": {
                        "type": "box",
                        "layout": "horizontal",
                        "spacing": "md",
                        "contents": [{
                            "type": "box",
                            "layout": "vertical",
                            "flex": 2,
                            "spacing": "sm",
                            "contents": [{
                                "type": "text",
                                "text": "🔹射擊型：敏捷AGI>靈巧DEX>幸運LUK\n🔸陷阱型：智力INT=靈巧DEX\n🔹獵鷹型：智力INT>靈巧DEX>敏捷AGI",
                                "flex": 1,
                                "wrap": true,
                                "size": "xs",
                                "gravity": "top"
                            }
                            ]
                        }]
                    },
                    "footer": {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [{
                            "type": "button",
                            "action": {
                                "type": "uri",
                                "label": "詳細介紹",
                                "uri": "https://www.facebook.com/notes/ro%E4%BB%99%E5%A2%83%E5%82%B3%E8%AA%AA%E6%96%B0%E4%B8%96%E4%BB%A3%E7%9A%84%E8%AA%95%E7%94%9F/%E5%8D%A1%E6%99%AE%E6%8B%89%E5%B0%8F%E8%AA%B2%E5%A0%82%E5%BC%93%E7%AE%AD%E6%89%8B%E3%81%AE%E6%94%BB%E7%95%A5/3263173773747748"
                            }
                        }]
                    }
                }
                ]
            }
        };
        event.reply(text);
    };

    this.getMonsterInfo = function (event, sort) {
        var data = require('./roxmonster.json');
        var ListData = [];
        var headData = [];
        for (var i = 1; i < data.length; i++) {
            ListData.push(data[i]);
        }
        if (sort != null) {
            ListData.sort(function (a, b) {
                return parseInt(b[sort+'']) - parseInt(a[sort+'']);
            })
        }
        headData.push(data[0]);
        var str = [];
        var oldStr = [];
        var linecount = 15;
        if (ListData && ListData.length > 0) {
            for (var i = 0; i < ListData.length; i++) {
                var indextemp = i % linecount;
                if (indextemp == 0) {
                    oldStr = [];
                    str[str.length] = oldStr;

                }
                oldStr[indextemp] = {
                    "type": "box",
                    "layout": "horizontal",
                    "spacing": "md",
                    "contents": [{
                        "type": "text",
                        "text": ListData[i]['name'],
                        "align": "start",
                        "wrap": true,
                        "size": "xs"
                    },
                    {
                        "type": "text",
                        "text": ListData[i]['level'],
                        "align": "start",
                        "wrap": true,
                        "size": "xs"
                    },
                    {
                        "type": "text",
                        "text": ListData[i]['ml'],
                        "align": "start",
                        "wrap": true,
                        "size": "xs"
                    },
                    {
                        "type": "text",
                        "text": ListData[i]['base'],
                        "align": "start",
                        "wrap": true,
                        "size": "xs"
                    },
                    {
                        "type": "text",
                        "text": ListData[i]['job'],
                        "align": "start",
                        "wrap": true,
                        "size": "xs"
                    }
                    ]
                };
            };
            var newAllStr = [];
            for (var i = 0; i < str.length; i++) {
                newAllStr.push({
                    "type": "bubble",
                    "direction": "ltr",
                    "header": {
                        "type": "box",
                        "layout": "horizontal",
                        "spacing": "md",
                        "contents": [{
                            "type": "text",
                            "text": headData[0]['name'],
                            "align": "start",
                            "weight": "bold",
                            "size": "xs"
                        },
                        {
                            "type": "text",
                            "text": headData[0]['level'],
                            "align": "start",
                            "weight": "bold",
                            "size": "xs"
                        },
                        {
                            "type": "text",
                            "text": headData[0]['ml'],
                            "align": "start",
                            "weight": "bold",
                            "size": "xs"
                        },
                        {
                            "type": "text",
                            "text": headData[0]['base'],
                            "align": "start",
                            "weight": "bold",
                            "size": "xs"
                        },
                        {
                            "type": "text",
                            "text": headData[0]['job'],
                            "align": "start",
                            "weight": "bold",
                            "size": "xs"
                        }
                        ]
                    },
                    "body": {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "md",
                        "contents": str[i]
                    },
                    "styles": {
                        "header": {
                            "backgroundColor": "#E7E9EA"
                        },
                        "body": {
                            "separator": true,
                            "separatorColor": "#363636"
                        }
                    }
                })
            }
            var alltext = {
                "type": "flex",
                "altText": "怪物經驗表",
                "contents": {
                    "type": "carousel",
                    "contents": newAllStr
                }
            }

            event.reply(alltext).then(function (data) { });
        }
    };
    this.getMonsterCard = function (event, sort) {
        var data = require('./roxmonster2.json');;
        var ListData = [];

        for (var i = 0; i < data.length; i++) {
            var level = parseInt(data[i]['level'])

            if (sort == "LL") {
                if (level > 68) {
                    ListData.push(data[i]);
                }
            } else if (sort == "L") {
                if (level >= 55 && level <= 68) {
                    ListData.push(data[i]);
                }
            } else if (sort == "small") {
                if (level > 30 && level <= 40) {
                    ListData.push(data[i]);
                }
            } else if (sort == "xsmall") {
                if (level <= 30) {
                    ListData.push(data[i]);
                }
            } else {
                if (level > 40 && level < 55) {
                    ListData.push(data[i]);
                }
            }
        }
        var str = [];
        var oldStr = [];
        var linecount = 15;
        if (ListData && ListData.length > 0) {
            for (var i = 0; i < ListData.length; i++) {
                var indextemp = i % linecount;
                if (indextemp == 0) {
                    oldStr = [];
                    str[str.length] = oldStr;

                }
                oldStr[indextemp] = {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "box",
                            "layout": "baseline",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": ListData[i]['name'],
                                    "color": "#1c83c3",
                                    "size": "sm",
                                    "weight": "bold"
                                },
                                {
                                    "type": "text",
                                    "text": ListData[i]['race'] + "/" + ListData[i]['ml']+ "/Lv" + ListData[i]['level'],
                                    "color": "#5d7382",
                                    "size": "xs",
                                    "weight": "bold"
                                }
                            ],
                            "flex": 1
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": "卡片類型",
                                                    "size": "xxs",
                                                    "color": "#aaaaaa",
                                                    "weight": "bold",
                                                    "flex": 1,
                                                    "align": "start"
                                                },
                                                {
                                                    "type": "text",
                                                    "text": ListData[i]['cardtype'],
                                                    "size": "xxs",
                                                    "color": "#666666",
                                                    "weight": "bold",
                                                    "flex": 1,
                                                    "wrap": true
                                                }
                                            ]
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [
                                                {
                                                    "type": "text",
                                                    "text": "卡片功效",
                                                    "size": "xxs",
                                                    "color": "#aaaaaa",
                                                    "weight": "bold",
                                                    "flex": 1
                                                },
                                                {
                                                    "type": "text",
                                                    "text": ListData[i]['cardfunc'],
                                                    "size": "xxs",
                                                    "color": "#666666",
                                                    "weight": "bold",
                                                    "flex": 1,
                                                    "wrap": true
                                                }
                                            ]
                                        }
                                    ],
                                    "paddingAll": "sm",
                                    "alignItems": "flex-start"
                                }
                            ],
                            "flex": 1,
                            "backgroundColor": "#e2e2e2"
                        }
                    ]
                };
            };
            var newAllStr = [];
            for (var i = 0; i < str.length; i++) {
                newAllStr.push({
                    "type": "bubble",
                    "direction": "ltr",
                    "body": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": str[i]
                    }
                })
            }
            var alltext = {
                "type": "flex",
                "altText": "怪物卡片",
                "contents": {
                    "type": "carousel",
                    "contents": newAllStr
                }
            }

            event.reply(alltext).then(function (data) { });
        }
    };
    this.getMagicInfo = function (event) {
        var text = {
            "type": "carousel",
            "contents": [
                {
                    "type": "bubble",
                    "size": "kilo",
                    "header": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "普隆德拉",
                                "color": "#ffffff",
                                "align": "start",
                                "size": "md",
                                "gravity": "center",
                                "weight": "bold"
                            },
                            {
                                "type": "text",
                                "text": "治煉1級",
                                "color": "#84C1FF",
                                "align": "start",
                                "size": "xs",
                                "gravity": "center",
                                "margin": "xs",
                                "weight": "bold"
                            }
                        ],
                        "backgroundColor": "#0066CC",
                        "paddingTop": "19px",
                        "paddingAll": "12px",
                        "paddingBottom": "16px"
                    },
                    "body": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "武器",
                                        "color": "#0066CC",
                                        "size": "sm",
                                        "wrap": true,
                                        "flex": 30,
                                        "gravity": "center"
                                    },
                                    {
                                        "type": "text",
                                        "text": "砥礪附魔石(單手x3 雙手x6)",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "text",
                                        "text": "材料: 精魔礦石Lv1 x15、碎晶魔菇 x2",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "flex": 70,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "力量、敏捷、體質、智力、靈巧、幸運"
                                            },
                                            {
                                                "type": "text",
                                                "flex": 30,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "+6",
                                                "weight": "bold",
                                                "align": "end",
                                                "gravity": "top"
                                            }
                                        ],
                                        "flex": 100,
                                        "margin": "md"
                                    },
                                    {
                                        "type": "text",
                                        "text": "防具",
                                        "color": "#0066CC",
                                        "size": "sm",
                                        "wrap": true,
                                        "flex": 30,
                                        "gravity": "top",
                                        "margin": "lg"
                                    },
                                    {
                                        "type": "text",
                                        "text": "韌化之附魔石x2",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "text",
                                        "text": "材料: 精魔礦石Lv1 x15、堅韌藤 x2",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "flex": 70,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "力量、敏捷、體質、智力、靈巧、幸運"
                                            },
                                            {
                                                "type": "text",
                                                "flex": 30,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "+2",
                                                "weight": "bold",
                                                "align": "end",
                                                "gravity": "top"
                                            }
                                        ],
                                        "flex": 70,
                                        "margin": "md"
                                    },
                                    {
                                        "type": "text",
                                        "text": "飾品",
                                        "color": "#0066CC",
                                        "size": "sm",
                                        "wrap": true,
                                        "flex": 30,
                                        "gravity": "top",
                                        "margin": "lg"
                                    },
                                    {
                                        "type": "text",
                                        "text": "密塵之附魔石x2",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "text",
                                        "text": "材料: 精魔礦石Lv1 x15、奧秘之花 x2",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "flex": 70,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "力量、敏捷、體質、智力、靈巧、幸運"
                                            },
                                            {
                                                "type": "text",
                                                "flex": 30,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "+2",
                                                "weight": "bold",
                                                "align": "end",
                                                "gravity": "top"
                                            }
                                        ],
                                        "flex": 70,
                                        "margin": "md"
                                    }
                                ],
                                "flex": 2
                            },
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": []
                            }
                        ],
                        "spacing": "md",
                        "paddingAll": "12px"
                    },
                    "styles": {
                        "footer": {
                            "separator": false
                        }
                    }
                },
                {
                    "type": "bubble",
                    "size": "kilo",
                    "header": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "夢羅克",
                                "color": "#ffffff",
                                "align": "start",
                                "size": "md",
                                "gravity": "top",
                                "weight": "bold"
                            },
                            {
                                "type": "text",
                                "text": "治煉3級",
                                "color": "#00E3E3",
                                "align": "start",
                                "size": "xs",
                                "gravity": "top",
                                "margin": "xs",
                                "weight": "bold"
                            }
                        ],
                        "backgroundColor": "#009393",
                        "paddingTop": "19px",
                        "paddingAll": "12px",
                        "paddingBottom": "16px"
                    },
                    "body": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "武器",
                                        "color": "#005757",
                                        "size": "sm",
                                        "wrap": true,
                                        "flex": 30,
                                        "gravity": "top"
                                    },
                                    {
                                        "type": "text",
                                        "text": "熾灼附魔石(單手x3 雙手x6)",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "text",
                                        "text": "材料: 精魔礦石Lv2 x16、黃金花 x3",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "flex": 70,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "物理攻擊、魔法攻擊、物防穿透、魔防穿透"
                                            },
                                            {
                                                "type": "text",
                                                "flex": 30,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "+54",
                                                "weight": "bold",
                                                "align": "end",
                                                "gravity": "top"
                                            }
                                        ],
                                        "flex": 100,
                                        "margin": "md"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "flex": 70,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "物傷附加、魔傷附加"
                                            },
                                            {
                                                "type": "text",
                                                "flex": 30,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "+80",
                                                "weight": "bold",
                                                "align": "end",
                                                "gravity": "top"
                                            }
                                        ],
                                        "flex": 100,
                                        "margin": "md"
                                    },
                                    {
                                        "type": "text",
                                        "text": "防具",
                                        "color": "#005757",
                                        "size": "sm",
                                        "wrap": true,
                                        "flex": 30,
                                        "gravity": "top",
                                        "margin": "lg"
                                    },
                                    {
                                        "type": "text",
                                        "text": "固化之附魔石x2",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "text",
                                        "text": "材料: 精魔礦石Lv2 x16、炎地蘑菇 x2",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "flex": 70,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "物理防禦、魔法防禦"
                                            },
                                            {
                                                "type": "text",
                                                "flex": 30,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "+18",
                                                "weight": "bold",
                                                "align": "end",
                                                "gravity": "top"
                                            }
                                        ],
                                        "flex": 70,
                                        "margin": "md"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "flex": 70,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "最大HP"
                                            },
                                            {
                                                "type": "text",
                                                "flex": 30,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "+100",
                                                "weight": "bold",
                                                "align": "end",
                                                "gravity": "top"
                                            }
                                        ],
                                        "flex": 70,
                                        "margin": "md"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "flex": 70,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "最大SP"
                                            },
                                            {
                                                "type": "text",
                                                "flex": 30,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "+90",
                                                "weight": "bold",
                                                "align": "end",
                                                "gravity": "top"
                                            }
                                        ],
                                        "flex": 70,
                                        "margin": "md"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "flex": 70,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "物傷減免、魔傷減免"
                                            },
                                            {
                                                "type": "text",
                                                "flex": 30,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "+27",
                                                "weight": "bold",
                                                "align": "end",
                                                "gravity": "top"
                                            }
                                        ],
                                        "flex": 70,
                                        "margin": "md"
                                    },
                                    {
                                        "type": "text",
                                        "text": "飾品",
                                        "color": "#005757",
                                        "size": "sm",
                                        "wrap": true,
                                        "flex": 30,
                                        "gravity": "top",
                                        "margin": "lg"
                                    },
                                    {
                                        "type": "text",
                                        "text": "密塵之附魔石x2",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "text",
                                        "text": "材料: 精魔礦石Lv2 x16、枯葉荊 x2",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "flex": 70,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "攻速、急速、命中、暴擊、閃避、防暴"
                                            },
                                            {
                                                "type": "text",
                                                "flex": 30,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "+18",
                                                "weight": "bold",
                                                "align": "end",
                                                "gravity": "top"
                                            }
                                        ],
                                        "flex": 70,
                                        "margin": "md"
                                    }
                                ],
                                "flex": 2
                            },
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": []
                            }
                        ],
                        "spacing": "md",
                        "paddingAll": "12px"
                    },
                    "styles": {
                        "footer": {
                            "separator": false
                        }
                    }
                }, {
                    "type": "bubble",
                    "size": "kilo",
                    "header": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "依斯魯得",
                                "color": "#ffffff",
                                "align": "start",
                                "size": "md",
                                "gravity": "top",
                                "weight": "bold"
                            },
                            {
                                "type": "text",
                                "text": "治煉5級",
                                "color": "#FF7575",
                                "align": "start",
                                "size": "xs",
                                "gravity": "top",
                                "margin": "xs",
                                "weight": "bold"
                            }
                        ],
                        "backgroundColor": "#750000",
                        "paddingTop": "19px",
                        "paddingAll": "12px",
                        "paddingBottom": "16px"
                    },
                    "body": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "武器",
                                        "color": "#600000",
                                        "size": "sm",
                                        "wrap": true,
                                        "flex": 30,
                                        "gravity": "top"
                                    },
                                    {
                                        "type": "text",
                                        "text": "汐流附魔石(單手x3 雙手x6)",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "text",
                                        "text": "材料: 精魔礦石Lv3 x12、迎汐花 x7",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "flex": 70,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "對(天使/惡魔/五行/昆蟲/魚貝/人形/不死/龍族/植物/動物)傷害增加"
                                            },
                                            {
                                                "type": "text",
                                                "flex": 30,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "+3%",
                                                "weight": "bold",
                                                "align": "end",
                                                "gravity": "top"
                                            }
                                        ],
                                        "flex": 100,
                                        "margin": "md"
                                    },
                                    {
                                        "type": "text",
                                        "text": "防具",
                                        "color": "#600000",
                                        "size": "sm",
                                        "wrap": true,
                                        "flex": 30,
                                        "gravity": "top",
                                        "margin": "lg"
                                    },
                                    {
                                        "type": "text",
                                        "text": "晶華之附魔石x2",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "text",
                                        "text": "材料: 精魔礦石Lv3 x12、海晶草 x7",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "flex": 70,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "對(天使/惡魔/五行/昆蟲/魚貝/人形/不死/龍族/植物/動物)傷害減傷"
                                            },
                                            {
                                                "type": "text",
                                                "flex": 30,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "+1%",
                                                "weight": "bold",
                                                "align": "end",
                                                "gravity": "top"
                                            }
                                        ],
                                        "flex": 70,
                                        "margin": "md"
                                    },
                                    {
                                        "type": "text",
                                        "text": "飾品",
                                        "color": "#600000",
                                        "size": "sm",
                                        "wrap": true,
                                        "flex": 30,
                                        "gravity": "top",
                                        "margin": "lg"
                                    },
                                    {
                                        "type": "text",
                                        "text": "螢星之附魔石x2",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "text",
                                        "text": "材料: 精魔礦石Lv3 x12、晚螢葉 x7",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "flex": 70,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "對(大/中/小)體型增傷、(無/火/水/地/風/毒/聖/暗/念)屬性增強"
                                            },
                                            {
                                                "type": "text",
                                                "flex": 30,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "+1%",
                                                "weight": "bold",
                                                "align": "end",
                                                "gravity": "top"
                                            }
                                        ],
                                        "flex": 70,
                                        "margin": "md"
                                    }
                                ],
                                "flex": 2
                            },
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": []
                            }
                        ],
                        "spacing": "md",
                        "paddingAll": "12px"
                    },
                    "styles": {
                        "footer": {
                            "separator": false
                        }
                    }
                }, {
                    "type": "bubble",
                    "size": "kilo",
                    "header": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "艾爾貝塔",
                                "color": "#ffffff",
                                "align": "start",
                                "size": "md",
                                "gravity": "top",
                                "weight": "bold"
                            },
                            {
                                "type": "text",
                                "text": "治煉5級",
                                "color": "#FF8F59",
                                "align": "start",
                                "size": "xs",
                                "gravity": "top",
                                "margin": "xs",
                                "weight": "bold"
                            }
                        ],
                        "backgroundColor": "#D94600",
                        "paddingTop": "19px",
                        "paddingAll": "12px",
                        "paddingBottom": "16px"
                    },
                    "body": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "武器",
                                        "color": "#BB3D00",
                                        "size": "sm",
                                        "wrap": true,
                                        "flex": 30,
                                        "gravity": "top"
                                    },
                                    {
                                        "type": "text",
                                        "text": "汐流附魔石(單手x3 雙手x6)",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "text",
                                        "text": "材料: 精魔礦石Lv3 x12、迎汐花 x7",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "flex": 70,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "對(無/火/水/地/風/毒/聖/暗/念/不死)屬性增傷"
                                            },
                                            {
                                                "type": "text",
                                                "flex": 30,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "+3%",
                                                "weight": "bold",
                                                "align": "end",
                                                "gravity": "top"
                                            }
                                        ],
                                        "flex": 100,
                                        "margin": "md"
                                    },
                                    {
                                        "type": "text",
                                        "text": "防具",
                                        "color": "#BB3D00",
                                        "size": "sm",
                                        "wrap": true,
                                        "flex": 30,
                                        "gravity": "top",
                                        "margin": "lg"
                                    },
                                    {
                                        "type": "text",
                                        "text": "晶華之附魔石x2",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "text",
                                        "text": "材料: 精魔礦石Lv3 x12、海晶草 x7",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "flex": 70,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "受(無/火/水/地/風/毒/聖/暗/念/不死)減傷"
                                            },
                                            {
                                                "type": "text",
                                                "flex": 30,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "+1%",
                                                "weight": "bold",
                                                "align": "end",
                                                "gravity": "top"
                                            }
                                        ],
                                        "flex": 70,
                                        "margin": "md"
                                    },
                                    {
                                        "type": "text",
                                        "text": "飾品",
                                        "color": "#BB3D00",
                                        "size": "sm",
                                        "wrap": true,
                                        "flex": 30,
                                        "gravity": "top",
                                        "margin": "lg"
                                    },
                                    {
                                        "type": "text",
                                        "text": "螢星之附魔石x2",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "text",
                                        "text": "材料: 精魔礦石Lv3 x12、晚螢葉 x7",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "flex": 70,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "物理防禦、魔法防禦、攻速提升、急速提升、命中、閃避、暴擊、防禦、物理穿透、魔法穿透"
                                            },
                                            {
                                                "type": "text",
                                                "flex": 30,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "+1.6%",
                                                "weight": "bold",
                                                "align": "end",
                                                "gravity": "top"
                                            }
                                        ],
                                        "flex": 70,
                                        "margin": "md"
                                    }
                                ],
                                "flex": 2
                            },
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": []
                            }
                        ],
                        "spacing": "md",
                        "paddingAll": "12px"
                    },
                    "styles": {
                        "footer": {
                            "separator": false
                        }
                    }
                }, {
                    "type": "bubble",
                    "size": "kilo",
                    "header": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "斐揚",
                                "color": "#ffffff",
                                "align": "start",
                                "size": "md",
                                "gravity": "top",
                                "weight": "bold"
                            },
                            {
                                "type": "text",
                                "text": "治煉7級",
                                "color": "#A6A6D2",
                                "align": "start",
                                "size": "xs",
                                "gravity": "top",
                                "margin": "xs",
                                "weight": "bold"
                            }
                        ],
                        "backgroundColor": "#5A5AAD",
                        "paddingTop": "19px",
                        "paddingAll": "12px",
                        "paddingBottom": "16px"
                    },
                    "body": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "武器",
                                        "color": "#5151A2",
                                        "size": "sm",
                                        "wrap": true,
                                        "flex": 30,
                                        "gravity": "top"
                                    },
                                    {
                                        "type": "text",
                                        "text": "陰沉附魔石(單手x3 雙手x6)",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "text",
                                        "text": "材料: 精魔礦石Lv4 x15、陰氣草 x10",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "flex": 70,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "力量、敏捷、智力、靈巧"
                                            },
                                            {
                                                "type": "text",
                                                "flex": 30,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "+15",
                                                "weight": "bold",
                                                "align": "end",
                                                "gravity": "top"
                                            }
                                        ],
                                        "flex": 100,
                                        "margin": "md"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "flex": 70,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "物理攻擊、魔法攻擊、物防穿透、魔防穿透、物傷附加、魔傷附加"
                                            },
                                            {
                                                "type": "text",
                                                "flex": 30,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "+90",
                                                "weight": "bold",
                                                "align": "end",
                                                "gravity": "top"
                                            }
                                        ],
                                        "flex": 100,
                                        "margin": "md"
                                    },
                                    {
                                        "type": "text",
                                        "text": "防具",
                                        "color": "#5151A2",
                                        "size": "sm",
                                        "wrap": true,
                                        "flex": 30,
                                        "gravity": "top",
                                        "margin": "lg"
                                    },
                                    {
                                        "type": "text",
                                        "text": "岩化之附魔石x2",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "text",
                                        "text": "材料: 精魔礦石Lv4 x15、赫色花苗 x10",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "flex": 70,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "力量、體質、智力、幸運"
                                            },
                                            {
                                                "type": "text",
                                                "flex": 30,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "+5",
                                                "weight": "bold",
                                                "align": "end",
                                                "gravity": "top"
                                            }
                                        ],
                                        "flex": 70,
                                        "margin": "md"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "flex": 70,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "物理防禦、魔法防禦"
                                            },
                                            {
                                                "type": "text",
                                                "flex": 30,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "+30",
                                                "weight": "bold",
                                                "align": "end",
                                                "gravity": "top"
                                            }
                                        ],
                                        "flex": 70,
                                        "margin": "md"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "flex": 70,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "最大HP"
                                            },
                                            {
                                                "type": "text",
                                                "flex": 30,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "+2400",
                                                "weight": "bold",
                                                "align": "end",
                                                "gravity": "top"
                                            }
                                        ],
                                        "flex": 70,
                                        "margin": "md"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "flex": 70,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "最大SP"
                                            },
                                            {
                                                "type": "text",
                                                "flex": 30,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "+150",
                                                "weight": "bold",
                                                "align": "end",
                                                "gravity": "top"
                                            }
                                        ],
                                        "flex": 70,
                                        "margin": "md"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "flex": 70,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "物傷減免、魔傷減免"
                                            },
                                            {
                                                "type": "text",
                                                "flex": 30,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "+60",
                                                "weight": "bold",
                                                "align": "end",
                                                "gravity": "top"
                                            }
                                        ],
                                        "flex": 70,
                                        "margin": "md"
                                    },
                                    {
                                        "type": "text",
                                        "text": "飾品",
                                        "color": "#5151A2",
                                        "size": "sm",
                                        "wrap": true,
                                        "flex": 30,
                                        "gravity": "top",
                                        "margin": "lg"
                                    },
                                    {
                                        "type": "text",
                                        "text": "銀靈之附魔石x2",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "text",
                                        "text": "材料: 精魔礦石Lv4 x15、靜謐花 x10",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "flex": 70,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "敏捷、智力、靈巧、幸運"
                                            },
                                            {
                                                "type": "text",
                                                "flex": 30,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "+5",
                                                "weight": "bold",
                                                "align": "end",
                                                "gravity": "top"
                                            }
                                        ],
                                        "flex": 70,
                                        "margin": "md"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "flex": 70,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "攻速、急速、命中、暴擊、閃避、防爆"
                                            },
                                            {
                                                "type": "text",
                                                "flex": 30,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "+30",
                                                "weight": "bold",
                                                "align": "end",
                                                "gravity": "top"
                                            }
                                        ],
                                        "flex": 70,
                                        "margin": "md"
                                    }
                                ],
                                "flex": 2
                            },
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": []
                            }
                        ],
                        "spacing": "md",
                        "paddingAll": "12px"
                    },
                    "styles": {
                        "footer": {
                            "separator": false
                        }
                    }
                }, {
                    "type": "bubble",
                    "size": "kilo",
                    "header": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "吉芬",
                                "color": "#ffffff",
                                "align": "start",
                                "size": "md",
                                "gravity": "top",
                                "weight": "bold"
                            },
                            {
                                "type": "text",
                                "text": "治煉8級",
                                "color": "#CA8EC2",
                                "align": "start",
                                "size": "xs",
                                "gravity": "top",
                                "margin": "xs",
                                "weight": "bold"
                            }
                        ],
                        "backgroundColor": "#8F4586",
                        "paddingTop": "19px",
                        "paddingAll": "12px",
                        "paddingBottom": "16px"
                    },
                    "body": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": "武器",
                                        "color": "#6C3365",
                                        "size": "sm",
                                        "wrap": true,
                                        "flex": 30,
                                        "gravity": "top"
                                    },
                                    {
                                        "type": "text",
                                        "text": "寒輝附魔石(單手x3 雙手x6)",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "text",
                                        "text": "材料: 精魔礦石Lv4 x33、月光花 x17",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "flex": 70,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "爆傷附加、物理吸血、治療加成、物理攻擊、魔法攻擊、最終(物傷/魔傷)附加、最終(物防/魔防)穿透、魔法吸血"
                                            },
                                            {
                                                "type": "text",
                                                "flex": 30,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "+3.6%",
                                                "weight": "bold",
                                                "align": "end",
                                                "gravity": "top"
                                            }
                                        ],
                                        "flex": 100,
                                        "margin": "md"
                                    },
                                    {
                                        "type": "text",
                                        "text": "防具",
                                        "color": "#6C3365",
                                        "size": "sm",
                                        "wrap": true,
                                        "flex": 30,
                                        "gravity": "top",
                                        "margin": "lg"
                                    },
                                    {
                                        "type": "text",
                                        "text": "祈化之附魔石x2",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "text",
                                        "text": "材料: 精魔礦石Lv4 x33、青晶薔薇 x17",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "flex": 70,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "最大HP、最大SP"
                                            },
                                            {
                                                "type": "text",
                                                "flex": 30,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "+2.4%",
                                                "weight": "bold",
                                                "align": "end",
                                                "gravity": "top"
                                            }
                                        ],
                                        "flex": 70,
                                        "margin": "md"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "flex": 70,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "接受治療加成、最終物傷減免、最終魔傷減免、最終物防效果、最終魔防效果、爆傷減免、最大HP恢復、最大SP恢復"
                                            },
                                            {
                                                "type": "text",
                                                "flex": 30,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "+1.2%",
                                                "weight": "bold",
                                                "align": "end",
                                                "gravity": "top"
                                            }
                                        ],
                                        "flex": 70,
                                        "margin": "md"
                                    },
                                    {
                                        "type": "text",
                                        "text": "飾品",
                                        "color": "#6C3365",
                                        "size": "sm",
                                        "wrap": true,
                                        "flex": 30,
                                        "gravity": "top",
                                        "margin": "lg"
                                    },
                                    {
                                        "type": "text",
                                        "text": "瑰晶之附魔石x2",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "text",
                                        "text": "材料: 精魔礦石Lv4 x33、青晶薔薇 x17",
                                        "size": "xxs",
                                        "color": "#ADADAD"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "flex": 70,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "最終攻速、最終急速"
                                            },
                                            {
                                                "type": "text",
                                                "flex": 30,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "+6%",
                                                "weight": "bold",
                                                "align": "end",
                                                "gravity": "top"
                                            }
                                        ],
                                        "flex": 70,
                                        "margin": "md"
                                    },
                                    {
                                        "type": "box",
                                        "layout": "horizontal",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "flex": 70,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "最終爆擊、最終防爆、物傷反彈、最終命中、法傷反彈、負面狀態減免、負面狀態抵抗"
                                            },
                                            {
                                                "type": "text",
                                                "flex": 30,
                                                "size": "xs",
                                                "wrap": true,
                                                "text": "+1.2%",
                                                "weight": "bold",
                                                "align": "end",
                                                "gravity": "top"
                                            }
                                        ],
                                        "flex": 70,
                                        "margin": "md"
                                    }
                                ],
                                "flex": 2
                            },
                            {
                                "type": "box",
                                "layout": "vertical",
                                "contents": []
                            }
                        ],
                        "spacing": "md",
                        "paddingAll": "12px"
                    },
                    "styles": {
                        "footer": {
                            "separator": false
                        }
                    }
                }
            ]
        };
        var alltext = {
            "type": "flex",
            "altText": "RO附魔",
            "contents": text
        }
        event.reply(alltext);
    }
};

module.exports = roxFun;