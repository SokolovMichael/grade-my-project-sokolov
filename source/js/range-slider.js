const form = document.querySelector('.form');
const rangeSlider = form.querySelector('.form__slider');
const inputMin = form.querySelector('.form__input--min');
const inputMax = form.querySelector('.form__input--max');
const rangeReset = form.querySelector('.form__reset-button');

const inputs = [inputMin, inputMax];

const initUiSlider = () => {
  noUiSlider.create(rangeSlider, {
    start: [0, 900],
    connect: true,
    step: 5,
    range: {
'min': [0],
'max': [1000]
    }
});

  rangeSlider.noUiSlider.on('update', (values, handle) => {
inputs[handle].value = Math.round(values[handle]);
});
};

const initRangeSlider = (i, value) => {
  const array = [null, null];
  array[i] = value;
  rangeSlider.noUiSlider.set(array);
};

const onResetRangeSlider = () => {
  rangeSlider.noUiSlider.reset();
};

const drawSlider = () => {
  if (rangeSlider) {
    initUiSlider();
    initRangeSlider();
    inputs.forEach((element, index) => {
      element.addEventListener('change', (evt) => {
        initRangeSlider(index, evt.currentTarget.value);
      });
    });
    rangeReset.addEventListener('click', onResetRangeSlider);
  }
};

export { drawSlider };
