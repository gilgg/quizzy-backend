const sortByScore = (users) => {
  return users.sort((a, b) => {
    if (a.score > b.score) {
      return -1;
    }
    if (b.score > a.score) {
      return 1;
    }
    return 0;
  });
};

const getUsers = (usersFromDB) => {
  const sortedUsersRaw = sortByScore(usersFromDB).slice(0, 10);

  return sortedUsersRaw.map((user, index) => {
    return {
      id: user._id,
      position: index + 1,
      name: user.name,
      score: user.score,
      numberOfCorrectAnswers: user.numberOfCorrectAnswers,
    };
  });
};

module.exports = { sortByScore, getUsers };
