export default function (element, movieTitle) {
  const later = fetch('http://netflixroulette.net/api/api.php?title=Attack%20on%20titan')

  // Wait for a response back and turn the string of JSON into an actual JS object
  .then((res) => res.json())
  // Once we have a JS object to work with, here's what we're gonna do with it
  .then((data) => {
    // how do i know what data is???
    console.log(data);
    console.log(element);

    const movieName = element.querySelector('.show-title');
    movieName.innerText = data.show_title;

    const category = element.querySelector('.genre');
    category.innerText = data.category;

    const star_rating = element.querySelector('.star-rating');
    star_rating.innerText = data.rating;

    const summ = element.querySelector('.summary');
    summ.innerText = data.summary;

    const cast = element.querySelector('.actors');
    cast.innerText = data.show_cast;

    const moviePoster = element.querySelector('img');
    moviePoster.src = data.poster;
});
}
