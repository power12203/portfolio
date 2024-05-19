import React from "react"; // React를 import합니다.
import Counter from "../components/Counter"; // "../components/Counter" 경로에서 Counter 컴포넌트를 import합니다.
import { connect } from "react-redux"; // react-redux에서 connect 함수를 import합니다.
import { increase, decrease } from "../modules/counter"; // "../modules/counter" 경로에서 increase와 decrease 액션 생성 함수를 import합니다.

const CounterContainer = (props) => {
  const { number, increase, decrease } = props; // props에서 number, increase, decrease를 추출합니다.
  return (
    <div>
      <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    </div>
    //Counter 컴포넌트를 렌더링합니다. number, increase, decrease를 props로전달합니다.
  );
};

export default connect(
  (state) => ({
    number: state.counter.number, // Redux store에서 counter 모듈의 number 상태를 가져와서 number props로 매핑합니다.
  }),
  {
    increase, // increase 액션 생성 함수를 props로 매핑합니다.
    decrease, // decrease 액션 생성 함수를 props로 매핑합니다.
  }
)(CounterContainer); // CounterContainer 컴포넌트를 connect 함수를 사용하여 Redux store에 연결합니다.
// ) CounterContainer;
