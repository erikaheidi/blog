---
title: "FreeCAD Tutorial: Making Vases with the Additive Loft Tool"
published: 2026-07-09
description: "Learn how to create 3D printable vases in FreeCAD using the Additive Loft tool from the Part Design workbench, and how to slice them in vase (spiral) mode for a beautiful translucent effect."
tags: [ '3d-printing', 'tutorial', 'freecad' ]
---

In this tutorial, you'll learn how to create vases in FreeCAD using the **Additive Loft** tool from the **Part Design** workbench. This technique involves stacking multiple circular sketches at different heights and diameters, then using the Additive Loft to blend them into a smooth vase shape. The result can be sliced in **vase mode** (also known as spiral mode) for a delicate, semi-translucent print that looks beautiful when placed near a light source.

The full tutorial is available in video (below), but text instructions are included for all steps if you'd prefer to follow along by text.

<iframe width="100%" height="540" src="https://www.youtube.com/embed/bcjzdR7deJY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Step 1: Create a New Body and Base Sketch

Open FreeCAD and create a new file. Switch to the **Part Design** workbench, then:

1. Click **Create a new body**
2. Click **Create a new sketch** and select the **XY plane** as your base plane

## Step 2: Draw the Base Circle

Using the **circle tool**, draw a circle and snap it to the center of the plane (the origin point). Then:

1. Apply a **diameter constraint** and set it to **20 mm**
2. Give the constraint a **name** (for example, `BaseDiameter`) so you can reference it from other sketches later

Naming the constraint is important — it will allow you to use the base circle's diameter as a reference when defining the dimensions of the other circles, making it easier to keep proportions consistent.

Close the sketch when done.

## Step 3: Create Additional Sketches at Different Heights

The vase shape is built by stacking multiple circular sketches, each at a different height (Z position) and diameter. Repeat the following process to create as many cross-sections as you need to define your vase's profile:

1. Create a **new sketch** on the **XY plane**
2. Draw a circle centered at the origin
3. Set a diameter — you can use a fixed value or reference the base diameter with a formula (for example, `BaseDiameter * 2` for a circle twice as wide)
4. Close the sketch
5. In the **Model** view on the left sidebar, select the sketch you just created
6. In the **Properties** panel at the bottom, change the **Z** value under **Placement** to position the sketch at the desired height

Repeat this process for each cross-section of the vase. By varying the diameter and Z position of each sketch, you control the shape of your vase:

- Increase the diameter as you go up to make the vase flare outward
- Decrease it to narrow the top
- Add a smaller circle near the top to create a neck or rim

## Step 4: Apply the Additive Loft Tool

Once you are satisfied with the shape of your vase (you can always add more sketches later), it's time to loft them together:

1. In the **Model** tree, select all the sketches you created — **the order matters**. Select them from the bottom (base) to the top; the Additive Loft will connect them in the order you select
2. With all sketches selected, click the **Additive Loft** tool from the Part Design toolbar

FreeCAD will generate a smooth solid that passes through all of your circular cross-sections.

:::tip
The order in which you select the sketches directly affects the final shape. Always select them in sequence from the base upward to get a correct result.
:::

## Step 5: Slice the Vase in Vase Mode

To get the characteristic thin-wall, translucent vase effect, you need to slice your model using **vase mode** (also called **spiral mode**) in your slicer software:

1. Export the model as an STL file: **File → Export**, then select **STL Mesh**
2. Open the STL in your slicer (for example, OrcaSlicer)
3. Search for **vase** in the slicer settings and enable **Spiral Vase** (or equivalent)

With vase mode enabled, the slicer will print the object as a single continuous spiral, resulting in a very thin, semi-translucent wall. This prints quickly and looks especially beautiful with glittery or metallic filaments when placed near a light source.

## Tips for Better Results

- **Wall thickness**: If you want a more resistant vase, disable pure spiral mode and increase the wall count to 2 or more perimeters. A single-wall print is fragile but gives the best translucent effect; two walls are much sturdier.
- **Fragile angles**: Some vase shapes with sharp inward curves can be difficult to print in vase mode because of the very thin wall. Keep the profile smooth to avoid printing failures.
- **Filament choice**: Glittery or transparent filaments work best for the light effect. PLA is a great choice for vase mode prints.
- **Scale it up**: A larger vase is generally more resistant and easier to print successfully. A small sample is great for testing a new shape before committing to a bigger print.

## Conclusion

The **Additive Loft** tool is a powerful and flexible way to create organic shapes in FreeCAD. By stacking sketches at different heights and diameters, you can design almost any vase profile you can imagine. Combined with vase mode slicing, you get fast, beautiful prints that make great decorative pieces.

I hope you have enjoyed this tutorial! Check out more tutorials under the [3d-printing](/tags/3d-printing) and [freecad](/tags/freecad) tags to continue learning.
