window.addEventListener('load', () =>  {

   let imgLoaded = false;

   const filterList = [
      {
         name: 'grayscale',
         minValue: 0,
         maxValue: 100,
         open: false,
      },
      {
         name: 'saturate',
         minValue: 0,
         maxValue: 100,
         open: false,
      },
      {
         name: 'sepia',
         minValue: 0,
         maxValue: 100,
         open: false,
      },
      {
         name: 'invert',
         minValue: 0,
         maxValue: 100,
         open: false,
      },
      {
         name: 'contrast',
         minValue: 0,
         maxValue: 100,
         open: false,
      },
      {
         name: 'brightness',
         minValue: 0,
         maxValue: 100,
         open: false,
      },
      {
         name: 'blur',
         minValue: 0,
         maxValue: 100,
         open: false,
      },
      {
         name: 'hue-rotate',
         minValue: 0,
         maxValue: 360,
         open: false,
      },
   ];

   document.querySelector('input[type=file]').addEventListener('change', function() {

      let img = document.getElementById('image');

      img.src = URL.createObjectURL(this.files[0]);

      img.classList.remove("preview-img");

      imgLoaded = true;
      
      if (imgLoaded) {
         createListElements(filterList, 'filters-list');
      }

      
   });
   
   
});


// FUNCTIONS----------------------------------

function createListElements(array, list) {
   array.forEach( (element) => {

      let node = document.createElement('LI');

      let titleNode = document.createElement('H3');
      let titleText = document.createTextNode(element.name);
      titleNode.classList.add('filter-name');
      titleNode.appendChild(titleText);

      let inputNode = document.createElement('INPUT');
      inputNode.type = 'range';
      inputNode.value = 0;
      inputNode.min = element.minValue;
      inputNode.max = element.maxValue;
      inputNode.classList.add('input-range');
      inputNode.style.display = 'none'


      node.appendChild(titleNode);
      node.appendChild(inputNode);

      document.getElementById(list).appendChild(node);

      titleNode.addEventListener('click', function() {

         let allInputs = document.getElementsByClassName('input-range');

         for (let i = 0; i < allInputs.length; i++) {
            allInputs[i].style.display = 'none';
            array[i].open = false;
         }

         if (!element.open) {
            inputNode.style.display = 'block';
            element.open = true;
         } else {
            inputNode.style.display = 'none';
            element.open = false;
         }

      });
   });
}