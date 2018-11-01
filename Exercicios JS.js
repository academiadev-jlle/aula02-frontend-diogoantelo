function minor(...values) {
  let smallest = values[0];

  values.forEach((item) => {
    if (item < smallest)
      smallest = item;
  });

  return smallest;
}
console.log('Minor:');
console.log(minor(0, 2, 4, -1, 5, 10, 50));
console.log(minor(4, 5, 1, 3));

function repeat(iterations, cb) {
  for (let i = 0; i < iterations; i++) {
    cb(i);
  }
}
console.log('Repeat:')
repeat(5, console.log);
let soma = 0;
repeat(10, (x) => soma += x);
console.log(soma);

function deepEqual(obj1, obj2) {
  for (let key in obj1) {
    if (obj1[key] instanceof Object){
      if(!deepEqual(obj1[key], obj2[key]))
        return false;
    } else {
      if(obj1[key] !== obj2[key])
        return false;
    }
  }

  for (let key in obj2) {
    if (obj2[key] instanceof Object){
      if(!deepEqual(obj2[key], obj1[key]))
        return false;
    } else {
      if(obj2[key] !== obj1[key])
        return false;
    }
  }

  return true;
}
console.log('DeepEqual:');
let obj1 = { nome: {p: 'A', f: 'dam'} };
let obj2 = { nome: {p: 'A', f: 'dam'}, sexo: 'masculino' };
console.log(obj1 === obj2); // false!
console.log(deepEqual(obj1, obj2)); // true!'