const fs = require('fs');
const path = require('path');

const {
    Notes, Format, Merger, Resources, Resource
} = require('/Users/badeand/dev/notetools/notetools.js');


const resources = Resources.allRecursively()
    .filterByExtnames(["svg", "png", "jpg", "jpeg"])

const markdownFiles = new Notes()
    .allRecursively()
    .filterByExtname("md")



markdownFiles.getByName("NetMidi System Documentation")
    .embedAllLinks(markdownFiles, resources, false, 4)
    .resolveResources(resources)
    .removeLinks()
    .writeToFile("./temp/target/NetMidi_System_Documentation.md")

markdownFiles.getByName("README")
    .embedAllLinks(markdownFiles, resources, false, 4)
    .resolveResources(resources)
    .removeLinks()
    .writeToFile("./temp/target/README.md")




    /*
const requirements = markdownFiles
    .filterByFrontmatterContains("type", "requirement")


    
-----

    .replaceText("\/\/requirements_index", requirements
        .formatIndexTable([
            ["name", "Requirement"]
        ])
    )

*/
