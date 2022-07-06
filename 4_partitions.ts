import { ld } from 'https://x.nest.land/deno-lodash@1.0.0/mod.ts';

function twodarray(rows: number, columns: number) {
    const x = new Array(rows);
    for (var i = 0; i < x.length; i++) {
        x[i] = new Array(columns);
    }
    return x
}

function fillTree(tree) {
    for (let i = 0; i < tree.length; i++) {
        const row = tree[i];
        for (let j = 0; j < row.length; j++) {
            row[j] = j+1;
        }
    }
    return tree
}

function sum(list: Array<number>) {
    let result = 0;
    for (let i = 0; i < list.length; i++) {
        const value = list[i];
        result += value;
    }
    return result
}

function isCandidate(list: Array<number>, n: number) {
    return sum(list) === n
}

function isSuccessor(list: Array<number>, x: number, n: number) {
    return sum(list) + x <= n
}

const solutions: Array<Array<number>> = [];

function partition(n: number, level: number = 0, path: Array<number> = []) {
    const tree = fillTree(twodarray(n, n));

    if (n === 0) return [[0]]

    for (let i = 0; i < tree[level].length; i++) {
        const element = tree[level][i];
        if (isCandidate([...path, element], n)) {
            solutions.push([...path, element])
            break;
        } else if (isSuccessor(path, element, n)) {
            partition(n, level + 1, [...path, element])
        }
    }
}

function deduplicate(list: Array<Array<number>>) {
    for (const l of list) {
        l.sort()
    }
    for (const [idxA, a] of list.entries()) {
        for (const [idxB,b] of list.entries()) {
            if (idxA === idxB) {
                break;
            }
            if (ld.isEqual(a, b)) {
                list.splice(idxB, 1)
            }
        }
    }
}

partition(6)
deduplicate(solutions)
console.log('Found', solutions.length, 'solutions: ', solutions)
