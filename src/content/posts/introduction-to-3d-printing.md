---
title: 'An Introduction to 3D Printing'
published: 2023-11-01
description: '3D printing refers to a variety of processes in which a computer-operated machine creates three dimensional objects by joining or solidifying material, typically layer-by-layer until the whole object is complete.'
coverImage: 
    src: 'https://cdn.erikaheidi.com/3dprinting/introduction.png'
    alt: 'Banner'
tags: [ '3d-printing', 'openscad' ]
---

## Introduction

3D printing refers to a variety of processes in which a computer-operated machine creates three-dimensional objects by joining or solidifying material, typically layer-by-layer until the whole object is complete. 3D printing is also commonly referred to as *additive manufacturing*.

Even though the early years of the technology seemed to regard 3D printing as an expensive process only suitable for aesthetical prototypes, the technology behind additive 3D printing has evolved to an impressive scale in the last few years, lowering barriers and making it more popular and affordable to end-users.

## Why 3D Printing

What first got me into 3D printing was my interest in [electronics](https://dev.to/erikaheidi/a-primer-on-basic-electronics-and-circuits-n3e). 3D printing opens up a new world to hobbyists and makers, because it lowers down the barriers around creating original prototypes. But 3D printing is not useful just for prototyping; you can use it to fix stuff in your home, to create useful tools and adapters with different materials, to decorate, and to create funny original toys for your children.

The most exciting part of it is that you can download thousands of existing models for free in sites like [Printables](https://printables.com), and you can always create your own unique designs with 3D software and even using code!

## How it Works

There are different methods of 3D printing out there, but we'll focus on FDM 3D printing because that's the most popular nowadays.

FDM stands for [Fused Deposition Modeling](https://en.wikipedia.org/wiki/Fused_filament_fabrication#Fused_deposition_modeling), which in practice means that a continuous stream of melted material (usually plastic filament) is extruded through a nozzle and is immediately solidified, fusing together with existing layers on the printing plate.

It is a slow process, but the results can be quite impressive. The following timelapse gives a better idea of how it works. This print took about 20 hours to complete on the Prusa MK3S:

{% youtube GVxVYZv7oM8 %}

## Choosing a 3D Printer

I’m not giving you advice on which printer to buy. Go check some Youtube videos, read about it, consider what you plan on doing with it. There are many vendors out there offering 3D printers at different price ranges, from a couple hundred dollars to a few thousands. That being said, for our first 3D Printer we chose the [Prusa](https://prusa3d.com) MK4 kit, and we were very happy with it. More recently, we got the newest MK4 model, and it's been a really nice upgrade.

### Kit or Assembled?

If you want something that is just "plug and play" (almost, as they usually still require some calibration anyways), you should consider buying a printer that is already assembled. They are more expensive, however you will spare a lot of time and effort into putting everything together – even with the best documentation, for beginners it's still quite hard to assemble everything right.

It is definitely possible thou, so if you want to spare some money and you are not in a hurry (meaning: you will have time and patience to assemble things carefully) you should go for the kit.

For our first printer, we chose the Prusa MK3, and I'm glad we went for the kit. Assembling the kit has taught us so much! The best thing about the kit is that it teaches you **a lot** about the machine. You'll get a better understanding of how it works, mechanically speaking. If something breaks, if something doesn’t seem right, you will be in a much better place to understand what happened, and maybe fix it. 

However, when we had the chance to upgrade to the latest model, we decided to get the pre-assembled printer to save time and have the assurance that everything is optimized for the best possible results.

## 3D Printing Filament

In order to print something with a 3D printer, you'll need 3D printing filament. These are typically sold in rolls and measured in weight (1kg rolls, 500g rolls..). There are a lot of different brands and materials, the most popular being PLA.

PLA is the most straightforward material to print. Other materials, such as ABS, can be quite difficult to print, requiring special conditions like a stable room temperature and a very hot print bed.

Another good option that prints easily and offers a much higher resistance than PLA is *PETG*. PETG is suitable for things that shouldn't break easily and stuff that must endure higher temperatures or just being exposed outdoors.

Other materials include flexible filament, copper-infused (also other metals), carbon fiber, and many more. These are typically harder to print, serving special purposes.

## 3D Printing Software

3D printing requires special software to turn the STL files we download from sites like [Printables.com](http://printables.com) into actual GCODE that is understood by your 3D printer. The process of turning an STL into GCODE is called **slicing**. A popular slicing program is [Slic3r](https://slic3r.org/), and there's also the [PrusaSlicer](https://www.prusa3d.com/prusaslicer/) for those who own Prusa printers, either original or derivative ones.

To create original models, you can use a 3D modeling software - there are many to choose from. The following timelapse shows me using Freecad to design a simple shapes toy for my girl:

{% youtube pIEu5Qta91w %}


Even more exciting is to use **code** to create 3D models. You can do that with [OpenScad](https://www.openscad.org/), an open source platform for creating solid 3D models through code. This enables you to create customizable 3D objects!

Here's a sneak peek of a simple nametag I've created with this tool:

```c
font = "Ubuntu Mono";
letter_size = 60;
padding = 20;

string = "@erikaheidi";
textlen = len(string);

box_width = letter_size*textlen*0.8;
box_height = letter_size + (2*padding);
box_thickness = 20;

start_x = 0 - (box_width / 2) + padding;
start_z = padding;

module text3d(string) {
  linear_extrude(height = box_thickness - 10) {
    text(string, size = letter_size, font = font, halign = "center", valign = "center", $fn = 64);
  }
}

module tag(width, height, thickness) {
    spacing = 20;
    difference() {
        //tag body
        linear_extrude(thickness) {
            square([width, height], center = true);
        }
        //tag hole for lanyard
        linear_extrude(thickness) {
            hole_x = 0 - width / 2 + spacing;
            hole_y = 0 - height / 2 + spacing;
            translate([hole_x, hole_y, 0]) square([15, height-spacing*2]);
        }
    }
}

difference() {
    tag(box_width, box_height, box_thickness);
    translate([0+padding, 0, start_z]) text3d(string);
}
```

Did you like what you read? Then check out my [FreeCAD for Beginners](/3D-Printing/20231109_freecad-for-beginners) post for a introduction to 3D design for printing with FreeCAD.
