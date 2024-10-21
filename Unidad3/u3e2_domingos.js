javascript
const month = 10; // Noviembre
const day = 1; // Día 1

for (let year = new Date().getFullYear(); year <= 2100; year++) {
    let birthday = new Date(year, month - 1, day);
    if (birthday.getDay() === 0) { // 0 means Sunday
        console.log(`Your birthday falls on a Sunday in the year ${year}`);
    }
}


