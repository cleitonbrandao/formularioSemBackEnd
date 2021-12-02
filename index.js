var lines = ['1', '2', '3', '4'];
const [a, b, c, d] = lines.shift("");

if ((b>c)&&(d>a)&&(c+d)>(a+b)&&(c>0)&&(d>0)&&(a%2 === 0)) {
    console.log("Valores aceitos");
} else { console.log("Valores não aceitos");}