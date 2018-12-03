let getEpisodeNumberCell = (content, link) => {
  let href = document.createElement('a')
  href.setAttribute('href', link);
  href.innerText = '#'+content;

  let episodeCell = document.createElement('td');
  episodeCell.appendChild(href);
  return episodeCell;
}

episodes.forEach((episode, i) => {
  for (let meme of episode.memes) {
    let row = document.createElement('tr');
    
    let episodeCell = getEpisodeNumberCell(i+1, episode.link);
    row.appendChild(episodeCell);

    let nameCell = document.createElement('td');
    nameCell.innerText = meme.name;
    row.appendChild(nameCell);

    let voteCell = document.createElement('td');
    voteCell.innerText = meme.vote;
    row.appendChild(voteCell);

    let tboy = document.getElementById('reviews');
    tboy.appendChild(row);
  }
});
