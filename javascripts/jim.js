/*
 *  tijapi: Tiny ImageJ API in JavaScript
 *  Copyright (C) 2017  Jean-Christophe Taveau.
 *
 *  This file is part of tijapi
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with tijapi.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 * Authors:
 * Jean-Christophe Taveau
 */

function About(the_id) {

  let content = `
  <fieldset>
  <legend>New Image...</legend>
  <label for="text_1">Name:</label>
  <input id = "text_1" type="text" value="Untitled"><br>
  <label for="type">Type:</label>
  <select id="type">
    <option value="8-bit" selected>8-bit</option>
    <option value="16-bit" >16-bit</option>
    <option value="32-bit">32-bit</option>
    <option value="RGB">RGB</option>
  </select><br>
  <label for="fill_with">Fill with:</label>
  <select id="fill_with">
    <option value="Black" selected>Black</option>
    <option value="White" >White</option>
    <option value="Ramp">Ramp</option>
    <option value="Random">Random</option>
    <option value="Chessboard">Chessboard</option>
  </select><br>
  <label>Width:</label>
  <input type="text" value="128" size="6"> pixels <br>
  <label>Height:</label>
  <input type="text" value="128" size="6"> pixels<br>
  <label>Slices:</label>
  <input type="text" value="1" size="6"><br>
  <footer>
  <button>Cancel</button>
  <button>OK</button>
  </footer>
  </fieldset>
  `;

  this.element = document.getElementById(the_id);

  /**
  * Handle various event types
   * @param event - The DOM event
  **/
  this.handleEvent = function(event) {
      switch(event.type) {
      case 'click':
          // TODO: Display modal window
          var popup = new Modal({
              headerTitle : "About JIM...",
              headerImage : "url('images/headprot.jpg')",
              body  : content
          });

          break;
      case 'dblclick':
          // some code here...
          break;
      }
  };

  // Note that the listeners in this case are this, not this.handleEvent
  this.element.addEventListener('click', this, false);

};

