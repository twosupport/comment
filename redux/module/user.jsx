// actions
const SUBMIT_ANSWER = "SUBMIT_ANSWER";

// action creators
const submit_answer = (answer) => {
	return { type: SUBMIT_ANSWER, answer }
}
// initialState
const initialState = {
    answer:0,
}

// reducer
export default function reducer(state = initialState, action = {}){ 
	switch(action.type){
    	case "SUBMIT_ANSWER" : {
        	return {...state, answer: action.answer};
        }
    default: return state;
	}
};


// action creator export
const actionCreators = {
    submit_answer,
};

export { actionCreators };