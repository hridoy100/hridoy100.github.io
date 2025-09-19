---
title: A Heuristic for Maximum Greedy Consensus Tree Problem
authors:
- raihan
- Md Moaz Mahmud
- Md Saidur Rahman
date: '2022-01-01'
#doi: "https://doi.org/10.1109/ICECE57408.2022.10089062"
publishDate: '2024-10-27T22:30:38.217423Z'
publication_types:
- paper-conference
publication: '*2022 12th International Conference on Electrical and Computer Engineering
  (ICECE)*'

tags:
  - Bioinformatics
  - Undergraduate Thesis
  
featured: true
weight: 10


links:
  - name: Conference Link
    url: https://ieeexplore.ieee.org/document/10089062
  - name: Undergraduate Thesis
    url: 'https://drive.google.com/file/d/1DJrtyWmpwX_Hjfec64XAwL05J-O-8GnP/view?usp=sharing'
url_pdf: https://drive.google.com/file/d/1zhVB0jJtCbSzIn9Y3mhmCk9pLs_esrVA/view?usp=sharing
url_code: 'https://github.com/hridoy100/phylogenetic-tree-research'
url_dataset: 'https://github.com/hridoy100/phylogenetic-tree-research/tree/main/Datasets'
url_poster: 'https://drive.google.com/file/d/1XEVaN1Ysd7TzPVBtXhWEKPzk6MKD6Wbm/view?usp=sharing'
url_project: ''
url_slides: 'https://drive.google.com/file/d/1ftE77ZBXF06-VmtLwwt4CJGTomhxZkUj/view?usp=sharing'
url_source: ''
url_video: ''
# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Image credit: Raihanul Alam Hridoy'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
  - thesis
  
abstract: A phylogenetic tree is a tree that represents the
  evolutionary history of a set of species. Given a set of k conflicting
  phylogenetic trees whose leaves are labeled by n species, a greedy
  consensus tree is a tree formed by choosing clusters according to
  their decreasing order of counts. The maximum greedy consensus
  tree (MGCT) problem asks to find the greedy consensus tree with
  the maximum number of internal nodes. It is known that the
  MGCT problem is NP-hard for $k ≥ 3$. In this paper, we have
  proposed and implemented a heuristic that runs in $O(k^3n^5)$-time.
  The experimental result using our dataset shows that the heuristic
  constructs a greedy consensus tree whose size is 23.4/26 of the
  binary tree. We also identified a class of phylogenetic trees where
  our algorithm performs better than a non-deterministic approach
  like random selection which breaks ties of cluster frequencies
  randomly.

summary: A phylogenetic tree represents evolutionary relationships among species. 
  The maximum greedy consensus tree (MGCT) problem seeks a consensus tree with the maximum internal nodes from $k$ conflicting phylogenetic trees and is NP-hard for $k≥3$. This paper presents a heuristic solution with $O(k^3n^5)$ complexity, achieving a consensus tree size of 23.4/26 of a binary tree in experiments. Additionally, the heuristic outperforms random selection in certain tree classes by more effectively handling cluster frequency ties.
# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
