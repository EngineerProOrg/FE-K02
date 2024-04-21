const mergeAndSort = (arr1, arr2) => {
    let mergeArr = [].concat(arr1, arr2);

    mergeArr.sort((a,b) => a - b);

    console.log('sorted', mergeArr);


    const result = [];

    for (const item of mergeArr) {
        const last = result[result.length - 1];


        if(last === item) {
            continue;
        }

        result.push(item);
    }

    return result;
}

const mergeAndSortExtreme = (arr1, arr2) => {
    const result = mergeAndSort(arr1, arr2);
    const [smallestValue] = result;

    const largestValue = result[result.length - 1];

    return [smallestValue, largestValue];
}

module.exports = { mergeAndSort, mergeAndSortExtreme };