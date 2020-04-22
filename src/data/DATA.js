
let questions = {
    z91qcdwyww8k99jw7gm: {
        id: "z91qcdwyww8k99jw7gm",
        user: "karen",
        choice1: "Go to the East",
        choice2: "Go to the  West",
        num_1: 0,
        num_2: 0,
        answers: {},
        timeStamp: 1587451933894
    },
    z91qcdwyww8k99jw7g2: {
        id: "z91qcdwyww8k99jw7g2",
        user: "tyler",
        choice1: "Drink coffee",
        choice2: "Drink wine",
        num_1: 0,
        num_2: 0,
        answers: {},
        timeStamp: 1587451933894
    },
}

let users = {
     karen: {
      id: "karen",
      name: "Karen",
      handle: "karen",
      avatarURL: "../images/image1.png"
    },
     richard: {
      id: "richard",
      name: "Richard",
      handle: "richard",
      avatarURL: "../images/image2.png"
    },
     tyler: {
      id: "tyler",
      name: "Tyler",
      handle: "tyler",
      avatarURL: "../images/image3.png"
    }
}

export function _getQuestions() {
    return new Promise((res, rej) => {
        setTimeout(() => res({...questions}), 1000)
    })
}

export function _getUsers() {
    return new Promise((res, rej) => {
        setTimeout(() => res({...users}), 1000)
    })
}