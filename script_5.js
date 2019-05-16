const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ? PAS FINI ")
for (var i = books.length - 1; i >=0; i--) {
var book = books[i]
if (book.rented > 0) 
console.log("Chaque livre a été emprunté au moins une fois ")
}


console.log("Quel est livre le plus emprunté ?")
books.sort(function (a, b) {
  return a.rented - b.rented
});
  console.log(books[12].title + " est le livre le plus emprunté, " + books[12].rented + " fois")


console.log("Quel est le livre le moins emprunté ?")
books.sort(function (a, b) {
  return a.rented - b.rented
});
  console.log(books[0].title + " est le livre le moins emprunté, " + books[0].rented + " fois")

console.log("Trouve le livre avec l'ID: 873495")
for (var i = books.length - 1; i >=0; i--) {
var book = books[i]
if (book.id == 873495)
  console.log(book.title + " est le livre avec l'id 873495")
}

console.log("Supprime le livre avec l'ID: 133712 PAS FINI ")
const indice = books.findIndex(id => book.id === 133712)
console.log(indice)
books.splice(indice, 1)


console.log("Trie les livres par ordre alphabétique.")
alpha = []
for (var i = books.length - 1; i >=0; i--) {
var book = books[i]
alpha.push(book.title)
list = alpha.sort();
}
console.log(list);




