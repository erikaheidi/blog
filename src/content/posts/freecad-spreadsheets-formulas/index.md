---
title: "Using Spreadsheets and Formulas on FreeCAD"
published: 2026-02-06
description: "Learn how to use the Spreadsheet workbench and formulas in FreeCAD to create completely dynamic parametric objects that update automatically when you change values."
tags: [ 'freecad', 'tutorial', 'beginners' ]
---

One of the most powerful features of FreeCAD is its ability to create parametric designs - objects that can be dynamically updated by changing values in a spreadsheet. This technique allows you to design once and adapt your creation to different sizes and purposes without starting from scratch.

In this tutorial video, you'll learn how to use the **Spreadsheet workbench** and **formulas** in FreeCAD to create a parametric pen holder that automatically updates when you change spreadsheet values. This same technique can be applied to create any kind of container - from jewelry boxes to candy holders and desktop organizers.

## What You'll Learn

In this tutorial, we'll cover:

- How to create and use a spreadsheet to store design parameters
- How to reference spreadsheet values in your sketches using formulas
- How to create dynamic constraints that update automatically
- Best practices for creating parametric designs with proper thickness calculations
- How to add fillets that adapt to your design parameters

<iframe width="100%" height="540" src="https://www.youtube.com/embed/pwbyAbR-mwE?si=Cf-jQJ0g3tb6uqCP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Tutorial Steps

### Step 1: Create a Spreadsheet

Start by creating a spreadsheet in FreeCAD to store all the parameters for your design. We'll use:

- **Column A**: Reference labels for each parameter
- **Column B**: Values that will be used in formulas

The parameters we'll define include:
- **Width (B1)**: 60 mm - the outer width of the container
- **Height (B2)**: 40 mm - the outer height of the container  
- **Pad/Depth (B3)**: 100 mm - the depth of the container (10 cm)
- **Thickness (B4)**: 2 mm - the wall thickness

### Step 2: Create the Base Object with the Part Design Workbench

Switch to the **Part Design** workbench and create a sketch on the XY plane. This will be the outer dimensions of your container.

- Set the **width** using the formula: `spreadsheet.B1` (60 mm)
- Set the **height** using the formula: `spreadsheet.B2` (40 mm)

Once your sketch is complete, use the **Pad** tool to extrude it. For the pad dimension, use the formula: `spreadsheet.B3` (100 mm).

### Step 3: Create the Inner Pocket

Create a new sketch on the top face of your padded object. This sketch will define the inner cavity of the container.

The inner dimensions need to account for the wall thickness on both sides:

- **Inner width**: Use the formula `spreadsheet.B1 - 2 * spreadsheet.B4`  
  This subtracts the thickness from both sides (60 - 2×2 = 56 mm)
  
- **Inner height**: Use the formula `spreadsheet.B2 - 2 * spreadsheet.B4`  
  This subtracts the thickness from both sides (40 - 2×2 = 36 mm)

Next, use the **Pocket** tool to create the hollow interior. For the pocket depth, use the formula:

`spreadsheet.B3 - 2 * spreadsheet.B4`

This creates a pocket that leaves material at the bottom, ensuring consistent thickness throughout the container.

### Step 4: Add Fillets

Add **fillets** to round the corners of your container. When choosing the fillet radius, keep the wall thickness in mind - if the fillet is too large relative to the wall thickness, the object might break when you change parameters later.

### Step 5: Test the Parametric Design

Here's where the magic happens! Go back to your spreadsheet and change any of the values:

- Try changing the width to 80 mm
- Adjust the height to 50 mm  
- Modify the thickness to 3 mm

Watch as your entire container updates automatically, maintaining all the proper relationships between dimensions!

## Key Takeaways

The Spreadsheet workbench in FreeCAD is an incredibly powerful tool for creating dynamic, parametric designs. By defining your dimensions in a spreadsheet and referencing them with formulas, you can:

- **Save time**: Design once, generate multiple sizes instantly
- **Maintain consistency**: All related dimensions update together
- **Reduce errors**: Formulas ensure proper relationships between dimensions
- **Increase flexibility**: Easily adapt your design for different purposes

This technique is perfect for creating containers, organizers, holders, and any other object where you might need different sizes. Whether you're designing a pen holder, a jewelry box, or a storage container for small desktop items, the spreadsheet approach gives you maximum flexibility with minimal effort.

## Next Steps

Now that you understand how to use spreadsheets and formulas in FreeCAD, try applying this technique to your own projects. Start with simple objects and gradually incorporate more complex formulas and relationships.

For more FreeCAD tutorials, check out the other posts under the [freecad](/tags/freecad) tag!
