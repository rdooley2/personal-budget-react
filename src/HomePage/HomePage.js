import React from 'react';

function HomePage() {
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