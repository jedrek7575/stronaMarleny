// Przełączanie kart
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})
//przesuwanie parallax1




// Pojawianie i znikanie tekstu dla <p> i <h1>
let observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add("visible");
      } else {
          entry.target.classList.remove("visible");
      }
  });
}, { threshold: 0.7 });



// Obserwowanie wszystkich <p> i <h1>
document.querySelectorAll("p, h1").forEach(el => observer.observe(el));




//otwieranie lightboxa

document.addEventListener("DOMContentLoaded", function() {
  const items = document.querySelectorAll(".gallery-item");
  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const lightboxCaption = document.querySelector(".lightbox-caption");


  items.forEach(item => {
    item.addEventListener("click", function() {
      const img = this.querySelector("img");
      const rozwinText = this.querySelector(".rozwin").innerHTML; // Pobranie tylko tekstu z <p class="rozwin">
      
      lightboxImg.src = img.src;
      lightboxCaption.innerHTML = rozwinText; // W lightboxie pokazuje się tylko tekst <p class="rozwin">
      lightbox.style.display = "flex";
    });
  });


  // Zamknięcie lightboxa po kliknięciu
  lightbox.addEventListener("click", function() {
    lightbox.style.display = "none";
  });
});

//Rozwijanie kontaktu//

document.addEventListener("DOMContentLoaded", function () {
  let activeImg = null;
  let activeText = null;

  document.querySelectorAll("img").forEach(img => {
      img.addEventListener("click", function (event) {
          const textClass = img.classList[0] + "t"; // Pobranie klasy + "t"
          const textElement = document.querySelector("." + textClass);

          if (textElement) {
              // Usuwanie klasy active z poprzedniego obrazka i tekstu
              if (activeImg && activeImg !== img) {
                  activeImg.classList.remove("active");
              }
              if (activeText && activeText !== textElement) {
                  activeText.classList.remove("active");
              }

              textElement.classList.toggle("active");
              img.classList.toggle("active");
              
              // Aktualizacja aktywnych elementów
              activeImg = img.classList.contains("active") ? img : null;
              activeText = textElement.classList.contains("active") ? textElement : null;
              
              event.stopPropagation();
          }
      });
  });

  document.addEventListener("click", function (event) {
      if (activeImg && activeText && !activeImg.contains(event.target) && !activeText.contains(event.target)) {
          activeImg.classList.remove("active");
          activeText.classList.remove("active");
          activeImg = null;
          activeText = null;
      }
  });
});


const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});