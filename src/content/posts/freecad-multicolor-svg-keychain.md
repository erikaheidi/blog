---
title: 'FreeCAD Tutorial: Create a Multicolor SVG Keychain'
published: 2026-03-05
description: 'Learn how to design a multicolor 3D printed keychain from an SVG in FreeCAD using layer height color changes — no multi-material setup needed.'
tags: [ '3d-printing', 'tutorial', 'freecad' ]
draft: false
---

Have you ever wanted to create a multicolor 3D print from a vector logo? In this tutorial, you'll learn how to use FreeCAD to design a multicolor keychain by working with SVG paths at different layer heights — a technique that allows you to achieve stunning color changes with a single-extrusion printer. We'll use the FreeCAD logo as an example, but the same approach works with any SVG file.

This tutorial covers the **Draft** and **Part Design** workbenches in FreeCAD, and walks you through everything from importing an SVG to slicing the model with color change instructions. Text instructions are included below if you'd prefer to follow along without watching the video.

<iframe width="100%" height="540" src="https://www.youtube.com/embed/zoGs2wc85_I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Step 1: Get a Suitable SVG File

The first step is to find or prepare an SVG file whose different path elements can serve as separate color layers.

For this tutorial, we'll use the **FreeCAD logo**, which is freely available on Wikipedia:

1. Search for the FreeCAD logo on Wikipedia
2. Click the download link and select **full resolution**
3. Download the full SVG file to your computer

> **Tip:** Look for SVG files where different visual areas are represented as separate paths — this makes it much easier to assign different heights per color zone.

## Step 2: Import the SVG into FreeCAD

1. Create a **new file** in FreeCAD
2. Go to **File → Import**
3. Select your SVG file
4. When prompted, mark the SVG as **geometry** (not as drawing)
5. Click **Yes** when asked about DPI settings

The full logo will appear in the viewport.

## Step 3: Clean Up the SVG Paths

The imported SVG may include elements you don't need, such as text or surrounding rectangles. Remove these to keep only the paths you'll be working with:

1. Inspect the imported elements in the model tree
2. Select and **delete** any paths that correspond to text or unwanted areas (e.g., the letters and the surrounding rectangle in the FreeCAD logo)
3. Keep only the paths that represent the visual areas you want to use as distinct color layers

After cleanup, you should have the core logo shape split into its individual paths.

## Step 4: Plan Your Layer Heights

Before converting paths to sketches, think about which parts will be printed at which height — and in which order. Each path will become a separate pad, and the height difference between pads determines where color changes happen.

For the FreeCAD logo keychain, the layer plan is:

| Path | Height | Color |
|------|--------|-------|
| Cog (background gear shape) | 2 mm | Light blue (first filament) |
| Base shape | 4 mm | Red |
| Path one (border detail) | 5 mm | Red (same filament) |
| F letter | 6 mm | White (last filament) |

> **Important:** Work with connected parts together. If two paths are adjacent (touching), convert and pad them in the same session to avoid errors in FreeCAD.

## Step 5: Convert Paths to Sketches and Create Bodies

For each path, you'll need to convert it from a draft object into a proper sketch, then place it inside a body and pad it.

### 5.1 Switch to the Draft Workbench

1. Switch to the **Draft** workbench
2. Select the path you want to work with first

### 5.2 Convert Path to Sketch

1. Go to **Modification → Draft to Sketch** (or find the button in the toolbar)
2. FreeCAD will generate a sketch from the selected path

### 5.3 Create a Body and Add the Sketch

1. Create a **new Body** (Part Design workbench → Create body)
2. **Move the sketch** into the newly created body (drag it in the model tree)

### 5.4 Pad the Sketch

1. With the sketch inside the body, switch to **Part Design**
2. Select the sketch and click **Pad**
3. Set the desired height (e.g., **4 mm** for the base shape)
4. Click **OK**
5. Hide the original path to keep the workspace clean

Repeat this process for each path, using the heights defined in your layer plan:

- **Cog path** → 2 mm
- **Base path** → 4 mm
- **Path one (border)** → 5 mm
- **F letter** → 6 mm

## Step 6: Add a Keychain Hole

To turn the model into a keychain, add a small hole:

1. Select the **top face** of the model where you want the hole
2. Create a **new Sketch** on that face
3. Use the **Circle tool** to draw a small circle (position it near the top edge)
4. Close the sketch
5. Use **Pocket → Through All** to cut the hole completely through the model

## Step 7: Export as STL

1. Select **all bodies** in the model tree
2. Go to **File → Export**
3. Choose **STL Mesh** format
4. Save the file

## Step 8: Slice with Color Changes in Prusa Slicer

1. Open **Prusa Slicer** and import the exported STL
2. The model may appear very large — **resize it** (e.g., to 40% of original size) to make a practical keychain
3. Prusa Slicer may automatically detect color changes. Look for the prompt: *"Slicer object looks like a logo or sign — apply color change automatically?"* and click **Yes**

### 8.1 Adjust Color Changes

The automatic detection may add more color changes than you need. To fine-tune:

1. Review the color change markers on the layer slider
2. Remove any unwanted changes by moving to the layer where the change occurs and clicking the **X** button next to the marker
3. For this keychain, keep only **two color changes** (three colors total)

### 8.2 Preview Colors

You can assign preview colors to each segment to visualize the final result:

- First color: **Light blue** (cog background)
- Second color: **Red** (main logo body)
- Third color: **White** (F letter)

### 8.3 Enable Ironing for a Smooth Finish

For the best surface quality on the top layers:

1. Go to **Print Settings → Infill**
2. Enable **Ironing** (surface ironing)
3. This will make the top layers very smooth, similar to the finished keychain shown at the start of the video

> **Note:** Ironing increases print time (roughly 3×), but the result is a polished, professional-looking surface that's especially effective for logo keychains.

## Conclusion

Creating a multicolor keychain from an SVG in FreeCAD is a great way to combine vector design skills with 3D printing. By assigning different pad heights to different SVG paths, you control exactly where color changes happen — no multi-material setup required. Once you've mastered this technique with the FreeCAD logo, try it with your own SVG artwork! Check out more tutorials under the [3d-printing](/tags/3d-printing) and [freecad](/tags/freecad) tags to keep learning.
