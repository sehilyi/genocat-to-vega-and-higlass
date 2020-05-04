import testHiglassViewConfig from './higlass/test.json';
import testVegaSpec from './vega/test.json';

export const examples = [
    {
        title: "Test",
        url: "http://genocat.tools/tools/my5c.html",
        note: "Notes",
        id: "test",
        im: "./images/test.png",
        hg: testHiglassViewConfig,
        vg: testVegaSpec
    }
]

export default examples;