'use strict';

function countSameElements(collection) {
  const countedItems = collection.reduce((allItems, currentIem) => {
    const regExp = /\[|(-|:)/;
    if (currentIem.match(regExp)) {
      if (currentIem.match(/\]/)) {
        currentIem.substring(0, currentIem.length - 1);
      }
      const [key, count] = currentIem.replace(regExp, "-").split("-");
      allItems[key] ? allItems[key] += parseInt(count) : allItems[key] = parseInt(count);
    } else {
      allItems[currentIem] ? allItems[currentIem]++ : allItems[currentIem] = 1;
    }
    return allItems;
  }, {});
  return Object.keys(countedItems).map(key => {
    return {name: key, summary: countedItems[key]}
  })
}
