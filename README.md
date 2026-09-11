<div align="center">

# Krishna Prashar

### Software Engineering · Systems · AI/ML · Data

A personal engineering portfolio built to showcase the systems I build, the problems I investigate, and the work I'm doing across software engineering, machine learning, data, and research.

[**View Live Portfolio ↗**](https://portfolio-krishna-five.vercel.app/) · [**LinkedIn**](https://www.linkedin.com/in/krishna-prashar-645371221/)

</div>

---

## About This Portfolio

I'm **Krishna Prashar**, a Computer Science & Engineering undergraduate at **Guru Nanak Dev University, Amritsar**, graduating in **2027**.

I'm particularly interested in what happens beneath the interface — how systems behave under load, where performance bottlenecks emerge, and whether the data behind a decision can actually be trusted.

This portfolio brings together my work across:

`Systems Programming` · `C++` · `AI/ML` · `Data Analytics` · `Cybersecurity` · `Research`

Rather than simply listing projects, I wanted the site to show the **engineering decisions, experiments, failures, optimizations, and measurable results behind them**.

---

# Selected Engineering Work

## 01 — Multi-threaded Sharded LRU Key-Value Store

**C++ · POSIX Sockets · Multithreading · Systems Programming**

A Redis-inspired in-memory key-value store built from scratch using raw TCP sockets.

The system supports concurrent clients, TTL-based key expiration, LRU eviction, and O(1) `GET`, `SET`, and eviction operations using a hash map + doubly linked list.

### Engineering Challenge

The first implementation protected shared cache state with a global mutex.

Benchmarking revealed that the lock became a major source of contention as concurrency increased.

I redesigned the cache into **16 independently locked shards**, reducing contention between unrelated requests and improving throughput by approximately **21–27%** under concurrent workloads.

A custom multithreaded benchmark harness was also built to measure:

* throughput
* p50 latency
* p95 latency
* p99 latency
* behavior under increasing concurrency

**What this project taught me:** performance problems are often architectural, not syntactic.

---

## 02 — US–UK YouTube Market Analytics

**SQL · BigQuery · Looker Studio · Data Analytics**

An end-to-end analytics project examining differences in YouTube trending-video behavior across the **United States and United Kingdom**.

### Dataset

**15,987 trending-video records** processed with a **99.9% clean-data yield**.

The pipeline was used to analyze category performance, engagement behavior, and cross-market differences.

One finding showed that the UK's leading category, **Music**, generated **46% higher total views** than the leading US category, **Entertainment**.

During validation, I identified and corrected a **SUM-vs-AVERAGE aggregation error** that would otherwise have distorted category-level sentiment.

**What this project taught me:** a polished dashboard means very little if the metric underneath it is wrong.

[View Project Repository ↗](https://github.com/krishnaprasharkp/US-UK-youtube-market-analytics)

---

## 03 — VulnNet Analyzer

**C++ · Graph Algorithms · OOP · Cybersecurity**

A network-security simulation and analysis project built around graph-based representations of connected systems.

The project explores how network structures can be modeled and traversed to identify potentially vulnerable devices and attack paths.

Core concepts include:

* adjacency-list graph representation
* BFS / DFS traversal
* object-oriented architecture
* network risk analysis
* automated security reporting

[View Project Repository ↗](https://github.com/krishnaprasharkp/VulnNet-Analyzer)

---

## 04 — AI/ML Precision Agriculture

**Python · Scikit-learn · Machine Learning · Research**

Ongoing research with an Assistant Professor at **Guru Nanak Dev University** exploring machine-learning-based crop recommendation.

The work involves analyzing **3,000+ soil datasets** containing information about soil composition, moisture, and nutrient levels.

Regression and classification techniques are being explored to recommend crops for different soil profiles.

Current research directions include:

* Federated Learning
* Edge Computing
* distributed soil-sensor processing
* real-time agricultural decision systems

> **Status:** Ongoing research

---

# Experience

My experience spans both technical engineering work and large-scale real-world operations.

Currently, my work includes **AI dataset development at Deccan AI Experts**, **machine-learning research at GNDU**, and other technology and leadership initiatives.

The portfolio contains the complete experience timeline, responsibilities, projects, and credentials.

### → [Explore Full Experience](https://portfolio-krishna-five.vercel.app/#experience)

---

# Technical Focus

| Area                 | Technologies / Concepts                                      |
| -------------------- | ------------------------------------------------------------ |
| **Programming**      | C++ · Python · SQL                                           |
| **Systems**          | Multithreading · TCP Sockets · Concurrency · Caching         |
| **Computer Science** | DSA · OOP · Operating Systems · Computer Networks            |
| **AI / ML**          | Scikit-learn · Regression · Classification · Computer Vision |
| **Data**             | BigQuery · SQL · Looker Studio · Data Validation             |
| **Research**         | Federated Learning · Edge Computing                          |
| **Tools**            | Git · GitHub                                                 |

---

# The Portfolio Itself

The portfolio is built without a heavy frontend framework.

```text
HTML
CSS
Vanilla JavaScript
```

It includes:

* responsive layouts
* custom animations and transitions
* interactive project sections
* custom cursor interactions
* expandable technical project details
* experience timeline
* credentials showcase
* résumé download
* Open Graph / social sharing metadata
* responsive mobile behavior

The goal was to make the site feel **personal and engineered**, rather than like another portfolio generated from a standard developer template.

---

# Repository Structure

```text
Portfolio-krishna/
│
├── index.html
│
├── enhancements.css
├── enhancements.js
├── funky.css
│
├── favicon.svg
├── social-card.png
│
├── Krishna-Prashar-Resume.pdf
│
├── certificate-google.jpg
├── certificate-hackerrank.jpg
├── certificate-microsoft.png
│
└── README.md
```

---

# Run Locally

Clone the repository:

```bash
git clone https://github.com/krishnaprasharkp/Portfolio-krishna.git
```

Move into the directory:

```bash
cd Portfolio-krishna
```

Because the portfolio is a static site, you can simply open `index.html`.

Alternatively, start a local server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

No build process or package installation is required.

---

# Design Philosophy

I wanted this portfolio to answer three questions:

**What did I build?**

**Why did I build it that way?**

**What changed because of the engineering decisions I made?**

That is why the portfolio emphasizes architecture, benchmark results, data validation, research questions, and measurable outcomes rather than only screenshots and technology logos.

---

<div align="center">

## Let's Connect

I'm interested in opportunities across **Software Engineering, Systems, AI/ML, and Data**.

[**Portfolio**](https://portfolio-krishna-five.vercel.app/) · [**GitHub**](https://github.com/krishnaprasharkp) · [**LinkedIn**](https://www.linkedin.com/in/krishna-prashar-645371221/)

<br>

**Built by Krishna Prashar**

`C++` · `Systems` · `AI/ML` · `Data`

</div>
