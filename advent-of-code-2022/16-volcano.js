const input = `Valve TZ has flow rate=0; tunnels lead to valves ZJ, DM
Valve LH has flow rate=0; tunnels lead to valves FP, IS
Valve AA has flow rate=0; tunnels lead to valves XU, JH, CD, WY, HK
Valve GP has flow rate=0; tunnels lead to valves BO, KL
Valve GN has flow rate=0; tunnels lead to valves QO, FP
Valve QO has flow rate=0; tunnels lead to valves CA, GN
Valve JT has flow rate=22; tunnel leads to valve BL
Valve DF has flow rate=0; tunnels lead to valves BO, HK
Valve UM has flow rate=0; tunnels lead to valves OS, LE
Valve KJ has flow rate=0; tunnels lead to valves YF, UK
Valve UX has flow rate=23; tunnels lead to valves WM, ZI
Valve ZI has flow rate=0; tunnels lead to valves UX, AR
Valve YF has flow rate=0; tunnels lead to valves KJ, EK
Valve SX has flow rate=0; tunnels lead to valves DM, CD
Valve KZ has flow rate=0; tunnels lead to valves FR, LE
Valve IH has flow rate=0; tunnels lead to valves DM, IE
Valve EL has flow rate=0; tunnels lead to valves WQ, BO
Valve CD has flow rate=0; tunnels lead to valves AA, SX
Valve OR has flow rate=0; tunnels lead to valves FP, IR
Valve EK has flow rate=19; tunnels lead to valves YF, LK
Valve UE has flow rate=0; tunnels lead to valves FP, LG
Valve WQ has flow rate=0; tunnels lead to valves EL, DM
Valve XI has flow rate=0; tunnels lead to valves YH, DM
Valve GO has flow rate=0; tunnels lead to valves BO, CQ
Valve IR has flow rate=0; tunnels lead to valves ZJ, OR
Valve WY has flow rate=0; tunnels lead to valves UI, AA
Valve JH has flow rate=0; tunnels lead to valves AA, CA
Valve WM has flow rate=0; tunnels lead to valves UX, YH
Valve OS has flow rate=0; tunnels lead to valves UM, CA
Valve AE has flow rate=0; tunnels lead to valves FP, YH
Valve LG has flow rate=0; tunnels lead to valves UE, LE
Valve IS has flow rate=0; tunnels lead to valves LH, AR
Valve XU has flow rate=0; tunnels lead to valves AA, TU
Valve KL has flow rate=0; tunnels lead to valves GP, TU
Valve LV has flow rate=0; tunnels lead to valves UK, TU
Valve UI has flow rate=0; tunnels lead to valves ZJ, WY
Valve IL has flow rate=0; tunnels lead to valves GW, LK
Valve XY has flow rate=0; tunnels lead to valves AZ, CA
Valve JF has flow rate=15; tunnels lead to valves FR, BK
Valve UK has flow rate=18; tunnels lead to valves LV, KJ
Valve CA has flow rate=13; tunnels lead to valves JH, XY, QO, BK, OS
Valve BL has flow rate=0; tunnels lead to valves JT, GW
Valve GW has flow rate=16; tunnels lead to valves IL, BL
Valve CQ has flow rate=0; tunnels lead to valves ZJ, GO
Valve HK has flow rate=0; tunnels lead to valves DF, AA
Valve BO has flow rate=4; tunnels lead to valves GO, GP, EL, DF
Valve TU has flow rate=11; tunnels lead to valves XU, IE, KL, LV
Valve AZ has flow rate=0; tunnels lead to valves ZJ, XY
Valve FP has flow rate=5; tunnels lead to valves GN, AE, UE, LH, OR
Valve LE has flow rate=14; tunnels lead to valves KZ, LG, UM
Valve IE has flow rate=0; tunnels lead to valves IH, TU
Valve NZ has flow rate=0; tunnels lead to valves YH, AR
Valve DM has flow rate=3; tunnels lead to valves WQ, IH, TZ, SX, XI
Valve YH has flow rate=21; tunnels lead to valves WM, NZ, AE, XI
Valve BK has flow rate=0; tunnels lead to valves JF, CA
Valve LK has flow rate=0; tunnels lead to valves EK, IL
Valve AR has flow rate=20; tunnels lead to valves IS, NZ, ZI
Valve ZJ has flow rate=9; tunnels lead to valves IR, AZ, TZ, UI, CQ
Valve FR has flow rate=0; tunnels lead to valves JF, KZ`

let nodes = input.split("\n").map((row, id) => {
    let tmp = row.split(' ');
    return {
        id: id,
        name: tmp[1],
        rate: Number(tmp[4].match(/\d+/g)[0]),
        connections: tmp.slice(tmp.indexOf('to')+2).map(v => v.substr(0, 2))
    }
})

let nodeByName = {};
nodes.map((n, i) => nodeByName[n.name] = n);

const activeNodes = () => nodes.filter(n => n.rate > 0)

const distanceMap = (startName, distances = {}) => {
    if (nodeByName[startName].distanceMap) return nodeByName[startName].distanceMap;
    const spread = (name, steps) => {
        if (distances[name] != undefined && distances[name] <= steps) return;
        distances[name] = steps;
        nodeByName[name].connections.forEach(n => spread(n, steps+1));
    }
    spread(startName, 0);
    nodeByName[startName].distanceMap = distances;
    return distances;
}

const computePaths = timeLeft => {
    console.log('compute paths for time', timeLeft)
    let paths = [{curr: 'AA', active: activeNodes().map(n => n.name), timeLeft: timeLeft, finished: false, steps: [], releasedPressure: 0}]

    let max = 0;

    for (let n = 0; n < paths.length; n++) {
        let path = paths[n];
        if (path.timeLeft <= 0) path.finished = true;
        if (path.finished) continue;

        let distances = distanceMap(path.curr), moved = false;
        path.active.forEach(act => {
            if (act == path.curr) return true;
            if (path.timeLeft-distances[act] <= 1) return true;
            moved = true;
            paths.push({
                curr: act,
                active: path.active.filter(v => v != act),
                timeLeft: path.timeLeft-distances[act]-1,
                finished: false,
                steps: [...path.steps, act],
                releasedPressure: path.releasedPressure + (path.timeLeft-distances[act]-1)*nodeByName[act].rate
            })
        })
        if (!moved) path.finished = true;
        if (path.finished && path.releasedPressure > max) max = path.releasedPressure;
    }

    return paths.filter(p => p.finished).sort((a, b) => b.releasedPressure-a.releasedPressure);
}