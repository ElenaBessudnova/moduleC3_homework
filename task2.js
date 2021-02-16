const person={
    city:"Moscow",
    age:10
};


function containsProperty(string,obj){
    return (string in obj);
}

isContains=containsProperty("work",person);
console.log(isContains);