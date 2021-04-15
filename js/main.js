window.addEventListener('load', () =>  {

   let imgLoaded = false;

   const filterList = [
      {
         name: 'Grayscale',
         defaultValue: 0
      },
      {
         name: 'Saturate',
         defaultValue: 0
      },
      {
         name: 'Sepia',
         defaultValue: 0
      },
      {
         name: 'Invert',
         defaultValue: 0
      },
      {
         name: 'Contrast',
         defaultValue: 0
      },
      {
         name: 'Brightness',
         defaultValue: 0
      },
      {
         name: 'Blur',
         defaultValue: 0
      },
      {
         name: 'Hue-rotate',
         defaultValue: 0
      },
   ]



   document.querySelector('input[type=file]').addEventListener('change', function() {

      let img = document.getElementById('image');

      img.src = URL.createObjectURL(this.files[0]);

      img.classList.remove("preview-img");

      imgLoaded = true;

      if (imgLoaded) {
         filterList.forEach( (element) => {
            document.getElementById('filters-list').innerHTML += `
               <li>
                  <h3 class="filter-name">
                     ${element.name}
                  </h3>
               </li>
            `
         });
      }
   });

   
});
