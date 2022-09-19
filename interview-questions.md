# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: To modify a model already generated we would either need to edit it or migrate it. Since student belongs to the cohort, the foreign key would be on the student model because the primary key is associated with the cohort model.

Researched answer: So we would fix this using active record migration. After migrating , rails will update the schema with a foreign key adding it to students. 

2. Which RESTful routes must always be passed params? Why?

Your answer: Every route needs a parameter except for the new method. The parameter acts like an ID for every object, it's important to have parameters because it locates what we are looking for. For example if we want to delete or edit a certain object we located it by its ID. 

Researched answer: Without passing parameters, we as developers would not be able to perform actions on a specific instance that we are looking for. Therefor methods that require an ID to locate a specific instance would be show, edit, update and destroy.

3. Name three rails generator commands. What is created by each?

Your answer:
1. rails generate model - creates a boilerplate model
2. rails new - creates a new Rails application 
3. rail generate resource - creates RESTful routes and files for the db.

Researched answer:
1. rails new interview_questions -d postgresql -T => creates a new app and specifies that postgresql is the database of the app
2. rails g resource => generates a resource that you want to create along with the table column names and types.
3. rails g migration => creates a change on the database schema.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students => This shows the index of all students. 

action: "POST" location: /students => Creates a new instance of the model. 

action: "GET" location: /students/new => This creates a new student.

action: "GET" location: /students/2 => This shows us the student at ID #2.

action: "GET" location: /students/2/edit => This edits the student at ID #2.

action: "PATCH" location: /students/2 => This updates the student at ID #2.

action: "DELETE" location: /students/2 => After all we did to student #2, DELETE will destroy student #2 from the db. 

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

User Stories:

1. As a developer I want to create a new app called to-do-list thats tracks my everyday chores
 
2. As a developer I want to have a task name, date, time, complete
 
3. As a developer I can to see all the instances on my to do list
 
4. As a developer I can create new chores for my list
 
5. As a developer I can edit the chores on my list 
 
6. As a developer I want to be able to find a specific chore on my list
 
7. As a developer I want to be able to remove a task
 
8. As a developer I can update a chore on my list
 
9. As a developer I can check if a chore is complete or not
 
10. As a developer I can add a duration to my chores