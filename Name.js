export default class Name {
  constructor(name, gridNum, gridObject) {
    this._name = name;
    this._gridNum = gridNum;
    this._gridObject = gridObject;
  }

  setEventListeners() {
    this.addEventListener("click", () => {
      this.remove();
    });
  }

  _getView() {
    let newName = document.createElement("p");
    newName.textContent = this._name;
    newName.classList.add("name__added");

    let newDelete = document.createElement("span");
    newDelete.textContent = "x";
    newDelete.classList.add("name__delete");
    newName.append(newDelete);

    // this.setEventListeners(newDelete)

    return newName;
  }

  addToGrid() {
    for (let [key, value] of Object.entries(this._gridObject)) {
      if (value.name === this._gridNum) {
        let contentArea = value.div.querySelector(".added__names");
        contentArea.append(this._getView());
      }
    }
  }
}
