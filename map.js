let output = document.querySelector(".output");
let filter = document.querySelector(".fAFC");
let full = document.querySelector(".full");
let goals = document.querySelector(".goals");
let points = document.querySelector(".points");

let teams = [
  { team: "Stockport", goals: 51, points: 51 },
  { team: "Mansfield", goals: 44, points: 49 },
  { team: "Wrexham", goals: 52, points: 49 },
  { team: "AFC", goals: 41, points: 39 },
];
leagueDisplay(teams);
function leagueDisplay(clubs) {
  const header =
    "<table><tr class='header'><td class='name'>Club</td><td class='goals'>For</td><td class='points'>Pts</td></tr>";
  const footer = "</table>";
  let league = clubs.map(
    (tm) =>
      "<tr>" +
      "<td class='name'>" +
      tm.team +
      "</td>" +
      "<td class='goals'>" +
      tm.goals +
      "</td>" +
      "<td class='points'>" +
      tm.points +
      "</tr>"
  );

  clubs = league.join(" ");

  output.innerHTML = header + league + footer;
}

filter.addEventListener("click", () => {
  let results = teams.filter((nm) => nm.team === "AFC");
  leagueDisplay(results);
});

full.addEventListener("click", () => {
  let results = teams.filter((nm) => nm.team != null);
  leagueDisplay(results);
});

goals.addEventListener("click", () => {
  teams.sort((a, b) => {
    if (a.goals > b.goals) {
      return -1;
    } else if (b.goals > a.goals) {
      return 1;
    } else {
      return 0;
    }
  });
  leagueDisplay(teams);
});

points.addEventListener("click", () => {
  teams.sort((a, b) => {
    if (a.points > b.points) {
      return -1;
    } else if (b.points > a.points) {
      return 1;
    } else {
      return 0;
    }
  });
  leagueDisplay(teams);
});
