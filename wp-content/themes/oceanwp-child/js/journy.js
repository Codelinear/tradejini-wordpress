document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: "auto",
    spaceBetween: 10,
    speed: 800,
    loop: true,
    autoplay: {
      delay: 3000, // Adjust the delay (in milliseconds) between slide transitions
      disableOnInteraction: false, // Allow autoplay to continue even when the user interacts with the slider
    },
    navigation: {
      nextEl: ".custom-button-next",
      prevEl: ".custom-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        var images = [
          "https://codelinear.com/tradejini/wp-content/uploads/2023/07/2012.png",
          "https://codelinear.com/tradejini/wp-content/uploads/2023/07/2013.png",
          "https://codelinear.com/tradejini/wp-content/uploads/2023/07/2014.png",
          "https://codelinear.com/tradejini/wp-content/uploads/2023/07/2015-1.png",
          "https://codelinear.com/tradejini/wp-content/uploads/2023/07/2016.png",
          "https://codelinear.com/tradejini/wp-content/uploads/2023/07/2027.png",
          "https://codelinear.com/tradejini/wp-content/uploads/2023/07/2028.png",
          "https://codelinear.com/tradejini/wp-content/uploads/2023/07/2029.png",
          "https://codelinear.com/tradejini/wp-content/uploads/2023/07/2030.png",
          "https://codelinear.com/tradejini/wp-content/uploads/2023/07/2021.png",
          "https://codelinear.com/tradejini/wp-content/uploads/2023/07/2032.png",
          "https://codelinear.com/tradejini/wp-content/uploads/2023/07/2033.png",
          // Add more image URLs for each pagination point
        ];
        var texts = [
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
          "2023",
        ];
        return (
          '<span class="' +
          className +
          '"><img src="' +
          images[index] +
          '" /><h2>' +
          texts[index] +
          "</h2></span>"
        );
      },
    },
    on: {
      init: function () {
        updateNavigationOpacity(swiper);
      },
      slideChange: function () {
        updateNavigationOpacity(swiper);
      },
    },
  });

  // Add click event listener to pagination numbers
  var paginationNumbers = document.querySelectorAll(
    ".swiper-pagination-bullet"
  );
  paginationNumbers.forEach(function (number, index) {
    number.addEventListener("click", function () {
      swiper.slideTo(index); // Go to the slide corresponding to the clicked number
    });
  });

  function updateNavigationOpacity(swiper) {
    var customPrevButton = document.querySelector(".custom-button-prev");
    var customNextButton = document.querySelector(".custom-button-next");
    customPrevButton.style.opacity = swiper.realIndex === 0 ? "0.5" : "1";
    customNextButton.style.opacity =
      swiper.realIndex === swiper.slides.length - 1 ? "0.5" : "1";
  }
});
