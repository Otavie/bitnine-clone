<template>    
    <div class="landing-container">
        <div class="landing-header">
            <div class="header-image">
                <img src="../assets/imgs/AgensSQL-Logo1.png" alt="AgensSQL Logo">
            </div>
        </div>
        <div class="landing-text text-center">
            <h1>An integration of Bitnine’s DB technology and PG expertise</h1>
            <p>
                AgensSQL is an all-new relational DBMS based on PostgreSQL, with years of expertise<br>
                and knowledge accumulated through database research and development.
            </p>
            <p>
                The enterprise package, along with AgensSQL engine, is an all-in-one solution that ensures<br>
                the efficiency and scalability of data management.
            </p>
            <p>
                Get AgensSQL now for stable operation and management services at a reduced<br>
                maintenance cost.
            </p>
        </div>
        <div class="landing-button-container">
            <button class="button contact">
                <router-link to="/contact" class="landing-contact-button">
                    Contact
                </router-link>
            </button>
            <button class="button brochure">
                <router-link to="/agenssql_brochure" class="landing-contact-button">
                    Brochure
                </router-link>
            </button>
            <button class="button blog">
                <router-link to="/blog" class="landing-contact-button">
                    Blog
                </router-link>
            </button>
        </div>
    </div>

    <a href="#">
        <font-awesome-icon :icon="['fas', 'chevron-up']" class="chevron-up" />
    </a>
</template>