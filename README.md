# 💡 Lumina: The AI Co-pilot for Pakistan's Education System

**An Engineering Solution for Proactive Student Intervention via a Hybrid AI Wrapper.**

![Lumina AI Co-pilot Banner - Depicting a classroom, the AI architecture, and Pakistan's educational landscape for resource allocation.](image_2d7b00.png)<img width="1024" height="1024" alt="Gemini_Generated_Image_98wxly98wxly98wx" src="https://github.com/user-attachments/assets/a01658b7-fea6-4c8f-ac05-6a8f5814f0a3" />


## ✨ Project Overview

Lumina is a highly focused, data-driven EdTech platform engineered to address the critical issue of **reactive intervention** in Pakistan's high-volume education system. We provide teachers, parents, and administrators with an intelligent, evidence-based system to identify **"quiet strugglers"** and diagnose the root cause of academic failure *before* it occurs.

Our innovation lies in the **Hybrid AI Wrapper Architecture**, which provides a scalable and cost-effective solution tailored for data-scarce environments.

### Core Mission

To democratize personalized student success by transforming messy, unstructured school data into **360-degree actionable intelligence** and reducing teacher workload through automation.

## 🏗️ Technical Architecture: The Hybrid AI Wrapper

Lumina is fundamentally an **AI Wrapper Technology**. It sits as an intelligent layer above existing school systems (LMS, proprietary software, or simple Excel/CSV files), providing a single, clean API for predictive intelligence.

Our architecture is optimized for performance and cost using a multi-model approach:

1.  **Data Ingestion & Pre-Processing Layer:**
    * **Function:** Handles the ingestion of unstructured data (CSV/Excel files) and proprietary formats. This module is critical for **standardizing messy data** common in low-tech school environments in Pakistan.
    * **Engineering Focus:** Data validation, cleansing, and feature engineering (e.g., transforming raw scores and attendance logs into time-series features).
2.  **The Intelligence Core (Hybrid Model):**
    * **Local ML/SLM:** A proprietary, custom-trained **Small Language Model (SLM)** or classical ML model handles the initial, high-volume task of **Predictive Classification** (determining the student's risk score and specific area of weakness). This is low-latency and cost-efficient.
    * **Foundational LLM Augmentation:** For complex reasoning and high-quality output, the system calls powerful, state-of-the-art LLMs (e.g., **Google's Gemini 3, Claude 4 Sonnet, or GPT-5**) via API. This component is used exclusively for generating expert-level intervention strategies and complex language tasks.
3.  **Localized Output Pipeline:**
    * **Function:** Generates and formats all reports, notifications, and recommendations.
    * **Key Innovation:** The NLP pipeline is optimized for **bilingual, culturally sensitive output**. It produces high-quality, professional reports in both **English and Urdu**, bridging the communication gap with parents.

## ✨ Key Features & Impact

| Feature Name | Technical Description | Real-World Impact |
| :--- | :--- | :--- |
| **Proactive Risk Score** | ML Model calculates a daily or weekly risk score based on aggregated data patterns (attendance, grades, submission times). | Finds the **"quiet strugglers"** before they fail, enabling **proactive intervention** instead of reactive damage control. |
| **Bilingual Reporting** | LLM-powered NLP pipeline generates personalized parent reports in **English & Urdu**. | **Reduces teacher workload** and ensures parents across all linguistic backgrounds are informed and included in the learning process. |
| **Systemic Insight API** | Aggregates anonymized, high-level data on failure rates by subject, district, and grade level. | Provides **data-driven diagnostics** to the Ministry of Education for smart resource allocation (identifying schools lacking infrastructure, teachers, or books). |
| **Intervention Generation** | LLM output provides teachers with a precise diagnosis and actionable steps (e.g., "Student needs 15 mins extra practice on algebraic functions"). | Moves teaching from **"assumptions" to "evidence-based insights,"** improving teacher efficiency and student outcomes. |

## 🛠️ Technology Stack & Dependencies

The Lumina project is built on a modern, scalable MERN/T stack with dedicated Python components for the core ML pipelines.

### Frontend
* **Framework:** React / Next.js (for server-side rendering and performance)
* **Styling:** Tailwind CSS (for rapid, utility-first styling)
* **Animation:** Framer Motion (for smooth, professional UI/UX)

### Backend & AI Core
* **Runtime:** Node.js / Python (for MLOps pipeline)
* **Web Framework:** Express.js / Flask (for REST API)
* **ML/AI Libraries:** Scikit-learn, PyTorch (for SLM), Pandas (for data pre-processing)
* **LLM Integration:** Official Google **Gemini** SDKs and other LLM APIs for the wrapper layer.
* **Database:** MongoDB / PostgreSQL (for scalable data persistence and reporting)
* **Containerization:** Docker (for environment consistency and deployment)

## 🏆 Achievements & Recognition

* **National AI Wrapper Competition 2025 (Ignite/NIC):** Shortlisted for the regional round, validating the project's technical innovation and national impact potential.
* **InnoVista National Agentic AI Hackathon 2025:** Developed the foundational prototype and core Agentic AI logic utilizing **Google Cloud Platform (Vertex AI and Firebase)** resources.

## 🚀 Getting Started

*(Insert actual code commands for local setup here.)*

1.  **Prerequisites:** Node.js (v18+), Python (v3.10+), Docker, API Keys for Gemini.
2.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/YourRepoLink/Lumina.git](https://github.com/YourRepoLink/Lumina.git)
    cd Lumina
    ```
3.  **Setup Environment Variables:** Create a `.env` file based on `.env.example`.
4.  **Install Dependencies:**
    ```bash
    # Install backend and frontend dependencies
    npm install
    # Setup Python environment for ML core
    pip install -r ml_core/requirements.txt
    ```
5.  **Run Locally:**
    ```bash
    # Start the backend API service
    npm run start:api
    # Start the frontend application
    npm run start:app
    ```

## 🤝 Contribution

We welcome contributions from developers, data scientists, and UI/UX experts, especially those familiar with the Pakistani educational context and bilingual software development.

Please review our [CONTRIBUTING.md] and [CODE\_OF\_CONDUCT.md] before submitting a Pull Request.

---
**Team Lumina: Building the future of education, one student at a time.**
