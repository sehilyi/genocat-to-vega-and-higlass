import React, { useEffect } from 'react';
import './App.css';

import { HiGlassComponent } from 'higlass';
import vegaEmbed from 'vega-embed';
import examples from "./examples.js"

const hgOptionsBase = {
    bounded: true,
    pixelPreciseMarginPadding: true,
    containerPaddingX: 0,
    containerPaddingY: 0,
    sizeMode: 'default'
};

function App() {

    useEffect(() => {
        examples.forEach(e => {
            vegaEmbed(`#${e.id}`, e.vg);
        });
    }, []);

    function renderExamples(example) {
        const { id, im, hg } = example;
        return (
            <div style={{display: "table"}}>
                <img className="cell" src={im} alt=""/>
                <div className="cell">
                    <HiGlassComponent
                        options={hgOptionsBase}
                        viewConfig={hg}
                    />
                </div>
                <div className="cell" id={id}></div>
            </div>
        )
    }

    return (
        <div>
            {examples.map(x => renderExamples(x))}
        </div>
    );
}

export default App;
