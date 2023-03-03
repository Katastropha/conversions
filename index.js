/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const container = document.getElementById('container')
const numberToConvert = document.querySelector('input')
const btn = document.querySelector('button')


const length = document.getElementById('length')
const volume = document.getElementById('volume')
const mass = document.getElementById('mass')

btn.addEventListener('click', () => {
    clearConversions()
    const convertedValues = createConvertedValues(numberToConvert.value)
    
    convertedValues.forEach(({from, to, element, value}) => {
        const separator = element.children.length ? ' | ' : ''
        element.innerHTML += `${separator}<span> ${numberToConvert.value} ${from} = ${formatNumber(value)} ${to}</span>`
    })   

})

function createConvertedValues (value) {
    return [
         {
            from: 'meters',
            to: 'feet',
            element: length,
            value: meterToFeet(value),
        },
         {
            from: 'feet',
            to: 'meters',
            element: length,
            value: feetToMeter(value),
        },
         {
            from: 'liters',
            to: 'gallons',
            element: volume,
            value: literToGallon(value),
        },
         {
            from: 'gallons',
            to: 'liters',
            element: volume,
            value: gallonToLiter(value),
        },
         {
            from: 'killograms',
            to: 'pounds',
            element: mass,
            value: killogramToPound(value),
        },
         {
            from: 'pounds',
            to: 'killograms',
            element: mass,
            value: poundToKillogram(value)
        }
    ]
}

function formatNumber(n) { return n.toFixed(3) }

function meterToFeet(num) {
    return parseFloat(num * 3.281)        
}

function feetToMeter(num) {
    return parseFloat(num / 3.281)
}

function literToGallon(num) {
    return parseFloat(num * 0.264)
}

function gallonToLiter(num) {
    return parseFloat(num / 0.264) 
}

function killogramToPound(num) {
    return parseFloat(num * 2.204)
}

function poundToKillogram(num) {
    return parseFloat(num / 2.204)
}

function clearConversions() {
    length.innerHTML = ''
    volume.innerHTML = ''
    mass.innerHTML = ''
}
