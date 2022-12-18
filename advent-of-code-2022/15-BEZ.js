input =`Sensor at x=155404, y=2736782: closest beacon is at x=2062250, y=2735130\nSensor at x=2209843, y=541855: closest beacon is at x=2159715, y=2000000\nSensor at x=3437506, y=3046523: closest beacon is at x=3174767, y=2783059\nSensor at x=925392, y=1508378: closest beacon is at x=941123, y=1223290\nSensor at x=2349988, y=3272812: closest beacon is at x=1912017, y=3034331\nSensor at x=292610, y=374034: closest beacon is at x=941123, y=1223290\nSensor at x=2801735, y=1324309: closest beacon is at x=2159715, y=2000000\nSensor at x=3469799, y=2027984: closest beacon is at x=3174767, y=2783059\nSensor at x=3292782, y=2910639: closest beacon is at x=3174767, y=2783059\nSensor at x=3925315, y=2646100: closest beacon is at x=3174767, y=2783059\nSensor at x=1883646, y=2054943: closest beacon is at x=2159715, y=2000000\nSensor at x=2920303, y=3059306: closest beacon is at x=3073257, y=3410773\nSensor at x=2401153, y=2470599: closest beacon is at x=2062250, y=2735130\nSensor at x=2840982, y=3631975: closest beacon is at x=3073257, y=3410773\nSensor at x=1147584, y=3725625: closest beacon is at x=1912017, y=3034331\nSensor at x=2094987, y=2782172: closest beacon is at x=2062250, y=2735130\nSensor at x=3973421, y=982794: closest beacon is at x=3751293, y=-171037\nSensor at x=2855728, y=2514334: closest beacon is at x=3174767, y=2783059\nSensor at x=1950500, y=2862580: closest beacon is at x=1912017, y=3034331\nSensor at x=3233071, y=2843812: closest beacon is at x=3174767, y=2783059\nSensor at x=2572577, y=3883463: closest beacon is at x=3073257, y=3410773\nSensor at x=3791570, y=3910685: closest beacon is at x=3073257, y=3410773\nSensor at x=3509554, y=311635: closest beacon is at x=3751293, y=-171037\nSensor at x=1692070, y=2260914: closest beacon is at x=2159715, y=2000000\nSensor at x=1265756, y=1739058: closest beacon is at x=941123, y=1223290`

// .split("\n").map(x=>x.replaceAll(",","").replaceAll("at","").replaceAll("closest","").replaceAll("beacon","").replaceAll("is","").replaceAll("at","").replaceAll("Sensor","").replaceAll("=","").trim().replaceAll("x","").replaceAll("y","").split(":").map(j=>j.trim().split(" ")))
//[[[sensor],[beacon]],...]


// manhattan distance
function mDistance(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

const solveProblem = (data) => {
	// Parse data

	const lines = data.split("\n").slice(0, -1);
	const values = lines.map(line => {
		const comma = line.indexOf(",");
		const colon = line.indexOf(":");
		const at = line.indexOf("at", colon);
		const comma2 = line.indexOf(",", comma + 1);
		const sx = Number(line.slice(12, comma));
		const sy = Number(line.slice(comma + 4, colon));
		const bx = Number(line.slice(at + 5, comma2));
		const by = Number(line.slice(comma2 + 4));
		return {sx, sy, bx, by};
	});

    console.log(values)

	// Part 1

	const processRow = row => {
		const intervals = [];
		values.forEach(({sx, sy, bx, by}) => {
			const distance = mDistance(sx,sy,bx,by)
			const rowDistance = Math.abs(sy - row);
			if (rowDistance > distance) {
				return;
			}
			intervals.push({from: sx - (distance - rowDistance), to: sx + (distance - rowDistance)})
		});
		intervals.sort((i, j) => i.from - j.from)

		const disjointIntervals = [];
		intervals.forEach(({from, to}) => {
			if (disjointIntervals.length == 0) {
				disjointIntervals.push({from, to});
				return;
			}
			const lastInterval = disjointIntervals[disjointIntervals.length - 1];
			if (from <= lastInterval.to) {
				lastInterval.to = Math.max(lastInterval.to, to);
			} else {
				disjointIntervals.push({from, to})
			}
		});
		return disjointIntervals;
	}

	const disjointIntervals = processRow(2000000);
	let count = 0;
	disjointIntervals.forEach(({from, to}) => {
		count += to - from + 1;
	});
	const countedBeacons = []
	values.forEach(({bx, by}) => {
		if (by == 2000000 && !countedBeacons.includes(bx)) {
			count--;
			countedBeacons.push(bx);
		}
	})
	console.log(count);
	console.log("--");

	// Part 2

	let x, y;
	for (let i = 0; i < 4000000; i++) {
		const disjointIntervals = processRow(i);
		if (disjointIntervals.length > 1) {
			y = i;
			x = disjointIntervals[0].to + 1;
		}
	}
	console.log(x * 4000000 + y);

	console.log("-");
};

console.log(solveProblem(input),"===============")