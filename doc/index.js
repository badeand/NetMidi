const fs = require('fs');
const path = require('path');

const {
    Notes, Format, Merger, Resources, Resource
} = require('/Users/andreas.bade/dev/notetools/notetools.js');
const { default: test } = require('node:test');


const resources = Resources.allRecursively()
    .filterByExtnames(["svg", "png", "jpg", "jpeg"])

const markdownFiles = new Notes()
    .allRecursively()
    .filterByExtname("md")

const requirements = markdownFiles
    .filterByFrontmatterContains("type", "requirement")

const integrationtests = markdownFiles
    .filterByFrontmatterContains("integrationtest", "yes")

const unittests = markdownFiles
    .filterByFrontmatterContains("unittest", "yes")


markdownFiles.getByName("Product Requirements")
    .replaceText("\/\/requirements_full", requirements.notes
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(issue =>
            Merger.read(markdownFiles, issue.name, true, 2))
        .join(""))
    .replaceText("\/\/requirements_index", requirements
        .formatIndexTable([
            ["name", "Requirement"]
        ])
    )
    .embedAllLinks(markdownFiles, resources, false, 4)
    .resolveResources(resources)
    .removeLinks()
    .writeToFile("_Product Requirements.md")

markdownFiles.getByName("Product Integration Test Plan")
    .replaceText("\/\/tests_full", integrationtests.notes
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(issue =>
            Merger.read(markdownFiles, issue.name, true, 2))
        .join(""))
    .replaceText("\/\/tests_index", integrationtests
        .formatIndexTable([
            ["name", "Test"]
        ])
    )
    .embedAllLinks(markdownFiles, resources, false, 4)
    .resolveResources(resources)
    .removeLinks()
    .writeToFile("_Product Integration Test Plan.md")

markdownFiles.getByName("Unit Test Plan")
    .replaceText("\/\/tests_full", unittests.notes
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(issue =>
            Merger.read(markdownFiles, issue.name, true, 2))
        .join(""))
    .replaceText("\/\/tests_index", unittests
        .formatIndexTable([
            ["name", "Test"]
        ])
    )
    .embedAllLinks(markdownFiles, resources, false, 4)
    .resolveResources(resources)
    .removeLinks()
    .writeToFile("_Unit Test Plan.md")

