const url = 'http://localhost:4000/api/v1/ballot'

class BallotModel {
    static getAllBallots = () => {
        return fetch(url)
            .then((response) => response.json())
    }

    static getBallotById = (ballotId) => {
        return fetch(`${url}/${ballotId}`)
            .then((response) => response.json())
    }

    static createBallot = (ballot) => {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'authorization': token,
              },
              body: JSON.stringify(ballot)
            })
              .then((response) => response.json())
    }
}


export default BallotModel;