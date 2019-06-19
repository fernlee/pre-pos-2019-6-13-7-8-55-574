'use strict';

function countSameElements(collection) {
  const countedItems = collection.reduce((allItems, currentIem) => {
      allItems[currentIem] ? allItems[currentIem]++ : allItems[currentIem] = 1;
      return allItems;
    }, {});
  return Object.keys(countedItems).map(key => { return {key, count: countedItems[key]}})
}
