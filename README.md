![MIT LICENSE](https://img.shields.io/github/license/lucasgabrielson/weekend-react-gallery.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/lucasgabrielson/weekend-react-gallery.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/lucasgabrielson/weekend-react-gallery.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/lucasgabrielson/weekend-react-gallery.svg?style=social)

# PROJECT NAME

## Description

_Duration: 2 Days_

I aimed to create a web app in which I could upload images, "like" the images and delete them as well. 

To accomplish this I used React to create the header, gallery-list, gallery-item, and form components. I wrote used axios and express to send CRUD requests to my server and I used pg to send the images src's to my Postgresql database. For styling I used CSS and created a responsive grid framework that is mobile friendly. 


## Screen Shot

<img width="1137" alt="Screen Shot 2021-03-28 at 5 03 58 PM" src="https://user-images.githubusercontent.com/74149109/112769623-ab5abd00-8fe7-11eb-82cc-b1a284967151.png">

<img width="495" alt="Screen Shot 2021-03-28 at 5 04 23 PM" src="https://user-images.githubusercontent.com/74149109/112769627-adbd1700-8fe7-11eb-8358-304f7292bba9.png">

### Prerequisites

- [Node.js](https://nodejs.org/en/)

## Installation

How do you get your application up and running? This is a step by step list for how another developer could get this project up and running. The good target audience in terms of knowledge, would be a fellow Primer from another cohort being able to spin up this project. Note that you do not need a paragraph here to intro Installation. It should be step-by-step.

If your application has secret keys (for example --  Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

1. Create a database named `react_gallery`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. Upload your images from either your machine or using web addresses
2. Like and Delete images at your pleasure
3. Share your images with those on your wifi


## Built With

- React
- Express
- Axios
- PG
- Postgresql
- Node.js
- CSS

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. 

## Support
If you have suggestions or issues, please email me at lucas.c.gabrielson@gmail.com
