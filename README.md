**Junky**

**Instructions**

  As a user you are able to see all the post listed by other users that have signed in using google to create their own post. To create post or comment on your post or another users you must login to create a profile that will be your google login information. Once logged in you are able to read, create, edit, and delete your post and leave comments on another users post. 

**Try it out here!** (https://junky-sei.herokuapp.com/)

  Why I chose Junky. I choose to make this app as a starting point to create a user friendly app to post items for sale that you no longer want. After moving so many times I constantly had thingsI did not wnat to take with me, so I thought I would build an app that can post my unwanted Junk (hence the name of the app).

**PseudoCode**
  1. Required Models:
    Defined a user and profile model that creates a new user everytime a new user logs in.
    Defined post model that creates a new id and rerferences the profile model.
    Defined comments model that creates a new id and rerferences the profile model.
  2. Define routes 
    Created post controller routes that 
  3. Controllers
    Export newPost as new, which renders new view.
    Export create, which checks the users login id, and creates a new post and stores profile id as refrenced in the post modle.
    Export show, which finds post id, then populates author, deep populates the comments and author and passes it to the post show view.
    Exported deletePost as delete, which finds post id and deletes it then redirects back to index view.
    Exported edit, which finds post id and passes it to the edit view.
    Exported update, which----
    Exported addComment, which checks user profile id, creates the comment passing in the stored data then finds post id, then pushes comment id to the post in the comments array and refreshes show view.
    Exported deleteComment, which finds the comment id and deletes it.
  4. Views 
    Post index view displays all the post created by all the users in app. Any user can see the title, price and the creator of the post without being logged in.
    Post show view, displays the specific post details along with all the comments stored in that post, that the user has clicked on if the user is logged in, if the user is not logged in, they will be promoted too.
    Post edit view, displays a form with the orginal post values and allows the user to change the post values.
  
Screenshots
:<img width="825" alt="Screen Shot 2021-07-29 at 7 14 04 PM" src="https://user-images.githubusercontent.com/69816660/127589641-48b31302-bd23-4422-a3df-e423850d8bd6.png">
Landing page when user is not logged in.

<img width="834" alt="Screen Shot 2021-07-29 at 7 15 09 PM" src="https://user-images.githubusercontent.com/69816660/127589748-5378e89e-450e-49c3-a40f-a2be371e4340.png">
Landing page when user is logged in.

<img width="823" alt="Screen Shot 2021-07-29 at 7 16 04 PM" src="https://user-images.githubusercontent.com/69816660/127589804-1825e2c7-6161-4c40-9527-87b8ca3db96e.png">
User detail page of own post.

<img width="833" alt="Screen Shot 2021-07-29 at 7 17 11 PM" src="https://user-images.githubusercontent.com/69816660/127589894-82a9e12c-5347-4379-a9d7-2f83f6ec3003.png">
Detail page of another users post.




Technologies Used:
Javascript, HTML, CSS,
nodeJS, mongoDB, Bootstrap,
Express, Google OAuth, Passport,

Things To Add In The Future:
Allow users to upload pictures to there post
Add a secure payment feature 
Add direct messege feature to allow users to send messeges to each other
