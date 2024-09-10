var frame = document.getElementById("video");

const episodesPerSeason = {
  "1": 41,
  "2": 36,
  "3": 40,
  "4": 40,
  "5": 36,
  "6": 47,
  "7": 52,
  "8": 52,
  "9": 47,
  "10": 20,
  "11": 51,
  "12": 36,
  "13": 64,
  "14": 48
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("generator").onclick = function() {
  var season = getRandomInt(1, Object.keys(episodesPerSeason).length);
  var episode = getRandomInt(1, episodesPerSeason[season]);

  document.title = `S${season}E${episode}`;
  frame.src = `https://vidsrc.me/embed/tv?imdb=tt0206512&season=${season}&episode=${episode}`;

  frame.style.opacity = 1;
}