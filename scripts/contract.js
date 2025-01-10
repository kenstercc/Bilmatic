
// Define current sign value formatter

  function currencyFormatter(params) {
  return '$' + params.value.toFixed(2);
}
  
// thousand separator value formatter

function formatNumber(number) {
  // this puts commas into the number eg 1000 goes to 1,000,
  // i pulled this from stack overflow, i have no idea how it works
  return Math.floor(number).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
} 
  
// Selection Data Grid below

  const data = [
        {'billing-item':1,'range-type': 'item', 'range': 100000, 'rate-type': 'flat $', 'fee-rate': 100,
          'operator': '+', 'addon-type': 'flat $', 'addon-rate': 20, 'minimum-fee': 200, 'maximun-fee': 500, 'specials': 'none'},
        {'billing-item':2,'range-type': 'item', 'range': 200000, 'rate-type': 'flat $', 'fee-rate': 100,
          'operator': '+', 'addon-type': 'flat $', 'addon-rate': 20, 'minimum-fee': 200, 'maximun-fee': 500, 'specials': 'Approved'},
        {'billing-item':3,'range-type': 'item', 'range': 300000, 'rate-type': 'flat $', 'fee-rate': 100,
          'operator': '+', 'addon-type': 'flat $', 'addon-rate': 20, 'minimum-fee': 200, 'maximun-fee': 500, 'specials': 'none'},
        {'billing-item':4,'range-type': 'item', 'range': 400000, 'rate-type': 'flat $', 'fee-rate': 100,
          'operator': '+', 'addon-type': 'flat $', 'addon-rate': 20, 'minimum-fee': 200, 'maximun-fee': 500, 'specials': 'none'},
        {'billing-item':5,'range-type': 'item', 'range': 500000, 'rate-type': 'flat $', 'fee-rate': 100,
          'operator': '+', 'addon-type': 'flat $', 'addon-rate': 20, 'minimum-fee': 200, 'maximun-fee': 500, 'specials': 'none'},      
        {'billing-item':6,'range-type': 'item', 'range': 600000, 'rate-type': 'flat $', 'fee-rate': 100,
          'operator': '+', 'addon-type': 'flat $', 'addon-rate': 20, 'minimum-fee': 200, 'maximun-fee': 500, 'specials': 'none'},  
        {'billing-item':7,'range-type': 'item', 'range': 700000, 'rate-type': 'flat $', 'fee-rate': 100,
          'operator': '+', 'addon-type': 'flat $', 'addon-rate': 20, 'minimum-fee': 200, 'maximun-fee': 500, 'specials': 'none'},  
        {'billing-item':8,'range-type': 'item', 'range': 800000, 'rate-type': 'flat $', 'fee-rate': 100,
          'operator': '+', 'addon-type': 'flat $', 'addon-rate': 20, 'minimum-fee': 200, 'maximun-fee': 500, 'specials': 'none'},
        {'billing-item':9,'range-type': 'item', 'range': 900000, 'rate-type': 'flat $', 'fee-rate': 100,
          'operator': '+', 'addon-type': 'flat $', 'addon-rate': 20, 'minimum-fee': 200, 'maximun-fee': 500, 'specials': 'none'},  
        {'billing-item':10,'range-type': 'item', 'range': 1000000, 'rate-type': 'flat $', 'fee-rate': 100,
          'operator': '+', 'addon-type': 'flat $', 'addon-rate': 20, 'minimum-fee': 200, 'maximun-fee': 500, 'specials': 'none'},  
        {'billing-item':11,'range-type': 'item', 'range': 110000, 'rate-type': 'flat $', 'fee-rate': 100,
          'operator': '+', 'addon-type': 'flat $', 'addon-rate': 20, 'minimum-fee': 200, 'maximun-fee': 500, 'specials': 'none'},  
        {'billing-item':12,'range-type': 'item', 'range': 120000, 'rate-type': 'flat $', 'fee-rate': 100,
           'operator': '+', 'addon-type': 'flat $', 'addon-rate': 20, 'minimum-fee': 200, 'maximun-fee': 500, 'specials': 'none'},  
        {'billing-item':13,'range-type': 'item', 'range': 130000, 'rate-type': 'flat $', 'fee-rate': 100,
           'operator': '+', 'addon-type': 'flat $', 'addon-rate': 20, 'minimum-fee': 200, 'maximun-fee': 500, 'specials': 'none'},
        {'billing-item':14,'range-type': 'item', 'range': 140000, 'rate-type': 'flat $', 'fee-rate': 100,
           'operator': '+', 'addon-type': 'flat $', 'addon-rate': 20, 'minimum-fee': 200, 'maximun-fee': 500, 'specials': 'none'},  
        {'billing-item':15,'range-type': 'item', 'range': 150000, 'rate-type': 'flat $', 'fee-rate': 100,
           'operator': '+', 'addon-type': 'flat $', 'addon-rate': 20, 'minimum-fee': 200, 'maximun-fee': 500, 'specials': 'none'},  

  ];
    
  
  const gridOption = {
    components: {
      'genderCellRenderer': GenderCellRenderer
    },
    
    defaultColDef: {
        editable: true,
        resizable: true},
    enableSorting: false,
    rowSelection: 'multiple',
    rowHeight: 40,
    rowData: data,
    onGridReady: function (params) {
      params.api.sizeColumnsToFit();
  },
     
   
          
  columnDefs: [
        {
          headerName: 'Del',
          width: 80,
          editable: true,
          cellRenderer: params => {
            return `<input type='checkbox' ${params.value ? 'checked' : ''} />`;
          },
          field: 'delete-indicator'
        },
      {headerName: "Billing Items", field: "billing-item",
         width: 200, 
         editable: true},
      {headerName: "Range Type", field: "range-type", 
         width:150,
         cellRenderer: 'genderCellRenderer',
         cellEditor: 'agRichSelectCellEditor',
         singleClickEdit : true,
         cellEditorParams: {
             values: ['item cnt', 'acct value']}},
      {headerName: "Range", field: "range",
         editable: true, 
         width:150, 
         cellClass: 'ag-right-aligned-cell', 
         valueFormatter: params => {return params.value.toLocaleString();}},
      {headerName: "Rate Type", field: "rate-type",
        width:150,
        cellRenderer: 'genderCellRenderer',
        cellEditor: 'agRichSelectCellEditor',
        singleClickEdit : true,
        cellEditorParams: {
            values: ['flat', 'bps', 'pct']} },
      {headerName: "Rate", field: "fee-rate", 
        width: 100, 
        editable: true, 
        cellClass: 'ag-right-aligned-cell',},
      {headerName: "(+/-)", field: "operator", 
        width:80,
        cellRenderer: 'genderCellRenderer',
        cellEditor: 'agRichSelectCellEditor',
        singleClickEdit : true,
        cellEditorParams: {
            values: ['(+)', '(-)']}},
      {headerName: "Add On Type", field: "addon-type", 
        width: 150,
        cellRenderer: 'genderCellRenderer',
        cellEditor: 'agRichSelectCellEditor',
        singleClickEdit : true,
        cellEditorParams: {
            values: ['flat', 'bps', 'pct']}},     
      {headerName: "Add-On Rate", field: "addon-rate", 
        width: 150, 
        editable: true, 
        cellClass: 'ag-right-aligned-cell'},
      {headerName: "Min", field: "minimum-fee", 
        width: 100, 
        editable: true, 
        cellClass: 'ag-right-aligned-cell',
        valueFormatter: params => {return params.value.toLocaleString();}},
      {headerName: "Max", field: "maximun-fee", 
        width:100, 
        editable: true, 
        cellClass: 'ag-right-aligned-cell', 
        valueFormatter: params => {return params.value.toLocaleString();}},
      {headerName: "Specials", field: "specials", 
        width:200,
        cellRenderer: 'genderCellRenderer',
        cellEditor: 'agRichSelectCellEditor',
        singleClickEdit : true,
        cellEditorParams: {
            values: ['exception', 'exemption', 'specials']}}

       
    ],
    
    /* logic below is to change style color of the even row in the grid */ 

    getRowStyle: function(params) {
      if (params.node.rowIndex % 2 === 0) {
          return { background: '#D3D3D3' }
      }
    }   
  };
  

    const selectiongrid = 
    document.addEventListener('DOMContentLoaded', function () {
    const gridDiv = document.querySelector('#selectionGrid');
    new agGrid.Grid(gridDiv, gridOption);
  });

  