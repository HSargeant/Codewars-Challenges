function compareVersion (version1, version2) {
    version1 = version1.split(".").map(Number);
    version2 = version2.split(".").map(Number);
    const maxL = Math.max(version1.length, version2.length);
    for (let i = 0; i < maxL; i++) {
        let num1 = version1[i] ?? 0;
        let num2 = version2[i] ?? 0;
        if (num1 < num2) return -1;
        if (num1 > num2) return 1;
    }
    return 0;
};
// 165. Compare Version Numbers