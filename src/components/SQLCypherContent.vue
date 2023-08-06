<template>
    <div class="sql-cypher-container text-center">
        <div class="sql-cypher-head">
            <h1>
                SQL + Cypher
            </h1>
            <h3>: Hybrid Query Processing</h3>

            <p>
                Cypher is one of the most efficient graph query languages in the graph domain.<br>
                AgensGraph supports both Cypher and SQL in its graph domain.<br>
                Through hybrid query technology, bring out the best performance<br>
                by creating, modifying, and querying graph data.<br>
            </p>

        </div>
        <div class="sql-cypher-content">
            <div class="sql-cypher-content-inner">
                <div class="sql-cypher-content-left">
                    <div class="agensgraph-img-container">
                        <img src="/src/assets/imgs/agens_graph2.png" alt="AgensGraph">
                    </div>
                </div>
                <div class="sql-cypher-content-right">
                    <div class="cypherSQL-container">
                        <h3>Cypher in SQL</h3>
                        <div class="cypherSQL">
                            <span class="sql-red sql-font">SELECT</span> <span class="sql-purple sql-font">n</span>.<span class="sql-purple sql-font">name</span><br>
                            <span class="sql-red sql-font">FROM</span> <span class="sql-purple sql-font">history</span>, (<span class="sql-red sql-font">MATCH</span> (n:dev) <span class="sql-red sql-font">RETURN</span> n) <span class="sql-blue sql-font">AS</span> dev <span class="sql-red sql-font">WHERE</span> <span class="sql-purple sql-font">history</span>.<span class="sql-purple sql-font">year</span> &gt; n.year::int;<br>
                            ---------<br>
                            <span class="sql-purple sql-font">name</span><br>
                            ---------<br>
                            <span class="sql-purple sql-font">someone</span><br>
                            (1 row)
                        </div>
                    </div>
                    <div class="SQLCypher-container">
                        <h3>SQL in Cypher</h3>
                        <div class="SQLCypher">
                            <span class="sql-red sql-font">MATCH</span> (n:dev) <span class="sql-red sql-font">WHERE</span> <span class="sql-purple sql-font">n</span>.<span class="sql-purple sql-font">year</span>::int &lt; (<span class="sql-red sql-font">SELECT</span> <span class="sql-purple sql-font">year</span> <span class="sql-red sql-font">FROM</span> <span class="sql-purple sql-font">history</span> <span class="sql-red sql-font">WHERE</span> <span class="sql-purple sql-font">event</span> = 'Agens Graph')<br>
                            RETURN properties(n) A n;<br>
                            ----------------------------------<br>
                            n<br>
                            ----------------------------------<br>
                            {"<span class="sql-purple">name</span>": "<span class="sql-purple">someone</span>","<span class="sql-purple">year</span>": 2015}<br>
                            (1 row)

                        </div>
                    </div>
                </div>

            </div>

        </div>

        <div class="sql-cypher-footer">
            <p>More information about <span class="inline-cipher">Cypher</span></p>
            <button class="read-more"><router-link to="/bitnine-white-paper-3-eng">Read more</router-link></button>
        </div>

    </div>
</template>