---
title: Blood Cell Classification
date: 2020-11-09

tags:
  - Machine Learning
  - YOLO v5
  - Mask RCNN
---
[View Project](https://github.com/hridoy100/BCC_ML_Project)

This project focuses on the application of deep learning techniques for automated blood cell classification. This is an object detection project. We leverage the power of YOLOv5, a state-of-the-art object detection model, to efficiently detect and classify different types of blood cells in microscopic images. To further enhance the analysis, we compare YOLOv5's performance with Mask R-CNN, a powerful instance segmentation model capable of generating pixel-level masks around objects. By training and evaluating these models on a comprehensive dataset of blood cell images, we aim to develop a robust and accurate system for automated blood cell analysis, which can aid in medical diagnosis and research.

The dataset used in this project is the BCCD Dataset, which contains 4,888 labeled objects categorized into three distinct classes:
*   **RBC (Red Blood Cells):** 4,155 objects
*   **WBC (White Blood Cells):** 372 objects
*   **Platelets:** 361 objects

<!--more-->

### Performance Comparison

| Model       | mAP (mean Average Precision) | Inference Time (ms) |
|-------------|------------------------------|-----------------------|
| YOLOv5      | 0.85                         | 20                    |
| Mask R-CNN  | 0.88                         | 100                   |

*Note: These are placeholder values representing typical performance for these models on this type of task.*

### Model Architectures

Here are the architectures for the two models used in this project:

#### YOLOv5 Architecture

{{< figure src="/media/yolo_architecture.jpg" alt="YOLOv5 Architecture" >}}

#### Mask R-CNN Architecture

{{< figure src="/media/mask-rcnn-new.png" alt="Mask R-CNN Architecture" >}}
