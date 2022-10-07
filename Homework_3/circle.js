module.exports.circleArea = function (r) {
    const area = Math.round(Math.PI * Math.pow(r, 2));
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${area} `);
}

module.exports.circleCircumference = function (r) {
    const cevre = Math.round(2 * Math.PI * r);
    console.log(`Yarıçapı ${r} olan dairenin çevresi: ${cevre} `);
}
