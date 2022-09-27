// object containing word and phrase objects

const wordObj = {
    arr1: ['What has the', 'Hate! Hate! Hate!', 'That is the mark of the Mutant', 'The past', 'If you go looking', 'The gratitude', 'The Emperor\'s'],
    arr2: ['The Emperor', 'An emotion as pure as it is deep!', 'To be Unclean', 'is always', 'for trouble,', 'of the powerful', 'light'],
    arr3: ['ever done for me?', 'Let it flow, let it run free!', 'To be Reviled', 'with us.', 'you\'re sure to find it.', 'is a heavy weight to bear.', 'is my torch!']
}

const phraseGen = () => {
    let first = wordObj.arr1[Math.floor(Math.random() * wordObj.arr1.length)];
    let second = wordObj.arr2[Math.floor(Math.random() * wordObj.arr2.length)];
    let third = wordObj.arr3[Math.floor(Math.random() * wordObj.arr3.length)];
    console.log(`${first} ${second} ${third}`);
}

phraseGen()