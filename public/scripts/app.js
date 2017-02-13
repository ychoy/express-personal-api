
//var allCamping = [];

$(document).ready(function(){

  $result = $('#campingTarget');

  $.ajax({
    method: 'GET',
    url: '/api/camping',
    success: handleSuccess,
  //  error: handleError
  });

  $('#newCampingForm').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/camping',
      data: $(this).serializeArray(),
      success: newCampingSuccess,
//      error: newCampingError
    });
  });

  $result.on('click', '.deleteBtn', function() {
    console.log('clicked delete button to', '/api/camping/:id') //+$(this).attr('data-id'));
    $.ajax({
      method: 'DELETE',
      url: '/api/camping/:id',  // +$(this).attr('data-id'),
      success: deleteCampingSuccess,
//      error: deleteCampingError
    });
  });

});

function handleSuccess(data) {
    console.log("received data:", data);
    var campingResults = data;
    console.log(campingResults);

    if (campingResults.length > 0) {

      // loop over each result
      campingResults.forEach(function (result, index) {
            // create object of data
            var campingData = {
              title: result.title,
              park: result.park,
              images: result.images,
              description: result.description,
            };

            var $resultstoDisplay = `
                    <br>
                    <div class="row">
                      <div class="col-xs-4">
                        <img src="${campingData.images}" class="img-responsive">
                      </div>
                      <div class="col-sm-8">
                        <p> <strong> ${campingData.title} </strong> - ${campingData.park} </p>
                        <p> ${campingData.description} </p>
                        <button type="button" name="button" class="deleteBtn btn btn-danger pull-right" data-id=${campingData._id}>Delete</button>
                      </div>
                    </div>
                    <br>
                  `;

                  $result.append($resultstoDisplay);

            });
        } else {  // if there are no results, display this
            $result.append('<p class="text-center">No results</p>');
        }
      }

/*
function handleSuccess(json) {
  json(allCamping);

function handleError(e) {
  console.log('uh oh');
  $('#campingTarget').text('Failed to load camping, is the server working?');
}

function newCampingSuccess(json) {
  $('#newCampingForm input').val('');
  allCamping.push(json);

}


function newCampingError() {
  console.log('newCamping error!');
}


function deleteCampingSuccess(json) {
  var camping = json;
  console.log(json);
  var campingid = camping._id;
  console.log('delete camping', campingid);
  // find the camping with the correct ID and remove it from our allCamping array
  for(var index = 0; index < allCamping.length; index++) {
    if(allCamping[index]._id === campingid) {
      allCamping.splice(index, 1);
      break;  // we found our camping - no reason to keep searching (this is why we didn't use forEach)
    }
  };

  json(allCamping);
};
*/
/*
function deleteCampingError() {
  console.log('deleteCamping error!');
};
*/

/* Add later
    // for update: submit event on `.update` form
    $result.on('submit', '.update', function (event) {
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
