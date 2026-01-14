
// 'page' can be 'main' or 'project' or 'resume'
// 'project' determines which project is presented. Blank when on the main page
export const initialState = {
    page: "main",
    project: "",
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_PAGE":
            return {
                ...state,
                page: action.page
            };
        case "SET_PROJECT":
            return {
                ...state,
                project: action.project
            };
        default:
            return state;
    }
}

export default reducer