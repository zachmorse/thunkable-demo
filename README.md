Thunkable Demo App.

hosted [here](https://thunkable-demo.surge.sh/)

dataflow:

- createProjectDraft (item is not actually in the project list yet, but can be)
  - uses a dummy component that looks the same as the normal one but is a dupe
- addProject (called when naming is completed)
  - this produces an entry in the projects lists with a timestamp and id
- updateProject
  - when called, brings up an in place editor for the title and hitting 'enter' updates the state for that item
- deleteProject
  - self explanatory.
