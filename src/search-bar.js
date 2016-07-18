import index from 'index';

export default function () {
  const searchBtn = app.querySelector('.search');
  console.log('Here!');

  function searchClick() {
    const searchBar = search.innerText.value;


  searchBtn.addEventListener('click', () => {
      console.log('This works!');
  });
}
}
