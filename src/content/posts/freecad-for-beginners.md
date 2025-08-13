---
title: FreeCAD for Beginners
published: 2023-11-15
description: "In this introduction to 3D design with FreeCAD, learn how to navigate the interface and use the Part Design workbench to create a simple pen holder for 3D printing."
tags: [ '3d printing', 'tutorial' ]
coverImage: 
    src: 'https://cdn.erikaheidi.com/3dprinting/freecad-for-beginners.png'
    alt: 'banner'
---

As the name suggests, [FreeCad](https://www.freecadweb.org/) is a free CAD software, a parametric modeler that can be used to design 3D objects for printing. It is available for Linux, Mac, and Windows users.

In this introduction to 3D design with FreeCAD, you'll learn the basics about the software, some important concepts, and how to navigate the user interface. Then, we'll see step-by-step how to use the Part Design + Sketcher workbenches to create a simple pen holder that can be 3D printed.

If you want to follow along, now is a good time to [get FreeCad installed](https://www.freecadweb.org/downloads.php) on your computer before moving ahead.

## Navigation

FreeCad has a very "raw" interface in my opinion, it can be hard to figure out things on your own as it happens with other software you might be used to work with.

In any case, once you get familiar with the general concepts of how to work with the interface and manipulate planes and perspectives, you'll be in a much better position to explore the available workbenches and experiment with different methods of designing objects.

### Creating a New Model

To experiment with the interface, you can create a new model in File -> New, then open the **Part** workbench and click on the Cube icon to create a new solid cube.

![Creating a new model on FreeCAD](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wgzsiab0ijsy2b9r2i4y.gif)

Then, adjust the navigation style at the bottom right of the screen. The **Touchpad** navigation style is what I use and recommend: 

![Changing navigation style on FreeCAD](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g5xc91rzvorqon37q1en.gif)

### Navigating XYZ

When designing 3D models, one of the most important things to get used to at first is the Z axis, and how to navigate different perspectives.

Most of us are familiar with X and Y, but when designing 3D objects you'll work with a third axis: Z. You'll typically work from a top view of the object you're designing; Z in this case is the axis that represents the depth of the object. In many cases, Z might simply represent the extrusion width. Wait - what is an extrusion? We'll get there in a moment.

![Navigating XYZ axis on FreeCAD](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/18wheg9ubrdv2kohyyva.gif)

On FreeCad, you can see the axis position on the bottom right of the screen, and the top right shows a cube with a more user-friendly view of the same information.

Here are the two most important controls, using the Touchpad navigation style:

- `SHIFT` + Mouse move: Move the object on the screen without changing the perspective.
- `SHIFT` + `LEFT CLICK` + Mouse move. This will move the object freely across different axis. Like you're handling the object in front of you with one hand.

Additionally, the zoom controls are:

- Zoom In: `SHIFT` + `CTRL` + `+` key, or `SHIFT` + `CTRL` + Mouse move.
- Zoom Out: `CTRL` + `-` key, or `SHIFT` + `CTRL` + Mouse move.

If you "lose" the object, you may use the magnifying glass icon on the top left, and that will fit the whole content on the screen.

### Working with Perspectives

In most 3D design applications, you'll work with different perspectives that are exhibited in the screen as a 2D image, representing different possible combinations of X, Y, and Z. Depending on the software you use, there might be different shortcuts for accessing default perspectives. Freecad has some convenient perspective buttons you can use to see an object from all sides:

![Changing Perspective of objects on FreeCAD](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kz4tstp38gvxikrs0lpj.gif)

### Navigating through Workbenches

Workbenches provide different tools that are grouped to target different design workflows. Some workflows may require the use of multiple workbenches. As an example, the Sketcher workbench is typically used with the Part Design workbench to create parts based on a 2D sketch.

To navigate to a different workbench, you may use the workbench select menu on the top of the screen. You'll see that the menu tools will change depending on the workbench selected:

![Navigating through Workbenches on FreeCAD](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7ufqicc6uk89w5ufwtfl.gif)

### Saving an STL file

To save a model as an STL file that you can slice and print with a 3D printer, you first need to select the object you want to export, from the "Model" view on the left navigation sidebar, and then go to File -> Export menu. Make sure to select "STL Mesh" on the file type.

![Saving an STL file on FreeCAD](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/soioip6m1301vnu7g96v.gif)

## Working with the Sketcher + Part Design Workbenches
Sketcher and Part Design are two [FreeCAD workbenches](https://wiki.freecadweb.org/Workbenches) that work closely together, typically used to turn 2D geometries into 3D models. In a nutshell, through the Sketcher workbench you create the blueprints of parts that are manipulated through the Part Design workbench.

We'll now see how to use the Sketcher and Part Design workbenches to create a minimalist pen holder model that you can print with a 3D printer.

Before continuing, it is important that you have FreeCAD installed on your machine, and that you are familiar with how to navigate the interface.

### Step 1: Create a new project, then move to the Part Design workbench

Create a new project, then select the "Part Design" workbench on the workbench selection box.

![Part Design Workbench - FreeCAD for beginners](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/03etxhvkffjvo54ixsnc.gif)

### Step 2: Create a new body, and then create a new Sketch. Choose XY as base plane.

You can use the shortcuts on the left sidebar to create a new body, and then create a new sketch on that body. When creating the sketch, select the XY_Plane.

![Creating a new Body on FreeCAD](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2lm08h4rsfa20kl7y44r.gif)

### Step 3: Select the square/rectangle tool, then create a rectangle at the center of the canvas.

Don't worry about the size now, we'll set up constraints in the next step.

![Creating a rectangle shape on FreeCAD](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wsqj7jsm82hxj3iei8m4.gif)

### Step 4: Select the width constraint, then set the size of 60mm. Select the height constraint, then set the height of 40mm.

Constraints allow you to specify a set of rules that can be applied to points, lines, and angles. For this example, we'll use the width and height constraints to limit the size of the rectangle that serves as base for our model.

### Step 5: Select the pad tool and pad to the height of 100mm.

Close the sketch. This will bring you back to the Part Design workbench, automatically. You can then select the pad tool, setting the type to Dimension and the height to 100mm. Click  "ok" to confirm.

![Padding the Sketch on FreeCAD](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4v0k2d44mcror4b85kr1.gif)

### Step 6: Create a datum plane using the top face of the pad as reference.

Use the "top view" button to make sure you're looking to the object from the top. Select the top face of the pad, then select the "Datum Plane" tool to create a new datum plane using that face as reference. This will serve as base for a new sketch.

![Creating a Datum Plane on FreeCAD](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lbhqchkdqklm4y3391ba.gif)

### Step 7: Create a new sketch based on that datum plane.

Create a new sketch and make sure to select the new DatumPlane as reference.

![Creating a new sketch on top of a Datum Plane](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/49d20b39nabxh296ibp1.gif)

Optional: hide the datum plane by selecting it and hitting the space bar on your keyboard.

### Step 8: Create a rectangle form slightly smaller than the first one, using the constraints of 50mm and 30mm for width and height, respectively.

![Creating a new rectangle](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tfkkb8s3h7r7c4i5hpgz.gif)

### Step 9: Use the pocket tool to hollow the model.

Close the sketch, and you will be brought back to the Part Design workbench. Then, use the pocket tool instead of pad - this time we want to create a pocket to make the model hollow. Select the "Dimension" type and the length of 80mm.

![Creating a pocket in the model](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0lrtn9ldzuodrq3z3iov.gif)

### Step 10: Use the fillet tool to round the edges slightly.

Select one of the faces of the model, then select the "Fillet" tool. Click on the "add ref" button to add all external faces, one by one. Rotate the model and add the other faces. You can use the radios of 1mm for a discrete effect. When you're done, click the "OK" button.

![Using the fillet tool to round edges on FreeCAD](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zctca7gpiqlku5lmmi84.gif)

And it is done! If you want to print this model, you can export it through the menu `File -> Export`, then choose the **STL** format. You can then import the STL to a slicer software to get it ready for printing.

This model is functional as is, but we might want to add some details to the sides to make it more attractive. Check my [From SVG to 3D Printed](/3D-Printing/20231109_from-svg-to-3dprinted-with-freecad) post for a step-by-step process on how to create a custom SVG on Inkscape and import it on FreeCAD to turn it into a printable shape.

