const arr = [3,4,2]
const goal = 6;

function twoSum(){
    const map = new Map();

    for(let i=0;i<arr.length;i++){
        const remain = goal - arr[i];
        if(map.has(remain)){
            const idx1 = map.get(remain);
            const idx2 = i;
            return[idx1,idx2];
        }
        map.set(arr[i], i);
    }
    return -1;
}
console.log(twoSum())