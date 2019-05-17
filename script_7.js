user_input = window.prompt("Parle, humain");

function isEmpty(str) {
    return (!str || 0 === str.length);
}

if(user_input.substr(-1) === "?") {
	console.log("Ouais Ouais...");
} else if(user_input === user_input.toUpperCase() && user_input.length > 0){
	console.log("Pwa, calme-toi..");
} else if(user_input.includes("Fortnite")) {
	console.log("fornite bof, rust mieux");
} else if(isEmpty(user_input)) {
	console.log("t'es en PLS ?");
} else {
	console.log("balek");
} 