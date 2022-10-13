
function storyinit() {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    this.postOption = function (event, groupText, isGroup, work, response, isFull) {
        var data = response;
        var AllContent = [];
        if (isGroup) {
            var grpContent = []
            for (var i = 0; i < data["group"]['list'].length; i++) {
                grpContent.push({
                    "type": "text",
                    "text": data["group"]['list'][i]['info'],
                    "weight": "bold",
                    "size": "xs",
                    "color": "#187bdc",
                    "align": "start",
                    "margin": "xs",
                    "wrap": true,
                    "contents": [],
                    "action": {
                        "type": "message",
                        "text": data["group"]['list'][i]['action']
                    }
                },
                    {
                        "type": "text",
                        "text": data["group"]['list'][i]['desc'],
                        "weight": "regular",
                        "size": "xxs",
                        "color": "#BBBBBB",
                        "margin": "xs",
                        "wrap": true,
                        "contents": []
                    })
            }
            AllContent.push({
                "type": "bubble",
                "direction": "ltr",
                "size": "kilo",
                "header": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "separator",
                            "color": "#187bdc"
                        },
                        {
                            "type": "text",
                            "text": data["group"]['title'],
                            "margin": "md",
                            "color": "#187bdc",
                            "weight": "bold",
                            "align": "center"
                        },
                        {
                            "type": "separator",
                            "margin": "md",
                            "color": "#187bdc"
                        }
                    ],
                    "paddingBottom": "none"
                },
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": grpContent
                },
                "footer": {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",

                    "contents": [
                        {
                            "type": "separator",
                            "color": "#187bdc"
                        },
                        {
                            "type": "text",
                            "text": "以上功能可直接點擊觸發或開啟引導",
                            "align": "center",
                            "margin": "lg",
                            "weight": "bold",
                            "color": "#187bdc",
                            "size": "sm"
                        }

                    ],
                    "flex": 0,
                }
            });

        }
        if (isFull) {
            var defaultCont = []
            for (var i = 0; i < data["default"]['list'].length; i++) {
                defaultCont.push({
                    "type": "text",
                    "text": data["default"]['list'][i]['info'],
                    "weight": "bold",
                    "size": "xs",
                    "color": "#187bdc",
                    "align": "start",
                    "margin": "xs",
                    "wrap": true,
                    "contents": [],
                    "action": {
                        "type": "message",
                        "text": data["default"]['list'][i]['action']
                    }
                },
                    {
                        "type": "text",
                        "text": data["default"]['list'][i]['desc'],
                        "weight": "regular",
                        "size": "xxs",
                        "margin": "xs",
                        "color": "#BBBBBB",
                        "wrap": true,
                        "contents": []
                    })
            }
            var defaulContent = {
                "type": "bubble",
                "direction": "ltr",
                "size": "kilo",
                "header": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "separator",
                            "color": "#187bdc"
                        },
                        {
                            "type": "text",
                            "text": data["default"]['title'],
                            "margin": "md",
                            "color": "#187bdc",
                            "weight": "bold",
                            "align": "center"
                        },
                        {
                            "type": "separator",
                            "margin": "md",
                            "color": "#187bdc"
                        }
                    ],
                    "paddingBottom": "none"
                },
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": defaultCont
                },
                "footer": {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [
                        {
                            "type": "separator",
                            "color": "#187bdc"
                        },
                        {
                            "type": "text",
                            "text": "以上功能可直接點擊觸發或開啟引導",
                            "align": "center",
                            "margin": "lg",
                            "weight": "bold",
                            "color": "#187bdc",
                            "size": "sm"
                        }
                    ],
                    "flex": 0,
                }
            }
            AllContent.push(defaulContent);
        }
        if (work != null && data[work]['list'].length > 0) {
            var cont = [];
            for (var i = 0; i < data[work]['list'].length; i++) {
                cont.push({
                    "type": "text",
                    "text": data[work]['list'][i]['info'],
                    "weight": "bold",
                    "size": "xs",
                    "color": "#187bdc",
                    "align": "start",
                    "margin": "xs",
                    "wrap": true,
                    "contents": [],
                    "action": {
                        "type": "message",
                        "text": data[work]['list'][i]['action']
                    }
                },
                    {
                        "type": "text",
                        "text": data[work]['list'][i]['desc'],
                        "weight": "regular",
                        "size": "xxs",
                        "margin": "xs",
                        "color": "#BBBBBB",
                        "wrap": true,
                        "contents": []
                    })
            }
            var nomalContent = {
                "type": "bubble",
                "direction": "ltr",
                "size": "kilo",
                "header": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "separator",
                            "color": "#187bdc"
                        },
                        {
                            "type": "text",
                            "text": data[work]['title'],
                            "margin": "md",
                            "color": "#187bdc",
                            "weight": "bold",
                            "align": "center"
                        },
                        {
                            "type": "separator",
                            "margin": "md",
                            "color": "#187bdc"
                        }
                    ],
                    "paddingBottom": "none"
                },
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": cont
                },
                "footer": {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [{
                        "type": "separator",
                        "color": "#187bdc"
                    },
                    {
                        "type": "text",
                        "text": "以上功能可直接點擊觸發或開啟引導",
                        "align": "center",
                        "margin": "lg",
                        "weight": "bold",
                        "color": "#187bdc",
                        "size": "sm"
                    }
                    ],
                    "flex": 0,
                }
            }
            AllContent.push(nomalContent);
        }


        if (groupText != null) {
            AllContent.push({
                "type": "bubble",
                "direction": "ltr",
                "size": "kilo",
                "header": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "separator",
                            "color": "#187bdc"
                        },
                        {
                            "type": "text",
                            "text": "自訂指令",
                            "margin": "md",
                            "color": "#187bdc",
                            "weight": "bold",
                            "align": "center"
                        },
                        {
                            "type": "separator",
                            "margin": "md",
                            "color": "#187bdc"
                        }
                    ],
                    "paddingBottom": "none"
                },
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": groupText
                },
                "footer": {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [{
                        "type": "separator",
                        "color": "#187bdc"
                    },
                    {
                        "type": "text",
                        "text": "以上功能可直接點擊觸發或開啟引導",
                        "align": "center",
                        "weight": "bold",
                        "color": "#187bdc",
                        "size": "sm"
                    }
                    ],
                    "flex": 0,
                }
            });
        }
        var alltext = {
            "type": "flex",
            "altText": "兔管家功能",
            "contents": {
                "type": "carousel",
                "contents": AllContent
            }
        }
        event.reply(alltext);


    }
};

module.exports = storyinit;