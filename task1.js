const person={
    city:"Moscow"
}
const worker=Object.create(person);
worker.age=12;
worker.work="Univercity";

function printObjectKey(obj){
    for(let property in obj){
        if(obj.hasOwnProperty(property)){
            console.log(property,obj[property]);
        }
    }
}
printObjectKey(worker);