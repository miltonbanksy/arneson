function rollxd6(number_of_dice) {
    
    let dicePool = [];
    
    for (let d = 0; d < number_of_dice; d++) {
        const die = Math.floor(Math.random() * 6) + 1;
        dicePool.push(die);
    };
    console.log(`Roll results: ${dicePool}`);
    return dicePool;
}

function removeSmallest(arr) {

    if (arr.length === 0) {
        return arr;
    }

    const minValue = Math.min(...arr);
    const index = arr.indexOf(minValue);

    if (index > -1) {
        arr.splice(index, 1);
    }

    return arr;
}

function removeHighest(arr) {

    if (arr.length === 0) {
        return arr;
    }

    const highValue = Math.max(...arr);
    const index = arr.indexOf(highValue);

    if (highValue > -1) {
        arr.splice(index, 1);
    }

    return arr;
}

function sumArray(arr) {
    return arr.reduce((a, b) => a + b);
}

const displayResult = document.querySelector('#display-result');

document.querySelector('#btn-advantage').addEventListener('click', () => {
    let result = rollxd6(3);
    result = sumArray(removeSmallest(result));
    displayResult.innerHTML =  `Highest of 3d6: ${result}`;
});

document.querySelector('#btn-standard').addEventListener('click', () => {
    result = sumArray(rollxd6(2));
    displayResult.innerHTML =  `Sum of 2d6: ${result}`;
});

document.querySelector('#btn-disadvantage').addEventListener('click', () => {
    let result = rollxd6(3);
    result = sumArray(removeHighest(result));
    displayResult.innerHTML =  `Lowest of 3d6: ${result}`;
});