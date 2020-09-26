import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HomeRender from './HomeRender';
import { increaseAsync, decreaseAsync, setDiff } from '../../../reducer/counter';

function Home() {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
  // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일합니다.
  // const { number, diff } = useSelector(state => ({
  //   number: state.counter.number,
  //   diff: state.counter.diff
  // }));
  // 렌더 최적화
  const number = useSelector(state => state.counter.number)
  const diff = useSelector(state => state.counter.diff)
  console.log(number, diff)

  // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook 입니다.
  const dispatch = useDispatch();
  // 각 액션들을 디스패치하는 함수들을 만드세요
  const onIncrease = () => dispatch(increaseAsync());
  const onDecrease = () => dispatch(decreaseAsync());
  const onSetDiff = diff => dispatch(setDiff(diff));

  return (
    <HomeRender
      // 상태와
      number={number}
      diff={diff}
      // 액션을 디스패치 하는 함수들을 props로 넣어줍니다.
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default Home;