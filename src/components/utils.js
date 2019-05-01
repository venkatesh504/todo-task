export const applyDrag = (arr, dragResult) => {
    const { removedIndex, addedIndex, payload } = dragResult;
    if (removedIndex === null && addedIndex === null) return arr;
  
    const result = [...arr];
    let itemToAdd = payload;
  
    if (removedIndex !== null) {
      itemToAdd = result.splice(removedIndex, 1)[0];
    }
  
    if (addedIndex !== null) {
      result.splice(addedIndex, 0, itemToAdd);
    }
  
    return result;
  };
  
  export const generateItems = (count, creator) => {
    const result = [];
    console.log('count in utile page ' , count);
    
    for (let i = 0; i < count; i++) {
      result.push(creator(i));
    }
    console.log("result",result)
    return result;
    
  };