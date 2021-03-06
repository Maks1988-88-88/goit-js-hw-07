const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// ================1 вариант============


const allImages = document.querySelector("ul#gallery");
  allImages.style.display = "flex";
  allImages.style.flexDirection = "column";
  allImages.style.listStyle = "none";
  allImages.setAttribute("flex-direction", "column");

const imagesListTemplate = ({url, alt}) => {
  return `<li><img src = ${url} alt = '${alt}' width="630" height="375"></li>`;
};
const addImg = images.map(imagesListTemplate).join('');
console.log(addImg);

allImages.insertAdjacentHTML("afterbegin", addImg);


// ================2 вариант============

// const addImg = () => {
//   const allImages = document.querySelector("ul#gallery");
//   allImages.style.display = "flex";
//   allImages.style.flexDirection = "column";
//   allImages.style.listStyle = "none";
//   allImages.setAttribute("flex-direction", "column");
//   for (const img of images) {
//     allImages.insertAdjacentHTML(
//       `afterbegin`,
//       `<li><img src = ${img.url}
//     alt = '${img.alt}' width="630" height="375"></li>`
//     );
//   }
//   const contentStyle = document.querySelectorAll("li");
// };
// addImg();
