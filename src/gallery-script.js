const galleryWrapper = document.querySelector("#gallery-wrapper");
const galleryModal = document.querySelector("#modal");
const closeGalleryModalBtn = document.querySelector("#modal button");
const leftGalleryModalBtn = document.querySelector("#gallery-left");
const rightGalleryModalBtn = document.querySelector("#gallery-right");
const galleryModalItemCounter = document.querySelector("#gallery-item-num");
const galleryGradient = document.querySelector("#gradient");

const setActiveImage = () => {
  galleryModalItems.forEach((el, idx) => {
    if (idx === activeImage) {
      el.classList.remove("opacity-0");
      el.classList.add("opacity-1");
    } else {
      el.classList.remove("opacity-1");
      el.classList.add("opacity-0");
    }
  });

  galleryModalItemCounter.textContent = `${activeImage + 1}/${totalImages}`;
};

const galleryModalItems = [];

let activeImage = 0;
let totalImages;

const msnry = Macy({
  container: galleryWrapper,
  columns: 3,
  margin: {
    x: 42,
    y: 42,
  },
  trueOrder: true,
  breakAt: {
    1100: {
      columns: 2,
    },
    720: {
      columns: 1,
    },
  },
});

galleryGradient.addEventListener("click", () => {
  galleryModal.showModal();
});

closeGalleryModalBtn.addEventListener("click", () => {
  galleryModal.close();
});

rightGalleryModalBtn.addEventListener("click", () => {
  if (activeImage === totalImages - 1) {
    activeImage = 0;
  } else {
    activeImage++;
  }
  setActiveImage();
});
leftGalleryModalBtn.addEventListener("click", () => {
  if (activeImage === 0) {
    activeImage = totalImages - 1;
  } else {
    activeImage--;
  }
  setActiveImage();
});

const items = document.querySelectorAll("#gallery-wrapper div");

items.forEach((el, idx) => {
  el.addEventListener("click", () => {
    galleryModal.showModal();
    activeImage = idx;
    galleryModalItems.forEach((el, idx) => {
      if (idx === activeImage) {
        el.classList.remove("opacity-0");
        el.classList.add("opacity-1");
      } else {
        el.classList.remove("opacity-1");
        el.classList.add("opacity-0");
      }
    });
    galleryModalItemCounter.textContent = `${activeImage + 1}/${totalImages}`;
  });

  const src = el.querySelector("img").getAttribute("src");

  const galleryModalItem = document.createElement("div");
  galleryModalItem.setAttribute("data-id", idx);
  galleryModalItem.classList.add(
    "w-full",
    "h-full",
    "absolute",
    "left-0",
    "top-0",
    "opacity-0",
    "transition",
    "duration-300"
  );
  const imgElement = document.createElement("img");
  imgElement.classList.add("w-full", "h-full", "object-cover");
  imgElement.src = src;
  imgElement.alt = "modal-gallery-item";
  galleryModalItem.appendChild(imgElement);

  galleryModal.appendChild(galleryModalItem);
  galleryModalItems.push(galleryModalItem);

  switch (idx) {
    case 0:
      el.style.height = "640px";
      break;
    case 1:
      el.style.height = "340px";
      break;
    case 2:
      el.style.height = "450px";
      break;
    case 3:
      el.style.height = "450px";
      break;
    case 4:
      el.style.height = "450px";
      break;
    case 5:
      el.style.height = "640px";
      break;
    case 6:
      el.style.height = "340px";
      break;
    case 7:
      el.style.height = "640px";
      break;
    case 8:
      el.style.height = "340px";
  }
});

totalImages = galleryModalItems.length;
setActiveImage();
