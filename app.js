var state = {
  list: ['oranges', 'apples', 'shwarma']
};

function addItem(state, item) {
  state.list.push(item);
}

function displayList(state) {
  for (var i=0; i < state.list.length; i++) {
    var list = $(".items").append('<li>' + state.list[i] + '</li>');
  }
  return list;
}

$("#js-shopping-list-form").on('submit', function(event) {
  event.preventDefault();
  addItem(state, $("#shopping-list-entry").val());
});
