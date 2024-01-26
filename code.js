"use strict";
// This file holds the main code for plugins. Code in this file has access to
// the *figma document* via the figma global object.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (See https://www.figma.com/plugin-docs/how-plugins-run).
// Runs this code if the plugin is run in Figma
if (figma.editorType === 'figma') {
    // Existing code...
    // This shows the HTML page in "ui.html".
    figma.showUI(__html__);
    // Extend the existing onmessage handler
    figma.ui.onmessage = msg => {
        // Existing message handling...
        // Handle setting layer titles
        if (msg.type === 'set-layer-title') {
            const selectedNodes = figma.currentPage.selection;
            if (selectedNodes.length > 0) {
                selectedNodes.forEach(node => {
                    if ('name' in node) {
                        node.name = msg.title;
                    }
                });
            }
            else {
                figma.notify("No layer selected");
            }
        }
        // Existing code for closing plugin...
    };
    // Additional code as needed...
}
// Runs this code if the plugin is run in FigJam
if (figma.editorType === 'figjam') {
    // Existing FigJam-specific code...
}
;
