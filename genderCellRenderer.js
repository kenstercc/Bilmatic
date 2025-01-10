function GenderCellRenderer() {
}

GenderCellRenderer.prototype.init = function (params) {
    this.eGui = document.createElement('span');
    this.eGui.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18"><path d="M5 8l4 4 4-4z"/></svg>' + params.value;
};

GenderCellRenderer.prototype.getGui = function () {
    return this.eGui;
};
