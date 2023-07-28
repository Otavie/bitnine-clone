<template>
    <div class="footer-container">
        <div class="footer">
            <div class="footer-box-container">
                <div class="footer-box">
                    <h3>Products</h3>
                    <ul>
                        <li><a href="https://bitnine.net/agenssql/">Relational Database</a></li>
                        <li><a href="https://bitnine.net/graph-database/">Graph Database</a></li>
                        <li><a href="https://bitnine.net/graph-database-2/">Graph-base Solution</a></li>
                    </ul>
                </div>

                <div class="footer-box">
                    <div>
                        <h3>
                            <router-link  to="/blog">Use Cases</router-link>
                        </h3>
                    </div>
                </div>

                <div class="footer-box">
                    <div>
                        <h3>
                            <router-link to="/blog">Services</router-link>
                        </h3>
                    </div>
                </div>


                <div class="footer-box">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="https://bitnine.net/documentation/">Documentation</a></li>
                        <li><a href="https://bitnine.net/learn">Learn</a></li>
                    </ul>
                </div>

                <div class="footer-box">
                    <div>
                        <h3>
                            <router-link to="/blog">Blog</router-link>
                        </h3>
                    </div>
                </div>

                <div class="footer-box">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="https://bitnine.net/company/">About Us</a></li>
                        <li><a href="https://bitnine.net/contact/">Contact</a></li>
                    </ul>
                </div>

            </div>
        </div>

        <div class="footer-footer-cover"></div>

        <div class="footer-footer">
            <div class="footer-footer-left">
                <p><span class="copy-right-c">&copy;</span> 2023 by Bitnine Global Inc. All Rights Reserved.</p>
            </div>
            <div class="footer-footer-right">
                <div class="footer-socials">
                    <div class="footer-socials-icons">
                        <div class="footer-icon">
                            <div class="footer-icon-overlay github-overlay"></div>
                            <div class="footer-icon-item github-icon">
                                <a href="https://github.com/bitnine-oss/agensgraph">
                                    <font-awesome-icon :icon="['fab', 'github']" class="github footer-icon-logo" />
                                </a>
                            </div>
                        </div>

                        <div class="footer-icon">
                            <div class="footer-icon-overlay youtube-overlay"></div>
                            <div class="footer-icon-item youtube-icon">
                                <a href="https://www.youtube.com/channel/UCBJNYamALEqrfxiOCgYyP2g/featured?view_as=subscriber">
                                    <font-awesome-icon :icon="['fab', 'youtube']" class="youtube footer-icon-logo" />
                                </a>
                            </div>
                        </div>

                        <div class="footer-icon">
                            <div class="footer-icon-overlay linkedin-overlay"></div>
                            <div class="footer-icon-item linkedin-icon">
                                <a href="https://www.linkedin.com/company/bitnineglobal/">
                                    <font-awesome-icon :icon="['fab', 'linkedin-in']" class="youtube footer-icon-logo" />
                                </a>
                            </div>
                        </div>
                    
                        <div class="footer-icon">
                            <div class="footer-icon-overlay facebook-overlay"></div>
                            <div class="footer-icon-item facebook-icon">
                                <a href="https://www.facebook.com/bitninesns/">
                                    <font-awesome-icon :icon="['fab', 'facebook']" class="facebook footer-icon-logo" />
                                </a>
                            </div>
                        </div>
                    
                        <div class="footer-icon">
                            <div class="footer-icon-overlay letter-m-overlay"></div>
                            <div class="footer-icon-item letter-m-icon">
                                <a href="https://blog.naver.com/bitnine9">
                                    <font-awesome-icon :icon="['fass', 'm']" class="footer-letter-m footer-icon-logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer-contact">
                    <router-link to="/contact">CONTACT</router-link>
                </div>
            </div>
        </div>
    </div>
</template>