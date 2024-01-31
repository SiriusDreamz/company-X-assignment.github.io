# Company-X Assigment

This is an assigment for "Employer-X" that uses the Flickr image database.

- [Flickr](https://www.flickr.com/services/api/)

**NOTE: I recommend you to first view the project on mobile/in mobile mode in the browser (with at least 390 pixels in width), since that is where the application is designed to work and look the best. However, of course the user interface will, in a very "fastidious" way, scale up to desktop.**

## Running the project

Note: These instructions expect you to have [Node.js](https://nodejs.org/en) installed on your local machine.

Follow these steps to run the project:

1. In the terminal of your choice, on your local machine, clone the project, like so: `$ git clone git@github.com:SiriusDreamz/inter-assignment.git`.
2. Navigate in to where the folder was created (project-X-assignment), and run `$ npm install`, followed by `$ npm run dev` to start the development server.
3. Open the Chrome browser, and navigate to `http://localhost:5173/`, which will display the running application.
4. You are now free to play around!

### Open Source technology used

- [Zustand](https://zustand-demo.pmnd.rs/): A small, fast and scalable bearbones state-management solution.
- [Axios](https://www.npmjs.com/package/axios): A Promise based HTTP client for the browser and node.js.
- [styled-components](https://styled-components.com/): Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress.
- [react-router-dom](https://www.npmjs.com/package/react-router-dom): Contains bindings for using React Router in web applications.

### Possible improvements

Most of these suggestions are due to the fact of time limitations, but could otherwise be implemented if needed. However, the assignment did not state that any of the below was needed.

- Accessibility.
- Better exports, by using index.ts files properly, as to avoid too many imports.
- Proper typing of the axios usages (ImageAPI.ts). Best pracice is to not allow the any-type (which Axios apparently does).
- Better handling of mobile and desktop in CSS.
- More features revolving around user logic/UX, such as navigation and other logical ways to get back and forth between "pages".
- Better usage of the loading state, like for instance a spinning CSS loader.
- Smarter use of reusable components, such as ComponentContainer.tsx and ImageContainer.tsx, in the sense that they could be one component instead of two or be smarter/more generic than they are now.
- Pagination, for loading a lot more images.
- Implement "view" components, that would contain non-logic such as markup, getting props from a belonging logic file, thus creating another file/folder structure.
- Delete gallery (or remove images from gallery) functionality.
- Unit tests.

_By: Linus Trulsson 2024-02-03_
