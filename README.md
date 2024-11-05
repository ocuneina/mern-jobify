#### Job Tracker App

[Jobify](https://jobify-kh1b.onrender.com/).

The main goal of this application is to track the job search: have many applications have been sent during the month.

##### Disclamer

Even though that is an absolutely working version, there is no email/password recovery now. Whatever forgotten, forget!

That is a complete Full Stack Application using Vite to build the front-end part with React, NodeJS / Express as back-end and MongoDB for database.

#### Installation and running

```sh
npm i
```

```sh
npm run dev
```

APP is running on http://localhost:5173/

![Landing Page](landing.png)

First you have to register in the application by filling the form. 

![registration](register.png)

The application supports three user roles, each with distinct privileges:
- Test: This role is designed for testing purposes and provides limited access to system functionality.
- Admin: The admin role grants full access to all application features, including configuration, data management, and user management.
- User: Standard user role, providing access to personal profile information and limited interaction with the system.

As a user you can add jobs

![add job](addJob.png)

search by position, company name, status or type, or display all
![all jobs](allJobs.png)

as well as edit or delete the job.

Statistics page shows jobs applications by status and monthly for last 6 months.

![stats](stats.png)

And as an admin, there is statistics for users and number of jobs

![admin](admin.png)

The user is able to edit his profile: change name and email, and add a picture or avatar
![profile](profile.png)

