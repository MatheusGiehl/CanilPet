const createMenuObject = function(activeMenu) {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }
    if (activeMenu !== returnObject) {
        returnObject[activeMenu] = true;
    }
    return returnObject;
} 

module.exports.createMenuObject = createMenuObject;