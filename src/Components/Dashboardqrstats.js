import React, { useEffect } from "react";
import './Pro.css';
import qrcode from '../static/qrcode.png';

import * as d3 from "d3";


export const Dashboardqrstats = () => {

    useEffect(() => {
        d3.select(".bar_chart").style("stroke-width", 7);

        const margin = { top: 10, right: 40, bottom: 30, left: 30 },
            width = 450 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;

        const svg = d3
            .select("#area")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);

        const x = d3.scaleLinear().domain([0, 100]).range([0, width]);
        svg
            .append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x));

        const y = d3.scaleLinear().domain([0, 100]).range([height, 0]);
        svg.append("g").call(d3.axisLeft(y));

    }, []);


    return (
        <div>

            <div className="grid">
                <div className="webdetails">
                    <p>Website</p>
                    <h2><i class="fa fa-link" aria-hidden="true"></i> https://www.getqr.com</h2>
                    <p><i class="fa fa-folder-o" aria-hidden="true"></i> No Folder</p>
                    <p> <i class="fa fa-calendar-o" aria-hidden="true"></i> May 27, 2021</p>
                </div>
                <div className="qrcode">

                    <div className="row">

                        <div className="col-7"> <img src={qrcode} height={200} /></div>
                    </div>
                </div>
            </div>


            <div className="grid">
                <svg>
                    <circle
                        class="bar_chart"
                        style={{ fill: "#F4F2FF" }}
                        stroke="#8566FF"
                        cx={60}
                        cy={60}
                        r={50}
                    ></circle>
                </svg>

            </div>

            <div className="grid">
                <svg id="area" height={400} width={500}></svg>

            </div>

            <div className="grid">
                <button className="btn btn-lg generate">Show detailed Info</button>
            </div>


        </div>
    )
}
