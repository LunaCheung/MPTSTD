<h1 align="center">
  <img src="README/logo.png" alt = "drawing" width="100">
  <img src="README/Picture2.png" alt = "drawing" width="100">
  <br/>Multi-Pose Time-Series Tomato Database
for Fine-Grained Categorization with Deep
Learning
  
  DaAnHort @ ZG JKI
  
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/0YJ/MPTSTD)
[![Personal Website](https://img.shields.io/badge/-Website-4285F4?style=flat&logo=google-chrome&logoColor=white)](https://www.julius-kuehn.de/zg/personal/p/yujie-zhang)
</h1>

<h2 align="center">
  Part 0: Introduction

</h2>


### Overview of OPPDL

<img src="README/sketchProject.png" width="90%">

### Environment 

- Python 3.6, Tensorflow 1.5.0, Opencv 3.3.1, Keras 2.1.6
- [Optional] Since our project integrated multi machine learning models, I strongly suggest to use conda for environment management. See: [Conda](#anaconda)

<h2 align="center">
  Part 1: Data Generation 

</h2>

### Internet of Things (IoT)

We use advanced IoT technology and embedded engineering to collect and process massive scalable dataset.
We have easy to use user interface for application. 
The annotated [dataset](www.comingsoon.com) will be published in November along with the fine grained phenothyping information dataset.
<br/>

<div align="center">
  <img src="README/drone2.jpeg" width="25%"><img src="README/3.jpeg" width="25%"><img src="README/dronespying.jpeg" width="25%"><img src="README/2023-09-26_15-26.png" width="25%">
</div>

<h2 align="center">
  Part 2: Data Annotation  

</h2>

### State-of-Art Dataset  

We create and use the latest self-made annotated dataset which is calibrated from different life cycles of tomato plants. 
<br/>

<div class="box">
  <img src="README/raw.jpg" width="25%"><img src="README/calied.png" width="25%"><img src="README/frame.jpg" width="25%"><img src="README/label.png" width="25%">
</div>



#### Installation for Data Annotation

Options for us:

- conda install 
- window executable version

#### Anaconda

Install [Anaconda](https://www.continuum.io/downloads), then run below:

```bash
# python3.6
conda create --name=py python=3.6 # creat env
conda activate py # activate env
conda install -c conda-forge labelme # install 
# or pip install labelme
# or install executable version
labelme ## run
```

  
<h2 align="center">
  Part 3: Models  

</h2>


### Data Augmentation and Machine Learning

We use augmented data and multi ML models for evaluating a standered phenotyping. 
<br/>

<div align="center">
  <img src="README/index.png" width="35%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="README/1.jpg" width="35%">
  <img src="README/loss.png" width="33%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="README/TensorBoard_val_loss.png" width="33%">
</div>


<h2 align="center">
  Part 4: Landmark and 3D Reconstruction for Nomalized Plants Phenotyping  

</h2>
This project outlines the dataset along with an exceptional approach for fine-grained phenotypic recognition of tomato plants using deep learning methods for precision agriculture (PA), offering a viable alternative for automated and efficient agricultural practices. 
Additionally, the innovative Internet of Things architecture provides efficient and scalable data collecting for phenotyping research purpose. 

<br/>

<div align="center">
  <img src="README/Picture6.png" width="33%"><img src="README/Picture7.png" width="33%">
  <img src="README/3d_phenotyping.png" width="66%">
</div>

[Paper](https://github.com/0YJ/MPTSTD/blob/main/KIDA_Poster.pdf)
