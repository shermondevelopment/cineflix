export const initialState = {
  movie: {
    title: '',
    hours: '',
    weekDay: '',
    date: '',
  },
  tickets: [],
  client: {
    name: '',
    cpf: '',
  },
}

export const useReducerMovie = (state = initialState, action) => {
  switch (action.type) {
    case 'addTitle':
      return {
        ...state,
        movie: { ...state.movie, title: action.payload.title },
      }
    case 'addHours':
      return {
        ...state,
        movie: { ...state.movie, hours: action.payload.hours },
      }
    case 'addDate':
      return {
        ...state,
        movie: { ...state.movie, weekDay: action.payload.weekDay },
      }
    case 'addTickes':
      return { ...state, tickets: [...state.tickets, action.payload.tickets] }
    case 'removeTickes':
      return {
        ...state,
        tickets: [
          ...state.tickets.filter((item) => item !== action.payload.tickets),
        ],
      }
    case 'addClient':
      return {
        ...state,
        client: { ...state.client, name: action.payload.name },
      }
    case 'addCpf':
      return {
        ...state,
        client: { ...state.client, cpf: action.payload.cpf },
      }
    case 'addDates':
      return {
        ...state,
        client: { ...state.client, date: action.payload.date },
      }
  }
  return state
}
