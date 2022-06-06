import React, { useEffect, useState } from 'react';
import CalculatorContainer from './CalculatorContainer';
import Display from './Display';
import ButtonsGrid from './ButtonsGrid';
import Button from './Button';

import { Helmet } from 'react-helmet';
import { buttons } from '../utils/buttons';
import { Stack } from '../utils/stack';

const memory = new Stack();

function Calculator() {
  const [display, setDisplay] = useState({ value: '0', isResult: false });
  const [operation, setOperation] = useState('');
  const [nextOperation, setNextOperation] = useState('');
  const [firstValue, setFirstValue] = useState<null | number>(null);
  const [secondvalue, setSecondValue] = useState<null | number>(null);

  useEffect(() => {
    if (!firstValue || !secondvalue) return;

    let result = 0;
    operation === '+' && (result = firstValue + secondvalue);
    operation === '-' && (result = firstValue - secondvalue);
    operation === '/' && (result = firstValue / secondvalue);
    operation === 'x' && (result = firstValue * secondvalue);

    setDisplay({ value: result.toString(), isResult: true });
    nextOperation === '=' ? setOperation('') : setOperation(nextOperation);
    nextOperation === '=' ? setFirstValue(null) : setFirstValue(result);
    setSecondValue(null);
  }, [operation, firstValue, secondvalue]);

  const onButtonClickHandler = (value: number | string, type: string) => {
    if (type === 'number') {
      if (value === '.' && display.value.includes('.')) return;

      if (!display.isResult) {
        display.value === '0'
          ? setDisplay({ value: value.toString(), isResult: false })
          : setDisplay({ value: display.value + value, isResult: false });
      } else {
        setDisplay({ value: value.toString(), isResult: false });
      }
    }

    if (type === 'operator') {
      if (value === 'ROUND') {
        const roundedDisplayValue = Number(display.value).toFixed(3);
        setDisplay({ value: roundedDisplayValue, isResult: false });
        return;
      }

      if (value === 'C') {
        setDisplay({ value: '0', isResult: false });
        setFirstValue(null);
        setSecondValue(null);
        setOperation('');
        return;
      }

      if (!firstValue) {
        setFirstValue(Number(display.value));
        setOperation(value as string);
        setDisplay({ value: '0', isResult: false });
      }

      if (operation !== '') {
        setNextOperation(value as string);
        setSecondValue(Number(display.value));
      }
    }

    if (type === 'memory') {
      value === 'MC' && memory.clear();
      value === 'MR' &&
        setDisplay({ value: memory.peek().toString(), isResult: false });
      value === 'M-' && memory.pop();
      value === 'M+' && memory.push(display.value);
      value === 'MAGIC' &&
        setDisplay({ value: memory.magic().toString(), isResult: false });

      console.log(memory.stack);
    }
  };

  return (
    <>
      {/* <Helmet>
        <title>
          {display.isResult ? display.value : 'React Calculator v2'}
        </title>
      </Helmet> */}
      <CalculatorContainer>
        <Display display={display} />
        <ButtonsGrid>
          {buttons.map((button, index) => {
            return (
              <Button
                key={index}
                value={button.value}
                type={button.type}
                onButtonClick={onButtonClickHandler}
              />
            );
          })}
        </ButtonsGrid>
      </CalculatorContainer>
    </>
  );
}

export default Calculator;
