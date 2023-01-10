const refs = {
  formEl: document.querySelector('.form'),
};

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();

  const delay = e.target.elements.delay.value;
  const step = e.target.elements.step.value;
  const position = e.target.elements.amount.value;

  setTimeout(() => {
    for (let i = 1; i <= position; i++) {
      setTimeout(
        () => {
          createPromise(i, step * i + +delay - step)
            .then(success => console.log(success))
            .catch(error => console.error(error));
        },
        step * i,
        i,
        step * i + +delay
      );
    }
  }, delay);
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  });
}
