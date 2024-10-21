javascript
const month = 5; // May (0-based index, so 5 means June)
const day = 24; // 24th day

for (let year = new Date().getFullYear(); year <= 2100; year++) {
    let birthday = new Date(year, month - 1, day);
    if (birthday.getDay() === 0) { // 0 means Sunday
        console.log(`Your birthday falls on a Sunday in the year ${year}`);
    }
}


