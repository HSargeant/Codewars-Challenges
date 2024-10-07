/**
 * @param {number[]} skill
 * @return {number}
 */
function dividePlayers(skill) {
    skill.sort((a, b) => a - b)
    let res = skill[0] * skill[skill.length - 1]
    let sum = skill[0] + skill[skill.length - 1]
    for (let i = 1; i < skill.length / 2; i++) {
        if (sum == skill[i] + skill[skill.length - i - 1]) {
            res += skill[i] * skill[skill.length - i - 1]
        } else {
            return -1
        }

    }
    return res
};
// 2491. Divide Players Into Teams of Equal Skill