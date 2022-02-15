const getTheTitles = function (books) {

  //solution 1  
//   let bookArr = [];

//   for (let i = 0; i < books.length; i++) {
//     bookArr.push(books[i].title);
//   }

//   return bookArr;

    //solution 2
    return books.map(x => x['title']);

};

// console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
