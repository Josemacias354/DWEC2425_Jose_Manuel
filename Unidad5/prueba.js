function fetchDatta (Callback){
    setTimeout(() => {
        const data = {name: 'John', age: 30};
        Callback(data);
    }, 3000);
}

fetchDatta(function(data){
    console.log(data);
});

console.log("Data is being fetched...");