/*
Reference: https://medium.com/@jmz12/buenas-pr%C3%A1cticas-para-commits-5eb4c86b9a47
version: 1.0

Best practices for writing commits

  It's highly recommended to have a guide with best practices to write commits,
  they should be clear enough and help the team. Commits' messages have three
  parts title, body, footer.

  1.- [title] => Type: Subject
  2.- [Body]
  3.- [Footer]

Part 1.1 - Type
  definition: it will be place in the title.
  should be: [emoji-optional][type-uppercase] : [subject-lowercase]

  ➕ ADD: generate new functionality
  🔨 FIX: fix bugs
  🏭 REFACTOR: refactoring and improvements
  🔥 DELETE: functions or files are deleted
  📚 DOCS: changes on documents are generated

Part 1.2 - Subject
  restrictions: no more than 50 characters, english written
  should be: [Capitalization]
  should not be: end up with dot "."

Part 2 - Body
  should be:  explain why? an what? about the commit.
  should not be: how? about the commit.
  required: new line between title and body.
  restriction: no more than 72 characters.

Part 3 - Footer
  definition: follow-up of issues or tickets related to the changes generated.
  keyword: Issuet/Ticket #[number]

Resume:
  📚 DOCS: Writing rules for commits

  Init commit, best practices for commits

  Issue: #1

Notes:

We recommend to generate one commit for each change,
try to not have too much files in one commit, because
will not be easy to review the code.


*/


