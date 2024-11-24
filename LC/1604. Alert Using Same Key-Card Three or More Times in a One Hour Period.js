/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function(keyName, keyTime) {
    let res=[]
    const hour=60*60
    keyTime=keyTime.map(seconds)
    let employees={}
    for(let i=0; i<keyName.length; i++){
        let name=keyName[i]
        let time= keyTime[i]
        if(employees[name]?.length){
            employees[name].push(time)
        }else employees[name]=[time]
    }
    for(let key in employees){
        if(employees[key].length<3){
            delete employees[key]
            continue
        }
        employees[key].sort((a,b)=>a-b)
    }
    for(let key in employees){
        let arr= employees[key]
        for(let j=2; j<arr.length; j++){
            let limit= arr[j-2]+hour
            if(arr[j]<=limit){
                res.push(key)
                break
            }
        }
    }
    return res.sort()
};

function seconds(s){
    const [hours,mins]=s.split(":").map(Number)
    return (hours*60+mins)*60
}

// 1604. Alert Using Same Key-Card Three or More Times in a One Hour Period