/*
 *  tijapi: Tiny ImageJ API in JavaScript
 *  Copyright (C) 2017  Jean-Christophe Taveau.
 *
 *  This file is part of tijapi
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with tijapi.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 * Authors:
 * Jean-Christophe Taveau
 */


 "use strict";


 window.onload = function() {

   function clickOn(id,action) {
     let el = document.getElementById(id);

     // Add the action to the mouse click
     el.addEventListener('click',action,false);
   }


  // 1- "File",
  // 1-1- "New",
  // 1-1-1-"Image...",
  clickOn('new_image',function() {
    console.log('click on...');
    console.log(this);
    // Build Dialog Box from ui

  });
  
  // 1-1-2-"Hyperstack...",
  // 1-1-3-"Text Window",
  // 1-1-4-"System Clipboard",
  // 1-2-"Open...",
  // 1-3-"Open Next",
  // 1-4-"Open Samples",
  let samples = [
    "aupbsn40","bat_cochlea_volume","bat_cochlea_renderings","blobs","boats","bridge",
    "cardio","cell_colony","clown","confocal_series","ct_dcm","dot_blot"
  ];
  for (let i in samples) {
    let obj = new SampleOpener(samples[i]);
  }

/*
"Import",
"Image Sequence...",
"Raw...",
"LUT... ",
"Text Image... ",
"Text File... ",
"Results... ",
"URL...",
"Stack From List...",
"TIFF Virtual Stack...",
"AVI...",
"XY Coordinates... ",
"TWAIN...",
"Capture Video...",
"QuickTime Movie...",
"Pict...",
            "title": "Close",
            "title": "Close All",
            "title": "Save",
            "title": "Save As",
 "Tiff...",
 "Gif...",
 "Jpeg...",
 "Text Image...",
 "ZIP...",
 "Raw Data...",
 "Image Sequence... ",
 "AVI... ",
 "BMP...",
 "PNG...",
 "PGM...",
 "FITS...",
 "LUT...",
 "Selection...",
 "XY Coordinates...",
 "Results...",
 "Text...",
 "QuickTime Movie... ",
            "title": "Revert",
            "title"   : "Print...",
            "title": "",
            "title": "Quit",
        "title":"Edit",
            "title": "Undo",
            "title": "",
            "title": "Cut",
            "title": "Copy",
            "title": "Copy to System",
            "title": "Paste",
            "title": "Paste Control...",
            "title": "",
            "title": "Clear",
            "title": "Clear Outside",
            "title": "Fill",
            "title": "Draw",
            "title": "Invert",
            "title": "",
            "title": "Selection",
 "Select All[a]",
 "Select None[A]",
 "Restore Selection[E]",
 "Fit Spline",
 "Fit Circle",
 "Fit Ellipse",     // About modal window
     console.log('Add event click on About...');
     var about = new About("about");
 "Interpolate",
 "Convex Hull",
 "Make Inverse",
 "Create Selection",
 "Create Mask",
 "Properties... [y]",
 "Rotate...",
 "Enlarge...",
 "Make Band...",
 "Specify...",
 "Straighten...",
 "To Bounding Box",
 "Line to Area",
 "Area to Line",
 "Image to Selection...",
 "Add to Manager[t]",
            "title": "Options",
 "Line Width...",
 "Input/Output...",
 "Fonts...",
 "Profile Plot Options...",
 "Rounded Rect Tool...",
 "Arrow Tool...",
 "Point Tool...",
 "Wand Tool...",
 "Colors...",
 "Appearance...",
 "Conversions...",
 "Memory & Threads...",
 "Proxy Settings...",
 "Compiler...",
 "DICOM...",
 "Misc...",
 "Reset... ",
        "title":"Image",
            "title":"Type",
 "8-bit",
 "16-bit",
 "32-bit",
 "8-bit Color",
 "RGB Color",
 "",
 "RGB Stack",
  "HSB Stack",
 "Lab Stack",
            "title": "",
            "title": "Adjust",
 "Brightness/Contrast...",
 "Window/Level...",
 "Color Balance...",
 "Threshold...[T]",
 "Color Threshold...",
 "Size...",
 "Canvas Size...",
 "Line Width... ",
            "title": "Show Info...",
            "title": "Properties...",
            "title": "Color",
 "Split Channels",
 "Merge Channels...",
 "Arrange Channels...",
 "Stack to RGB",
 "Make Composite",
 "Show LUT",
 "Edit LUT...",
 "Color Picker...[K]",
            "title": "Stacks",
 "Add Slice",
 "Delete Slice",
 "Next Slice [>]",
 "Previous Slice [<]",
 "Set Slice...",
 "",
 "Images to Stack",
 "Stack to Images",
 "Make Montage...",
 "Reslice [/]...",
 "Orthogonal Views[H]",
 "Z Project...",
 "3D Project...",
 "Plot Z-axis Profile",
 "Label...",
 "Statistics",
 "Animation_",
     "Start Animation [\\]",
     "Stop Animation",
     "Animation Options...",
 "Tools_",
     "Combine...",
     "Concatenate...",
     "Reduce...",
     "Reverse",
     "Insert...",
     "Montage to Stack...",
     "Make Substack...",
     "Grouped Z Project...",
     "Remove Slice Labels",
            "title": "Hyperstacks",
            "title": "",
            "title": "Crop",
            "title": "Duplicate...",
            "title": "Rename...",
            "title": "Scale...",
            "title": "Transform",
            "title": "Zoom",
            "title": "Overlay",
            "title": "",
            "title": "Lookup Tables",
 "Invert LUT",
 "Apply LUT",
        "title":"Process",
            "title": "Smooth",
            "title": "Sharpen",
            "title": "Find Edges",
 "Laplace"
 "Sobel"
 "Canny"
            "title": "Find Maxima...",
            "title": "Enhance Contrast...",
            "title": "Noise",
 "Add Noise",
 "Add Specified Noise...",
 "Salt and Pepper",
 "",
 "Despeckle",
 "Remove Outliers...",
 "Remove NaNs...",
            "title": "Shadows",
 "North",
 "Northeast",
 "East",
 "Southeast",
 "South",
 "Southwest",
 "West",
 "Northwest",
 "",
 "Shadows Demo",
            "title": "Binary",
 "Make Binary",
 "Convert to Mask",
 "",
 "Erode",
 "Dilate",
 "Open",
 "Close-",
 "",
 "Outline",
 "Fill Holes",
 "Skeletonize",
 "",
 "Distance Map",
 "Ultimate Points",
 "Watershed",
 "Voronoi",
 "",
 "Options...",
            "title": "Math",
 "Arithmetic",
     "Add...",
     "Subtract...",
     "Multiply...",
     "Divide...",
     "Log",
     "Exp",
     "Square",
     "Square Root",
     "Abs",
     "Logical",
         "AND...",
         "OR...",
         "XOR...",
     "Min...",
     "Max...",
     "Gamma...",
     "Set...",
     "Reciprocal",
     "NaN Background",
     "Macro...",
 "FFT",
     "FFT",
     "Inverse FFT",
     "Redisplay Power Spectrum",
     "FFT Options...",
     "",
     "Bandpass Filter...",
     "Custom Filter...",
     "FD Math...",
     "Swap Quadrants",
 "Filters",
     "Convolve...",
     "Gaussian Blur...",
     "Median...",
     "Mean...",
     "Minimum...",
     "Maximum...",
     "Unsharp Mask...",
     "Variance...",
     "",
     "Gaussian Blur 3D...",
     "Median 3D...",
     "Mean 3D...",
     "Minimum 3D...",
     "Maximum 3D...",
     "Variance 3D...",
     "",
     "Show Circular Masks...",
 "",
 "Batch"
 "Image Calculator...",
 "Subtract Background...",
 "Repeat Command",
            "title":"Analyze",
 "Measure",
 "Analyze Particles...",
 "Summarize",
 "Distribution...",
 "Label",
 "Clear Results",
 "Set Measurements...",
 "",
 "Set Scale...",
 "Calibrate...",
 "Histogram",
 "Plot Profile",
 "Surface Plot...",
 "Gels",
 "Tools",
            "title":"Plugins",
 "Macros",
 "Shortcuts"
 "Utilities"
 "New_"
 "Compile and Run...",
 "",
 "User_Plugins"
 "",
 "3D",
 "Analyze",
 "Color",
 "Filters",
 "Graphics",
 "Input/Output",
 "Stacks",
            "title":"Window",
 "Show All",
 "Main Window [{{key}}]",
 "Put Behind [tab]",
 "Cascade",
 "Tile",
 "",
            "title":"Help",
 "JIM Website...",
 "JIM News...",
 "Documentation...",
 "Installation...",
 "Mailing List...",
 "",
 "Dev. Resources...",
 "Plugins...",
 "JS Scripts...",
 "Macro Functions...",
 "",
 "Update JIM...",
 "Refresh Menus",
 "",
 "About Plugins"
 "About JIM...",
*/
// About JIM... modal window
console.log('Add event click on About...');
var about = new About("about");
 }

