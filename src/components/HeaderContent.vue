<template>
    <div class="above-header">
        <a href="https://agcloud.bitnine.net/">
            <b>AG Cloud Express :</b> Experience graph database in a cloud environment for FREE!
        </a>
    </div>
    <header class="header">
        <div class="header-container">
            <div class="header-socials">
                <div class="search-container">
                    <div class="header-search">

                        <font-awesome-icon icon="fa-search" @click="toggleSearch()" class="fa-search" />

                        <input type="text" class="search-input" placeholder="SEARCH" id="searchInput">

                        <font-awesome-icon :icon="['fas', 'xmark']" @click="closeSearch()" class="close-button" />

                    </div>
                    <div class="header-contact">
                        <a href="https://bitnine.net/contact/">Contact</a>
                    </div>
                </div>
                <div class="header-socials-icons">
                    <div class="header-icon">
                        <div class="icon-overlay github-overlay"></div>
                        <div class="icon-item github-icon">
                            <a href="https://github.com/bitnine-oss/agensgraph">
                                <font-awesome-icon :icon="['fab', 'github']" class="github icon" />
                            </a>
                        </div>
                    </div>

                    <div class="header-icon">
                        <div class="icon-overlay youtube-overlay"></div>
                        <div class="icon-item youtube-icon">
                            <a href="https://www.youtube.com/channel/UCBJNYamALEqrfxiOCgYyP2g/featured?view_as=subscriber">
                                <font-awesome-icon :icon="['fab', 'youtube']" class="youtube icon" />
                            </a>
                        </div>
                    </div>

                    <div class="header-icon">
                        <div class="icon-overlay linkedin-overlay"></div>
                        <div class="icon-item linkedin-icon">
                            <a href="https://www.linkedin.com/company/bitnineglobal/">
                                <font-awesome-icon :icon="['fab', 'linkedin-in']" class="youtube icon" />
                            </a>
                        </div>
                    </div>
                    
                    <div class="header-icon">
                        <div class="icon-overlay facebook-overlay"></div>
                        <div class="icon-item facebook-icon">
                            <a href="https://www.facebook.com/bitninesns/">
                                <font-awesome-icon :icon="['fab', 'facebook']" class="facebook icon" />
                            </a>
                        </div>
                    </div>
                    
                    <div class="header-icon">
                        <div class="icon-overlay medium-overlay"></div>
                        <div class="icon-item letter-m-icon">
                            <a href="https://blog.naver.com/bitnine9">
                                <font-awesome-icon :icon="['fab', 'medium']" class="medium icon" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <div class="header-menu">
                <div class="nav-container">
                    <div class="logo">
                        <img class="logo-img" src="../assets/imgs/b_logo.png" alt="AgensSQL Logo">
                    </div>
                    <nav class="menu">
                        <ul class="menu-list">
                            <li class="list-products">
                                <router-link class="menu-link active" to="/agensgraph">Products</router-link>
                                <ul class="sub-menu sub-menu-products">
                                    <li>
                                        <router-link to="/graph-database">Graph Database <span class="forward-arrow">&#8250;</span></router-link>
                                        <ul class="sub-sub-menu">
                                            <li>
                                                <router-link to="/agensgraph">AgensGraph</router-link>
                                            </li>
                                            <li>
                                                <a href="https://age.apache.org/">Apache AGE</a>
                                            </li>
                                            <li>
                                                <router-link to="/ag-cloud">AG Cloud</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/agensbrowser">Visualization & Analysis</router-link>
                                                <!-- <a href="https://bitnine.net/agensbrowser/">Visualization & Analysis</a> -->
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <router-link to="/">Relational Database <span class="forward-arrow">&#8250;</span></router-link>
                                        <ul class="sub-sub-menu sub-sub-menu-2">
                                            <li>
                                                <router-link to="/">AgensSQL</router-link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <router-link class="menu-link" to="/graph-database-use-case">Use Cases</router-link>
                            </li>
                            <li>
                                <router-link class="menu-link" to="/services">Services</router-link>
                            </li>
                            <li class="list-resources">
                                <router-link class="menu-link" to="/documentation">Resources</router-link>
                                <ul class="sub-menu sub-menu-resources">
                                    <li>
                                        <router-link class="menu-link" to="/documentation">Documentation</router-link>
                                    </li>
                                    <li>
                                        <router-link class="menu-link" to="/learn">Learn</router-link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <router-link class="menu-link" to="/blog">Blog</router-link>
                            </li>
                            <li class="list-company">
                                <router-link class="menu-link" to="/company">Company</router-link>
                                <ul class="sub-menu sub-menu-company">
                                    <li>
                                        <router-link to="/company">About Us</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/contact">Contact</router-link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <router-link class="menu-link" to="/ir-announcement">IR</router-link>
                            </li>
                            <li>
                                <router-link class="menu-link try-free" to="/agensgraph-downloads">Try Free</router-link>
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default{
    methods: {
        toggleSearch(){
            const searchInput = document.getElementById("searchInput");
            const faSearch = document.querySelector(".fa-search");
            const closeButton = document.querySelector(".close-button");
            searchInput.style.display = "inline-block";
            faSearch.style.display = "none";
            closeButton.classList.toggle("show");
        },
        closeSearch(){
            const closeButton = document.querySelector(".close-button");
            const faSearch = document.querySelector(".fa-search");
            const searchInput = document.getElementById("searchInput");
            closeButton.classList.toggle("show");
            searchInput.style.display = "none";
            faSearch.style.display = "inline-block";
        }
    }
}
</script>
