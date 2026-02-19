---
title: 'Turning an SVG into a 3D Printed Object with FreeCAD'
published: 2026-02-19
description: 'Learn how to import an SVG file into FreeCAD, convert it to a sketch, and pad it into a 3D printable model ready for printing.'
tags: [ '3d-printing', 'tutorial', 'freecad' ]
draft: false
---

Have you ever wanted to turn a simple logo or icon into a physical 3D-printed object? In this tutorial, you'll learn how to import an SVG file into FreeCAD and convert it into a 3D model ready for printing. This is a great technique for creating custom keychains, decorations, or branded items from any vector artwork you have on hand.

We'll use the **Draft**, **Part Design**, and **Sketcher** workbenches in FreeCAD, and the whole process is surprisingly straightforward once you know the steps. Both the video and step-by-step text instructions are provided below so you can follow along whichever way you prefer.

<iframe width="100%" height="540" src="https://www.youtube.com/embed/0FWJAbgwDs0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Step 1: Find or Prepare a Suitable SVG File

The first step is to choose an appropriate SVG file. Not all SVGs work equally well for this workflow, so keep the following tips in mind:

- **Use a simple, filled shape**: SVGs with closed wires and filled areas are the easiest to work with.
- **Avoid overly complex paths**: More complex SVGs may require working in layers or handling multiple paths separately.
- **Empty spaces become pockets**: If your SVG has hollow areas (like letters or cut-out designs), those will become pockets in the final 3D model.

A great free resource for SVG files is [SVG Repo](https://www.svgrepo.com), which offers a large collection of free SVG icons. For this tutorial, a simple flower icon is used as an example.

:::tip
If you are designing your own SVG, it is recommended to use **Inkscape** to ensure compatibility with FreeCAD's import process.
:::

## Step 2: Import the SVG as Geometry in FreeCAD

With your SVG file ready, open FreeCAD and import it:

1. Go to **File → Import**.
2. Select your SVG file.
3. A dialogue will appear asking how to open the file. Choose **"SVG as geometry"** — NOT "image formats".
   - "Image formats" imports it as a flat picture for tracing over; "SVG as geometry" imports the actual paths so you can work with them directly.
4. Click **OK**. FreeCAD may warn that the file was not created with Inkscape — this is fine, just click OK to dismiss the warning.

You should now see the raw lines/paths of your SVG in the 3D viewport.

## Step 3: Convert the Paths to a Sketch Using the Draft Workbench

The imported SVG consists of draft paths, which cannot be padded directly into a 3D object. You need to convert them into a sketch first:

1. Switch to the **Draft workbench**.
2. Select all the paths that make up your SVG shape (hold Shift or Ctrl to select multiple).
3. Click the **"Draft to Sketch"** button in the toolbar (it converts draft objects into a Sketcher sketch).
4. You should now see a new **Sketch** object appear in the model tree on the left sidebar.
5. Hide the original draft paths by selecting them and pressing the **Space bar** — this keeps your workspace clean.

## Step 4: Set Up the Part Design Workbench and Move the Sketch into a Body

FreeCAD's Part Design workbench requires geometry to be inside an active **Body**. Since the imported sketch was created outside of one, you need to move it:

1. Switch to the **Part Design workbench**.
2. Create a new **Body** by clicking the "Create body" button.
3. In the model tree, click and drag the **Sketch** into the new Body (or right-click and use the move option).
4. The sketch must be inside the body to work with Part Design tools.

If you open the sketch, you'll see all the paths exactly as they appeared in the original SVG file.

:::note
There is no need to fully constrain this sketch unless you are working on something that requires precision. For a simple decoration or keychain, leaving it unconstrained is perfectly fine.
:::

## Step 5: Pad the Sketch into a 3D Object

Now comes the fun part — turning the flat sketch into a 3D shape:

1. Select the **Sketch** in the model tree.
2. Click the **Pad** tool.
3. Set a pad height — for example, **10 mm (1 cm)** is a good starting point.
4. Click **OK**.

Your SVG is now a 3D solid object! Don't worry too much about the exact dimensions here, because the SVG may import at a very large scale. You can easily **resize the model in your slicer software** (like PrusaSlicer or Bambu Studio) rather than adjusting the sketch in FreeCAD.

## Step 6: (Optional) Add a Hole for a Keychain

If you want to turn your model into a keychain, you can add a hole through the top of the object:

1. Click on the **top face** of your padded model to select it.
2. Create a **new Sketch** on that face.
3. Draw a small **circle** where you'd like the keychain hole to go.
4. Close the sketch.
5. Select the **Pocket** tool.
6. Choose **"Through All"** as the type so the hole goes completely through the object.
7. Click **OK**.

You now have a hole you can thread a keychain ring through!

## Step 7: Export the Model as an STL File

To prepare the model for 3D printing:

1. Make sure your model (body/object) is selected in the model tree.
2. Go to **File → Export**.
3. Enter a filename and select **STL Mesh** as the file format.
4. Click **OK** to save the file.

## Step 8: Slice and Print

Import the STL file into your slicer software of choice:

1. Open your slicer (e.g., PrusaSlicer, Bambu Studio, Cura).
2. Import the STL file — it will likely appear very large.
3. **Resize the model** to a suitable size. For a keychain, reducing it to **50% or less** of the original is often a good starting point.
4. Adjust print settings as needed.
5. Slice the model and send it to your printer.

## Conclusion

Turning an SVG into a 3D printable model in FreeCAD is a remarkably quick and accessible workflow once you know the steps. From importing the SVG as geometry, converting it to a sketch, and padding it into a solid, you can go from a flat vector image to a physical printed object in just a few minutes. This technique opens up a world of possibilities — from custom keychains and badges to branded decorations and beyond. Try it with your own logos or icons and see what you can create!
