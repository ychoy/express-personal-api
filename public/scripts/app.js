var $campingList;
var allCamping = [];

$(document).ready(function(){

  $campingList = $('#campingTarget');
  $.ajax({
    method: 'GET',
    url: '/api/camping',
    success: handleSuccess,
    error: handleError
  });

  $('#newCampingForm').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/camping',
      data: $(this).serialize(),
      success: newCampingSuccess,
      error: newCampingError
    });
  });

/*
    // for update: submit event on `.update` form
    $campingList.on('submit', '.update', function (event) {
      event.preventDefault();
      // find the camping id (stored in HTML as `data-id`)
      var campingId = $(this).closest('.camping').attr('data-id');
      // find the camping to update by its id
      var campingToUpdate = allCamping.find(function (camping) {
        return camping._id == campingId;
      });
      // serialze form data
      var updatedCamping = $(this).serialize();
      // PUT request to update camping
      $.ajax({
        type: 'PUT',
        url: baseUrl + '/' + campingId,
        data: updatedCamping,
        success: function onUpdateSuccess(json) {
          // replace camping to update with newly updated version (json)
          allCamping.splice(allCamping.indexOf(todoToCamping), 1, json);
          // render all todos to view
          render();
        }
      });
    })

  */

  $campingList.on('click', '.deleteBtn', function() {
    console.log('clicked delete button to', '/api/camping/'+$(this).attr('data-id'));
    $.ajax({
      method: 'DELETE',
      url: '/api/camping/'+$(this).attr('data-id'),
      success: deleteCampingSuccess,
      error: deleteCampingError
    });
  });

});

function getCampingHtml(camping) {
  return `<hr>
          <p>
            <b>${camping.title}</b>
            - ${camping.park}
            <button type="button" name="button" class="deleteBtn btn btn-danger pull-right" data-id=${camping._id}>Delete</button>
          </p>`;
}

function getAllCampingHtml(camping) {
  return camping.map(getCampingHtml).join("");
}

// helper function to render all posts to view
// note: we empty and re-render the collection each time our post data changes
function render () {
  // empty existing posts from view
  $campingList.empty();

  // pass `allCamping` into the template function
  var campingHtml = getAllCampingHtml(allCamping);

  // append html to the view
  $campingList.append(CampingHtml);
};

function handleSuccess(json) {
  allCamping = json;
  render();
}

function handleError(e) {
  console.log('uh oh');
  $('#campingTarget').text('Failed to load camping, is the server working?');
}

function newCampingSuccess(json) {
  $('#newCampingForm input').val('');
  allCamping.push(json);
  render();
}

function newCampingError() {
  console.log('new camping error!');
}

function deleteCampingSuccess(json) {
  var camping = json;
  console.log(json);
  var campingId = camping._id;
  console.log('delete camping', campingId);
  for(var index = 0; index < allCamping.length; index++) {
    if(allCamping[index]._id === campingId) {
      allCamping.splice(index, 1);
      break;
    }
  }
  render();
}

function deleteCampingError() {
  console.log('deletecamping error!');
}
