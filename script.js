:root {
    --bg-color: #0b0f17;
    --card-bg: #151c28;
    --text-primary: #f3f4f6;
    --text-secondary: #9ca3af;
    --accent-color: #38bdf8;
    --accent-hover: #0284c7;
    --border-color: rgba(255, 255, 255, 0.08);
    --font-main: 'Inter', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-main);
    scroll-behavior: smooth;
}

body {
    background-color: var(--bg-color);
    color: var(--text-primary);
    line-height: 1.6;
}

.container {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 2rem;
}

.narrow-container {
    max-width: 768px;
    margin: 0 auto;
}

/* Navbar */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(11, 15, 23, 0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border-color);
    z-index: 1000;
    padding: 1.2rem 0;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 2rem;
}

.logo {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text-primary);
    text-decoration: none;
    letter-spacing: -0.5px;
}

.nav-links {
    display: flex;
    list-style: none;
    align-items: center;
    gap: 2rem;
}

.nav-links a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    transition: 0.2s ease;
}

.nav-links a:hover {
    color: var(--text-primary);
}

.nav-btn {
    background: var(--accent-color);
    color: #000 !important;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-weight: 600 !important;
}

.nav-btn:hover {
    background: var(--accent-hover);
    color: #fff !important;
}

.hamburger {
    display: none;
    font-size: 1.3rem;
    cursor: pointer;
    color: var(--text-primary);
}

/* Hero Section */
.hero {
    padding: 9rem 0 5rem;
}

.hero-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 4rem;
    align-items: center;
}

.badge {
    background: rgba(56, 189, 248, 0.1);
    color: var(--accent-color);
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
}

.hero-text h1 {
    font-size: 3.2rem;
    font-weight: 800;
    line-height: 1.15;
    margin: 1rem 0;
    letter-spacing: -1px;
}

.hero-description {
    font-size: 1.15rem;
    color: var(--text-secondary);
    margin-bottom: 2.5rem;
}

.hero-description strong {
    color: var(--text-primary);
}

.hero-newsletter {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    padding: 2rem;
    border-radius: 12px;
}

.hero-newsletter h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}

.hero-newsletter p {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-bottom: 1.2rem;
}

.newsletter-form {
    display: flex;
    gap: 0.5rem;
}

.newsletter-form input {
    flex: 1;
    padding: 0.8rem 1rem;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    background: var(--bg-color);
    color: var(--text-primary);
    outline: none;
}

.newsletter-form input:focus {
    border-color: var(--accent-color);
}

.btn {
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: 0.2s ease;
}

.btn-primary {
    background: var(--accent-color);
    color: #0f172a;
}

.btn-primary:hover {
    background: var(--accent-hover);
    color: #fff;
}

.image-wrapper img {
    width: 100%;
    border-radius: 16px;
    border: 1px solid var(--border-color);
    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
}

/* Stats Banner */
.stats-banner {
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    padding: 2.5rem 0;
    background: rgba(21, 28, 40, 0.4);
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    text-align: center;
}

.stat-item h2 {
    font-size: 1.4rem;
    color: var(--accent-color);
}

.stat-item p {
    font-size: 0.9rem;
    color: var(--text-secondary);
}

/* Sections Common */
section {
    padding: 5rem 0;
}

.section-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2.5rem;
    letter-spacing: -0.5px;
}

/* About */
.about-content p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
}

/* Services */
.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
}

.card {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    padding: 2rem;
    border-radius: 12px;
    transition: transform 0.2s ease;
}

.card:hover {
    transform: translateY(-5px);
    border-color: rgba(56, 189, 248, 0.3);
}

.card .icon {
    font-size: 1.8rem;
    color: var(--accent-color);
    margin-bottom: 1rem;
}

.card h3 {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
}

.card p {
    color: var(--text-secondary);
    font-size: 0.95rem;
}

/* Portfolio */
.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
}

.portfolio-card {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    overflow: hidden;
}

.portfolio-img img {
    width: 100%;
    height: 250px;
    object-fit: cover;
}

.portfolio-info {
    padding: 1.5rem;
}

.portfolio-info .category {
    font-size: 0.8rem;
    color: var(--accent-color);
    font-weight: 600;
    text-transform: uppercase;
}

.portfolio-info h3 {
    margin: 0.4rem 0;
}

.portfolio-info p {
    color: var(--text-secondary);
    font-size: 0.9rem;
}

/* Articles */
.articles-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.article-item {
    display: block;
    text-decoration: none;
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    padding: 1.8rem;
    border-radius: 12px;
    transition: 0.2s ease;
}

.article-item:hover {
    border-color: var(--accent-color);
}

.article-meta {
    font-size: 0.85rem;
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
}

.article-item h3 {
    color: var(--text-primary);
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
}

.article-item p {
    color: var(--text-secondary);
    font-size: 0.95rem;
}

/* Newsletter Section */
.newsletter-section {
    background: var(--card-bg);
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
}

.text-center {
    text-align: center;
}

.center-form {
    max-width: 500px;
    margin: 1.5rem auto 0;
}

/* Footer */
.footer {
    padding: 3rem 0;
    border-top: 1px solid var(--border-color);
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--text-secondary);
    font-size: 0.9rem;
}

.social-links a {
    color: var(--text-secondary);
    font-size: 1.2rem;
    margin-left: 1.2rem;
    transition: 0.2s;
}

.social-links a:hover {
    color: var(--accent-color);
}

/* Responsive */
@media (max-width: 768px) {
    .hero-grid {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .hero-text h1 {
        font-size: 2.3rem;
    }

    .newsletter-form {
        flex-direction: column;
    }

    .stats-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .portfolio-grid {
        grid-template-columns: 1fr;
    }

    .nav-links {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: var(--bg-color);
        padding: 1.5rem;
        border-bottom: 1px solid var(--border-color);
    }

    .nav-links.active {
        display: flex;
    }

    .hamburger {
        display: block;
    }

    .footer-content {
        flex-direction: column;
        gap: 1rem;
    }
}
