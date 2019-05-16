function pyramid(n) {


  for(let i=1; i<= n; i++){

    let str = ' '.repeat(n-i);

    let str2 = '#'. repeat(i* 1)

 

    console.log(str + str2);

  }

}
n = prompt('Choissisez un chiffre');

pyramid(n);