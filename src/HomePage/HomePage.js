import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import * as d3 from 'd3';
import {
    Chart,
    PieController,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

Chart.register(PieController, ArcElement, Tooltip, Legend);

function HomePage() {
    const myChartRef = useRef(null);

    useEffect(() => {
        const getBudget = async () => {
            try {
                const res = await axios.get('http://localhost:3000/budget');
                const dataSource = {
                    datasets: [{
                        data: res.data.myBudget.map(item => item.budget),
                        backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black'],
                    }],
                    labels: res.data.myBudget.map(item => item.title),
                };
                createChart(dataSource);
            } catch (error) {
                console.error('Error fetching budget data:', error);
            }
        };

        const createChart = (dataSource) => {
            const ctx = document.getElementById('myChart').getContext('2d');

            if (myChartRef.current) {
                myChartRef.current.destroy();
            }

            myChartRef.current = new Chart(ctx, {
                type: 'pie',
                data: dataSource,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                },
            });
        };

        const getD3Data = async () => {
            try {
                const response = await axios.get('http://localhost:3000/budget');
                const data = response.data.myBudget.map(item => ({
                    label: item.title,
                    value: item.budget,
                }));
                createD3Chart(data);
            } catch (error) {
                console.error('Error fetching data for D3:', error);
            }
        };

        const createD3Chart = (data) => {
            d3.select("#myChart2").select("svg").remove();

            const width = 900; 
            const height = 400; 
            const radius = Math.min(width, height) / 2; 


            const svg = d3.select("#myChart2")
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", `translate(${width / 2}, ${height / 2})`);

            const pie = d3.pie()
                .sort(null)
                .value(d => d.value);

            const arc = d3.arc()
                .outerRadius(radius * 0.8)
                .innerRadius(radius * 0.4);

            const outerArc = d3.arc()
                .innerRadius(radius * 0.9)
                .outerRadius(radius * 0.9);

            const color = d3.scaleOrdinal(d3.schemeCategory10);

            const slices = svg.selectAll(".slice")
                .data(pie(data))
                .enter().append("g")
                .attr("class", "slice");

            slices.append("path")
                .attr("d", arc)
                .style("fill", d => color(d.data.label));

            slices.append("text")
                .attr("transform", d => {
                    const pos = outerArc.centroid(d);
                    pos[0] = radius * 0.95 * (d.endAngle < Math.PI ? 1 : -1);
                    return `translate(${pos})`;
                })
                .attr("dy", ".35em")
                .text(d => d.data.label)
                .style("text-anchor", d => (d.endAngle < Math.PI ? "start" : "end"))
                .attr("font-size", "12px") 
                .attr("fill", "#333"); 


            const polyline = svg.selectAll(".lines")
                .data(pie(data))
                .enter().append("polyline");

            polyline.transition().duration(1000)
                .attr("points", d => {
                    const pos = outerArc.centroid(d);
                    pos[0] = radius * 0.95 * (d.endAngle < Math.PI ? 1 : -1);
                    return [arc.centroid(d), outerArc.centroid(d), pos].join(" ");
                })
                .attr("fill", "none")
                .attr("stroke", "#ccc") 
                .attr("stroke-width", 1); 

            svg.append("text")
                .attr("x", 0) 
                .attr("y", -radius * 1.3) 
                .attr("text-anchor", "middle")
                .attr("font-size", "18px") 
                .attr("font-weight", "bold")
                .attr("fill", "#333") 
                .style("text-shadow", "1px 1px 2px rgba(255, 255, 255, 0.7)") 
                .text("Budget Distribution"); 
        };

        getBudget();
        getD3Data();
    }, []);



  return (
    <main role="main" className="center" id="main">
        <article className="page-area">
            <article aria-describedby="first-article header">
                <h1 id="first-article header">Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
    
            <article aria-describedby="second-article-header">
                <h1 id="second-article-header">Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
    
            <article aria-describedby="third-article-header">
                <h1 id="third-article-header">Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
    
            <article aria-describedby="fourth-article-header">
                <h1 id="fourth-article-header">Free</h1>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
            </article>
    
            <article aria-describedby="fifth-article-header">
                <h1 id="fifth-article-header">Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
    
            <article aria-describedby="sixth-article-header">
                <h1 id="sixth-article-header">Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
    
            <article aria-describedby="seventh-article-header">
                <h1 id="seventh-article-header">Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
    
            <article aria-describedby="eighth-article-header">
                <h1 id="eighth-article-header">Chart</h1>
                <p>
                    <canvas id="myChart" width="400" height="400" aria-label="Budget distribution chart"></canvas>
                </p>
            </article>

            <article aria-describedby="ninth-article-header">
                <h1 id="ninth-article-header">D3 Chart</h1>
                <p>
                    <svg id="myChart2" width="960" height="450" aria-label="Budget distribution chart"></svg>
                </p>
            </article>

        </article>

    </main>
  );
}

export default HomePage;