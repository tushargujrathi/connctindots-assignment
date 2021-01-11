(($) => {
  $(() => {
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space

function getTrendingShows() {
  $.ajax({
    url: `/trendingList`,
    data: {},
    type: 'GET', // get from serverside
    success(response) {
      // successful response from serverside
      if (response.status === 0) {
        // successful
        // fill up the application form
        let html = '';
        response.data.forEach((element) => {
          html += `
                    <div class="col s12 m4">
                      <div class="card">
                        <div class="card-image">
                          <img src="${element.imagePath}">
                        </div>
                      </div>
                    </div>
                  `;
        });
        $('#trending').html(html);
      } else {
        // error occured
      }
    },
  });
}

function getComingSoonShows() {
  $.ajax({
    url: `/comingSoonList`,
    data: {},
    type: 'GET', // get from serverside
    success(response) {
      // successful response from serverside
      if (response.status === 0) {
        // successful
        // fill up the application form
        let html = '';
        response.data.forEach((element) => {
          html += `
          <div class="col s12 m12">
          <div class="card horizontal">
            <div class="card-image">
              <img src="${element.imagePath}">
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>${element.name}</p>
                <p>${element.releaseDate}</p>
              </div>
            </div>
          </div>
        </div>
                  `;
        });
        $('#comingSoon').html(html);
      } else {
        // error occured
      }
    },
  });
}
$(document).ready(() => {
  getTrendingShows();
  getComingSoonShows();
});
