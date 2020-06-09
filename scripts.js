// $('button').click(() => {
//   $('ul').append(`<li>${$('input').val()}</li>`);
//   $('input').val('');
// });

// Extra version with completing todos

$('button').click(() => {
  $('ul').append(`<li>${$('input').val()}</li>`);
  $('li:last-child').click((e) => {
    $(e.target).toggleClass('completed');
  });
  $('input').val('');
});
