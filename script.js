let filters = {
  Brightness: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  Contrast: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  Saturation: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  HueRotation: {
    value: 0,
    min: 0,
    max: 360,
    unit: "deg",
  },
  Blur: {
    value: 0,
    min: 0,
    max: 20,
    unit: "px",
  },
  Grayscale: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
  Sepia: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
  Opacity: {
    value: 100,
    min: 0,
    max: 100,
    unit: "%",
  },
  Invert: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
};

// Filter Presets
const presets = {
  Vintage: {
    Brightness: 110,
    Contrast: 85,
    Saturation: 70,
    HueRotation: 0,
    Blur: 0,
    Grayscale: 0,
    Sepia: 40,
    Opacity: 100,
    Invert: 0,
  },
  Drama: {
    Brightness: 100,
    Contrast: 150,
    Saturation: 130,
    HueRotation: 0,
    Blur: 0,
    Grayscale: 0,
    Sepia: 0,
    Opacity: 100,
    Invert: 0,
  },
  OldSchool: {
    Brightness: 90,
    Contrast: 110,
    Saturation: 50,
    HueRotation: 0,
    Blur: 0,
    Grayscale: 30,
    Sepia: 50,
    Opacity: 100,
    Invert: 0,
  },
  BlackAndWhite: {
    Brightness: 100,
    Contrast: 120,
    Saturation: 0,
    HueRotation: 0,
    Blur: 0,
    Grayscale: 100,
    Sepia: 0,
    Opacity: 100,
    Invert: 0,
  },
  Warm: {
    Brightness: 105,
    Contrast: 100,
    Saturation: 120,
    HueRotation: 15,
    Blur: 0,
    Grayscale: 0,
    Sepia: 20,
    Opacity: 100,
    Invert: 0,
  },
  Cool: {
    Brightness: 100,
    Contrast: 100,
    Saturation: 110,
    HueRotation: 200,
    Blur: 0,
    Grayscale: 0,
    Sepia: 0,
    Opacity: 100,
    Invert: 0,
  },
  Fade: {
    Brightness: 120,
    Contrast: 80,
    Saturation: 80,
    HueRotation: 0,
    Blur: 0,
    Grayscale: 10,
    Sepia: 10,
    Opacity: 90,
    Invert: 0,
  },
  Cinematic: {
    Brightness: 95,
    Contrast: 130,
    Saturation: 85,
    HueRotation: 0,
    Blur: 0,
    Grayscale: 0,
    Sepia: 15,
    Opacity: 100,
    Invert: 0,
  },
  Vibrant: {
    Brightness: 105,
    Contrast: 110,
    Saturation: 150,
    HueRotation: 0,
    Blur: 0,
    Grayscale: 0,
    Sepia: 0,
    Opacity: 100,
    Invert: 0,
  },
  Moody: {
    Brightness: 85,
    Contrast: 120,
    Saturation: 70,
    HueRotation: 180,
    Blur: 0,
    Grayscale: 20,
    Sepia: 0,
    Opacity: 100,
    Invert: 0,
  },
  Dreamy: {
    Brightness: 115,
    Contrast: 90,
    Saturation: 90,
    HueRotation: 0,
    Blur: 1,
    Grayscale: 0,
    Sepia: 15,
    Opacity: 95,
    Invert: 0,
  },
  Negative: {
    Brightness: 100,
    Contrast: 100,
    Saturation: 100,
    HueRotation: 0,
    Blur: 0,
    Grayscale: 0,
    Sepia: 0,
    Opacity: 100,
    Invert: 100,
  },
};

function applyPreset(presetName) {
  const preset = presets[presetName];
  if (!preset) return;

  Object.keys(preset).forEach((filterName) => {
    filters[filterName].value = preset[filterName];
  });

  filtersContainer.innerHTML = "";
  createFilters();
  applyFilters();
}

