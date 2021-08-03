array = [12, 32, 4, 9, 5, -1, 100, -5];
found = false;
num = -5;
for (let i = 0; i < array.length; i++) {
  if (num == array[i]) {
    console.log('Number found in ' + (i + 1) + ' position');
    found = true;
    break;
  }
}
if (!found) {
  console.log('Number not found');
}
