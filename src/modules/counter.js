//액션 정의
const INCREASE = "counter/INCREASE"; // INCREASE 액션의 타입을 정의합니다.
const DECREASE = "counter/DECREASE"; // DECREASE 액션의 타입을 정의합니다.

//dispatch 함수 구현(액션타입에 대한 함수 구현){type:"INCREASE" , number: num}
export const increase = () => ({ type: INCREASE }); // increase 함수는 INCREASE 액션을 반환합니다.
export const decrease = () => ({ type: DECREASE }); // decrease 함수는 DECREASE 액션을 반환합니다.

//state 초기화
const initialState = {
  number: 0, // 초기 상태로 설정할 number 값을 0으로 초기화합니다.
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE: // INCREASE 액션이 발생했을 때
      return {
        number: state.number + 1, // 현재 상태의 number 값에 1을 더한 값을 가진 새로운 상태를 반환합니다.
      };
    case DECREASE: // DECREASE 액션이 발생했을 때
      return {
        number: state.number - 1, // 현재 상태의 number 값에 1을 뺀 값을 가진 새로운 상태를 반환합니다.
      };
    default: // 액션이 발생하지 않았을 때
      return state; // 현재 상태를 그대로 반환합니다.
  }
}