/*
 *  tijapi: Tiny ImageJ API in JavaScript
 *  Copyright (C) 2017  Jean-Christophe Taveau.
 *
 *  This file is part of tijapi
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with tijapi.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 * Authors:
 * Jean-Christophe Taveau
 */

 "use strict";

 /**
  * Constructor
  * @class Modal
  * @memberof module:mwGUI
  * @constructor
  *
  * @author Jean-Christophe Taveau
  **/
  function Modal(options) {
     // Header
/*
     let header = document.querySelector(".jimModal .modal-header");
     header.style.backgroundImage = options.headerImage || 'url("images/default-background.jpg")';
     document.querySelector(".jimModal .modal-header h2").innerHTML = options.headerTitle || 'Modal window';
*/

     // Body
     let body = document.querySelector(".jimModal .modal-body");
     body.innerHTML= options.body || '<p>No information</p>';
     body.style.fontSize = options.fontSize || "1.0em";
     // body.style.fontFamily = options.fontFamily || "Arimo";

     // Display modal
     document.querySelector('.jimModal #modal-one').checked = true;

 };

/*
 *  tijapi: Tiny ImageJ API in JavaScript
 *  Copyright (C) 2017  Jean-Christophe Taveau.
 *
 *  This file is part of tijapi
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with tijapi.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 * Authors:
 * Jean-Christophe Taveau
 */

function Packer() {
  
}

/*
 *  tijapi: Tiny ImageJ API in JavaScript
 *  Copyright (C) 2017  Jean-Christophe Taveau.
 *
 *  This file is part of tijapi
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with tijapi.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 * Authors:
 * Jean-Christophe Taveau
 */

function SampleOpener(the_id) {

  this.element = document.getElementById(the_id);

  /**
  * Handle various event types
   * @param event - The DOM event
  **/
  this.handleEvent = function(event) {
      switch(event.type) {
      case 'click':
          // TODO: Load Sample

          console.log('Load sample "' + the_id + '"');

          break;
      case 'dblclick':
          // some code here...
          break;
      }
  };

  // Note that the listeners in this case are this, not this.handleEvent
  this.element.addEventListener('click', this, false);

};
