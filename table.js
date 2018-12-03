let getEpisodeNumberCell = (content, link) => {
  let href = document.createElement('a')
  href.setAttribute('href', 'https://youtu.be/'+link);
  href.innerText = '#'+content;

  let episodeCell = document.createElement('td');
  episodeCell.appendChild(href);
  return episodeCell;
}

episodes.forEach((episode, i) => {
  let numberOfMemes = episode.memes.length;
  episode.memes.forEach((meme, j) => {
    let row = document.createElement('tr');
    
    let episodeCell = getEpisodeNumberCell(i+1, episode.link);
    if (j === 0) {
      episodeCell.setAttribute('rowspan', numberOfMemes);
      row.appendChild(episodeCell);
    }

    let bonus = (meme.bonus !== undefined && meme.bonus === true) ? true : false;

    let nameCell = document.createElement('td');
    nameCell.innerText = meme.name;
    nameCell.className = 'meme-name ' + (bonus ? 'bonus-meme' : '');
    row.appendChild(nameCell);

    let voteCell = document.createElement('td');
    voteCell.innerText = meme.vote;
    voteCell.className = bonus ? 'bonus-meme' : '';
    row.appendChild(voteCell);
    
    let tbody = document.getElementById('reviews');
    tbody.appendChild(row);
  });
});
