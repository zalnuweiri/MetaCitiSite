"use client";

import React, { useEffect } from "react";
import "./preview-landing.css"; // <-- You must create this file (included below)

export default function PreviewLanding() {
    useEffect(() => {
        // Scroll Fade Animation
        const fadeElements = document.querySelectorAll(".fade-in");

        const fadeInOnScroll = () => {
            fadeElements.forEach((element) => {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight - 150) {
                    element.classList.add("active");
                }
            });
        };

        fadeInOnScroll();
        window.addEventListener("scroll", fadeInOnScroll);
        return () => window.removeEventListener("scroll", fadeInOnScroll);
    }, []);

    return (
        <>
            {/* HEADER */}
            <header>
                <div className="container header-container">
                    <div className="logo">
                        <div className="logo-text">
                            OTTONOMI<span className="logo-dot">.AI</span>
                        </div>
                    </div>

                    <nav>
                        <ul>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#how-it-works">How It Works</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a className="cta-button" href="#">Get Started</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* HERO */}
            <section className="hero">
                <div className="container hero-container">
                    <div className="hero-content fade-in">
                        <h1 className="hero-title">
                            Intelligent Automation for <span>Modern Businesses</span>
                        </h1>
                        <p className="hero-subtitle">
                            OTTONOMI.AI delivers cutting-edge AI solutions that streamline operations,
                            enhance decision-making, and drive growth.
                        </p>

                        <div className="hero-buttons">
                            <button className="primary-button">
                                <i className="fas fa-rocket"></i> Start Free Trial
                            </button>

                            <button className="secondary-button">
                                <i className="fas fa-play-circle"></i> View Demo
                            </button>
                        </div>
                    </div>

                    <div className="hero-image fade-in delay-1">
                        <div className="dashboard-preview">
                            <div className="dashboard-header">
                                <div className="dashboard-title">Performance Dashboard</div>

                                <div className="dashboard-nav">
                                    <div className="dashboard-nav-item active">Overview</div>
                                    <div className="dashboard-nav-item">Analytics</div>
                                    <div className="dashboard-nav-item">Reports</div>
                                </div>
                            </div>

                            <div className="dashboard-content">
                                <div className="chart-container">
                                    <div className="chart-title">
                                        Revenue Growth
                                        <span>+12.4% <i className="fas fa-arrow-up"></i></span>
                                    </div>

                                    <div className="chart">
                                        <div className="chart-line"></div>

                                        <div className="chart-points">
                                            <div className="chart-point" style={{ top: "30%", left: "10%" }}></div>
                                            <div className="chart-point" style={{ top: "45%", left: "30%" }}></div>
                                            <div className="chart-point" style={{ top: "60%", left: "50%" }}></div>
                                            <div className="chart-point" style={{ top: "40%", left: "70%" }}></div>
                                            <div className="chart-point" style={{ top: "70%", left: "90%" }}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="metrics-container">
                                    <div className="metric-card">
                                        <div className="metric-value">+24.5%</div>
                                        <div className="metric-label">Efficiency Gain</div>
                                    </div>

                                    <div className="metric-card">
                                        <div className="metric-value">98.7%</div>
                                        <div className="metric-label">Accuracy Rate</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="features" id="features">
                <div className="container">
                    <h2 className="section-title fade-in">
                        Powerful <span>Features</span>
                    </h2>

                    <div className="features-grid">
                        <div className="feature-card fade-in delay-1">
                            <div className="feature-icon"><i className="fas fa-brain" /></div>
                            <h3 className="feature-title">Predictive Analytics</h3>
                            <p className="feature-description">
                                Leverage advanced machine learning to forecast trends and make data-driven decisions.
                            </p>
                        </div>

                        <div className="feature-card fade-in delay-2">
                            <div className="feature-icon"><i className="fas fa-bolt" /></div>
                            <h3 className="feature-title">Automated Workflows</h3>
                            <p className="feature-description">
                                Streamline repetitive tasks with intelligent automation.
                            </p>
                        </div>

                        <div className="feature-card fade-in delay-3">
                            <div className="feature-icon"><i className="fas fa-chart-line" /></div>
                            <h3 className="feature-title">Real-time Insights</h3>
                            <p className="feature-description">
                                Access actionable business intelligence with intuitive dashboards.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="how-it-works" id="how-it-works">
                <div className="container">
                    <h2 className="section-title fade-in">How It <span>Works</span></h2>

                    <div className="steps-container">
                        <div className="step fade-in delay-1">
                            <div className="step-number">1</div>
                            <h3 className="step-title">Integrate</h3>
                            <p className="step-description">
                                Connect your data sources with our API.
                            </p>
                        </div>

                        <div className="step fade-in delay-2">
                            <div className="step-number">2</div>
                            <h3 className="step-title">Configure</h3>
                            <p className="step-description">
                                Customize AI models and workflows.
                            </p>
                        </div>

                        <div className="step fade-in delay-3">
                            <div className="step-number">3</div>
                            <h3 className="step-title">Automate</h3>
                            <p className="step-description">
                                Watch OTTONOMI.AI transform your operations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIAL */}
            <section className="testimonials" id="testimonials">
                <div className="container">
                    <h2 className="section-title fade-in">What Our <span>Clients Say</span></h2>

                    <div className="testimonials-container">
                        <div className="testimonial-card fade-in delay-1">
                            <p className="testimonial-text">
                                "OTTONOMI.AI has revolutionized our data analysis. We've seen a 30% increase in efficiency."
                            </p>
                            <p className="testimonial-author">Sarah Johnson</p>
                            <p className="testimonial-role">CTO, TechForward Inc.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="container">
                    <h2 className="cta-title fade-in">Ready to Transform Your Business?</h2>

                    <p className="cta-subtitle fade-in delay-1">
                        Join hundreds already using OTTONOMI.AI to drive growth & efficiency.
                    </p>

                    <button className="cta-button-large fade-in delay-2">
                        <i className="fas fa-rocket"></i> Start Your Free Trial Today
                    </button>
                </div>
            </section>

            {/* FOOTER */}
            <footer>
                <div className="container">
                    <div className="footer-container">
                        <div className="footer-about">
                            <div className="footer-logo">OTTONOMI.AI</div>
                            <p className="footer-description">
                                Intelligent automation solutions for forward-thinking businesses.
                            </p>

                            <div className="social-links">
                                <a className="social-link"><i className="fab fa-linkedin-in"></i></a>
                                <a className="social-link"><i className="fab fa-twitter"></i></a>
                                <a className="social-link"><i className="fab fa-facebook-f"></i></a>
                            </div>
                        </div>

                        <div>
                            <h3 className="footer-heading">Product</h3>
                            <ul className="footer-links">
                                <li><a>Features</a></li>
                                <li><a>Pricing</a></li>
                                <li><a>Integrations</a></li>
                                <li><a>Updates</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="footer-heading">Resources</h3>
                            <ul className="footer-links">
                                <li><a>Documentation</a></li>
                                <li><a>Tutorials</a></li>
                                <li><a>Blog</a></li>
                                <li><a>Support</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="footer-heading">Company</h3>
                            <ul className="footer-links">
                                <li><a>About Us</a></li>
                                <li><a>Careers</a></li>
                                <li><a>Contact</a></li>
                                <li><a>Partners</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="copyright">
                        © 2023 OTTONOMI.AI. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    );
}
