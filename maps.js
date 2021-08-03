let myMap = new Map();

myMap.set('z','Shuttle')
myMap.set(101, 'Car');
myMap.set(102, 'Bike');
myMap.set(100, 'Airplane');
myMap.set('A', 'Train');
myMap.set('*', 'Bus');



console.log(myMap.get(100));
console.log(myMap.get('A'));
console.log(myMap.get('*'));
console.log(myMap.size); 

console.log(myMap.has(102)); 
myMap.delete('A');
console.log(myMap.has('A'));
