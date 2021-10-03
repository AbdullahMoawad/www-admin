export const unique = (value, index, self) => {
    return self.indexOf(value) === index;
};

export const arrayLabels = (array, labelName) => {
    let labels = [];
    for (let i = 0; i < array.length; i++) {
        labels.push(array[i][labelName]);
    }
    return labels;
};
