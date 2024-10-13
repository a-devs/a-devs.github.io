var frame = document.getElementById("video");
var showSelector = document.getElementById("show");

var imdb;
var title;
var episodesPerSeason = {}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("generator").onclick = function() {
  var season = getRandomInt(1, Object.keys(episodesPerSeason).length);
  var episode = getRandomInt(1, episodesPerSeason[season]);

  document.title = `S${season}E${episode} | ${title}`;
  frame.src = `https://vidsrc.me/embed/tv?imdb=${imdb}&season=${season}&episode=${episode}`;

  frame.style.opacity = 1;
}

function selectShow(optional = "x") {
  let selected = optional == "x" ? showSelector.value : optional;

  switch (selected) {
    case "spongebob":
      title = "Spongebob Squarepants";
      imdb = "tt0206512";
      episodesPerSeason = {
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
      };

      document.title = title;

      break;
    case "adventure_time":
      title = "Adventure Time"
      imdb = "tt1305826";
      episodesPerSeason = {
        "1": 26,
        "2": 26,
        "3": 26,
        "4": 26,
        "5": 52,
        "6": 43,
        "7": 37,
        "8": 27,
        "9": 15,
        "10": 13
      };

      document.title = title;
      
      break;
    case "regular_show":
      title = "Regular Show"
      imdb = "tt1710308";
      episodesPerSeason = {
        "1": 13,
        "2": 28,
        "3": 40,
        "4": 38,
        "5": 37,
        "6": 31,
        "7": 37,
        "8": 29
      };

      document.title = title;

      break;
    case "gumball":
      title = "Amazing World of Gumball"
      imdb = "tt1942683";
      episodesPerSeason = {
        "1": 36,
        "2": 40,
        "3": 40,
        "4": 43,
        "5": 40,
        "6": 44
      };

      document.title = title;

      break;
  }
}

showSelector.value = "spongebob"
selectShow("spongebob")
