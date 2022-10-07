const argumets = process.argv.slice(2);

const findCircleArea = (r) => {
    const area = Math.round(Math.PI * Math.pow(r, 2));
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${area} `);
}

findCircleArea(+argumets[0])
