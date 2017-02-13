$(document).ready(function(){
  $result = $('#campingTarget');

  $.ajax({
    method: 'GET',
    url: '/api/camping',
    success: handleSuccess,
  });

  function handleSuccess(data) {
    var campingResults = data;
    if (campingResults.length > 0) {
      campingResults.forEach(function (result, index) {   // loop over each result
            var campingData = {    // create object of data
              title: result.title,
              park: result.park,
              image: result.image,
              description: result.description,
            };
            var $resultstoDisplay = `
                    <br>
                    <div class="row">
                      <div class="col-xs-4">
                        <img src="${result.image}" class="img-responsive">
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
  $('#newCampingForm').on('submit', function(e) {
      e.preventDefault();
      $.ajax({
          method: 'POST',
          url: '/api/camping',
          data: $(this).serializeArray(),
          success: newCampingSuccess,
      });
    });

  function newCampingSuccess() {
    var resultstoDisplay = $('#newCampingForm input').val('');
    $result.append(resultstoDisplay);
  }

  $('.deleteBtn').on('click', function() {
      $.ajax({
        method: 'DELETE',
        url: '/api/camping/:id',  // +$(this).attr('data-id'),
        success: deleteCampingSuccess,
      });
  });

  function deleteCampingSuccess() {
      var campingData = data;
      var campingId = campingData._id
      // find the camping with the correct ID and remove it from our allCamping array
      for(let i = 0; i < $result.length; i++) {
        if ($result[i]._id === campingId) {
          $result.splice(i, 1);
          break;  // we found our camping - no reason to keep searching (this is why we didn't use forEach)
        }
      };
      var resultstoDisplay = $('#newCampingForm input').val('');
      $result.append(resultstoDisplay);
    }

});

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
