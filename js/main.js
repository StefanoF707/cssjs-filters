window.addEventListener('load', () =>  {

   let imgLoaded = false;

   const filterList = [
      {
         name: 'Grayscale',
         defaultValue: 0,
         open: false,
      },
      {
         name: 'Saturate',
         defaultValue: 0,
         open: false,
      },
      {
         name: 'Sepia',
         defaultValue: 0,
         open: false,
      },
      {
         name: 'Invert',
         defaultValue: 0,
         open: false,
      },
      {
         name: 'Contrast',
         defaultValue: 0,
         open: false,
      },
      {
         name: 'Brightness',
         defaultValue: 0,
         open: false,
      },
      {
         name: 'Blur',
         defaultValue: 0,
         open: false,
      },
      {
         name: 'Hue-rotate',
         defaultValue: 0,
         open: false,
      },
   ];

   document.querySelector('input[type=file]').addEventListener('change', function() {

      let img = document.getElementById('image');

      img.src = URL.createObjectURL(this.files[0]);

      img.classList.remove("preview-img");

      imgLoaded = true;

      if (imgLoaded) {
         createListElements(filterList);
      }
   });

   
});


// FUNCTIONS----------------------------------

function createListElements(array) {
   array.forEach( (element) => {
      document.getElementById('filters-list').innerHTML += 
      `
         <li>
            <h3 class="filter-name">
               ${element.name}
            </h3>
            <input type="range" value="${element.defaultValue}">
         </li>
      `
   });
}