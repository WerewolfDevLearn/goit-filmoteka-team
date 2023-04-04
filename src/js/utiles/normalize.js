// Normalize MovieData
export function normalizeData({
  poster_path,
  original_title,
  vote_average,
  vote_count,
  popularity,
  genres,
  overview,
}) {
  return {
    poster_path,
    original_title,
    vote_average: roundNumberOne(vote_average),
    vote_count: roundNumberNull(vote_count),
    popularity: roundNumberNull(popularity),
    genres,
    overview,
  };
}

function roundNumberOne(string) {
  if (Number(string) === 0) {
    return '-';
  } else {
    return Number(string).toFixed(1);
  }
}

function roundNumberNull(string) {
  if (Number(string) === 0) {
    return '-';
  } else {
    return Number(string).toFixed(0);
  }
}