const imageCanvas = document.querySelector("#image-canvas");
const imageInput = document.querySelector("#image-input");
const canvasCtx = imageCanvas.getContext("2d");
const resetButton = document.querySelector("#reset-btn");
const downloadButton = document.querySelector("#download-btn");
const presetsContainer = document.querySelector(".presets");

let file = null;
let image = null;

const filtersContainer = document.querySelector(".filters");

function createFilterElement(name, unit = "%", value, min, max) {
  const div = document.createElement("div");
  div.classList.add("filter");

  const input = document.createElement("input");
  input.type = "range";
  input.min = min;
  input.max = max;
  input.value = value;
  input.id = name;

  const p = document.createElement("p");
  p.innerText = name;

  div.appendChild(p);
  div.appendChild(input);

  input.addEventListener("input", (event) => {
    filters[name].value = input.value;
    applyFilters();
  });

  return div;
}

function createFilters() {
  Object.keys(filters).forEach((filter) => {
    const filterElement = createFilterElement(
      filter,
      filters[filter].unit,
      filters[filter].value,
      filters[filter].min,
      filters[filter].max
    );

    filtersContainer.appendChild(filterElement);
  });
}

createFilters();

imageInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const imagePlaceholder = document.querySelector(".placeholder");
  imageCanvas.style.display = "block";
  imagePlaceholder.style.display = "none";

  const img = new Image();
  img.src = URL.createObjectURL(file);

  img.onload = () => {
    image = img;
    imageCanvas.width = img.width;
    imageCanvas.height = img.height;
    canvasCtx.drawImage(img, 0, 0);
  };
});

function applyFilters() {
  canvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
  canvasCtx.filter = `brightness(${filters.Brightness.value}${filters.Brightness.unit}) contrast(${filters.Contrast.value}${filters.Contrast.unit}) saturate(${filters.Saturation.value}${filters.Saturation.unit}) hue-rotate(${filters.HueRotation.value}${filters.HueRotation.unit}) blur(${filters.Blur.value}${filters.Blur.unit}) grayscale(${filters.Grayscale.value}${filters.Grayscale.unit}) sepia(${filters.Sepia.value}${filters.Sepia.unit}) opacity(${filters.Opacity.value}${filters.Opacity.unit}) invert(${filters.Invert.value}${filters.Invert.unit})`;
  canvasCtx.drawImage(image, 0, 0);
}

resetButton.addEventListener("click", () => {
  filters = {
    Brightness: {
      value: 100,
      min: 0,
      max: 200,
      unit: "%",
    },
    Contrast: {
      value: 100,
      min: 0,
      max: 200,
      unit: "%",
    },
    Saturation: {
      value: 100,
      min: 0,
      max: 200,
      unit: "%",
    },
    HueRotation: {
      value: 0,
      min: 0,
      max: 360,
      unit: "deg",
    },
    Blur: {
      value: 0,
      min: 0,
      max: 20,
      unit: "px",
    },
    Grayscale: {
      value: 0,
      min: 0,
      max: 100,
      unit: "%",
    },
    Sepia: {
      value: 0,
      min: 0,
      max: 100,
      unit: "%",
    },
    Opacity: {
      value: 100,
      min: 0,
      max: 100,
      unit: "%",
    },
    Invert: {
      value: 0,
      min: 0,
      max: 100,
      unit: "%",
    },
  };
  applyFilters();

  filtersContainer.innerHTML = "";
  createFilters();
});

downloadButton.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "edited-image.png";
  link.href = imageCanvas.toDataURL();
  link.click();
});

Object.keys(presets).forEach((presetName) => {
  const presetButton = document.createElement("button");
  presetButton.classList.add("btn");
  presetButton.innerText = presetName;
  presetsContainer.appendChild(presetButton);

  presetButton.addEventListener("click", () => {
    const preset = presets[presetName];

    Object.keys(preset).forEach((filterName) => {
      filters[filterName].value = preset[filterName];
    });

    applyFilters();
    filtersContainer.innerHTML = "";
    createFilters();
  });
});
