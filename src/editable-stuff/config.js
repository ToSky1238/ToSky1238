// Navigation Bar SECTION
const navBar = {
  show: true,
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: <h2 className="section-title">Recent Projects</h2>,
  gitHubUsername: "JTop81",
  reposLength: 18,
  specificRepos: [],
};


export {
  navBar,
  repos,
};
