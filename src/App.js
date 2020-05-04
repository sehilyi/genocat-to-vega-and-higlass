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
        const { title, url, note, id, im, hg } = example;
        return (
            <div>
                <h2 className="title"><a href={url}>{title}</a></h2>
                <div className="note">
                    {note}
                </div>
                <div style={{display: "table", width: "100%"}}>
                    <img className="cell" src={im} alt=""/>
                    <div className="cell">
                        <HiGlassComponent
                            options={hgOptionsBase}
                            viewConfig={hg}
                        />
                    </div>
                    <div className="cell" id={id}></div>
                </div>
            </div>
        )
    }

    return (
        <div style={{padding: "20px"}}>
            <h1>GenoCat Examples with HiGlass and Vega</h1>
            {examples.map(x => renderExamples(x))}
        </div>
    );
}

export default App;
