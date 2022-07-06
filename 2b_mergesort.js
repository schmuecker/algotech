const sort = (list = []) => {
    if (list.length === 1) {
        return list
    }
    const middle = Math.floor(list.length / 2)
    const left = sort(list.slice(0, middle))
    const right = sort(list.slice(middle, list.length))
    return merge(left, right)
}

let switches = 0;

const merge = (left = [], right = []) => {
    const result = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
        switches++;
    }
    return [...result, ...left, ...right]
}

const input = [13, 5, 1, 3, 14, 7, 2, 12]
console.log('input list', input)
console.log('sorted list', sort(input))
console.log('switches', switches)
