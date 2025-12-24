---
title: Federated Gradient Inversion Attack
date: 2025-12-10

tags:
  - Adversarial Machine Learning
  - Federated Learning
  - Privacy
---
[Project Github](https://github.com/hridoy100/gradient-inversion-attack)

This project demonstrates a Federated Gradient Inversion Attack based on the
Deep Leakage from Gradients (DLG) paper. The goal is to show how an adversary
can reconstruct client training data from shared gradients in a federated
learning (FL) setting.

<!--more-->

### Overview
- Implements DLG-style gradient inversion in a federated training loop.
- Reconstructs client inputs (and labels when possible) from uploaded gradients.
- Highlights privacy risks in FL when gradients are shared without protection.

### Threat Model
- Honest-but-curious server observes client gradients.
- No direct access to raw client data.
- Attack is performed post-hoc on observed gradients.

### Methodology (DLG in FL)
- Start with random dummy inputs and labels.
- Optimize dummy data to match observed client gradients.
- Minimize the gradient-matching loss until reconstruction converges.

### Implementation Notes
- Reproducible experiments via configuration in the repository.
- Supports typical image-classification models and datasets used in DLG.
- Includes scripts/notebooks for running the attack and visualizing results.

### Demo
{{< figure src="/media/demo-grad-inv.gif" alt="Gradient inversion reconstruction process demo" >}}


### References
- Zhu et al., "Deep Leakage from Gradients" (DLG), NeurIPS 2019.
