---
title: "FreeCAD Tutorial: Design a Fully Constrained Heart"
published: 2026-02-13
description: "Learn how to design a fully constrained 3D heart on FreeCAD using the Part Design and Sketcher workbenches, perfect for Valentine's Day!"
tags: [ '3d-printing', 'tutorial', 'freecad' ]
---

Valentine's Day is just around the corner, and what better way to celebrate than learning how to design a heart on FreeCAD? In this tutorial, you'll learn how to use arcs and constraints to create a fully constrained heart design that you can later pad into a 3D model and print with your 3D printer.

This tutorial focuses on the **Sketcher** and **Part Design** workbenches, and it's a great exercise to learn how to work with arcs, constraints, and degrees of freedom (DoF) on FreeCAD.

The full tutorial is available in video (below), but text instructions are included in the article for all steps, if you'd prefer to follow along by text.

<iframe width="100%" height="540" src="https://www.youtube.com/embed/V-9S-ViKqs8?si=ml-LoR9Lnceu0nI1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Step 1: Create a New Project and Set Up the Part Design Workbench

First, make sure you are in the **Part Design** workbench. You can select "Create a parametric part" on the starting page.

Create a new body by clicking on the "Create body" button, and then create a new sketch. You can also use the helper tools on the sidebar on the left. When prompted, select the **XY plane** as the base for your sketch.

## Step 2: Create the Top Arcs Using the Arc by Three Points Tool

Now we'll create the top part of the heart using arcs. We'll use the X axis as a reference point to create symmetric arcs.

Select the **arc tool** from the toolbar. Instead of using "Create arc by center", choose **"Create arc by three points"**. This method is often easier to work with.

### Left Arc

1. Select the left point at the X axis (0,0 point)
2. Select a point to the right (this will be on the X axis as well)
3. Move your cursor up to define the arc's height
4. Make sure the arc connects to the X axis - you'll see a small indicator showing the point is constrained to the axis

### Right Arc

Repeat the same process for the right side:

1. Start at the origin (0,0 point)
2. Select a point to the right on the X axis
3. Define the arc's height
4. Ensure it connects to the X axis

Don't worry about the exact size at this point - we'll use constraints to set precise dimensions.

## Step 3: Set Radius Constraints for the Top Arcs

Now let's set the radius for both arcs to make them equal in size.

1. Select the first arc
2. Go to **Constraint** → **Auto radius diameter**
3. Set the radius to **16 mm**
4. Repeat for the second arc, also setting it to **16 mm**

You'll notice the "Solver Messages" showing that we still have degrees of freedom, meaning the sketch can still move.

## Step 4: Constrain Arc Centers to the X Axis

To make sure the arcs stay in place, we need to constrain their centers to the X axis.

### Left Arc Center

1. Select the center point of the left arc
2. Hold and also select the X axis line
3. Apply the **Coincident constraint** (this makes the center "glued" to the X axis)

### Right Arc Center

Repeat the same process for the right arc's center point.

Now the sketch should be more stable, with only one degree of freedom remaining.

## Step 5: Create the Bottom Arc

The bottom of the heart will also be created using arcs. We'll use the same "Create arc by three points" tool.

### Left Bottom Arc

1. Select the left arc's bottom point as the starting point
2. Connect to a point on the Y axis (this will create the center point of the heart)
3. Define a slight curve for the bottom

### Right Bottom Arc

1. Select the right arc's bottom point
2. Connect to the same center point on the Y axis
3. Create a matching curve

## Step 6: Set Radius Constraints for the Bottom Arcs

Apply the same radius to both bottom arcs to keep them symmetrical:

1. Select the first bottom arc
2. Go to **Constraint** → **Auto radius diameter**
3. Set the radius to **54 mm**
4. Repeat for the second bottom arc, also setting it to **54 mm**

## Step 7: Set the Vertical Distance for the Bottom Point

We still have one degree of freedom - the heart's bottom point can move up and down. Let's fix this by setting a vertical distance constraint.

1. Select the bottom point of the heart (the point on the Y axis)
2. Also select the origin point (0,0)
3. Apply a **Vertical distance** constraint
4. Set the distance to **40 mm**

Your sketch should now be **fully constrained**! The Solver Messages should display "Fully constrained" and all lines should turn green.

## Step 8: Pad the Heart into a 3D Model

Now that you have a fully constrained sketch, you can turn it into a 3D object:

1. Close the sketch (this returns you to the Part Design workbench)
2. Select the **Pad** tool
3. Set the dimension to **10 mm** (1 cm)
4. Click OK

And there you have it - a 3D heart model ready for Valentine's Day!

## Tips and Variations

- You can adjust the radius values and vertical distance to create hearts with different proportions
- Try using different pad heights to create hearts of varying thickness
- Use the Fillet tool to round the edges for a smoother look
- Export the model as an STL file (**File** → **Export** → **STL Mesh**) to 3D print your heart!

## Conclusion

Creating a fully constrained heart on FreeCAD is a great exercise to practice working with arcs, constraints, and the Sketcher workbench. The key concepts you learned here - using reference points, setting constraints, and managing degrees of freedom - are fundamental skills that you'll use in more complex FreeCAD projects.

I hope you enjoyed this tutorial, specially made for Valentine's Day! Check out more tutorials under the [3d-printing](/tags/3d-printing) and [freecad](/tags/freecad) tags to continue learning!
