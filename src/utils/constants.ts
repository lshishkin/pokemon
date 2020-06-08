export enum RequestState {
  REQUEST = "_REQUEST",
  SUCCESS = "_SUCCESS",
  FAIL = "_FAIL",
  BROADCAST = "_BROADCAST"
}

export enum LoadingStatus {
  Loading = "Loading",
  Resolve = "Resolve",
  Reject = "Reject"
}

export const GET_TASK = "SET_POKEMON";
export const GET_TASKS = "GET_POKEMONS";
export const SET_LOAD = "SET_LOAD";
export const GET_ABILITY = "GET_ABILITY";
