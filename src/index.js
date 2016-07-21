'use strict';

import results from 'netflix-results';

export default function(element) {
  results(element, 'Clerks');

  const searchBtn = element.querySelector('.search-btn');

  function afterClick() {
    const input = element.querySelector('input');
    const movieTitle = input.value
    results(element, movieTitle);

  }
  searchBtn.addEventListener('click', afterClick);
}
