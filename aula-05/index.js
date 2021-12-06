const arguments = process.argv;

if (Array.isArray(arguments) && arguments.length > 2) {
    const validNumbers = arguments.filter(element => element % 2 == 0);

    console.log(validNumbers.reduce((count, value) => count += Number.parseInt(value), 0));
}