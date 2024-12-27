# `Air Quality` (HVAC) Monitoring Web App

<!-- <hr> -->

This repository contains the website created to display the content of <u>real-time</u> HVAC <i>(Heat, ventilation, and air conditioning)</i> data monitoring.

## Description
&nbsp; &nbsp; &nbsp;
This project was developed as part of the `(BCSE313L) Fog and Edge Computing` course at VIT-Chennai.  
&nbsp; &nbsp; &nbsp;
The website serves as a responsive dashboard, offering visual representations of both historical and real-time data collected from various sensors and hardware components.  
&nbsp; &nbsp; &nbsp;
As a pre-requisite for the project in the subject, this project adheres to the C2F2T (Cloud-to-Fog-to-Things and its reverse) model, as explained in the subsequent section.


## Table of Contents

- [`Air Quality` (HVAC) Monitoring Web App](#air-quality-hvac-monitoring-web-app)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Tech-Stack 💻](#tech-stack-)
  - [Project Overview](#project-overview)
  - [C2F2T Architecture](#c2f2t-architecture)
  - [Links](#links)
  - [Team-mates](#team-mates)
  - [License](#license)
  - [Contributions](#contributions)
    - [Contact](#contact)


## Features

   1. **Real-time Monitoring** ⏳  
      Continuously tracks air quality levels, providing instant data updates for timely analysis and response.

   1. **Low Latency Operations**   
      Ensures minimal delay in data processing and visualization, allowing for accurate real-time insights and decisions.
      
   1. **Emergency Alert System** ⚠️  
      Automatically sends immediate alerts for critical air quality levels, including fire or gas leakage detection, ensuring rapid response to potential hazards.

   1. **Comprehensive Data Collection**  
      Utilizes a variety of sensors to gather diverse and comprehensive environmental data.

   1. **Robust Data Storage** ☁️  
      Utilizes Firebase for reliable and scalable NoSQL database storage, ensuring data integrity and accessibility. Enabling robust data management and retrieval.

   1. **User-Friendly Web Interface**  
       Provides a fully functional and responsive website, featuring regular updates and a comprehensive view of air quality data anywhere.
        
      <img src="./public_images/edit_web.png" alt="website screenshots" style="max-width: 850px;">


## Tech-Stack 💻
   - Python
   - HTML
   - CSS
   - JavaScript
   - Firebase
   <!-- - NodeJS (partly) -->


## Project Overview

   * **`Data Collection:`**  
        &nbsp; &nbsp; &nbsp;
        Data is collected by using various sensors such as MQ-series sensors, DHT-11, and flame sensors.  
        &nbsp; &nbsp; &nbsp;
        An Arduino periodically reads the data from these sensors.

   *  **`Data Passage:`**  
        &nbsp; &nbsp; &nbsp;
        Data collected from the sensors by Arduino is passed to the Raspberry-Pi using serial communication at appropriate baud-rate.  

        &nbsp; &nbsp; &nbsp;
        <img src="./public_images/ser_full.jpeg" width="250px" alt="Description of Image" />


   * **`Data Filtering and Display:`**  
        &nbsp; &nbsp; &nbsp;
        The Raspberry Pi splits, filters, and processes the received data locally.  
        &nbsp; &nbsp; &nbsp;
        Weather predictions are fetched using an API for the day and night at the specified location.  
        &nbsp; &nbsp; &nbsp;
        Based on the latest locally received data and online predictions, display graphics are generated and updated on an the LCD-TFT display.  
        
        &nbsp; &nbsp; &nbsp;
       <img src="./public_images/runtime_display_gen.png" alt="C2F2T in heart rate monitor." width="250px"/> 
        &nbsp; &nbsp; &nbsp;
       <img src="./public_images/runtime_display_pic.png" alt="Hierarchy of C2F2T and latency" width="250px"/>

        &nbsp; &nbsp; &nbsp;
        Further, the data is passed to the cloud for storage and further access.

   * **`Data Storage:`**  
        &nbsp; &nbsp; &nbsp;
        Firebase, a NoSQL database, is utilized to create, retrieve, and update data.  
        &nbsp; &nbsp; &nbsp;
        The data received in this series is stored under specific firebase nodes.

   * **`Web Interface:`**  
        &nbsp; &nbsp; &nbsp;
        A fully functional and responsive website is created and deployed on vercel.  
        &nbsp; &nbsp; &nbsp;
        The website fetches data from the cloud, and its components are updated periodically.  
        &nbsp; &nbsp; &nbsp;
        The website also features an Emergency Alert System, which can be a lifesaver in cases of fire or gas leakage in the monitored area.

   * **`Hardware Setup:`**  
        &nbsp; &nbsp; &nbsp;
      <img src="./public_images/hardware.jpg" alt="Hardware" width="600">

## C2F2T Architecture
   
   1. Cloud-to-Things:  
      - This aspect involves the flow of data and services from the cloud to the edge devices or "things" (such as sensors, actuators, or IoT devices).
      
   1. Things-to-Cloud:  
      - In contrast to C2T, T2C refers to the flow of data and services from the edge devices or "things" to the cloud.  
      
   1. Bidirectional Communication:  
      - The C2F2T model emphasizes bidirectional communication between the cloud and edge devices, enabling seamless interaction and data exchange in both directions.   
      - This approach benefits from various hardware computing power at different nodes in the IoT ecosystem.  
      - Bidirectional communication enables real-time monitoring, control, and decision-making capabilities at the edge while leveraging the extensive computational and storage capabilities of the cloud.

   1. In this project:   
        &nbsp; &nbsp; &nbsp;
         <img src="./public_images/c2f2t_1.png" alt="C2F2T in heart rate monitor." style="width: 300px"/>
        &nbsp; &nbsp; &nbsp;
         <img src="./public_images/c2f2t_2.png" alt="Hierarchy of C2F2T and latency" style="width: 350px; height: 257px"/>
    
      1) **Things**:  
         - All sensors act as things. 
         - Things collect the data on ground level.  
      2) **Edge**:  
         - The edge device is an Arduino, which has limited computing power and basic computer functionalities.
         - It collects and temporarily stores the data within its limited small storage capabilities.  
      3) **Fog**:  
         - A Raspberry Pi is the middle device in the project. It gets data from the edge level, filters, and processes it with its relatively large compute power.
         - The RasPi thus acts as the fog layer.  
      4) **Cloud**:  
         - Finally, data is collected in the cloud.  
         - This data is then used to serve the website.  
         - The cloud can also be utilized to run predictive models and gain meaningful insights from the data.
         - Thus, leverages the power of machine learning and the resource-intensive nature of cloud infrastructure.


## Links

1. Visit the deployed project on Vercel:  
    [Vercel Deployment Link](https://airqualitybbs.vercel.app/)

1. Clone the repository:
    ```bash
    git clone https://github.com/Bbs1412/air-quality-monitoring-system

    cd air-quality-monitoring-system
    ```

3. Video demonstration of project implementation:  
   [![YouTube](https://img.shields.io/badge/Youtube-Video_Link-red?style=flat&logo=Youtube&logoColor=red)](https://youtu.be/avSJYaPSGzs)


3. Preliminary Repository:  
   [Link to repository](https://github.com/Basilskar/air-quality-monitoring-system)

## Team-mates 

   1. Bhushan Songire [(LinkedIn)](https://www.linkedin.com/in/bhushan-songire)
   1. Vedant Choudhari
   1. Ujjawal Kumar
   <!-- 1. Basil Skaria -->
   
## Contributions  

   Any contributions or suggestions are welcome! 

## License

   [![Code-License](https://img.shields.io/badge/License%20-GNU%20--%20GPL%20v3.0-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)   
   

### Contact

   - **Email** - [bhushanbsongire@gmail.com](bhushanbsongire@gmail.com)
   - **Git** - [Bbs1412](https://github.com/Bbs1412/)


<!-- ## Acknowledgments -->
   <!-- - Thanks to .. for ... -->
