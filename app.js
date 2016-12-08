var state = {
  items: ['apples', 'oranges', 'shwarma']
};

function addItem(state, item) {
  state.items.push(item);
  console.log(state);
};

function checkItem(item) {
  $(item).toggleClass('checked');
};

function delteItem(state, index) {
 state.items.splice(index, 1); 
};

function renderState(state) {
  for (var i=0; i < state.items.length; i++) {
      var list_item = 
         '<li>
             
      list
  }
};

$(document).ready(function (event) {
    $('#js-shopping-list-form').on('submit', function(event) {
    event.preventDefault();
    var shopping_list_item = $('#shopping-list-entry').val();
    addItem(state, shopping_list_item);
    });
});


