# Ask-SCoRe

<p align="center">
  <img src="https://user-images.githubusercontent.com/40908684/120924798-0fd67e80-c6f3-11eb-94a5-554566c205dd.png" width="250">
</p>

[![Build Status](https://github.com/scorelab/Ask-SCoRe/actions/workflows/build.yml/badge.svg?event=pull_request)](https://github.com/scorelab/Ask-SCoRe/actions/workflows/build.yml) [![Code Inspector](https://www.code-inspector.com/project/24431/score/svg)](https://frontend.code-inspector.com/public/project/24431/Ask-SCoRe/dashboard) [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## About

What Open Source Organisations aims is for more productivity, which can be achieved when the organisation's members promote, collaborates, co-operates with each other. And hence Ask-SCoRe application helps in achieving the motive.

Ask SCoRe app is the community app, which will help organisation in Collaboration, teamwork, promotion, cooperation with their members(Mentors, Mentees, Students). 
Ask SCoRe application will be implemented using React-Native. This app will also use Go-Social Framework in order to create and use the components.
This app aims to resolve queries by anyone in the organisation and let members communicate in the Forums/Channels..

**Table of Contents**

- [Features](#Features)
- [Setup and run](#setup-and-run)
    - [Run app on iOS](#run-app-on-iOS)
    - [Run app on Android](#run-app-on-Android)
- [Configure Project](#Configure-Project)
- [Contact](#Contact)

## Feature
- Onboarding Screens
- Firebase Integration
- Login and register a new user

## Setup and run
**NOTE : XCODE / Android Studio is necessary in order to setup the project.**

**NOTE : This project is developed using react-native-cli, make sure to install react-native-cli in your system.**

1.  ### FORK
    **Note : For this, you need to have git installed in your machine.**
    - If you want to contribute to the project you will have to Fork the project on GitHub.
    ### CLONE
    - If you have forked the project, run the following command -

    `git clone https://github.com/YOUR_GITHUB_USER_NAME/Ask-SCoRe`

    - If you haven't forked the project, run the following command -


    `git clone https://github.com/scorelab/Ask-SCoRe`

2.  ### Install npm Libraries by running a command given below in terminal / cmd
    `npm install`
    
## Configure Project

- Rename file `.env.example` to `.env`

- Setup your project on Firebase and copy the credentials
- Replace the credentials in file `/src/config/config.example.js` given below-
- ```
  const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: "Y"
  };
  ```
- Rename the `config.example.js` file to `config.js`
- Enable authentication using email/password in Authentication Tab of Firebase Console.

### Run app on iOS

- To run the project on iOS, change the current working directory to ios using a command 
   
   `cd ios `
- Then Install the Pods by running a command
   
   `pod install`
- Run Project by Command
  
  `react-native run-ios`

### Run app on Android

- To run the project on Android, make sure to set JDK version <=15.
- Run the project by command 

  `react-native run-android`
  
## Contact

You can reach the maintainers and our community on [scorelab on gitter](https://gitter.im/scorelab/scorelab). If you are interested in contributing to the Ask-SCoRe, we have a channel too [#Go-Social](https://gitter.im/scorelab/go-social), where you can ask questions and interact with the community, join with us!
