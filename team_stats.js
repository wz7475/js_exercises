const team =
{
    _players: [
        {
            firstName: 'Pete',
            lastName: 'Wheeler',
            age: 54
        },
        {
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11
        },
        {
            firstName: 'Pablo',
            lastName: 'Black',
            age: 23
        }
    ],
    _games: [
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Bulls',
            teamPoints: 32,
            opponentPoints: 37
        },
        {
            opponent: 'Eagles',
            teamPoints: 22,
            opponentPoints: 21
        }
    ],
    get players() {
        return this._players
    },
    get games() {
        return this._games
    },
    addPlayer(firstName, lastName, age) {
        const player =
        {
            firstName,
            lastName,
            age
        };
        team.players.push(player);
    },
    addGame(opponent_name, our_points, opponent_points) {
        const game =
        {
            opponent: opponent_name,
            teamPoints: our_points,
            opponentPoints: opponent_points
        };
        team.games.push(game);
    }
};
team.addPlayer("John", "Black", 15);
team.addPlayer("Sam", "White", 25);
team.addPlayer("Walter", "Brown", 35);
team.addGame('Titans', 100, 98);

console.log(team.players);
console.log(team.games);