import Biodalliance from './higlass/biodalliance.json';
import Juiceboxjs from './higlass/juiceboxjs.json';
import testVegaSpec from './vega/test.json';

export const examples = [
    {
        title: "Biodalliance",
        url: "http://genocat.tools/tools/dalliance.html",
        note: "Genome browser-like views are well-supported in HiGlass. In Vega, the stacked layout is supported using `concat` functions, but gene annotation plot is not supported.",
        id: "Biodalliance",
        im: "./images/Biodalliance.png",
        hg: Biodalliance,
        vg: testVegaSpec
    },
    {
        title: "Juiceboxjs",
        url: "http://genocat.tools/tools/juiceboxjs.html",
        note: "",
        id: "Juiceboxjs",
        im: "./images/juiceboxjs.jpg",
        hg: Juiceboxjs,
        vg: testVegaSpec
    }
]

export default examples;