 const button = Array.from(document.querySelectorAll('#radio'));
 console.log(button);

 button.forEach((item) => {
  item.addEventListener('click', () => {
      // alert("checked");
  });
})

const filterList = document.getElementById('list');
 console.log(filterList)

const addMoviesToDom = movies.map((item) => {
  const newLi = document.createElement('li');
  return newLi.innerHTML = item.Title;
});


addMoviesToDom.forEach((item) => {
      filterList.appendChild(document.createElement('li')).innerHTML = item;
  })


console.log(addMoviesToDom)

// alvast de filters

const newerAs2014 = movies.filter((item) => {
  return item.Year >= 2014
})

console.log(newerAs2014)


const titles = movies.filter((item) => {
  return item.Title
});
console.log(titles)

const avengers = [titles[10],titles[11],titles[12],titles[13],titles[14],titles[15],titles[16],titles[17],titles[18]];
console.log(avengers)

// hahaha


const avengers2 = movies.filter(item => item.Title === "Avengers");

// movies.forEach((item) => {
//     console.log(item.Title)
// });

// movies.forEach((item) => {
//     console.log(item.Year)
// });

// movies.forEach((item) => {
//     console.log(item.imdbID)
// });

// movies.forEach((item) => {
//     console.log(item.Type)
// });

// movies.forEach((item) => {
//     console.log(item.Poster)
// });
