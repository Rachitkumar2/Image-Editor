# 🖼️ Image Editor

A lightweight, browser-based image editor built with vanilla HTML, CSS, and JavaScript. Apply filters and presets to your images with real-time preview and download the edited result.

🔗 **Live Demo:** [https://image-editor-pied-six.vercel.app/](https://image-editor-pied-six.vercel.app/)

## ✨ Features

- **Image Upload** - Select any image from your device
- **Real-time Filters** - Apply and adjust filters with instant preview
- **Preset Effects** - One-click professional-looking presets
- **Download** - Save your edited image as PNG
- **Reset** - Quickly restore original image settings
- **Dark Theme** - Modern dark UI design

## 🎨 Available Filters

| Filter | Range | Description |
|--------|-------|-------------|
| Brightness | 0-200% | Adjust image brightness |
| Contrast | 0-200% | Modify contrast levels |
| Saturation | 0-200% | Control color saturation |
| Hue Rotation | 0-360° | Rotate color hue |
| Blur | 0-20px | Apply gaussian blur |
| Grayscale | 0-100% | Convert to grayscale |
| Sepia | 0-100% | Apply sepia tone |
| Opacity | 0-100% | Adjust transparency |
| Invert | 0-100% | Invert colors |

## 🎭 Preset Effects

Choose from 12 built-in presets for quick styling:

- **Vintage** - Warm, nostalgic look with sepia tones
- **Drama** - High contrast and saturation
- **OldSchool** - Classic faded photograph effect
- **BlackAndWhite** - Full grayscale conversion
- **Warm** - Cozy warm color temperature
- **Cool** - Cold blue-tinted appearance
- **Fade** - Soft, washed-out aesthetic
- **Cinematic** - Movie-like color grading
- **Vibrant** - Boosted colors and saturation
- **Moody** - Dark and atmospheric
- **Dreamy** - Soft blur with warm tones
- **Negative** - Inverted color effect

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone or download this repository:
   ```bash
   git clone https://github.com/yourusername/image-editor.git
   ```

2. Open `index.html` in your web browser

That's it! No build tools or dependencies required.

## 📁 Project Structure

```
Image Editor/
├── index.html      # Main HTML structure
├── script.js       # Core functionality and filters logic
├── style.css       # Layout and component styles
├── theme.css       # CSS variables for theming
└── README.md       # Documentation
```

## 🛠️ How It Works

1. **Upload Image** - Click "Choose Image" to select a file from your device
2. **Apply Filters** - Use the sliders on the right panel to adjust individual filters
3. **Use Presets** - Click any preset button for instant effects
4. **Reset** - Click "Reset" to restore all filters to default values
5. **Download** - Click "Download" to save your edited image as PNG

## 💻 Technical Details

- Uses HTML5 Canvas API for image manipulation
- CSS filter property for real-time effects
- No external JavaScript libraries required
- Uses [Remix Icon](https://remixicon.com/) for icons
- CSS custom properties (variables) for easy theming

## 🎨 Customization

### Adding New Presets

Add new presets in `script.js` by extending the `presets` object:

```javascript
const presets = {
  // ... existing presets
  MyCustomPreset: {
    Brightness: 100,
    Contrast: 100,
    Saturation: 100,
    HueRotation: 0,
    Blur: 0,
    Grayscale: 0,
    Sepia: 0,
    Opacity: 100,
    Invert: 0,
  },
};
```

### Changing Theme Colors

Edit `theme.css` to customize the color scheme:

```css
:root {
  --bg-primary-color: rgb(17, 17, 17);
  --bg-secondary-color: rgb(34, 34, 34);
  --text-primary-color: rgb(237, 237, 237);
  /* ... other variables */
}
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!


