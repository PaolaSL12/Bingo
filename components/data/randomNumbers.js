export let generateRandomNumbers = () => {
    const randomNumbers = [];
    for (let i = 0; i < 90; i++) {
        const randomNumber = Math.floor(Math.random() * 90);
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber)
        } else {
            let newRandomNumber;
            do {
                newRandomNumber = Math.floor(Math.random() * 90);
            } while (randomNumbers.includes(newRandomNumber));

            randomNumbers.push(newRandomNumber);
        }
      }
    return randomNumbers
}

