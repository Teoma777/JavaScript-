number = prompt("De quel nombre veut tu calculer la factorielle ?");
i = 1;
sum = number;
while(i !== number - 1) {
	sum *= (number - i) ;
	i ++;
}

console.log(sum);