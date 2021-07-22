class Items {
  constructor(titles, itemsValuesAll) {

    const items = itemsValuesAll.map(itemsValueArr => {
      const item = {};
      for (let i = 0; i < titles.length; i++ ){

        item[titles[i]] = itemsValueArr[i]
      }
      return item;
    })

    this.items = items;

  }
}

module.exports = Items;
