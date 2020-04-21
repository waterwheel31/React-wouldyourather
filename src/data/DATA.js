
let questions = {
    z91qcdwyww8k99jw7gm: {
        id: "z91qcdwyww8k99jw7gm",
        user: "karen",
        choice1: "To East",
        choice2: "To West",
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

export function _getQuestions() {
    return new Promise((res, rej) => {
        setTimeout(() => res({...questions}), 1000)
    })
}