# Bulletin_Board

Bulletin Board Application
Create a website that allows people to post messages to a page. A message consists of a title and a body.
The site should have two pages:
- The first page shows people a form where they can add a new message.
- The second page shows each of the messages people have posted.
Make sure there's a way to navigate the site so users can access each page.

Messages must be stored in a postgres database. Create a "messages" table with three columns:
column name / column data type:
- id: serial primary key
- title: text
- body: text

Additional Grading Criteria

As before, your package.json must include the correct dependencies.

Additionally, you must configure postgres as follows:
Name your database "bulletinboard".
Your postgres username must be read from an environment variable named "POSTGRES_USER".
Your postgres password (if present) must be read from an environment variable named "POSTGRES_PASSWORD"