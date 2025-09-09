    $(document).ready(function () {
      
      let projects = [
        { title: "Portfolio Website", desc: "A personal portfolio showcasing my skills and work." },
        { title: "Landing Page", desc: "A responsive landing page built with HTML, CSS, and JS." }
      ];

      function loadProjects() {
        $("#project-list").empty();
        projects.forEach(project => {
          $("#project-list").append(`
            <div class="project">
              <h3>${project.title}</h3>
              <p>${project.desc}</p>
            </div>
          `);
        });
      }

      loadProjects();

      
      $("#add-project").click(function () {
        let newProject = { title: "New Project", desc: "This is a dynamically added project." };
        projects.push(newProject);
        loadProjects();
      });
    });
