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
                          <div class="itemsContainer">
                            <div class="image"><a href="#!"><img src="${element.imagePath}"> </a></div>
                            <div class="play"><img src="/images/play-button.png" /> </div>
                          </div>
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
          <div class="card horizontal z-depth-3">
            <div class="card-image">
              <img src="${element.imagePath}">
            </div>
            <div class="card-stacked">
              <div class="card-content" style="padding: 8px;">
                <div style="font-size:16px;color:grey;">${element.name}</div>
                <div style="font-size:10px">Releasing on</div>
                <div style="font-size:12px">${element.releaseDate}</div>
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
