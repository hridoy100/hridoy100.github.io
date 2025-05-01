---
title: Freezing of Gait Detection Using Gramian Angular Fields and Federated Learning from Wearable Sensors
authors:
- Shovito Barua Soumma
- raihan
- Rudmila Rahman
- Umme Niraj Mahi
- Abdullah Mamun
- Sayyed Mostafa Mostafavi
- Hassan Ghasemzadeh
date: '2025-04-01'
#doi: "https://arxiv.org/pdf/2411.11764"
publishDate: '2024-10-27T22:30:38.217423Z'
publication_types:
- paper-conference
external_link: https://hridoy100.github.io/FOGSense

tags:
  - Wearable Computing
  - Healthcare
  - Parkinson's Disease
  
featured: true

links:
  - name: arXiv
    url: https://arxiv.org/pdf/2411.11764
  - name: GitHub Repository
    url: https://github.com/hridoy100/FOGSense
url_pdf: https://arxiv.org/pdf/2411.11764
url_code: 'https://github.com/hridoy100/FOGSense'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''
# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Image credit: FOGSense'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []
  
abstract: Freezing of gait (FOG) is a debilitating symptom of Parkinson's disease (PD) that impairs mobility and safety. Traditional detection methods face challenges due to intra and inter-patient variability, and most systems are tested in controlled settings, limiting their real-world applicability. Addressing these gaps, we present FOGSense, a novel FOG detection system designed for uncontrolled, free-living conditions. It uses Gramian Angular Field (GAF) transformations and federated deep learning to capture temporal and spatial gait patterns missed by traditional methods. We evaluated our FOGSense system using a public PD dataset, 'tdcsfog'. FOGSense improves accuracy by 10.4% over a single-axis accelerometer, reduces failure points compared to multi-sensor systems, and demonstrates robustness to missing values. The federated architecture allows personalized model adaptation and efficient smartphone synchronization during off-peak hours, making it effective for long-term monitoring as symptoms evolve. Overall, FOGSense achieves a 22.2% improvement in F1-score compared to state-of-the-art methods, along with enhanced sensitivity for FOG episode detection.

summary: Freezing of gait (FOG) is a debilitating symptom of Parkinson's disease that significantly impacts mobility and quality of life. This paper presents FOGSense, a novel detection system using Gramian Angular Field transformations and federated deep learning to identify FOG episodes in real-world settings. Tested on the 'tdcsfog' dataset, FOGSense shows significant improvements in accuracy (10.4%) and F1-score (22.2%) over existing methods, while offering robust performance with missing data and personalized adaptation as symptoms evolve.
# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---