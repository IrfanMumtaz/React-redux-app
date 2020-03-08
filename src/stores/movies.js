const movies = (state = 0, action) => {
    switch (action.type) {
        case "TOTAL_COUNT":
            return action.payload;
        default:
            return state;
    }
};

export default movies;
