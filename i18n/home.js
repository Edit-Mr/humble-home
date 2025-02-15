/** @format */

const humbleRoom = () => {
    // if("山".height > 1000)
    if ("山".includes("仙")) return "名";
    else console.log("山不在高，有仙則名。");

    // if("水".deapth > 100)
    if ("水".includes("龍")) return 0;
    else console.log("水不在深，有龍則靈。");

    let room = {
        type: "陋室",
        德: "馨",
        階梯: {},
        簾: {},
    };

    console.log(`斯是${room.type}，惟吾德${room.德}。`);

    let moss = { name: "苔", color: "綠" };
    room.階梯.color = moss.color;
    console.log(`${moss.name}痕上階${room.階梯.color}，`);

    let grass = { name: "草", color: "青" };
    room.簾.color = grass.color;
    console.log(`${grass.name}色入簾${room.簾.color}。`);

    let guests = ["鴻儒", "鴻儒"];
    if (guests.includes("鴻儒")) console.log("談笑有鴻儒");
    if (!guests.includes("白丁")) console.log("往來無白丁");

    let activities = ["調素琴", "閱金經"];
    console.log(`可以${activities.join("，")}。`);

    console.log(("絲竹" in room ? "有" : "無") + "絲竹之亂耳。");
    console.log(("案牘" in room ? "有" : "無") + "案牘之勞形。");

    room.related = [
        {
            time: "南陽",
            owner: "諸葛",
            type: "廬",
        },
        {
            time: "西蜀",
            owner: "子雲",
            type: "亭",
        },
    ];
    console.log(
        room.related
            .map(place => `${place.time}${place.owner}${place.type}`)
            .join("，") + "。"
    );
};

const confuciusSay = text => console.log(`孔子云：「${text}」`);

humbleRoom();
confuciusSay("何陋之有？");
