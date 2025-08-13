---
title: From SVG to 3D Printed with Inkscape and FreeCAD
published: 2023-11-20
description: "Learn how to import an SVG file on FreeCAD and turn it into a solid shape that can be 3D printed"
tags: [ '3d printing' , 'tutorial' ]
coverImage: 
    src: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pnkf6fgdbn3mulsst28f.png'
    alt: 'banner'
---

In my [FreeCAD for Beginners](/3D-Printing/20231109_freecad-for-beginners) article, we built a pen holder using the Sketcher + Part Design workbenches. In this guide, you'll learn how to import an SVG file and transform it into a shape that can be printed or fused into a 3D model.

To pack in more useful tips, I'll also include how to create an original SVG file from a shape found on the web, using Inkscape. You can skip step 1 if you already have a simple SVG file that you plan on using, but it's useful to learn how to create your own shapes using a software like [Inkscape](https://inkscape.org/). This will give you a lot of freedom when designing your original objects.

## Step 1: Preparing the SVG file

Ideally, your SVG file should have a single shape. If your SVG has multiple shapes, or a hole inside the shape, you'll need to think through each form separately, creating the individual shapes and using the appropriate boolean operations on FreeCAD to get to the result you want. For instance, something with the form of a letter "A" would need an outside shape that would get padded, and another shape to make a pocket or a boolean operation (difference) to remove that portion from inside.

In this guide, we'll create an SVG file from scratch using Inkscape. Inkscape is a free and open source graphics software that can be used to create vectorized images and export them as SVG and other formats.

For this example, we're gonna use [Star War's Rebel Alliance logo](https://en.wikipedia.org/wiki/Rebel_Alliance), because it's a rather simple shape and of course also because it's pretty cool:

![Star Wars Rebel Alliance Logo. source: Wikipedia](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yas6yt3bmsrinl2onqow.png)

_Source: Wikipedia_

Download the PNG file and open it with Inkscape. In the left tool bar, you'll find the vector tool. It's the one right below the pencil. Use it to draw a vector over the shape:

![Step 1: Start drawing a vector over the shape](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ou6th9jalqqik9q70n4a.gif)

After the initial shape is done, you will probably need to adjust some things. Use the node selection tool (the second tool from top to bottom) to adjust the shape to look more like the original.

![Step 2: Adjust the shape to match the original](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0hr4eibjbf84z59m9t7c.gif)

Once you're satisfied, delete the base PNG shape and set the fill color of your vectorized shape to black or any other color. Then, save the file as SVG.

![Step 3: Save the SVG file](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ujd6s3nv68ekudcdook9.gif)


Can't get the shape right? No worries, vectorizing can be tricky if you are not used to it (but totally worth practicing). You can create a simpler shape using the geometric tools on the left (a square or a circle, for instance, if you just want to practice), or you can [download my own SVG version of this logo in this link](https://erikaheidi.ams3.digitaloceanspaces.com/design3d/rebel_aliance_logo_by_erika.svg). Disclaimer: it's not perfect.


## Step 2: Importing SVG on FreeCAD

Now, let's go to FreeCAD. To get started, you'll need to open the pen holder source file that we created in the previous tutorial of this series. In case you don't have that file available to you now, you can [download this FreeCAD project file](https://erikaheidi.ams3.digitaloceanspaces.com/design3d/freecad_penholder_v01.zip) containing the base penholder object and get started from there. When prompted, select "SVG as Geometry (ImportSVG)" in the dialog box that will appear.

![importing the svg file into FreeCAD](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ou5ko4klo0ohneodz11l.gif)


This shape is not an actual solid yet on FreeCAD; it is just a path. We'll now move to the "Draft" workbench, where we can turn this path into a sketch. First, we'll use the "Upgrade Shape" tool, which looks like an arrow pointing upwards.

![Moving to the Draft Workbench and Upgrading shape](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yp7wjv6ase23cd7ad1d2.gif)

Then, we'll transform this path into a sketch, using the "Draft to Sketch" tool. This tool has an icon with red and blue shapes.

![Converting draft to sketch](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/idlootpa25ssvgk3zk19.gif)

You'll notice that a new sketch was created. This sketch's path might not coincide with the positioning of the original path, and that's OK, we'll move it around once we have a solid part. Working with this shape in a separate body will be an easier approach, then we can fuse both parts together later on.

We'll create a new body, using the "Create New Body" icon on the top tool bar (Part Design Workbench) and move this sketch to it.

![creating a new body](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rwp0rlynzn5z3ajikuve.gif)

Then, we'll use the "Pad" tool from the top tool bar to pad this sketch into a solid.

![Using the Pad tool](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/73trzwc6ut4f8jpuo298.gif)

You now have a solid shape that is already printable. Next, we'll adjust the size and positioning so that we can "glue" this shape on the existing pencil holder.

## Step 3: Adjusting Position and Size

Finally, we need to adjust the position and size of the logo so that it fits the external wall of the pen holder. Repositioning and resizing on FreeCAD sometimes can be tricky, so I typically use a combination of different methods to reach the positioning I want. For this example, I used all of these:

### Manually Configuring Placement

You can set the placement of an object using the "Placement" dialog that can be accessed by selecting the object, then going to the left bottom panel where you find the object settings including positioning.

In the dialog window that opens up, you can make rotations to the object around the various axis. In my case, I only wanted to move the orientation so that the logo was in the same orientation as the pen holder walls. I changed the X axis to -90 ant that gave me what I wanted.

![Manually moving the logo via object settings - placement](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uin2dv62o0onkwd7jqo2.gif)

### Resizing a Shape in the Draft Workbench

The easiest way I found to resize a shape is to go to the Draft workbench, and use the "Resize" tool. This will in fact generate a clone shape that is a solid and you can use in boolean operations (essentially, what we want). To use that tool, first select the object, than go to the menu "Modification -> Resize". Click on the object again when asked, then a new dialog will show the proportions. Here, I resized to 0,3 (33% or the original size).

![Resizing a shape in the Draft Workbench](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hsh2y7z5hifntj0auz9t.gif)

Once the clone is created, you can use the "Transform" tool to move and position the logo exactly how you want it.

### Visual Repositioning via "Transform"

The "transform" tool allows you to move shapes more visually, using a set of arrows that represent all axis. Double-click the shape to access the "transform" controls. You can also move a whole body with the transform tool, by right-clicking the body name at the project list, and clicking on "transform" on the menu that will show up.

![Using the Transform tool](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1fv7niax3m41pc6lwg7s.gif)

## Step 4: Fusing Shapes in the Part Workbench

We have our model almost ready now, the only thing left to do is to fuse both parts together. Go to the "Part" Workbench, select the first body (pen holder base) and the cloned, resized version of the logo (it should have an icon that looks like a sheep). Select the "Union" button on the workbench tool bar on the top (the icon looks like two blue circles). Hit "apply" to confirm, and you'll have now the finished model (fusion resulting object).

![Fusing Shapes in the Part Workbench](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pbvt702ul0e6wh3sgkor.gif)

## Printing the Model

You can now export this model to STL and slice it for 3D printing. To export, select the "fusion..." object that was generated in the final step, then go to "File -> Export". Select STL and save the file. You can now open this file with a slicing software.

This is the final result as printed with our Prusa MK3S:

![Final result after 3D Printed](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kh47270dkptz4plmmzl3.jpg)

### Print Specs

- 0.20mm layer height
- 10% infill
- Filament: Prusament PLA (Galaxy Black)
- No supports, no brim

If all you want is the final STL file to print, you can [download this model for free on my Printables profile](https://www.printables.com/model/439574-star-wars-rebel-aliance-pen-holder).


